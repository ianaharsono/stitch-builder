# Stitch Builder — Project Instructions

## What this is

"Stitch Builder" is a click-to-select amigurumi pattern designer. The user picks a body shape, then toggles on pieces (wings, beak, snout, horns, and more to come); each choice is backed by a **real** Wooble-style reference pattern the user has supplied (a photo + its round-by-round written instructions), and the app assembles those into one complete, generated crochet pattern the user can copy or download as `.txt`.

Interaction model is deliberately **click-to-select, not drag-and-drop**. Color is never a single global step — every piece asks for its own yarn color(s) the moment it's toggled on, so a beak can be yellow while the body is orange.

## Where this file lives

`CLAUDE.md` sits in the same project folder as `builder_final.html`. This file loads automatically at the start of every Claude Code session in this folder.

Live artifact URL (update this one in place, don't publish a new one):
`https://claude.ai/code/artifact/d2065c86-4b78-404e-ba57-6ab7e6ef38c1`

Publishing requires the `Artifact` tool. If it's not available in the current session, run `build.py` and ask the user to publish/re-upload `builder_final.html` manually.

**Keep the live artifact in sync with the local file.** Publish after every meaningful edit rather than batching several sessions' worth of local changes unpublished. If a publish is ever refused as stale/unmerged, that means the live version is behind local — read what the tool hands back, merge if it names content to preserve, then republish the current local file.

## GitHub repo and Pages (a second, separate deployment target)

- Repo: `https://github.com/ianaharsono/stitch-builder` (public). `gh` CLI is installed and authenticated as `ianaharsono` on this machine.
- Live GitHub Pages URL: `https://ianaharsono.github.io/stitch-builder/` — this serves a static `index.html` at the repo root that does a meta-refresh redirect to `builder_final.html`, since Pages requires `index.html` at the root and `builder_final.html` stays the actual generated filename.
- **This does not auto-sync with the Claude Artifact URL above.** They're independent publish targets — updating one does not update the other. Publish to both if the user wants both current.
- Update flow: after `python3 build.py` regenerates `builder_final.html`, stage it (`git add builder_final.html src/`, plus `index.html` only if it changed), commit, and `git push` to `main`. Pages rebuilds automatically within a minute or two — no separate deploy command.
- Tracked in git: `CLAUDE.md`, `build.py`, `builder_final.html`, `index.html`, `src/`, `images/`. `.DS_Store` is gitignored. `color_tool.html` and `color-preview-prototype.html` are intentionally untracked scratch/prototype files — leave them out of commits unless the user says otherwise.
- If `git push` over HTTPS fails with `RPC failed; HTTP 400` / "unexpected disconnect while reading sideband packet", that's a one-off transport issue, not something to fix by editing git config — retry with per-invocation flags instead: `git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 push`.

## Project structure — `builder_final.html` is a generated file

**Edit under `src/`, never edit `builder_final.html` directly.** It's the build output; hand-edits to it are lost the next time `build.py` runs and will silently diverge from `src/` until then.

- `src/app.js` — all JS logic and piece/body/addon data, with each piece's photo replaced by a `{{PHOTO_<NAME>}}` placeholder token.
- `src/styles.css` — all CSS.
- `src/template.html` — the page shell, with `{{STYLES}}` and `{{SCRIPT}}` placeholders marking where the two files above get inlined.
- `src/photos/<NAME>.b64` — one file per piece photo, holding just the raw base64 payload (no `data:` prefix). `<NAME>` is `<ARRAY_NAME>_<id>` (e.g. `BODIES_chick`, `WING_STYLES_sewn`) — matches the `{{PHOTO_<NAME>}}` token that references it in `app.js`.
- `build.py` — regenerates `builder_final.html` from the four inputs above. Run `python3 build.py` after any edit under `src/`, and always before publishing. It fails loudly (missing/extra placeholder, leftover `{{...}}` token) rather than emitting a broken file.

This split exists because ~85% of `builder_final.html`'s bytes are embedded photo base64 — pulling that out of `app.js`/`styles.css` is what actually fixes the "file too large to `Read`/edit in one shot" problem documented under Known technical gotchas below, without introducing a framework or bundler (this app has no build tooling beyond `build.py`'s plain string substitution, and there is no Node runtime on this machine — `build.py` is Python).

**If `builder_final.html` and `src/` ever disagree** (e.g. someone hand-edited the HTML directly, or edited both concurrently): treat `builder_final.html` as the more likely source of truth for *content* the user just changed, but confirm with the user before overwriting either side. Never run `build.py` to "resolve" a conflict without checking first — it always overwrites `builder_final.html` unconditionally.

## Data model

Every piece (a body, or a style within an addon) is one object:

```js
{
  id: 'classic',
  name: 'Beak',
  subtitle: 'Small pointed beak, single color',
  photo: 'data:image/webp;base64,...',   // omit if no reference photo yet
  cutout: true,                           // true if photo has a transparent/removed background
  makeCount: 1,                           // pieces made (2 for a wing pair, horns pair, etc.)
  colorParts: [
    { key:'main', label:'Yarn color for the beak', materialsLabel:'the beak', defaultColorIdx:1 },
  ],
  blocks: [
    { type:'note', text:'...' },          // optional — can precede rounds (e.g. a shape "tip")
    { type:'rounds', part:0, rows:[ ['1','__COLOR_START__ start 4 sc in a magic loop','4'], ['2','[sc, inc] x 2','6'] ] },
    { type:'join', toPart:1 },            // only for two-tone pieces — emits the invisible-fasten-off + join note
    { type:'note', text:'Invisible fasten off leaving a long tail. Use the yarn tail to attach the beak to the body, centered between the eyes on round 10.' },
  ],
}
```

`colorParts` can have 1 entry (single-color piece) or more (e.g. Peanut Body's head/base). `blocks` is an ordered list of `rounds` / `join` / `note` segments — `note` blocks can appear before the rounds table (e.g. a shape tip) as well as after (finishing instructions). Row instruction text uses placeholder tokens that `compilePieceBlocks` resolves at render time: `__COLOR_START__`, `__COLOR_SWITCH__`, `__COLOR0__`/`__COLOR1__`/etc (resolves against that block's `colorParts` by index). Multi-clause instructions within a single round are written as one continuous row string — there's no separate "sub-step" structure.

**Addons are a registry, not one-off code.** `ADDONS = [{key, label, emptyIcon, chooseNote, styles:[...]}, ...]`. Adding a wholly new addon category means adding one entry here; the grid, the pattern-head photo strip, the materials list, and the generated pattern text are all generic over `ADDONS` and need no further changes. Adding a new *style* to an existing category just means pushing onto that category's `styles` array. A style-picker grid (small thumbnail tiles, same footprint as the body-shape grid) appears automatically once a category has 2+ styles (`addon.styles.length > 1` in `renderAddonsGrid`) — no UI code changes needed either way.

`state = { bodyId, colors: {}, addons: {} }` — `state.addons[key] = { on, styleId, byStyle: {} }`, one entry per addon key, created lazily by `ensureAddonState(key)`.

### Paired pieces — always `makeCount:2`

**Any left/right bilateral appendage — wings, horns, ears, arms, legs, feet, etc.** — must set `makeCount:2` on every style, no exceptions. A single wing/horn/ear/arm/foot would leave the amigurumi missing its other half. A centered, singular piece (a beak, a snout, a body) stays at the default `makeCount:1`.

`makeCount:2` is what drives the "(make 2)" label next to the piece name, both in the addon panel (`renderAddonsGrid`) and in the generated pattern text (`buildPatternText`) — setting it correctly is sufficient, there's no separate place to hand-write "(make 2)".

## Renaming pieces — keep internal `id` stable

When the user asks to rename a piece's display name, only change the `name` field. Keep the internal `id` unchanged so `byStyle` state keys, defaults, and anything else referencing that id don't break.

## Keeping piece language generic

Piece round text and finishing notes should describe generic construction and generic anatomical placement (e.g. "centered between the eyes," "above the ears," "spanning round X") — these are fine, they're common across amigurumi animal patterns. Strip out anything tied to *one specific* animal/design that wouldn't generalize (e.g. a marking like "the black spot"). When adding a new piece from a user-supplied pattern, scan the note text for this kind of non-generic callout before wiring it in, and flag/remove it rather than carrying it over verbatim.

## Core engine functions (don't duplicate these — extend the data instead)

- `ensureStore`, `colorIdxFromStore`, `resolvePieceColors` — small state-lookup helpers.
- `compilePieceBlocks(piece, store)` — walks `blocks`, resolves color tokens, returns `{colors, segments}` where each segment is `{kind:'table', rows}` or `{kind:'note', text}`. Used by both the on-screen render and `buildPatternText` (the plain-text export), so both are guaranteed to match.
- `ensureBodyDefaults(body)` — fills in default color indices for a body the first time it's selected.
- `ensureStyleDefaults(body, style, addonState)` — same, for an addon style. **Design rule:** a style with exactly one `colorParts` entry defaults to matching the body's current main color (so a freshly toggled piece never looks like an accidental mismatch); a style with multiple color parts uses its own explicit `defaultColorIdx` values instead.
- `renderAddonsGrid(body)` — builds the addon-grid UI generically from `ADDONS`. Shows the style-picker grid (small thumbnail tiles, `.shape-grid`/`.shape-card`, reused verbatim from the body-shape picker) only when an addon has more than one style; below it, an enlarged live-tinted preview of the active style sits next to its color swatches, reusing the body-color-section layout. A single-style addon skips the grid and preview, going straight to its full-width photo card and color swatch(es). Off, or before a style has a photo, it's a small emoji-icon tile.
- `render()` — the main re-render: shape grid selection state, per-part body color pickers, addon grid, step-progress dots, pattern-head photos (body photo + one image per active addon-with-a-photo, laid out in `#addonPhotos`, a flex-wrapped row — all at the same 84×84px size, `object-fit:contain` with padding when `cutout:true`), meta chips, and the assembled pattern body (one `p-section` per body + per active addon).
- `buildPatternText(body)` — plain-text version of the same, used by Copy/Download.
- `renderTint`/`renderSplitTint` (via `getTintedPhoto`/`setTintedPhoto`) — recolor a `cutout:true` reference photo toward the selected yarn hex, canvas-side, by re-centering each pixel's luminance on the photo's own mean brightness (contrast boost `GAIN`) and overlay-blending toward the target color. `hexToRgbFrac` clamps target channels to `[0.06, 0.90]` — blending toward an exact 0 or 1 channel is mathematically degenerate (the overlay formula collapses to flat black/white across half the tonal range), so this keeps the blend responsive for any color, including white. `tintGainFor(hex)` additionally halves `GAIN` (1.8 → 0.7) for colors near an achromatic extreme (`min(r,g,b) > 0.92` or `max(r,g,b) < 0.08`) — an achromatic target has no hue to soften how luminance contrast reads, so the same `GAIN` that looks like natural shading on a saturated color looks like a clipped ink-sketch on white or near-black. `NATIVE_COLOR_NAME` designates whichever `COLORS` entry matches the reference photos' own yarn color, and skips tinting entirely for it, since tinting a color toward itself just runs the overlay math against itself and oversaturates. A `COLORS` entry may carry an explicit `gain` (e.g. `{name:'X', hex:'#RRGGBB', gain:0.60}`) — `tintGainFor` checks a hex→gain override map (`COLOR_GAIN_OVERRIDES`, built from every entry with a `gain`) before falling back to the computed curve, for cases where the algorithmic contrast doesn't match a real yarn's shading. Most entries omit `gain` and stay on the computed default.

## UI conventions (keep following these)

- **Any piece with its own reference photo gets a full-width card-style photo**, not a small icon badge — small icon/badge treatments read as "too small." This applies everywhere a piece can appear: its addon toggle tile, the pattern-preview header, etc.
- **Piece photos (`.addon-thumb-photo`) size-match the body-shape yarn-color preview (`.body-color-preview`)** — both use the same responsive grid column (`minmax(140px,220px)`, `width:100%; aspect-ratio:1`) rather than a fixed pixel size, so a piece tile and the body preview always read as the same size regardless of viewport width.
- **Selection checkmarks are visually unified**: the shape-card check (body shape grid) and the addon-check (piece panel) use identical sizing/position/font-size (18×18px, `top:12px;right:12px`, `font-size:11px`) — reuse this exact rule set for any new "this is selected" badge, don't invent a third variant.
- **Teal (`var(--teal)`) is the app's selection/active color**, used consistently for the body-shape selected state (border, glow, checkmark) and the addon-on state (border, wash, checkmark). Coral (`var(--coral)`) stays reserved for other UI (rail numbers, primary button, round-number text) — don't reintroduce coral for selection states.
- Color pickers are always per-piece/per-part, never a single global color step.
- The style-picker grid only appears when there's actually a choice (2+ styles); a single-style addon goes straight to its color swatch(es). The grid's tiles are small deliberately (same size as the body-shape grid) — the addon's own full-width photo card lives in the enlarged preview below the grid instead of in the tiles themselves, so the "any piece with a photo gets a full-width card" rule above is satisfied there, not in the picker.
- Keep note text generic (see above) — no animal-specific markings or landmarks.
- **Don't zoom into reference photos when processing them.** Pad generously — see the padding rule under "Workflow for adding a new piece," step 2. The subject should fill roughly 50–70% of the final square frame, matching the existing embedded photos, not fill the whole frame edge-to-edge.

## Workflow for adding a new piece (body, style, or new addon category)

1. Get two things from the user: a clean reference photo (background removed or removable) and the round-by-round written pattern (a screenshot is fine).
2. If the photo isn't already transparent, remove the background with `rembg` (`pip install rembg onnxruntime --break-system-packages`, **u2netp** model specifically — the default model is too large and gets OOM-killed in this environment). If `rembg`/`onnxruntime` can't be installed (e.g. no wheel for the system Python version, and fixing it via `brew` needs sudo — don't sudo without asking), check whether the source photo already has an alpha channel (`Image.open(path).convert('RGBA')`, check `im.info`/corner alpha) before falling back to any manual cutout method — some source photos arrive pre-cutout.
   **Padding: do not crop tight.** Pad to ~40% of the bounding box's longer dimension on each side. Target: the subject fills roughly 50–70% of the final 500×500 frame on its longer axis. If unsure, check the actual bbox fill fraction of 1–2 existing embedded photos before finalizing a new one. After cropping, pad onto a square canvas, resize to 500×500, save as WEBP, base64-encode.
3. **Never type a large base64 string through the Edit or Write tools.** Write the base64 payload straight to `src/photos/<ARRAY_NAME>_<id>.b64` (e.g. from a `base64` command's output — a controlled, non-transcribed write, not hand-typed), and reference it in `src/app.js` with `photo:'data:image/webp;base64,{{PHOTO_<ARRAY_NAME>_<id>}}'`. `build.py` fails loudly if the placeholder and the `.b64` file don't match up 1:1, so a typo here is caught immediately rather than silently corrupting the published file.
4. Model the piece per the data shape above, in `src/app.js`. Reuse `__COLOR_START__` / `__COLOR_SWITCH__` / `__COLORn__` tokens for color call-outs inside row text; use a `join` block for any two-tone piece with an invisible-fasten-off color change. Scan the source pattern's finishing note for non-generic callouts (see above) before including it.
5. New style in an existing addon category → push onto that category's `styles` array, keep the existing style's `id` untouched. New addon category → add one entry to `ADDONS`. Don't hand-write new UI branches for it.
6. **Verify before publishing:** run `node --check src/app.js` if Node is available (there is none on this machine as of this writing — check before assuming). Then build a small Node harness containing everything in `src/app.js` *above* the DOM-touching `function render(){...}` (data + pure functions only) — concatenate into one file and run with plain `node`, don't use the `vm` module (top-level `const`/`let` declared via `vm.runInContext` are not exposed as properties on the sandbox object, which breaks harness code trying to access them via `sandbox.NAME`). Fabricate a `state`, call `buildPatternText(...)` for the new piece *and* re-check every previously-added piece in the same run (regression check), and diff the output line-by-line against the literal source pattern (round numbers, stitch text, stitch counts, finishing notes) before publishing. Without Node, fall back to: a manual trace of the new piece through `compilePieceBlocks`/`buildPatternText`/`renderAddonsGrid`, and a line-by-line diff against the source pattern. `src/app.js` is now small enough to read and trace directly — no extraction step needed first.
7. Run `python3 build.py` to regenerate `builder_final.html`, then publish with the `Artifact` tool passing the **existing** `url` (see above) so it updates in place, and keep `capabilities: {downloads: true}` carried forward (omit `capabilities` on a plain redeploy to keep it, or restate it explicitly). If the `Artifact` tool isn't available in the current environment, hand the rebuilt `builder_final.html` back to the user to publish/re-upload manually.

## Known technical gotchas

- `builder_final.html` itself and the files under `src/photos/` are still too large/single-line to `Read`/`view` or edit with text tools — but you should no longer need to touch either directly. All logic and data edits happen in `src/app.js` / `src/styles.css` / `src/template.html`, which `Read`/`Edit` normally now that the base64 is factored out. `builder_final.html` is `build.py`'s output; edit it directly only to recover from an emergency (see below), never as routine workflow.
- Editing tools' old-string matching can silently fail if it spans or touches a huge single-line file (a `.b64` photo file, or `builder_final.html`) — do any edit that must touch one of those through a standalone Python script, never a text-editing tool.
- Always re-view a file immediately before editing it in the same turn — a stale view of the file can cause an edit to target content that's already changed. **This applies with extra force to `builder_final.html`**: the user may be hand-editing it directly in another editor while you work. Before running `build.py` (which unconditionally overwrites it) or before treating a copy of it as a baseline, diff the current on-disk file against whatever snapshot you're holding — don't assume it hasn't moved. If it has, that's the user's in-progress work; reconcile before overwriting, don't just clobber it.
- After editing `src/app.js`, grep it for leftover `{{PHOTO_` tokens with no matching `.b64` file, and confirm `node --check` passes if Node is available (or the fallback checks in the workflow above) before running `build.py`. `build.py` itself refuses to write a file with unresolved or mismatched placeholders — a failed `build.py` run means don't publish.
- The local browser preview tool has a file-size ceiling somewhere between ~500KB and ~527KB for `file://` sources — if `builder_final.html` won't open in the preview pane, that's likely why; it's not a sign the file is broken. Verify correctness via the checks in step 6 instead of treating a failed preview load as a bug.
