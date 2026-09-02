# Stitch Builder

A click-to-select amigurumi crochet pattern designer. Pick a body shape, toggle on addon pieces (wings, beak, snout, and more to come), and Stitch Builder assembles them into one complete, generated crochet pattern you can copy or download as a `.txt` file.

Every piece — body or addon — is backed by a **real reference pattern**: an actual photo of the finished piece and its round-by-round written instructions, sourced from real Wooble-style patterns rather than generated text.

**Single self-contained file:** `builder_final.html` — all HTML, CSS, JS, and reference photos (as inline base64) live in one file. No build step, no external assets.

## Interaction model

- **Click-to-select, not drag-and-drop.** Users tap a body card, then tap addon tiles to toggle pieces on.
- **Color is never a single global step.** Every piece — the body, the wings, the beak — asks for its own yarn color(s) the moment it's toggled on. A beak can be yellow while the body is orange; a two-tone wing gets two independent swatch pickers.
- **Naming is generic, not animal-specific.** Piece names and finishing notes avoid locking a piece to one creature (e.g. "Scalloped Wings," not "Flame Wings"; no landmark references like "black spot"). Subtitles may nod to the original reference pattern's style (e.g. "chick-style," "penguin-style") for context, but the piece itself is meant to mix and match freely across bodies.

## Data model

Every piece — a body, or a style within an addon — is one plain object:

```js
{
  id: 'classic',
  name: 'Beak',
  subtitle: 'Small pointed beak, single color',
  photo: 'data:image/webp;base64,...',   // omitted if no reference photo yet
  cutout: true,                           // true if the photo's background has been removed
  makeCount: 1,                           // pieces made (2 for a wing pair, 1 for a singleton)
  colorParts: [
    { key: 'main', label: 'Yarn color for the beak', materialsLabel: 'the beak', defaultColorIdx: 1 },
  ],
  blocks: [
    { type: 'rounds', part: 0, rows: [
        ['1', '__COLOR_START__ start 4 sc in a magic loop', '4'],
        ['2', '[sc, inc] x 2', '6'],
    ]},
    { type: 'join', toPart: 1 },   // only for two-tone pieces — emits the invisible fasten-off + join note
    { type: 'note', text: 'Invisible fasten off leaving a long tail. Use the yarn tail to attach the beak to the body, centered between the eyes on round 10.' },
  ],
}
```

- **`colorParts`** — one entry for a single-color piece, or several for a two-tone piece (e.g. the Peanut Body's head/base, Scalloped Wings' base/tips).
- **`blocks`** — an ordered list of `rounds` / `join` / `note` segments, interleavable (a two-tone piece can have `rounds` → `note` → more `rounds` for the second color part, as the Peanut Body does).
- **Color tokens** inside row text are resolved at render time by `compilePieceBlocks`, so a piece definition never hardcodes a color name:
  - `__COLOR_START__` — first color reference in a block
  - `__COLOR_SWITCH__` — mid-pattern color change
  - `__COLOR0__`, `__COLOR1__`, ... — resolves against that block's `colorParts` by index

**Addons are a registry, not one-off code:**

```js
const ADDONS = [
  { key: 'wings', label: 'Wings', emptyIcon: '🪽', chooseNote: 'choose a style', styles: WING_STYLES },
  { key: 'beak',  label: 'Beak',  emptyIcon: '▲',  chooseNote: 'choose a style', styles: BEAK_STYLES },
  { key: 'snout', label: 'Snout', emptyIcon: '🐽', chooseNote: 'choose a style', styles: SNOUT_STYLES },
];
```

Adding a **new addon category** means adding one entry here — the grid, the pattern-head photo strip, the materials list, and the generated pattern text are all generic over `ADDONS` and need no further changes. Adding a **new style to an existing category** just means pushing an object onto that category's `styles` array (see `WING_STYLES`, `BEAK_STYLES`, `SNOUT_STYLES`).

**App state:**

```js
const state = { bodyId: null, colors: {}, addons: {} };
// state.addons[key] = { on, styleId, byStyle: {} }, created lazily by ensureAddonState(key)
```

## Core engine functions

Extend the data, don't duplicate this logic:

| Function | Role |
|---|---|
| `ensureStore`, `colorIdxFromStore`, `resolvePieceColors` | Small state-lookup helpers for per-piece color choices. |
| `compilePieceBlocks(piece, store)` | Walks a piece's `blocks`, resolves color tokens, returns `{colors, segments}` (`{kind:'table', rows}` or `{kind:'note', text}`). Used by **both** the on-screen render and the plain-text export, so they're guaranteed to match. |
| `ensureBodyDefaults(body)` | Fills in default color indices the first time a body is selected. |
| `ensureStyleDefaults(body, style, addonState)` | Same, for an addon style. **Rule:** a style with exactly one `colorParts` entry defaults to matching the body's current main color (so a freshly toggled piece never looks like an accidental mismatch); a style with multiple color parts uses its own explicit `defaultColorIdx` values (a deliberate pair, e.g. Scalloped Wings' base + tips). |
| `renderAddonsGrid(body)` | Builds the addon grid generically from `ADDONS`. Shows the style-picker (pills) row only when an addon has more than one style. Shows a full-width photo card when the active style has a `photo`; otherwise a small emoji-icon tile. |
| `render()` | Main re-render: shape grid selection, per-part body color pickers, addon grid, step-progress dots, pattern-head photos (`#addonPhotos`, flex-wrapped row, all pieces at 84×84px, `object-fit: contain` with padding when `cutout:true`), meta chips, and the assembled pattern body (one `p-section` per body + per active addon). |
| `buildPatternText(body)` | Plain-text version of the same assembled pattern, used by Copy/Download. |

## UI conventions

- **Any piece with a reference photo gets a full-width card-style photo**, never a small icon badge — small badges have repeatedly read as "too small." This applies everywhere a piece can appear: its addon toggle tile, the pattern-preview header, etc.
- Color pickers are always per-piece/per-part, never a single global color step.
- Style pills only appear when there's an actual choice (2+ styles); a single-style addon goes straight to its color swatch(es).
- Locked/roadmap addons show a 🔒 badge and a small icon, not a photo — they're not real pieces yet.

## Workflow for adding a new piece

1. Get two things: a clean reference photo (background removed or removable) and the round-by-round written pattern (a screenshot is fine).
2. If the photo isn't already transparent, remove the background with `rembg`:
   ```bash
   pip install rembg onnxruntime --break-system-packages
   ```
   Use the **`u2netp`** model specifically (`new_session('u2netp')`) — the default model gets OOM-killed in constrained environments. Then crop to bounding box + ~8% padding, pad onto a square canvas, resize to ~500×500, save as WEBP (quality 90), and base64-encode.
3. **Never type a large base64 string through a text-editing tool.** Add the new piece's code with a placeholder like `photo:'{{NEW_PIECE_IMG}}'`, then run a small standalone Python script that reads the `.b64` file and does one controlled string replace directly into the HTML file — assert the placeholder count is exactly 1 before writing.
4. Model the piece per the data shape above. Reuse `__COLOR_START__` / `__COLOR_SWITCH__` / `__COLORn__` tokens for color call-outs inside row text; use a `join` block for any two-tone piece with an invisible-fasten-off color change.
5. New style in an existing addon category → push onto that category's `styles` array. New addon category → add one entry to `ADDONS`. Don't hand-write new UI branches for it.
6. **Verify before shipping:**
   - Extract the `<script>` block and run `node --check` on it.
   - Build a small Node harness from everything in that script *above* the DOM-touching `function render(){...}` (data + pure functions only), fabricate a `state`, call `buildPatternText(...)`, and diff the output line-by-line against the literal source pattern (round numbers, stitch text, stitch counts, finishing notes).
   - Grep for leftover `{{` placeholder tokens.

## Known technical gotchas

- The file is too large to read in one shot because of long single-line base64 image strings — always find line numbers first (e.g. `awk '{print NR": "length($0)}'` to spot the huge image lines), then read narrow ranges that skip them.
- Text-editing tools' exact-match replace can silently fail if the match spans or touches an image line — do image-field edits only through standalone Python scripts, never inline text-editing tools.
- Always re-view the exact target lines immediately before any in-place edit in the same turn — a stale view of the file leads to mismatched edits.
- After any edit: grep for leftover `{{...}}` placeholders and confirm `node --check` passes before considering the change done.

## Roadmap

Not yet built — waiting on reference photos + patterns:
- **Feet** 🦶
- **Tail Feathers** 🪶
- **Tummy Patch** ⬤
- **Horns** (flagged as a likely future addon category)

Ears was explicitly excluded per an earlier decision and isn't even a locked stub — don't add it without being asked again.

## Development environment

- Primary editing has moved to **Claude Code** (VS Code extension) for in-place file editing of `builder_final.html`.
- A `CLAUDE.md` file alongside the source captures full project state, data model, conventions, and workflow for session continuity — read it first in a new session.
- The app expects an optional `window.claude.use('downloads')` capability at runtime (used to enable the Download button when embedded in a Claude Artifact host); it degrades gracefully if that API isn't present.
