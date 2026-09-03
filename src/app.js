const BODIES = [
  {
    id:'chick',
    name:'Round body',
    subtitle:'Perfect for circular or baby animals.',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_chick}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the head & body', defaultColorIdx:8},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 6','24'],
        ['5','24 sc','24'],
        ['6','[3 sc, inc] x 6','30'],
        ['7–10','30 sc','30'],
        ['11','[4 sc, inc] x 6','36'],
        ['12–14','36 sc','36'],
        ['15','[2 sc, dec] x 9','27'],
        ['16','27 sc','27'],
        ['17','[sc, dec] x 9','18'],
        ['18','9 dec','9'],
      ]},
      {type:'note', text:'Attach the eyes between rounds 9–10 with a 7-stitch space between them. Stuff the piece, shaping it like a ball.'},
      {type:'note', text:'Fasten off leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap.'},
    ],
  },
  {
    id:'penguin',
    name:'Egg body',
    subtitle:'The most common base for many, like bunnies, chicks, penguins, and even lions.',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_penguin}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the head & body', defaultColorIdx:15},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 6','24'],
        ['5','24 sc','24'],
        ['6','[5 sc, inc] x 4','28'],
        ['7–9','28 sc','28'],
        ['10','[6 sc, inc] x 4','32'],
        ['11–13','32 sc','32'],
        ['14','[2 sc, dec] x 8','24'],
        ['15','24 sc','24'],
        ['16','[sc, dec] x 8','16'],
        ['17','16 sc','16'],
        ['18','8 dec','8'],
      ]},
      {type:'note', text:'Attach the eyes between rounds 7–8 with a 6-stitch space between them. Stuff the piece, shaping it like an egg.'},
      {type:'note', text:'Fasten off leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap.'},
    ],
  },
  {
    id:'peanut',
    name:'Peanut body',
    subtitle:'Used for some humanoid characters, Sanrio, and Stitch',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_peanut}}',
    cutout:true,
    tintSplit:'waist',
    colorParts:[
      {key:'main', label:'Yarn color for the head (rounds 1–10)', materialsLabel:'the head (rounds 1–10)', defaultColorIdx:2},
      {key:'accent', label:'Yarn color for the base (rounds 11–18)', materialsLabel:'the base (rounds 11–18)', defaultColorIdx:14},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 6','24'],
        ['5','[3 sc, inc] x 6','30'],
        ['6–9','30 sc','30'],
        ['10','15 dec','15'],
      ]},
      {type:'join', toPart:1},
      {type:'rounds', part:1, rows:[
        ['11','inc into the same stitch as your sl st join, 14 inc','30'],
        ['12–14','30 sc','30'],
        ['15','[3 sc, dec] x 6','24'],
      ]},
      {type:'note', text:'Attach the eyes between rounds 8 and 9 with a 5-stitch space between them, with the color jump on either side of the piece. If this amigurumi is for a baby or pet, embroider the eyes instead.'},
      {type:'rounds', part:1, rows:[
        ['16','24 sc','24'],
        ['17','[sc, dec] x 8','16'],
      ]},
      {type:'note', text:'Stuff the piece, shaping it like a peanut.'},
      {type:'rounds', part:1, rows:[
        ['18','8 dec','8'],
      ]},
      {type:'note', text:'Fasten off leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap.'},
    ],
  },
  {
    id:'pebble',
    name:'Pebble body',
    subtitle:'Perfect for animals that run on four limbs, such as hamsters',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_pebble}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the head & body', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 2, 2 sc, inc, 2 sc, inc, [2 sc, inc] x 2','24'],
        ['5','24 sc','24'],
        ['6','24 sc','24'],
        ['7','5 sc, [2 sc, inc] x 4, 7 sc','28'],
        ['8–9','28 sc','28'],
        ['10','4 sc, [sc, inc] x 2, 12 sc, [sc, inc] x 2, 4 sc','32'],
        ['11','32 sc','32'],
        ['12','32 sc','32'],
        ['13','32 sc','32'],
        ['14','[2 sc, dec] x 8','24'],
        ['15','24 sc','24'],
      ]},
      {type:'note', text:'The side with the magic loop is the front of the body. Attach the eyes between rounds 4 and 5 with a 7-stitch space between them. If this amigurumi is for a baby or pet, embroider the eyes instead.'},
      {type:'rounds', part:0, rows:[
        ['16','[sc, dec] x 8','16'],
        ['17','16 sc','16'],
      ]},
      {type:'note', text:'Stuff the piece, shaping it like an egg.'},
      {type:'rounds', part:0, rows:[
        ['18','8 dec','8'],
      ]},
      {type:'note', text:'Fasten off, leaving a forearm\'s length yarn tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap. Hide the tail in the body.'},
    ],
  },
  {
    id:'horse',
    name:'Horse body',
    subtitle:'Base for horses and dinos',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_horse}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the head & body', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','inc, 6 sc, 4 inc, 6 sc, inc','24'],
        ['5','8 sc, 8 inc, 8 sc','32'],
        ['6','14 sc, 4 inc, 14 sc','36'],
        ['7–8','36 sc','36'],
        ['9','6 sc, [2 sc, dec] x 6, 6 sc','30'],
        ['10','6 sc, [sc, dec] x 6, 6 sc','24'],
        ['11','6 sc, 6 dec, 6 sc','18'],
        ['12','[2 sc, inc] x 6','24'],
        ['13','[3 sc, inc] x 6','30'],
        ['14','[4 sc, inc] x 6','36'],
      ]},
      {type:'note', text:'The side that sticks out more from the body is the front of the body. Attach the eyes on the front of the head between rounds 5 and 6, with a 14-stitch space between them. If this amigurumi is for a baby or pet, embroider the eyes instead. Stuff the head.'},
      {type:'rounds', part:0, rows:[
        ['15','[7 sc, dec] x 4','32'],
        ['16','[2 sc, dec] x 8','24'],
        ['17','[sc, dec] x 8','16'],
      ]},
      {type:'note', text:'Stuff the rest of the body. Save a small amount of stuffing for the mane and tail.'},
      {type:'rounds', part:0, rows:[
        ['18','8 dec','8'],
      ]},
      {type:'note', text:'Fasten off, leaving a forearm\'s length yarn tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap. Hide the tail in the body.'},
    ],
  },
  {
    id:'dome',
    name:'Dome body',
    subtitle:'Perfect for animals with a shell or rounded back, like roaches, ladybugs, and turtles',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_dome}}',
    cutout:true,
    tintSplit:'waist',
    // The dome's color-change round reads as a curve, not a flat line, because
    // the reference photo is shot looking down at a rounded shape: the round
    // sits higher at the silhouette's left/right edges and dips lower across
    // the front-center, where more of the curved surface is visible. Tuned by
    // eye against the actual photo in curve-preview-prototype.html.
    tintCurve:{edgePct:0.71, centerPct:0.83, featherPct:0.01},
    colorParts:[
      {key:'main', label:'Yarn color for the top (rounds 1–9)', materialsLabel:'the top (rounds 1–9)', defaultColorIdx:5},
      {key:'accent', label:'Yarn color for the base (rounds 10–14)', materialsLabel:'the base (rounds 10–14)', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[6 sc, 3 inc] x 2','24'],
        ['5','[5 sc, (2 sc, inc) x 2, sc] x 2','28'],
        ['6–9','28 sc','28'],
      ]},
      {type:'note', text:'You\'re changing colors in the next round. Remember to switch colors in the last step of the stitch before the color change.', whenColorsDiffer:true},
      {type:'rounds', part:1, rows:[
        ['10','__COLOR_SWITCH__ 28 sc. Cut the __COLOR0__ yarn.','28','28 sc.'],
        ['11','[5 sc, (2 sc, dec) x 2, sc] x 2','24'],
        ['12','[6 sc, 3 dec] x 2','18'],
      ]},
      {type:'note', text:'Stuff the piece, shaping it a little bit flat on the bottom. Save a small amount of stuffing for the head.'},
      {type:'rounds', part:1, rows:[
        ['13','[sc, dec] x 6','12'],
        ['14','[sc, dec] x 4','8'],
      ]},
      {type:'note', text:'Fasten off leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap. Hide the yarn tail in the body.'},
    ],
  },
  {
    id:'snowman',
    name:'Snowman body',
    subtitle:'A rounded head stacked on a rounded body, with a gentle waist between them.',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_snowman}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the head & body', defaultColorIdx:0},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 6','24'],
        ['5','6 sc, 8 inc, 10 sc','32'],
        ['6','[7 sc, inc] x 4','36'],
        ['7–8','36 sc','36'],
        ['9','6 sc, [2 sc, dec] x 6, 6 sc','30'],
        ['10','6 sc, [sc, dec] x 6, 6 sc','24'],
        ['11','6 sc, 6 dec, 6 sc','18'],
        ['12','[sc, inc] x 9','27'],
        ['13','6 sc, [2 sc, inc] x 5, 6 sc','32'],
        ['14','32 sc','32'],
        ['15','[2 sc, dec] x 8','24'],
      ]},
      {type:'note', text:'The side that is protruding is the front of the body. Attach the eyes between rounds 6 and 7 with an 8-stitch space between them. If this amigurumi is for a baby or pet, embroider the eyes instead.'},
      {type:'rounds', part:0, rows:[
        ['16','24 sc','24'],
        ['17','[sc, dec] x 8','16'],
      ]},
      {type:'note', text:'Stuff the head and body.'},
      {type:'rounds', part:0, rows:[
        ['18','8 dec','8'],
      ]},
      {type:'note', text:'Fasten off leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap. Hide the yarn tail in the body.'},
    ],
  },
  {
    id:'thimble',
    name:'Thimble body',
    subtitle:'A tall, rounded dome shape like a sewing thimble.',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_thimble}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the body', defaultColorIdx:0},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 6','24'],
        ['5','24 sc','24'],
        ['6','[3 sc, inc] x 6','30'],
        ['7–9','30 sc','30'],
        ['10','[4 sc, inc] x 6','36'],
        ['11–16','36 sc','36'],
        ['17','[4 sc, dec] x 6, working in the back loops only (BLO)','30'],
        ['18','[3 sc, dec] x 6','24'],
        ['19','[2 sc, dec] x 6','18'],
        ['20','[sc, dec] x 6','12'],
        ['21','6 dec','6'],
      ]},
      {type:'note', text:'Stuff the piece.'},
      {type:'note', text:'Fasten off leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap.'},
    ],
  },
  {
    id:'dino',
    name:'Dino body',
    subtitle:'A rounded head tapering to a pointed back, perfect for dinos and other four-legged animals',
    photo:'data:image/webp;base64,{{PHOTO_BODIES_dino}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the body', materialsLabel:'the head & body', defaultColorIdx:6},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4–5','18 sc','18'],
        ['6','[5 sc, inc] x 3','21'],
        ['7–8','21 sc','21'],
        ['9','7 sc, 7 inc, 7 sc','28'],
        ['10','28 sc','28'],
        ['11','13 sc, 2 inc, 13 sc','30'],
        ['12–14','30 sc','30'],
        ['15','7 sc, dec, [sc, dec] x 5, 6 sc','24'],
        ['16–17','24 sc','24'],
        ['18','7 sc, dec, [sc, dec] x 3, 6 sc','20'],
      ]},
      {type:'note', text:'The beginning of each round is the belly of the body. Attach the eyes between rounds 4 and 5 with an 8-stitch space between them from the top of the head. If this amigurumi is for a baby or pet, embroider the eyes instead. Stuff the piece, shaping it like a peanut, and continue to stuff the body as you go.'},
      {type:'rounds', part:0, rows:[
        ['19','20 sc','20'],
        ['20','6 sc, 4 dec, 6 sc','16'],
        ['21','16 sc','16'],
        ['22','4 sc, 4 dec, 4 sc','12'],
        ['23','12 sc','12'],
        ['24','[sc, dec] x 4','8'],
        ['25','2 sc, 2 dec, 2 sc','6'],
      ]},
      {type:'note', text:'Fasten off, leaving a long tail. Thread a needle with the tail; then use it to pull the yarn tail through the front loops of each stitch. Pull tight to close the remaining gap.'},
    ],
  },
];

const COLORS = [
  {name:'White', hex:'#F9F4F3', gain:0.6},
  {name:'Cream', hex:'#EDE5DB', gain:0.6},
  {name:'Beige', hex:'#D0B79F', gain:0.90},
  {name:'Khaki', hex:'#DC9D62', gain:0.95},
  {name:'Brown', hex:'#9B4C22', gain:1.45},
  {name:'Coffee', hex:'#3E201E', gain:1.05},
  {name:'Yellow', hex:'#E3CD68', gain:0.60},
  {name:'Marigold', hex:'#E6AD34', gain:0.85},
  {name:'Orange', hex:'#FB6209', gain:0.95},
  {name:'Red', hex:'#D2192B', gain:0.9},
  {name:'Terracotta Red', hex:'#AA464E', gain:1.05},
  {name:'Pink', hex:'#F0ABB6', gain:0.6},
  {name:'Magenta', hex:'#D1447E', gain:1.1},
  {name:'Lavender', hex:'#B79BCB', gain:0.8},
  {name:'Light Blue', hex:'#8DB1D8', gain:0.9},
  {name:'Sea Blue', hex:'#21ACDE', gain:1.15},
  {name:'Navy', hex:'#213450', gain:1.1},
  {name:'Seafoam', hex:'#B3D6CA', gain:0.7},
  {name:'Lime', hex:'#9FB951', gain:1.0},
  {name:'Sage', hex:'#768A60', gain:1.3},
  {name:'Green', hex:'#31B478', gain:1.4},
  {name:'Forest', hex:'#26502D', gain:1.3},
  {name:'Olive', hex:'#403D20', gain:1.45},
  {name:'Gray', hex:'#A7A4B6', gain:1.2},
  {name:'Charcoal', hex:'#504C5C', gain:1.3},
  {name:'Black', hex:'#1C1C1C', gain:1.05},
];

const WING_STYLES = [
  {
    id:'sewn',
    name:'Flipper wings',
    subtitle:'Flat, single color, sewn flush to the body',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_sewn}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for wings', materialsLabel:'the wings', defaultColorIdx:8},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','start 4 sc in a magic loop','4'],
        ['2','4 inc','8'],
        ['3','8 sc','8'],
      ]},
      {type:'note', text:'Sl st and ch 1. Fasten off leaving a long tail.'},
      {type:'note', text:'Flatten the wing and sc both layers together across the first two stitches, then continue across the next three stitches. Fasten off.'},
      {type:'note', text:'Sew the wings onto either side of the body, between rounds 9–10.'},
    ],
  },
  {
    id:'flame',
    name:'Scalloped wings',
    subtitle:'Single color with a scalloped, layered edge',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_flame}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for wings', materialsLabel:'the wings', defaultColorIdx:8},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','ch 1 and turn, [sc, inc] x 3','9'],
        ['3','ch 3 and turn, sl st in the last st of round 2, [ch 3, sl st in the next st] x 5',''],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Use the yarn tail to sew the tip of each wing to the side of the body at round 11, three stitches from each eye.'},
    ],
  },
  {
    id:'open',
    name:'Spread wings',
    subtitle:'Open wing with three feather strands, single color',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_open}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for wings', materialsLabel:'the wings', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
      ]},
      {type:'note', text:'Make three strands of feather, and sew the wings to the body:'},
      {type:'note', text:'Tip: when crocheting into a chain, remember to crochet only into the back loops.'},
      {type:'note', text:'Step 1. Ch 3. Sl st into the second ch from the hook, sc. Sl st into the next stitch on the wing.'},
      {type:'note', text:'Step 2. Ch 4. Sl st into the second ch from the hook, 2 sc. Sl st into the next stitch on the wing.'},
      {type:'note', text:'Step 3. Ch 3. Sl st into the second ch from the hook, sc. Sc into the next stitch on the wing.'},
      {type:'note', text:'Step 4. Sl st.'},
      {type:'note', text:'Invisible fasten off leaving a long tail. Thread a needle with the tail, use it to sew the wings to either side of the body, spanning rounds 10 to 13. Each wing should be one stitch behind the embroidered feathers, and the long feathers should be slightly downward towards the back of the body. Keep the three strands of feathers unsewn. Hide the tails in the body.'},
    ],
  },
  {
    id:'round',
    name:'Round arms',
    subtitle:'Small round arms, single color',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_round}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for arms', materialsLabel:'the arms', defaultColorIdx:13},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','[2 sc, inc] x 2','8'],
        ['3','8 sc','8'],
      ]},
      {type:'note', text:'Flatten the arm and insert the hook under the first two stitches across from each other so there are five loops on the hook. Sc both sides together, then continue to sc together the next three pairs of stitches. Fasten off leaving a long tail.'},
      {type:'note', text:'Thread a needle with the tail and use it to sew the arms to either side of the body, three stitches back from the eyes, between rounds 10 and 11. Hide the yarn tail in the body.'},
    ],
  },
  {
    id:'tiny',
    name:'Tiny arms',
    subtitle:'Extra small arms, worked directly into the body, single color',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_tiny}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for arms', materialsLabel:'the arms', defaultColorIdx:2},
    ],
    blocks:[
      {type:'note', text:'Repeat the following on each side to create two arms:'},
      {type:'note', text:'Step 1. Sl st join the yarn to one side of the body between rounds 12 and 13, aligned roughly with the eyes. Insert the hook into the body from the back to the front.'},
      {type:'note', text:'Step 2. Ch 3.'},
      {type:'note', text:'Step 3. Sc into the second ch from the hook, sc.'},
      {type:'note', text:'Step 4. Sl st in the stitch where you made the sl st join, from the front to the back of the body. Both yarn tails should be coming out of the same hole.'},
      {type:'note', text:'Step 5. Fasten off. Tie the yarn tails together and hide them.'},
    ],
  },
  {
    id:'bat',
    name:'Bat wings',
    subtitle:'Flat, notched wing shape, single color',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_bat}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for wings', materialsLabel:'the wings', defaultColorIdx:13},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ ch 11','11'],
        ['2','sc in the second ch from the hook, 4 sc, sk 2 st, 3 sc, ch 1 and turn','8'],
      ]},
      {type:'note', text:'Tip: after a ch 1 and turn, always start the next stitch in the second stitch from the hook.'},
      {type:'rounds', part:0, rows:[
        ['3','inc, sc, sk 2 sts, sc, inc, ch 1 and turn','6'],
        ['4','2 sc, sk 2 sts, 2 sc','4'],
      ]},
      {type:'note', text:'Fasten off, leaving a long tail. Use the yarn tail to sew each wing to the body spanning rounds 9 and 11, seven stitches away from each eye.'},
    ],
  },
  {
    id:'fanned',
    name:'Fanned wings',
    subtitle:'Folded wing with four fanned feather strands, single color',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_fanned}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for wings', materialsLabel:'the wings', defaultColorIdx:4},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
      ]},
      {type:'note', text:'Step 1. Fold the wing in half and insert the hook into the first two stitches across from each other. Sc.'},
      {type:'note', text:'Step 2. Sc through the next four pairs of stitches.'},
      {type:'note', text:'Tip: when crocheting into a chain, remember to crochet only into the back loops.'},
      {type:'note', text:'Step 3. Ch 4. Sl st into the second ch from the hook, 2 sc. Sl st into the next pair of stitches on the wing.'},
      {type:'note', text:'Step 4. Ch 5. Sl st into the second ch from the hook, 3 sc. Sl st into the next pair of stitches on the wing.'},
      {type:'note', text:'Step 5. Ch 6. Sl st into the second ch from the hook, 4 sc. Sl st into the next pair of stitches on the wing.'},
      {type:'note', text:'Step 6. Repeat step 5.'},
      {type:'note', text:'Fasten off, leaving an arm\'s length yarn tail. Thread a needle with the tail, then use it to sew the wing three stitches away from an eye, at an angle, with the flat edge facing upwards, spanning rounds 10 to 13. The long feathers should be pointing towards the back of the body unsewn. Hide the tail in the body. Repeat for the other wing.'},
    ],
  },
  {
    id:'stub',
    name:'Stub arms',
    subtitle:'Small round stub arms, single color',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_stub}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the arms', materialsLabel:'the arms', defaultColorIdx:6},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','[2 sc, inc] x 2','8'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Thread a needle with the tail and use it to sew the arms to either side of the body, spanning rounds x to x, with an x-stitch space between them. Hide the yarn tails in the body.'},
    ],
  },
  {
    id:'webbed',
    name:'Webbed Wings',
    subtitle:'Flat wing worked in turned rows, tapering from a wide base to a point',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_webbed}}',
    cutout:true,
    makeCount:2,
    tintSplit:'waist',
    // The color-change row reads as a diagonal, not a flat line or a symmetric
    // dip, because the reference photo is shot at an angle — tuned by eye
    // against the actual photo in curve-preview-wing-webbed.html.
    tintCurve:{edgePct:0.54, centerPct:0.35, featherPct:0.01, tiltPct:-0.20},
    colorParts:[
      {key:'main', label:'Yarn color for the wing base (row 1)', materialsLabel:'the wing base', defaultColorIdx:11},
      {key:'accent', label:'Yarn color for the wing body (rows 2–5)', materialsLabel:'the wing body', defaultColorIdx:6},
    ],
    blocks:[
      {type:'note', text:'Leave a forearm\'s length yarn tail before starting row 1.'},
      {type:'note', text:'Tip: when crocheting a new row, skip the first stitch from the hook. For the first row after a chain, crochet in the back loops only.'},
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ ch 12','12'],
      ]},
      {type:'rounds', part:1, rows:[
        ['2','sl st in the second ch from the hook, 10 sc, __COLOR_SWITCH__ ch 2 and turn','11','sl st in the second ch from the hook, 10 sc, ch 2 and turn'],
        ['3','hdc in the third st from the hook, 5 hdc, 3 sc, sl st, ch 1 and turn','10'],
        ['4','skip 1 st, sl st, 2 sc, dec, 4 hdc, ch 2 and turn','8'],
        ['5','hdc in the third st from the hook, 2 hdc, dec, 2 sc, sl st','7'],
      ]},
      {type:'note', text:'Fasten off, leaving a long tail. Weave the yarn tail through the last row so it comes out the opposite side of the wing tip. Thread a needle with the tail, then use it to sew the wings to the back of the body, spanning rounds 11 and 16, with the row 1 edge on top, two stitches away from each leg. Hide the tails in the body.'},
    ],
  },
  {
    id:'sleeved',
    name:'Sleeved arms',
    subtitle:'Small round arms with a contrasting cuff, two colors',
    photo:'data:image/webp;base64,{{PHOTO_WING_STYLES_sleeved}}',
    cutout:true,
    makeCount:2,
    tintSplit:'waist',
    tintCurve:{edgePct:0.44, centerPct:0.47, featherPct:0.015, tiltPct:0.04},
    colorParts:[
      {key:'accent', label:'Yarn color for the cuff (round 5)', materialsLabel:'the arm cuffs', defaultColorIdx:14},
      {key:'main', label:'Yarn color for the arm (rounds 1–4)', materialsLabel:'the arms', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:1, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2–4','6 sc','6'],
      ]},
      {type:'note', text:'You\'re changing colors in the next round. Remember to switch colors in the last step of the stitch before the color change.', whenColorsDiffer:true},
      {type:'rounds', part:0, rows:[
        ['5','__COLOR_SWITCH__ 6 sc','6','6 sc'],
      ]},
      {type:'note', text:'Flatten the arm and insert the hook under the first two stitches across from each other, so there are five loops on the hook. Sc both sides together, then continue to sc together the next two pairs of stitches. Fasten off leaving a forearm\'s length yarn tail.'},
      {type:'note', text:'Thread a needle with the tail and use it to sew the arm to the body, between rounds 11 and 12. Hide the yarn tail in the body. Repeat for the other arm.'},
    ],
  },
];

const HEAD_STYLES = [
  {
    id:'bug',
    name:'Bug head',
    subtitle:'Small rounded head, single color',
    photo:'data:image/webp;base64,{{PHOTO_BEAK_STYLES_bug}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the head', materialsLabel:'the head', defaultColorIdx:5},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4–6','18 sc','18'],
      ]},
      {type:'note', text:'Attach the eyes between rounds 3–4 with a 10-stitch space between them, measured from the top of the head. If this amigurumi is for a baby or pet, embroider the eyes instead.'},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Thread a needle with the tail, then use it to sew the head to the side of the body that is more curved, spanning rounds 6 to 10. The bottom of the head should cover 4 stitches of round 10. When you have a few stitches remaining, stuff the head lightly.'},
    ],
  },
];

const MOUTH_STYLES = [
  {
    id:'classic',
    name:'Round beak',
    subtitle:'Small pointed beak, single color',
    photo:'data:image/webp;base64,{{PHOTO_BEAK_STYLES_classic}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the beak', materialsLabel:'the beak', defaultColorIdx:7},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[sc, inc] x 2','6'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long tail. Use the yarn tail to attach the beak to the body, centered between the eyes on round 10.'},
    ],
  },
  {
    id:'flattened',
    name:'Flat beak',
    subtitle:'Small flattened beak, single color',
    photo:'data:image/webp;base64,{{PHOTO_BEAK_STYLES_flattened}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the beak', materialsLabel:'the beak', defaultColorIdx:7},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[sc, inc] x 2','6'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long tail. Thread a needle with the tail and flatten the beak lengthwise. Sew the beak to the body centered between the eyes, spanning round 9.'},
    ],
  },
  {
    id:'oval',
    name:'Large snout',
    subtitle:'Large oval snout, single color',
    photo:'data:image/webp;base64,{{PHOTO_BEAK_STYLES_oval}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the snout', materialsLabel:'the snout', defaultColorIdx:11},
    ],
    blocks:[
      {type:'note', text:'This is an oval.'},
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ ch 4','4'],
        ['2','inc in the second ch from the hook, sc, then 4 sc in the last st. Rotate the piece to work on the other side of the foundation chain. sc, inc','10'],
        ['3','2 inc, sc, 4 inc, sc, 2 inc','18'],
        ['4–5','18 sc','18'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Use the yarn tail to attach the snout to the body centered between the eyes, spanning rounds 7 to 10. When you have a few stitches remaining, lightly stuff the snout.'},
    ],
  },
  {
    id:'round',
    name:'Medium snout',
    subtitle:'Medium round snout, single color',
    photo:'data:image/webp;base64,{{PHOTO_BEAK_STYLES_round}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the snout', materialsLabel:'the snout', defaultColorIdx:11},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','4 inc','8'],
        ['3','[sc, inc] x 4','12'],
        ['4','12 sc','12'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Thread a needle with the tail, then use it to sew the snout to the head spanning rounds 6 to 9, centered between the eyes.'},
    ],
  },
];

const FACE_STYLES = [
  {
    id:'oval_eyes',
    name:'Oval eyes',
    subtitle:'Paired oval eyes, single color',
    photo:'data:image/webp;base64,{{PHOTO_BEAK_STYLES_oval_eyes}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the eyes', materialsLabel:'the eyes', defaultColorIdx:0},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[inc, hdc inc] x 2','8'],
      ]},
      {type:'note', text:'Invisible fasten off with a long tail. Attach the safety eyes between rounds 1 and 2, centered in the eye piece.'},
      {type:'note', text:'Thread a needle with the yarn tail and use it to sew each eye to the body, spanning rounds 6–10. The eyes should be two stitches apart.'},
    ],
  },
];

const HORN_STYLES = [
  {
    id:'classic',
    name:'Horns',
    subtitle:'Small paired horns, single color',
    photo:'data:image/webp;base64,{{PHOTO_HORN_STYLES_classic}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the horns', materialsLabel:'the horns', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[inc, sc] x 2','6'],
        ['3','6 sc','6'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Use the yarn tail to sew the horns above the ears on either side of the head, between rounds 3 and 4.'},
    ],
  },
  {
    id:'spike',
    name:'Spikes (small)',
    subtitle:'Small pointed spikes, single color',
    photo:'data:image/webp;base64,{{PHOTO_HORN_STYLES_spike}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the spikes', materialsLabel:'the spikes', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[sc, inc] x 2','6'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long tail. Thread a needle with the tail and use it to sew each spike in place, leaving one to two rounds between each spike.'},
    ],
  },
  {
    id:'spike_medium',
    name:'Spikes (medium)',
    subtitle:'Small pointed spikes, single color',
    photo:'data:image/webp;base64,{{PHOTO_HORN_STYLES_spike_medium}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the spikes', materialsLabel:'the spikes', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 5 sc in a magic loop','5'],
        ['2','sc, inc, 2 sc, inc','7'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long tail. Thread a needle with the tail and use it to sew each spike in place, leaving one to two rounds between each spike.'},
    ],
  },
  {
    id:'spike_large',
    name:'Spikes (large)',
    subtitle:'Small pointed spikes, single color',
    photo:'data:image/webp;base64,{{PHOTO_HORN_STYLES_spike_large}}',
    cutout:true,
    colorParts:[
      {key:'main', label:'Yarn color for the spikes', materialsLabel:'the spikes', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','[sc, inc] x 3','9'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long tail. Thread a needle with the tail and use it to sew each spike in place, leaving one to two rounds between each spike.'},
    ],
  },
];

const EAR_STYLES = [
  {
    id:'round',
    name:'Round ears (medium)',
    subtitle:'Small paired ears, single color',
    photo:'data:image/webp;base64,{{PHOTO_EAR_STYLES_round}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the ears', materialsLabel:'the ears', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 5 sc in a magic loop','5'],
        ['2','5 inc','10'],
        ['3','10 sc','10'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Use the yarn tail to sew the ears to either side of the head, between rounds 5 and 6, about 4 stitches back from each eye with the opening facing forward.'},
    ],
  },
  {
    id:'round_small',
    name:'Round ears (small)',
    subtitle:'Small paired ears, single color',
    photo:'data:image/webp;base64,{{PHOTO_EAR_STYLES_round_small}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the ears', materialsLabel:'the ears', defaultColorIdx:2},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','sc, 2 inc, sc','6'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Use the yarn tail to sew each ear to the head between rounds 3 and 4, five or six stitches behind each eye, centered on top of the head.'},
    ],
  },
  {
    id:'pointy',
    name:'Cat ears',
    docName:'Ears',
    subtitle:'Small paired triangular ears, single color',
    photo:'data:image/webp;base64,{{PHOTO_EAR_STYLES_pointy}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the ears', materialsLabel:'the ears', defaultColorIdx:13},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','4 sc','4'],
        ['3','4 inc','8'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Flatten the ear and sew it to the top of the head spanning rounds 3-5, centered above the eyes. The ears should be at about a 45° angle.'},
    ],
  },
  {
    id:'oval',
    name:'Oval ears',
    subtitle:'Small paired oval ears, single color',
    photo:'data:image/webp;base64,{{PHOTO_EAR_STYLES_oval}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the ears', materialsLabel:'the ears', defaultColorIdx:13},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[sc, inc] x 2','6'],
        ['3','[2 sc, inc] x 2','8'],
        ['4','8 sc','8'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Use the yarn tail to sew the ears on either side of the head, spanning rounds 2 to 4.'},
    ],
  },
  {
    id:'long',
    name:'Rabbit ears',
    subtitle:'Small paired leafy ears, single color',
    photo:'data:image/webp;base64,{{PHOTO_EAR_STYLES_long}}',
    cutout:true,
    makeCount:2,
    colorParts:[
      {key:'main', label:'Yarn color for the ears', materialsLabel:'the ears', defaultColorIdx:0},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','4 inc','8'],
        ['3','8 sc','8'],
        ['4','[sc, inc] x 4','12'],
        ['5','12 sc','12'],
        ['6','[sc, dec] x 4','8'],
        ['7','8 sc','8'],
        ['8','4 dec','4'],
      ]},
      {type:'note', text:'Fasten off leaving a long tail. Use the yarn tail to sew the ears to the body spanning rounds 2 and 3, centered above each eye.'},
    ],
  },
];

const TAIL_STYLES = [
  {
    id:'long',
    name:'Cat tail',
    subtitle:'Long tail, single color',
    photo:'data:image/webp;base64,{{PHOTO_TAIL_STYLES_long}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the tail', materialsLabel:'the tail', defaultColorIdx:13},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2–10','6 sc','6'],
      ]},
      {type:'note', text:'Invisible fasten off with a long tail. Thread a needle with the yarn tail and use it to attach the tail to the back of the body, spanning rounds 12 to 14.'},
    ],
  },
  {
    id:'dino',
    name:'Dino tail',
    subtitle:'Short bumpy tail, single color',
    photo:'data:image/webp;base64,{{PHOTO_TAIL_STYLES_dino}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the tail', materialsLabel:'the tail', defaultColorIdx:20},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 4 sc in a magic loop','4'],
        ['2','[sc, inc] x 2','6'],
        ['3','2 sc, 2 inc, 2 sc','8'],
        ['4','3 sc, 2 inc, 3 sc','10'],
        ['5','4 sc, 2 inc, 4 sc','12'],
        ['6','5 sc, 2 inc, 5 sc','14'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long yarn tail. Stuff lightly. Thread a needle with the yarn tail and use it to sew the tail to the middle of the body\'s back, spanning rounds 14 to 17. Make sure the inclined part of the tail — the side opposite the yarn tail — is facing up.'},
    ],
  },
];

const TUMMY_STYLES = [
  {
    id:'round',
    name:'Round Tummy',
    subtitle:'Small round tummy patch, single color',
    photo:'data:image/webp;base64,{{PHOTO_TUMMY_STYLES_round}}',
    cutout:true,
    makeCount:1,
    colorParts:[
      {key:'main', label:'Yarn color for the tummy', materialsLabel:'the tummy', defaultColorIdx:0},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','6 inc','12'],
        ['3','[sc, inc] x 6','18'],
        ['4','[2 sc, inc] x 6','24'],
      ]},
      {type:'note', text:'Invisible fasten off leaving a long tail. Thread a needle with the tail and use it to sew the tummy to the body, starting with the top of the tummy between rounds 9 and 10.'},
    ],
  },
];

const FEET_STYLES = [
  {
    id:'stub',
    name:'Stub legs',
    subtitle:'Small round stub legs, single color',
    photo:'data:image/webp;base64,{{PHOTO_FEET_STYLES_stub}}',
    cutout:true,
    makeCount:4,
    colorParts:[
      {key:'main', label:'Yarn color for the legs', materialsLabel:'the legs', defaultColorIdx:6},
    ],
    blocks:[
      {type:'rounds', part:0, rows:[
        ['1','__COLOR_START__ start 6 sc in a magic loop','6'],
        ['2','[2 sc, inc] x 2','8'],
      ]},
      {type:'note', text:'Invisible fasten off, leaving a long tail. Thread a needle with the tail, then use it to sew the first pair of legs centered to either side near the belly spanning rounds x to x, with an x-stitch space between them. Sew the second pair of legs centered to either side near the belly and tail spanning rounds x to x, with an x-stitch space between them. Hide the yarn tails in the body.'},
    ],
  },
];

const ADDONS = [
  {key:'head', label:'Head', emptyIcon:'⚪', chooseNote:'choose a style', styles:HEAD_STYLES},
  {key:'face', label:'Face', emptyIcon:'👁️', chooseNote:'choose a style', styles:FACE_STYLES},
  {key:'mouth', label:'Mouth', emptyIcon:'👄', chooseNote:'choose a style', styles:MOUTH_STYLES},
  {key:'ears', label:'Ears', emptyIcon:'👂', chooseNote:'choose a style', styles:EAR_STYLES},
  {key:'horns', label:'Horns', emptyIcon:'🐮', chooseNote:'choose a style', styles:HORN_STYLES},
  {key:'wings', label:'Arms', emptyIcon:'🪽', chooseNote:'choose a style', styles:WING_STYLES},
  {key:'tummy', label:'Tummy', emptyIcon:'⬤', chooseNote:'choose a style', styles:TUMMY_STYLES},
  {key:'feet', label:'Feet', emptyIcon:'🦶', chooseNote:'choose a style', styles:FEET_STYLES},
  {key:'tail', label:'Tail', emptyIcon:'➰', chooseNote:'choose a style', styles:TAIL_STYLES},
];


const LOCKED_ADDONS = [
];

const state = { bodyId:null, colors:{}, addons:{}, patternTitle:'', customColorMaps:{} };
function ensureAddonState(key){
  if(!state.addons[key]) state.addons[key] = { on:false, styleId:null, byStyle:{} };
  return state.addons[key];
}

const STATE_STORAGE_KEY = 'stitchBuilderState';
function saveState(){
  try{ localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state)); }catch(e){}
}
function loadState(){
  try{
    const raw = localStorage.getItem(STATE_STORAGE_KEY);
    if(!raw) return;
    const saved = JSON.parse(raw);
    if(saved && typeof saved === 'object'){
      state.bodyId = saved.bodyId ?? null;
      state.colors = saved.colors ?? {};
      state.addons = saved.addons ?? {};
      state.patternTitle = typeof saved.patternTitle === 'string' ? saved.patternTitle : '';
      state.customColorMaps = saved.customColorMaps && typeof saved.customColorMaps === 'object' ? saved.customColorMaps : {};
    }
  }catch(e){}
}
let downloadsReady = false;
(async ()=>{
  try{
    if(window.claude && typeof window.claude.use === 'function'){
      const downloads = await window.claude.use('downloads');
      downloadsReady = !!downloads;
    }
  }catch(e){ downloadsReady = false; }
})();

function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }

const tintDecodeCache = new Map(); // photoSrc -> Promise<{img, lMean, waistY, lMeanAbove, lMeanBelow}>
const tintResultCache = new Map(); // `${photoSrc}::${hexKey}` -> data URL
const tintTargets = new WeakMap(); // imgEl -> {photoSrc, hexKey}, to guard against stale async swaps

function tintOverlayChannel(base, blend){
  return base < 0.5 ? 2*base*blend : 1 - 2*(1-base)*(1-blend);
}

// Overlay-blending toward an exact 0 or 1 channel is degenerate: the overlay
// formula above collapses to a flat 0 or 1 output across a whole half of the
// source photo's tonal range (see renderTint/renderSplitTint), which is what
// blew out "White" to ~70% pure-white pixels with harsh near-black creases
// instead of the soft, evenly-shaded look every other yarn color gets. Keeping
// tint targets just shy of pure black/white keeps the blend responsive across
// the full tonal range for every color, white included.
function hexToRgbFrac(hex){
  const clamp = v => Math.min(0.90, Math.max(0.06, v));
  return [clamp(parseInt(hex.slice(1,3),16)/255), clamp(parseInt(hex.slice(3,5),16)/255), clamp(parseInt(hex.slice(5,7),16)/255)];
}

// A COLORS entry may set an explicit `gain`, overriding the auto-computed contrast below —
// used when the algorithmic shading doesn't match a real yarn's appearance for that color.
const COLOR_GAIN_OVERRIDES = new Map(COLORS.filter(c => c.gain != null).map(c => [c.hex, c.gain]));

// The contrast boost below (GAIN) is tuned for mid-tone, saturated colors,
// where hue carries some of the visual weight and softens how harsh the
// luminance contrast reads. A lighter target has less hue and less headroom
// before shadow detail crushes toward black, so the same GAIN reads as a
// harsh, clipped shadow instead of soft natural shading — ease it down
// smoothly as the target color's lightness rises above LIGHT_START, down to
// MIN_GAIN at pure white. A near-black target gets the same low-end
// treatment, for the same headroom reason at the other extreme.
function tintGainFor(hex){
  if(COLOR_GAIN_OVERRIDES.has(hex)) return COLOR_GAIN_OVERRIDES.get(hex);
  const r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
  const BASE_GAIN = 1.8, MIN_GAIN = 0.7;
  if(Math.max(r,g,b) < 0.08) return MIN_GAIN;
  const lightness = (Math.max(r,g,b) + Math.min(r,g,b)) / 2;
  const LIGHT_START = 0.55;
  if(lightness <= LIGHT_START) return BASE_GAIN;
  const t = Math.min(1, (lightness - LIGHT_START) / (1 - LIGHT_START));
  return BASE_GAIN - (BASE_GAIN - MIN_GAIN) * t;
}

// Where the top/bottom split sits at a given column x: a flat waistY for a
// figure-8 "waist" piece, or — when the piece supplies a curve — a boundary
// that sits at curve.edgePct (of image height) at the silhouette's left/right
// edges and dips to curve.centerPct at its horizontal center, tracing the
// visible curvature of a round on a domed shape (see renderSplitTint).
// An optional curve.tiltPct rotates that boundary about its own horizontal
// center — the left edge (t=0) and right edge (t=1) shift by equal and
// opposite amounts, t=0.5 unaffected — for a piece photographed at an angle,
// where the color-change line reads as a straight diagonal rather than a
// symmetric dip (tuned by eye in curve-preview-wing-webbed.html).
function splitYForColumn(x, waistY, x0, x1, curve, height){
  if(!curve) return waistY;
  const t = x1 > x0 ? Math.max(0, Math.min(1, (x - x0) / (x1 - x0))) : 0;
  const shape = Math.sin(Math.PI * t);
  const edgeY = curve.edgePct * height, centerY = curve.centerPct * height;
  const tilt = (curve.tiltPct || 0) * height * (t - 0.5);
  return edgeY + (centerY - edgeY) * shape + tilt;
}

function decodeForTint(photoSrc, curve){
  const cacheKey = curve ? `${photoSrc}::curve:${curve.edgePct}:${curve.centerPct}:${curve.tiltPct||0}` : photoSrc;
  if(tintDecodeCache.has(cacheKey)) return tintDecodeCache.get(cacheKey);
  const promise = new Promise(resolve=>{
    const img = new Image();
    img.onload = ()=>{
      const c = document.createElement('canvas');
      const width = img.naturalWidth, height = img.naturalHeight;
      c.width = width; c.height = height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img,0,0);
      const data = ctx.getImageData(0,0,width,height).data;

      let sum=0, count=0;
      const rowOpaqueCount = new Uint32Array(height);
      let x0=width, x1=0;
      for(let y=0;y<height;y++){
        let rowCount = 0;
        for(let x=0;x<width;x++){
          const i = (y*width+x)*4;
          if(data[i+3]===0) continue;
          rowCount++;
          sum += 0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2];
          count++;
          if(x<x0) x0=x; if(x>x1) x1=x;
        }
        rowOpaqueCount[y] = rowCount;
      }
      const lMean = count ? (sum/count)/255 : 0.75;

      // For two-tone pieces shaped like a figure-8 (e.g. the peanut body),
      // the "waist" — the narrowest row in the middle band of the silhouette —
      // is the natural pinch point between the two lumps, and matches where
      // the pattern actually switches yarn color between the two lobes.
      let waistY = Math.floor(height/2);
      let minRowCount = Infinity;
      const bandStart = Math.floor(height*0.3), bandEnd = Math.floor(height*0.7);
      for(let y=bandStart; y<bandEnd; y++){
        if(rowOpaqueCount[y] > 0 && rowOpaqueCount[y] < minRowCount){
          minRowCount = rowOpaqueCount[y];
          waistY = y;
        }
      }

      let sumAbove=0, countAbove=0, sumBelow=0, countBelow=0;
      for(let y=0;y<height;y++){
        for(let x=0;x<width;x++){
          const i = (y*width+x)*4;
          if(data[i+3]===0) continue;
          const l = 0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2];
          const sy = splitYForColumn(x, waistY, x0, x1, curve, height);
          if(y < sy){ sumAbove += l; countAbove++; } else { sumBelow += l; countBelow++; }
        }
      }
      const lMeanAbove = countAbove ? (sumAbove/countAbove)/255 : lMean;
      const lMeanBelow = countBelow ? (sumBelow/countBelow)/255 : lMean;

      resolve({ img, lMean, waistY, lMeanAbove, lMeanBelow, x0, x1 });
    };
    img.src = photoSrc;
  });
  tintDecodeCache.set(cacheKey, promise);
  return promise;
}

// Recolors a crochet reference photo toward a yarn swatch while keeping its
// real shading: each pixel's lightness is re-centered on the object's own
// average brightness, then overlay-blended with the target color, so
// highlights/shadows/texture stay proportionally where the photo had them.
function renderTint(img, lMean, hex){
  const [tr, tg, tb] = hexToRgbFrac(hex);
  const GAIN = tintGainFor(hex), MID = 0.5;
  const c = document.createElement('canvas');
  c.width = img.naturalWidth; c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img,0,0);
  const frame = ctx.getImageData(0,0,c.width,c.height);
  const data = frame.data;
  for(let i=0;i<data.length;i+=4){
    if(data[i+3]===0) continue;
    const l = (0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2]) / 255;
    let normL = MID + (l - lMean) * GAIN;
    normL = normL < 0 ? 0 : normL > 1 ? 1 : normL;
    data[i]   = Math.round(tintOverlayChannel(normL, tr) * 255);
    data[i+1] = Math.round(tintOverlayChannel(normL, tg) * 255);
    data[i+2] = Math.round(tintOverlayChannel(normL, tb) * 255);
  }
  ctx.putImageData(frame,0,0);
  return c.toDataURL('image/png');
}

// Same idea as renderTint, but for a two-lobe piece: everything above the
// waist tints toward hexTop, everything below toward hexBottom, with a thin
// feathered band across the waist so the switch isn't a hard scanline.
// Either hex can be null, meaning "this region is already its native color
// in the photo" — those pixels pass through untouched (see nativeWeight
// below) instead of being run through the overlay math a second time.
function renderSplitTint(img, decoded, hexTop, hexBottom, curve){
  const topNative = hexTop == null, botNative = hexBottom == null;
  let [trT, tgT, tbT] = topNative ? [0,0,0] : hexToRgbFrac(hexTop);
  let [trB, tgB, tbB] = botNative ? [0,0,0] : hexToRgbFrac(hexBottom);
  if(topNative){ [trT,tgT,tbT] = [trB,tgB,tbB]; }
  if(botNative){ [trB,tgB,tbB] = [trT,tgT,tbT]; }
  const gainT = topNative ? tintGainFor(hexBottom) : tintGainFor(hexTop);
  const gainB = botNative ? tintGainFor(hexTop) : tintGainFor(hexBottom);
  const MID = 0.5;
  const c = document.createElement('canvas');
  const width = img.naturalWidth, height = img.naturalHeight;
  c.width = width; c.height = height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img,0,0);
  const frame = ctx.getImageData(0,0,width,height);
  const data = frame.data;
  const FEATHER = curve
    ? Math.max(2, Math.round(height * curve.featherPct))
    : Math.max(2, Math.round(height * 0.02));
  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      const i = (y*width+x)*4;
      if(data[i+3]===0) continue;
      const sy = splitYForColumn(x, decoded.waistY, decoded.x0, decoded.x1, curve, height);
      const isTop = y < sy;
      const lMeanLocal = isTop ? decoded.lMeanAbove : decoded.lMeanBelow;
      const dist = y - sy;
      let t = isTop ? 0 : 1; // 0 = fully top color, 1 = fully bottom color
      if(Math.abs(dist) < FEATHER){
        t = (dist + FEATHER) / (FEATHER*2);
        t = t < 0 ? 0 : t > 1 ? 1 : t;
      }
      const tr = trT + (trB-trT)*t, tg = tgT + (tgB-tgT)*t, tb = tbT + (tbB-tbT)*t;
      const GAIN = gainT + (gainB-gainT)*t;
      // how much of the final pixel should be the raw original instead of the
      // tinted result — 1 deep in a native region, fading to 0 across the seam
      const nativeWeight = topNative && botNative ? 1 : topNative ? (1-t) : botNative ? t : 0;
      const r0 = data[i]/255, g0 = data[i+1]/255, b0 = data[i+2]/255;
      const l = 0.299*r0 + 0.587*g0 + 0.114*b0;
      let normL = MID + (l - lMeanLocal) * GAIN;
      normL = normL < 0 ? 0 : normL > 1 ? 1 : normL;
      const tintedR = tintOverlayChannel(normL, tr), tintedG = tintOverlayChannel(normL, tg), tintedB = tintOverlayChannel(normL, tb);
      data[i]   = Math.round((tintedR*(1-nativeWeight) + r0*nativeWeight) * 255);
      data[i+1] = Math.round((tintedG*(1-nativeWeight) + g0*nativeWeight) * 255);
      data[i+2] = Math.round((tintedB*(1-nativeWeight) + b0*nativeWeight) * 255);
    }
  }
  ctx.putImageData(frame,0,0);
  return c.toDataURL('image/png');
}

// `hexOrPair` is either one hex string (single-color piece) or a [top, bottom]
// pair for a waist-split two-tone piece (either entry may be null for a
// native-color region). `piece.tintCurve`, when present, curves that split
// (see splitYForColumn) instead of using a flat waistY.
function getTintedPhoto(piece, hexOrPair, onReady){
  const photoSrc = piece.photo, curve = piece.tintCurve;
  const hexKey = Array.isArray(hexOrPair) ? hexOrPair.map(h=>h||'native').join('|') : hexOrPair;
  const key = photoSrc + '::' + hexKey;
  if(tintResultCache.has(key)) return tintResultCache.get(key);
  decodeForTint(photoSrc, curve).then(decoded=>{
    const dataUrl = Array.isArray(hexOrPair)
      ? renderSplitTint(decoded.img, decoded, hexOrPair[0], hexOrPair[1], curve)
      : renderTint(decoded.img, decoded.lMean, hexOrPair);
    tintResultCache.set(key, dataUrl);
    onReady(dataUrl);
  });
  return null;
}

// Points an <img> at a color-tinted version of a reference photo, showing
// the untinted photo until the tint is ready (decoding+tinting is cached
// per photo+color, so repeat renders resolve instantly from cache).
function setTintedPhoto(imgEl, piece, hexOrPair){
  const photoSrc = piece.photo;
  const hexKey = Array.isArray(hexOrPair) ? hexOrPair.map(h=>h||'native').join('|') : hexOrPair;
  tintTargets.set(imgEl, { photoSrc, hexKey });
  const cached = getTintedPhoto(piece, hexOrPair, dataUrl=>{
    const current = tintTargets.get(imgEl);
    if(current && current.photoSrc===photoSrc && current.hexKey===hexKey){
      imgEl.src = dataUrl;
    }
  });
  imgEl.src = cached || photoSrc;
}

function clearTintTarget(imgEl){
  tintTargets.delete(imgEl);
}

// Beige (the reference photos' own natural yarn color) is also the app's one
// fixed swatch for normalizing style-picker thumbnails — see NATIVE_COLOR_HEX
// below — so every piece is tinted toward its selected color, Beige included,
// keeping every preview (thumbnail, enlarged preview, pattern-head photo)
// visually consistent rather than falling back to each photo's own raw tone.
const NATIVE_COLOR_NAME = 'Beige';
const NATIVE_COLOR_HEX = COLORS.find(c=>c.name===NATIVE_COLOR_NAME).hex;

// Decides what to hand setTintedPhoto for a piece: one hex for a single-color
// piece, a [top, bottom] pair for a waist-split two-tone piece, or null when
// no supported strategy applies.
function resolveTintColors(piece, colorStore){
  if(piece.colorParts.length === 1){
    return COLORS[colorIdxFromStore(colorStore, piece.colorParts[0])].hex;
  }
  if(piece.colorParts.length === 2 && piece.tintSplit === 'waist'){
    const [c0, c1] = piece.colorParts.map(part => COLORS[colorIdxFromStore(colorStore, part)]);
    return [c0.hex, c1.hex];
  }
  return null;
}
function resolveTintColorsFromResolved(piece, colors){
  if(piece.colorParts.length === 1){
    return colors[0].hex;
  }
  if(piece.colorParts.length === 2 && piece.tintSplit === 'waist'){
    return [colors[0].hex, colors[1].hex];
  }
  return null;
}

function renderShapes(){
  const grid = document.getElementById('shapeGrid');
  grid.innerHTML='';
  BODIES.forEach(b=>{
    const card = el('button','shape-card');
    card.type='button';
    card.innerHTML = `
      <img alt="${b.name} reference photo"${b.cutout ? ' class="is-cutout"' : ''}>
      <div class="check">✓</div>
      <div class="sname">${b.name}</div>
      <div class="ssub">${b.subtitle}</div>
    `;
    setTintedPhoto(card.querySelector('img'), b, NATIVE_COLOR_HEX);
    card.addEventListener('click', ()=>{
      state.bodyId = b.id;
      ensureBodyDefaults(b);
      render();
    });
    grid.appendChild(card);
  });
}

// Perceived-brightness threshold for the selected-swatch checkmark: dark
// yarn colors (e.g. teal, plum, cherry red) get a white check; light ones
// get a dark check. Hardcoded rather than var(--ink), since the decision is
// about a fixed color's brightness, not the app's light/dark theme.
function checkColorFor(hex){
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  return brightness < 140 ? '#fff' : '#2B2130';
}

// Swatches this close to the panel's own paper-white background (e.g. White,
// Cream) nearly vanish against it, since their only edge is the
// thin var(--line) outline. Reuses the same perceived-brightness formula as
// checkColorFor, just against the opposite end of the range.
function isLowContrastSwatch(hex){
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  return brightness > 220;
}

// Same near-white problem as isLowContrastSwatch, but for a tinted reference
// photo sitting on var(--locked-wash): a cutout piece tinted White or
// Cream blends into that backdrop with nothing to mark its edge. Takes
// whatever resolveTintColors/resolveTintColorsFromResolved returned — a
// single hex, a [top, bottom] pair (either half possibly null for a
// native-color region), or null for an untinted native-color photo.
function isLowContrastTint(hexOrPair){
  if(!hexOrPair) return false;
  const hexes = Array.isArray(hexOrPair) ? hexOrPair : [hexOrPair];
  return hexes.some(h => h && isLowContrastSwatch(h));
}

// Many swatches (Seafoam, Pink, Lavender, Light Blue, Lime, ...) are too
// light to read as text on the panel's white background at their literal
// hex, even though they're not light enough to trip isLowContrastSwatch's
// near-white cutoff. Rather than falling back to plain ink at some single
// threshold, darkens the swatch itself in fixed steps until it's legible —
// scaling all three channels by the same factor moves only RGB lightness,
// so hue and saturation (and the color's identity) are preserved.
function readableSwatchTextColor(hex){
  let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const brightness = () => (r*299 + g*587 + b*114) / 1000;
  while(brightness() > 115){
    r = Math.round(r*0.9); g = Math.round(g*0.9); b = Math.round(b*0.9);
  }
  return `rgb(${r},${g},${b})`;
}

// compilePieceBlocks resolves __COLOR_START__/__COLOR_SWITCH__ into plain
// "(pink yarn)" / "(switch to pink yarn)" call-outs so the same text also
// works unstyled in the plain-text pattern export. The on-screen render only
// bolds and tints them with that color's own hex (darkened via
// readableSwatchTextColor for contrast), so a color change mid-round reads
// at a glance.
function highlightYarnColorCallouts(text){
  return text.replace(/\((?:switch to )?([a-z][a-z ]*?) yarn\)/g, (match, colorName)=>{
    const color = COLORS.find(c=>c.name.toLowerCase()===colorName);
    if(!color) return match;
    return `<strong style="color:${readableSwatchTextColor(color.hex)}">${match}</strong>`;
  });
}

// renderAddonsGrid and the pattern-head addon photos rebuild their <img>
// elements from scratch on every render() call, so a plain classList.toggle
// right after creation has no prior painted state to fade the CSS
// transition:background-color from — the element is born already in its
// final state. Replaying the element's own state from before the rebuild,
// forcing a layout so the browser commits it, then applying the real target
// state gives the transition a starting point to animate from even though
// the node itself is new.
function applyLowContrastFade(imgEl, isLow, prevLow){
  if(prevLow === undefined || prevLow === isLow){
    imgEl.classList.toggle('low-contrast-photo', isLow);
    return;
  }
  imgEl.classList.toggle('low-contrast-photo', prevLow);
  imgEl.offsetHeight;
  imgEl.classList.toggle('low-contrast-photo', isLow);
}

function buildSwatchRow(container, currentIdx, onSelect){
  container.innerHTML='';
  COLORS.forEach((c,i)=>{
    const s = el('button','swatch');
    s.type='button';
    s.style.background = c.hex;
    s.style.setProperty('--check-color', checkColorFor(c.hex));
    s.title = c.name;
    if(currentIdx===i) s.classList.add('selected');
    s.addEventListener('click', (e)=>{ e.stopPropagation(); onSelect(i); render(); });
    container.appendChild(s);
  });
}

function ensureStore(container, key){
  if(!container[key]) container[key] = {};
  return container[key];
}
function colorIdxFromStore(store, part){
  return (store[part.key] !== undefined) ? store[part.key] : part.defaultColorIdx;
}
function resolvePieceColors(piece, store){
  return piece.colorParts.map(part => COLORS[colorIdxFromStore(store, part)]);
}
// Walks a piece's (a body, or a wing style) instruction blocks and resolves
// them against the currently chosen colors — this is what lets one piece
// definition support any number of color parts: a single-color egg, a
// two-tone peanut with an invisible join, or a two-tone wing where the
// color switch happens inline, mid-round.
function compilePieceBlocks(piece, store){
  const colors = resolvePieceColors(piece, store);
  // Only meaningful for a two-tone piece: if both color parts were set to the
  // same yarn, there's no actual color change to call out mid-round.
  const colorsMatch = piece.colorParts.length===2 && colors[0]===colors[1];
  const segments = [];
  piece.blocks.forEach(block=>{
    if(block.type==='rounds'){
      const rows = block.rows.map(r=>{
        if(colorsMatch && r.length>3) return [r[0], r[3], r[2]];
        let instr = r[1];
        instr = instr.replace('__COLOR_START__', `(${colors[block.part].name.toLowerCase()} yarn)`);
        instr = instr.replace('__COLOR_SWITCH__', `(switch to ${colors[block.part].name.toLowerCase()} yarn)`);
        instr = instr.replace(/__COLOR(\d)__/g, (_, n) => colors[Number(n)].name.toLowerCase());
        return [r[0], instr, r[2]];
      });
      segments.push({kind:'table', rows});
    } else if(block.type==='join'){
      const toColor = colors[block.toPart];
      segments.push({kind:'note', text:`Invisible fasten off. Make a slip knot with your ${toColor.name.toLowerCase()} yarn and sl st join to the stitch where you fastened off.`});
    } else if(block.type==='note'){
      if(block.whenColorsDiffer && colorsMatch) return;
      segments.push({kind:'note', text: block.text});
    }
  });
  return { colors, segments };
}

// ---------- Color Mapper: per-stitch color injection into a body's rounds ----------
// A body's rounds text is built from just three stitch primitives — sc
// (1 previous st -> 1 new st), inc (1 -> 2), dec (2 -> 1) — combined with
// plain comma clauses and "[…] x N" (optionally nested "(…) x N") repeat
// groups. That's a tight enough grammar that a real per-stitch color map
// from the Color Mapper can be spliced back into the exact instruction
// text a round already has, rather than replacing it with a generic
// round-by-round summary.
const CM_VERB_WORD = {sc:'sc', inc:'inc', dec:'dec'};
const CM_SKIP_LEAD = Symbol('cm-skip-lead'); // the round right after a `join` block never gets its own leading call-out — the join's own note text already announces the incoming color
let cmRepCounter = 0; // unique id source for cmParseClause's repeat-group tagging, see cmRep below

function cmSplitTopLevel(text){
  const parts = [];
  let depth = 0, start = 0;
  for(let i=0;i<text.length;i++){
    const c = text[i];
    if(c==='['||c==='(') depth++;
    else if(c===']'||c===')') depth--;
    else if(c===',' && depth===0){ parts.push(text.slice(start,i)); start=i+1; }
  }
  parts.push(text.slice(start));
  return parts.map(s=>s.trim()).filter(Boolean);
}
function cmParseClauseList(text){
  const ops = [];
  cmSplitTopLevel(text).forEach(clause => ops.push(...cmParseClause(clause)));
  return ops;
}
function cmParseClause(clause){
  let m = clause.match(/^\[(.+)\]\s*x\s*(\d+)$/) || clause.match(/^\((.+)\)\s*x\s*(\d+)$/);
  if(m){
    const inner = cmParseClauseList(m[1]);
    const times = parseInt(m[2],10);
    const id = cmRepCounter++;
    const result = [];
    // Each op remembers which repeat group it came from (id), which
    // iteration of that group (iter, 0-based), and its position within one
    // iteration (posInIter) — cmRenderOpsAsClauses uses this to recognize
    // when a run of same-color ops still forms N whole iterations of the
    // original cycle, so it can render "[…]xN" instead of spelling every
    // iteration out, while a color change that lands mid-iteration still
    // falls back to spelling that iteration out (see cmColorRuns, which
    // drops this tag off any op a color boundary splits).
    for(let k=0;k<times;k++){
      inner.forEach((op,posInIter) => result.push({...op, cmRep:{id, iter:k, len:inner.length, posInIter}}));
    }
    return result;
  }
  m = clause.match(/^(\d+)\s*(sc|inc|dec)$/);
  if(m) return Array.from({length:parseInt(m[1],10)}, ()=>({type:m[2]}));
  m = clause.match(/^(sc|inc|dec)$/);
  if(m) return [{type:m[1]}];
  throw new Error(`Color Mapper: unrecognized stitch clause "${clause}"`);
}

// Parses a body round's raw instruction text (the same text compilePieceBlocks
// would otherwise resolve __COLOR_START__/__COLOR_SWITCH__ tokens in) into a
// flat sequence of {type, label?} stitch primitives, plus any non-stitch
// framing the row also carries: the round-1 magic-loop-start phrasing, the
// Peanut round-11 "resume after the join" phrasing, and a trailing
// back/front-loop-only annotation. The raw color tokens are stripped — a
// custom color map replaces the callouts they would have produced.
function parseRowOps(rawText){
  let text = rawText.replace(/^__COLOR_START__\s*/, '').replace(/^__COLOR_SWITCH__\s*/, '');
  text = text.replace(/__COLOR\d+__/g, 'working');

  const cutMatch = text.match(/^(.*?)\.\s*Cut the working yarn\.$/);
  if(cutMatch) text = cutMatch[1];

  let suffix = '';
  const bloMatch = text.match(/^(.*?),\s*(working in the (?:back|front) loops only \([A-Z]+\))$/);
  if(bloMatch){ text = bloMatch[1]; suffix = ', ' + bloMatch[2]; }

  const magicMatch = text.match(/^start\s+(\d+)\s+sc in a magic loop$/);
  if(magicMatch){
    return { ops: Array.from({length:parseInt(magicMatch[1],10)}, ()=>({type:'sc'})), suffix, magicLoopStart:true };
  }

  const joinMatch = text.match(/^inc into the same stitch as your sl st join,\s*(\d+)\s*inc$/);
  if(joinMatch){
    const ops = [{type:'inc', label:'inc into the same stitch as your sl st join'}];
    for(let k=0;k<parseInt(joinMatch[1],10);k++) ops.push({type:'inc'});
    return { ops, suffix, magicLoopStart:false };
  }

  return { ops: cmParseClauseList(text), suffix, magicLoopStart:false };
}

function cmOpsToPositions(ops){
  let pos = 0;
  return ops.map(op=>{
    const width = op.type==='inc' ? 2 : 1;
    const posRange = [pos, pos+width-1];
    pos += width;
    return { ...op, posRange };
  });
}
// Starting at ops[i] (the first position of one of its repeat group's
// iterations), counts how many WHOLE consecutive iterations of that same
// group follow with no gaps, label, or type mismatch — i.e. how many times
// the color map left that cycle fully intact and fully within this same
// color run. Returns 0 if ops[i] isn't cleanly "iteration N, position 0" of
// a repeat group at all.
function cmCountWholeIterations(ops, i){
  const rep = ops[i] && ops[i].cmRep;
  if(!rep || rep.posInIter !== 0) return 0;
  const template = ops.slice(i, i+rep.len).map(o=>o && o.type);
  let n = 0, j = i;
  while(j + rep.len <= ops.length){
    let ok = true;
    for(let k=0; k<rep.len; k++){
      const o = ops[j+k];
      if(!o || o.label || o.type !== template[k] || !o.cmRep ||
         o.cmRep.id !== rep.id || o.cmRep.iter !== rep.iter+n || o.cmRep.posInIter !== k){
        ok = false; break;
      }
    }
    if(!ok) break;
    n++; j += rep.len;
  }
  return n;
}

// Renders a run of same-color ops as instruction clauses. Where the color
// map left a "[…] x N" repeat group's cycle fully untouched for two or more
// consecutive iterations, that stretch is rendered back as "[…]xN" instead
// of spelling every iteration out — mirroring how the source pattern itself
// would write it. Any op a color change split off from its cycle (see
// cmColorRuns) simply carries no repeat tag, so it always falls through to
// the plain same-type collapsing below.
function cmRenderOpsAsClauses(ops){
  const clauses = [];
  let i = 0;
  while(i < ops.length){
    const op = ops[i];
    if(op.label){ clauses.push(op.label); i++; continue; }
    const n = cmCountWholeIterations(ops, i);
    if(n >= 2){
      const rep = op.cmRep;
      const cycleOps = ops.slice(i, i+rep.len).map(o=>({type:o.type}));
      clauses.push(`[${cmRenderOpsAsClauses(cycleOps)}]x${n}`);
      i += rep.len*n;
      continue;
    }
    let j = i;
    while(j < ops.length && ops[j].type===op.type && !ops[j].label) j++;
    const n2 = j - i;
    clauses.push(n2===1 ? CM_VERB_WORD[op.type] : `${n2} ${CM_VERB_WORD[op.type]}`);
    i = j;
  }
  return clauses.join(', ');
}
// Groups ops into runs of consecutive same-color stitches. colorIdxPerStitch
// has one entry per FINAL stitch of the round; an `inc` op spans two of
// those entries, so a color boundary landing between them decomposes that
// one inc into the two single stitches it actually produces.
function cmColorRuns(ops, colorIdxPerStitch){
  const expanded = [];
  cmOpsToPositions(ops).forEach(op=>{
    const [a,b] = op.posRange;
    if(a===b){ expanded.push({type:op.type, color:colorIdxPerStitch[a], label:op.label, cmRep:op.cmRep}); return; }
    const c0 = colorIdxPerStitch[a], c1 = colorIdxPerStitch[b];
    if(c0===c1){ expanded.push({type:'inc', color:c0, label:op.label, cmRep:op.cmRep}); return; }
    // A color boundary landing inside this inc splits it into the two
    // single stitches it actually produces — that stitch is no longer a
    // whole, untouched iteration of whatever repeat group it came from, so
    // it's deliberately left untagged rather than carrying op.cmRep forward.
    expanded.push({type:'sc', color:c0, label:op.label});
    expanded.push({type:'sc', color:c1, label:'sc in the same st'});
  });
  const runs = [];
  expanded.forEach(op=>{
    const last = runs[runs.length-1];
    if(last && last.color===op.color) last.ops.push(op);
    else runs.push({ color: op.color, ops:[op] });
  });
  return runs;
}
// Renders one round's colored instruction text. `leadColor` is whatever
// color the piece was already working in — a run only gets a
// "(…yarn)"/"(switch to …yarn)" call-out when its color actually differs
// from that, so a round that continues the established color reads exactly
// like it would with no custom map at all.
function renderColoredRow(parsed, colorIdxPerStitch, colorNames, leadColor){
  const runs = cmColorRuns(parsed.ops, colorIdxPerStitch);
  const pieces = runs.map((run, ri)=>{
    let clauseText = cmRenderOpsAsClauses(run.ops);
    if(ri===0 && parsed.magicLoopStart) clauseText = `start ${clauseText} in a magic loop`;
    const needsCallout = ri > 0 || (leadColor !== CM_SKIP_LEAD && leadColor !== run.color);
    if(!needsCallout) return clauseText;
    const label = colorNames[run.color].toLowerCase();
    const callout = (ri===0 && leadColor==null) ? `(${label} yarn)` : `(switch to ${label} yarn)`;
    return `${callout} ${clauseText}`;
  });
  const endColor = runs.length ? runs[runs.length-1].color : leadColor;
  return { text: pieces.join(', ') + (parsed.suffix || ''), endColor };
}

function cmExpandRoundLabel(label){
  const m = String(label).match(/^(\d+)[–-](\d+)$/);
  if(!m) return [parseInt(label,10)];
  const out = [];
  for(let n=parseInt(m[1],10); n<=parseInt(m[2],10); n++) out.push(n);
  return out;
}

// Flattens a body's `rounds` blocks into one entry per individual round (in
// body order, expanding merged ranges like '7–10'), giving each a stable
// `index` — this is what both the embedded Color Mapper's 3D round list and
// a saved custom color map (keyed by that same index) are built against,
// instead of a hand-maintained duplicate of each body's round counts.
function bodyRoundSpec(body){
  const list = [];
  const byNum = {};
  let pendingAfterJoin = false;
  body.blocks.forEach(block=>{
    if(block.type==='join'){ pendingAfterJoin = true; return; }
    if(block.type!=='rounds') return;
    block.rows.forEach((r, rowIdx)=>{
      cmExpandRoundLabel(r[0]).forEach((n, i)=>{
        const isFirst = rowIdx===0 && i===0 && pendingAfterJoin;
        const entry = { num:n, index:list.length, count:parseInt(r[2],10), baseText:r[1], afterJoin:isFirst };
        list.push(entry);
        byNum[n] = entry;
        if(isFirst) pendingAfterJoin = false;
      });
    });
  });
  return { list, byNum };
}

function cmDistinctColorsUsed(customMap){
  const seen = new Set();
  const colors = [];
  customMap.rounds.forEach(roundColors => roundColors.forEach(idx=>{
    if(idx!=null && !seen.has(idx)){ seen.add(idx); colors.push(COLORS[idx]); }
  }));
  return colors;
}

function formatColorNameList(names){
  if(names.length <= 2) return names.join(' and ');
  return `${names.slice(0,-1).join(', ')}, and ${names[names.length-1]}`;
}

// Rewrites a body's `rounds` blocks with a custom per-stitch color map
// spliced in, in place of the ordinary single/dual-swatch token
// substitution compilePieceBlocks performs. Only a round whose coloring
// actually changes gets rewritten — one that simply continues in the color
// already established is left exactly as written today, brackets and all.
function compileBodySegmentsWithCustomColors(body, customMap){
  const spec = bodyRoundSpec(body);
  const colorNames = COLORS.map(c=>c.name);
  const colorState = { leadColor: null };
  const segments = [];

  body.blocks.forEach(block=>{
    if(block.type==='rounds'){
      const rows = [];
      block.rows.forEach(r=>{
        const nums = cmExpandRoundLabel(r[0]);
        const hasColorToken = /__COLOR/.test(r[1]);
        const perRoundColors = nums.map(n => customMap.rounds[spec.byNum[n].index]);
        const allMatchLead = perRoundColors.every(cols => cols.every(c=>c===cols[0]) && cols[0]===colorState.leadColor);
        if(allMatchLead && !hasColorToken){
          rows.push([r[0], r[1], r[2]]);
          return;
        }
        nums.forEach(n=>{
          const entry = spec.byNum[n];
          const stitchColors = customMap.rounds[entry.index];
          const parsed = parseRowOps(entry.baseText);
          const lead = entry.afterJoin ? CM_SKIP_LEAD : colorState.leadColor;
          const { text, endColor } = renderColoredRow(parsed, stitchColors, colorNames, lead);
          rows.push([String(n), text, String(stitchColors.length)]);
          colorState.leadColor = endColor;
        });
      });
      segments.push({kind:'table', rows});
    } else if(block.type==='join'){
      let toColorIdx = null;
      const blockIdx = body.blocks.indexOf(block);
      for(let i=blockIdx+1; i<body.blocks.length; i++){
        const nb = body.blocks[i];
        if(nb.type==='rounds'){
          const firstNum = cmExpandRoundLabel(nb.rows[0][0])[0];
          toColorIdx = customMap.rounds[spec.byNum[firstNum].index][0];
          break;
        }
      }
      const toName = toColorIdx==null ? colorNames[0] : colorNames[toColorIdx];
      segments.push({kind:'note', text:`Invisible fasten off. Make a slip knot with your ${toName.toLowerCase()} yarn and sl st join to the stitch where you fastened off.`});
    } else if(block.type==='note'){
      if(block.whenColorsDiffer && cmDistinctColorsUsed(customMap).length < 2) return;
      segments.push({kind:'note', text: block.text});
    }
  });
  return segments;
}

// Custom map can go stale if a body's own round structure ever changes
// (round count, or a round's stitch count) after the map was saved.
function customColorMapMatchesBody(body, customMap){
  if(!customMap || !Array.isArray(customMap.rounds)) return false;
  const spec = bodyRoundSpec(body);
  if(customMap.rounds.length !== spec.list.length) return false;
  return spec.list.every(entry => (customMap.rounds[entry.index]||[]).length === entry.count);
}

// compilePieceBlocks with a custom color map spliced in for the body, when
// one exists and still matches that body's current round structure.
function compileBody(body, bodyStore){
  const customMap = state.customColorMaps[body.id];
  if(customMap && customColorMapMatchesBody(body, customMap)){
    return { colors: cmDistinctColorsUsed(customMap), segments: compileBodySegmentsWithCustomColors(body, customMap) };
  }
  return compilePieceBlocks(body, bodyStore);
}

function ensureBodyDefaults(body){
  const store = ensureStore(state.colors, body.id);
  body.colorParts.forEach(part=>{
    if(store[part.key]===undefined) store[part.key] = part.defaultColorIdx;
  });
  return store;
}
// A style's single "main" color defaults to match the body's main color
// (so a fresh piece looks intentional out of the gate); a style with more
// than one color part (like Flame Wings' base + tips) uses its own named
// defaults instead, since those are a deliberate pair.
function ensureStyleDefaults(body, style, addonState){
  const store = ensureStore(addonState.byStyle, style.id);
  style.colorParts.forEach(part=>{
    if(store[part.key]===undefined){
      if(style.colorParts.length===1 && part.key==='main' && body){
        const bodyStore = ensureStore(state.colors, body.id);
        const bodyMainPart = body.colorParts.find(p=>p.key==='main') || body.colorParts[0];
        store[part.key] = colorIdxFromStore(bodyStore, bodyMainPart);
      } else {
        store[part.key] = part.defaultColorIdx;
      }
    }
  });
  return store;
}

function renderAddonsGrid(body){
  const grid = document.getElementById('addonGrid');

  // Captured before the grid is wiped, keyed by addon so a color change on
  // one addon doesn't get paired with a stale index if another addon's
  // on/off state also changed this render — see applyLowContrastFade.
  const prevLowByKey = {};
  ADDONS.forEach(addon=>{
    const prevWrap = grid.querySelector(`.addon-wrap[data-addon-key="${addon.key}"]`);
    const prevImg = prevWrap && prevWrap.querySelector('.addon-thumb-photo, .body-color-preview');
    if(prevImg) prevLowByKey[addon.key] = prevImg.classList.contains('low-contrast-photo');
  });
  grid.innerHTML='';

  ADDONS.forEach(addon=>{
    const addonState = ensureAddonState(addon.key);
    const wrap = el('div','addon-wrap' + (addonState.on ? ' on' : ''));
    wrap.dataset.addonKey = addon.key;
    // Attached to the live grid immediately, before its photo <img>s are
    // built and their fade class applied — applyLowContrastFade's forced
    // reflow only commits a paintable style (giving the transition a start
    // point) when the element is already connected to the document.
    grid.appendChild(wrap);
    const activeStyle = addonState.styleId ? addon.styles.find(s=>s.id===addonState.styleId) : null;
    const isMulti = addon.styles.length > 1;
    const hasPhoto = !!(addonState.on && activeStyle && activeStyle.photo);

    function toggleAddon(){
      if(!body) return;
      addonState.on = !addonState.on;
      if(addonState.on){
        if(!addonState.styleId) addonState.styleId = addon.styles[0].id;
        ensureStyleDefaults(body, addon.styles.find(s=>s.id===addonState.styleId), addonState);
      }
      render();
    }

    // With a photo, a single-style piece gets a fixed-size thumbnail (same
    // footprint as a shape-selector card) plus a side column for its name.
    // A multi-style piece instead falls through to the small label tile
    // here — its full-width photo lives in the enlarged preview below the
    // style-picker grid further down, not up in this toggle tile.
    let panelSide = null;
    if(hasPhoto && !isMulti){
      const panel = el('div','addon-panel');
      panel.innerHTML = `
        <button type="button" class="addon-photo-btn">
          <div class="addon-check">✓</div>
          <img class="addon-thumb-photo" alt="${activeStyle.name} reference photo">
        </button>
        <div class="addon-panel-side">
          <button type="button" class="addon-head-btn">
            <div>
              <div class="addon-label">${addon.label}</div>
              <div class="addon-note">${activeStyle.name}</div>
            </div>
            <div class="toggle-switch on"></div>
          </button>
        </div>
      `;
      panel.querySelector('.addon-photo-btn').addEventListener('click', toggleAddon);
      panel.querySelector('.addon-head-btn').addEventListener('click', toggleAddon);
      const thumbImg = panel.querySelector('.addon-thumb-photo');
      const thumbTint = resolveTintColors(activeStyle, ensureStyleDefaults(body, activeStyle, addonState));
      if(thumbTint) setTintedPhoto(thumbImg, activeStyle, thumbTint);
      else thumbImg.src = activeStyle.photo;
      panelSide = panel.querySelector('.addon-panel-side');
      wrap.appendChild(panel);
      // Applied only once thumbImg is connected (wrap is already live in
      // grid) — applyLowContrastFade's forced reflow needs a connected node
      // to commit a real "before" state for the transition to fade from.
      applyLowContrastFade(thumbImg, isLowContrastTint(thumbTint), prevLowByKey[addon.key]);
    } else if(isMulti && addonState.on){
      // Label-only header — the small picker grid lands right below it, and
      // the full-width photo (satisfying the "photo, not a badge" rule) is
      // the enlarged preview further down, not this header.
      const panel = el('div','addon-panel multi');
      panel.innerHTML = `
        <button type="button" class="addon-head-btn">
          <div>
            <div class="addon-label">${addon.label}</div>
            <div class="addon-note">${activeStyle.name}</div>
          </div>
          <div class="toggle-switch on"></div>
        </button>
      `;
      panel.querySelector('.addon-head-btn').addEventListener('click', toggleAddon);
      panelSide = panel;
      wrap.appendChild(panel);
    } else {
      const btn = el('button','addon' + (addonState.on ? ' on' : ''));
      btn.type = 'button';
      btn.innerHTML = `
        <div class="addon-thumb">${addon.emptyIcon}</div>
        <div>
          <div class="addon-label">${addon.label}</div>
          <div class="addon-note">${addonState.on && activeStyle ? activeStyle.name : addon.chooseNote}</div>
        </div>
        <div class="toggle-switch${addonState.on ? ' on' : ''}"></div>
      `;
      btn.addEventListener('click', toggleAddon);
      wrap.appendChild(btn);
    }

    if(addonState.on){
      const style = addon.styles.find(s=>s.id===addonState.styleId) || addon.styles[0];
      const store = ensureStyleDefaults(body, style, addonState);

      if(isMulti){
        // Small picker grid — same footprint as the body-shape grid, so it
        // scales by wrapping to more columns instead of growing an
        // ever-taller pill list.
        const styleGrid = el('div','shape-grid piece-picker');
        addon.styles.forEach(s=>{
          const card = el('button','shape-card' + (s.id===style.id ? ' selected' : ''));
          card.type = 'button';
          card.innerHTML = `
            <img alt="${s.name} reference photo"${s.cutout ? ' class="is-cutout"' : ''}>
            <div class="check">✓</div>
            <div class="sname">${s.name}</div>
          `;
          if(s.photo) setTintedPhoto(card.querySelector('img'), s, NATIVE_COLOR_HEX);
          card.addEventListener('click', (e)=>{
            e.stopPropagation();
            addonState.styleId = s.id;
            ensureStyleDefaults(body, s, addonState);
            render();
          });
          styleGrid.appendChild(card);
        });
        panelSide.appendChild(styleGrid);

        // Enlarged live-tinted preview of the selected style sits next to
        // its swatches, below the grid — the same body-color-section
        // treatment the body shape's own color step uses.
        const box = el('div','addon-color');
        const colorSection = el('div','body-color-section');
        colorSection.innerHTML = `
          <button type="button" class="addon-photo-btn">
            <img class="body-color-preview" alt="${style.name} reference photo">
          </button>
          <div class="color-picker-inline"></div>
        `;
        colorSection.querySelector('.addon-photo-btn').addEventListener('click', toggleAddon);
        const previewImg = colorSection.querySelector('.body-color-preview');
        previewImg.classList.toggle('is-cutout', !!style.cutout);
        const previewTint = resolveTintColors(style, store);
        if(previewTint) setTintedPhoto(previewImg, style, previewTint);
        else { clearTintTarget(previewImg); previewImg.src = style.photo; }

        const picker = colorSection.querySelector('.color-picker-inline');
        style.colorParts.forEach(part=>{
          const group = el('div','cp-group');
          group.innerHTML = `<div class="cp-label">${part.label}</div><div class="swatches swatches-sm"></div><div class="color-name">Working in <b></b></div>`;
          picker.appendChild(group);
          const idx = colorIdxFromStore(store, part);
          buildSwatchRow(group.querySelector('.swatches'), idx, (i)=>{ store[part.key] = i; });
          group.querySelector('.color-name b').textContent = COLORS[idx].name;
        });
        box.appendChild(colorSection);
        wrap.appendChild(box);
        // Applied only once previewImg is connected (wrap is already live in
        // grid) — applyLowContrastFade's forced reflow needs a connected node
        // to commit a real "before" state for the transition to fade from.
        applyLowContrastFade(previewImg, isLowContrastTint(previewTint), prevLowByKey[addon.key]);
      } else {
        const box = el('div','addon-color');
        style.colorParts.forEach(part=>{
          const group = el('div','cp-group');
          group.innerHTML = `<div class="cp-label">${part.label}</div><div class="swatches swatches-sm"></div>`;
          box.appendChild(group);
          const idx = colorIdxFromStore(store, part);
          buildSwatchRow(group.querySelector('.swatches'), idx, (i)=>{ store[part.key] = i; });
        });
        wrap.appendChild(box);
      }
    }
  });

  LOCKED_ADDONS.forEach(a=>{
    const tile = el('div','addon locked');
    tile.innerHTML = `
      <div class="addon-thumb">${a.icon}</div>
      <div>
        <div class="addon-label">${a.label}</div>
        <div class="addon-note">not in library yet</div>
      </div>
      <div class="addon-thumb" style="background:transparent;font-size:14px;">🔒</div>
    `;
    grid.appendChild(tile);
  });
}

function buildPatternTitle(body){
  return state.patternTitle.trim() || body.name;
}

function slugify(text){
  return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'pattern';
}

function buildPatternText(body){
  const bodyStore = ensureBodyDefaults(body);
  const { colors, segments } = compileBody(body, bodyStore);

  const activeAddons = ADDONS.map(addon=>{
    const addonState = ensureAddonState(addon.key);
    if(!addonState.on) return null;
    const style = addon.styles.find(s=>s.id===addonState.styleId) || addon.styles[0];
    const store = ensureStyleDefaults(body, style, addonState);
    const compiled = compilePieceBlocks(style, store);
    return { addon, style, colors: compiled.colors, segments: compiled.segments };
  }).filter(Boolean);

  const lines = [];
  lines.push(`${buildPatternTitle(body).toUpperCase()} AMIGURUMI`);
  lines.push('');
  lines.push('MATERIALS');
  const usedColors = [];
  const seenColorHexes = new Set();
  const addUsedColor = c => { if(!seenColorHexes.has(c.hex)){ seenColorHexes.add(c.hex); usedColors.push(c); } };
  colors.forEach(addUsedColor);
  activeAddons.forEach(a => a.colors.forEach(addUsedColor));
  const colorList = formatColorNameList(usedColors.map(c=>c.name));
  lines.push(`- Beginner Yarn in ${colorList}`);
  lines.push('');
  lines.push('* Cuddle Craft Tube Yarn by Loops & Threads');
  lines.push('* Easy Peasy Yarn by The Woobles');
  lines.push('* "Beginner Yarn" on Amazon');
  lines.push('');
  lines.push('- 4.00mm Crochet hook');
  lines.push('- Stuffing');
  lines.push('- 2 8mm safety eyes');
  lines.push('- Stitch marker');
  lines.push('- Yarn needle');
  lines.push('');
  lines.push('HEAD & BODY');
  lines.push(`With ${formatColorNameList(colors.map(c=>c.name.toLowerCase()))} yarn.`);
  lines.push('');
  segments.forEach(seg=>{
    if(seg.kind==='table'){
      seg.rows.forEach(r=>{ lines.push(`Rnd ${r[0]}.`.padEnd(12) + `${r[1]}` + (r[2] ? `  (${r[2]})` : '')); });
      lines.push('');
    } else {
      lines.push(seg.text);
      lines.push('');
    }
  });

  activeAddons.forEach(a=>{
    const makeSuffix = a.style.makeCount && a.style.makeCount > 1 ? ` (make ${a.style.makeCount})` : '';
    lines.push(`${a.style.name.toUpperCase()}${makeSuffix}`);
    lines.push(`With ${a.colors.map(c=>c.name.toLowerCase()).join(' and ')} yarn.`);
    lines.push('');
    a.segments.forEach(seg=>{
      if(seg.kind==='table'){
        seg.rows.forEach(r=>{ lines.push(`Rnd ${r[0]}.`.padEnd(12) + `${r[1]}` + (r[2] ? `  (${r[2]})` : '')); });
        lines.push('');
      } else {
        lines.push(seg.text);
        lines.push('');
      }
    });
  });

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

// --- Google Doc export ---
// One-time setup for GOOGLE_CLIENT_ID happens in Google Cloud Console (OAuth
// consent screen + Web application client, authorized origin
// https://ianaharsono.github.io) — see CLAUDE.md. Paste the generated Client
// ID below; it's a public identifier, not a secret, and is safe to commit.
const GOOGLE_CLIENT_ID = '329178254600-sagu8ifkre833g8lql8a198lfcqfgi4c.apps.googleusercontent.com';
const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.file';
const STITCH_BUILDER_GH_PAGES_URL = 'https://ianaharsono.github.io/stitch-builder/builder_final.html';
const STITCH_BUILDER_GH_PAGES_ORIGIN = 'https://ianaharsono.github.io';

let tokenClient = null;
let accessToken = null; // in-memory only, never persisted to localStorage

function ensureTokenClient(){
  if(tokenClient) return tokenClient;
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: DRIVE_SCOPE,
    callback: () => {}, // overridden per-call below
    error_callback: () => {}, // overridden per-call below — covers e.g. a blocked popup, which never reaches `callback`
  });
  return tokenClient;
}

function getAccessToken(){
  return new Promise((resolve, reject) => {
    const client = ensureTokenClient();
    client.callback = (resp) => {
      if(resp.error){ reject(resp); return; }
      accessToken = resp.access_token;
      resolve(accessToken);
    };
    client.error_callback = (err) => { reject(err); };
    // 'consent' first time, silent re-use afterwards within the token's lifetime (~1hr)
    client.requestAccessToken({ prompt: accessToken ? '' : 'consent' });
  });
}

function escapeHtml(text){
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Static approximation of the hand-designed header/materials/abbreviations
// block from the live Google Doc template — only the title varies per
// pattern. Ask Iana to confirm this still matches
// https://docs.google.com/document/d/1W3pT68B1oajELq-SBQcD0YVuRKyr2SsrUa1kNDtdLSs/edit
// and adjust as needed.
function buildPatternDocHeaderHtml(title){
  return `
    <h1 style="font-family:Nunito, Arial, sans-serif;font-size:28px;font-weight:800;color:#2B2130;margin:0 0 4px 0;">${escapeHtml(title)}</h1>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#6B6072;margin:0 0 20px 0;">An amigurumi pattern designed by IanaStitchSquad</p>
    <h2 style="font-family:Nunito, Arial, sans-serif;font-size:16px;font-weight:800;color:#2B2130;margin:18px 0 8px 0;">Materials</h2>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">4.00mm crochet hook</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">Stuffing</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">2 8mm safety eyes</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">Stitch marker</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 20px 0;">Yarn needle</p>
    <h2 style="font-family:Nunito, Arial, sans-serif;font-size:16px;font-weight:800;color:#2B2130;margin:18px 0 8px 0;">Abbreviations</h2>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">sc — single crochet</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">inc — increase (2 sc in the same stitch)</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">dec — decrease (single crochet 2 stitches together)</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 4px 0;">st(s) — stitch(es)</p>
    <p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 20px 0;">rnd — round</p>
  `;
}

function buildPatternDocPieceHtml(heading, makeCount, colors, segments){
  const makeSuffix = makeCount && makeCount > 1 ? ` (make ${makeCount})` : '';
  const colorNames = formatColorNameList(colors.map(c=>c.name));
  let html = `<h2 style="font-family:Nunito, Arial, sans-serif;font-size:18px;font-weight:800;color:#2B2130;margin:22px 0 8px 0;">${escapeHtml(heading)}${escapeHtml(makeSuffix)}</h2>`;
  html += `<p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 10px 0;">📷&nbsp;&nbsp;With <b>${escapeHtml(colorNames)}</b> yarn.</p>`;
  segments.forEach(seg=>{
    if(seg.kind==='table'){
      seg.rows.forEach(r=>{
        html += `<p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;color:#2B2130;margin:0 0 6px 0;">`
          + `<span style="font-family:'JetBrains Mono','Courier New',monospace;font-weight:700;color:#C01F6B;">Rnd ${escapeHtml(r[0])}.</span>`
          + `&nbsp;&nbsp;${escapeHtml(r[1])}${r[2] ? '&nbsp;&nbsp;' : ''}`
          + (r[2] ? `<span style="font-family:'JetBrains Mono','Courier New',monospace;color:#6B6072;">(${escapeHtml(r[2])})</span>` : '')
          + `</p>`;
      });
    } else {
      html += `<p style="font-family:Nunito, Arial, sans-serif;font-size:12pt;font-style:italic;color:#2B2130;margin:2px 0 14px 0;">`
        + `<span style="color:#E63888;font-style:normal;">&#9679;</span>&nbsp;&nbsp;${escapeHtml(seg.text)}`
        + `</p>`;
    }
  });
  return html;
}

function buildPatternDocHtml(body){
  const bodyStore = ensureBodyDefaults(body);
  const { colors: bodyColors, segments } = compileBody(body, bodyStore);

  const activeAddons = ADDONS.map(addon=>{
    const addonState = ensureAddonState(addon.key);
    if(!addonState.on) return null;
    const style = addon.styles.find(s=>s.id===addonState.styleId) || addon.styles[0];
    const store = ensureStyleDefaults(body, style, addonState);
    const compiled = compilePieceBlocks(style, store);
    return { addon, style, colors: compiled.colors, segments: compiled.segments };
  }).filter(Boolean);

  let html = '<div>';
  html += buildPatternDocHeaderHtml(buildPatternTitle(body));
  html += buildPatternDocPieceHtml('Head & Body', 1, bodyColors, segments);
  activeAddons.forEach(a=>{
    html += buildPatternDocPieceHtml(a.style.docName || a.style.name, a.style.makeCount, a.colors, a.segments);
  });
  html += '</div>';
  return html;
}

async function exportPatternToGoogleDoc(body){
  const token = await getAccessToken();
  const title = buildPatternTitle(body) + ' — Amigurumi Pattern';
  const html = buildPatternDocHtml(body);

  const boundary = 'stitchbuilder-' + Math.random().toString(36).slice(2);
  const metadata = { name: title, mimeType: 'application/vnd.google-apps.document' };

  const bodyPayload = [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    'Content-Type: text/html; charset=UTF-8',
    '',
    html,
    `--${boundary}--`,
  ].join('\r\n');

  const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
    },
    body: bodyPayload,
  });

  if(!res.ok){
    const err = await res.text();
    throw new Error(`Drive upload failed (${res.status}): ${err}`);
  }

  const file = await res.json(); // { id, ... }
  const url = `https://docs.google.com/document/d/${file.id}/edit`;
  window.open(url, '_blank', 'noopener');
  return url;
}

function render(){
  saveState();

  // shape selection state — strictly shape selection, no color involved
  document.querySelectorAll('#shapeGrid .shape-card').forEach((card,i)=>{
    card.classList.toggle('selected', BODIES[i].id===state.bodyId);
  });

  const body = BODIES.find(b=>b.id===state.bodyId);

  // color card: an enlarged, live-tinted repeat of the selected shape sits
  // next to its swatches, so a color click shows up right there instead of
  // requiring a scroll down to the pattern panel.
  const bodyColorCard = document.getElementById('bodyColorCard');
  const bodyPicker = document.getElementById('bodyColorPicker');
  if(body){
    bodyColorCard.hidden = false;
    document.getElementById('bodyColorCardTitle').textContent = `Pick your yarn color for the ${body.name}`;
    const bodyStore = ensureBodyDefaults(body);

    const previewImg = document.getElementById('bodyColorPreview');
    previewImg.classList.toggle('is-cutout', !!body.cutout);
    const previewTint = resolveTintColors(body, bodyStore);
    if(previewTint) setTintedPhoto(previewImg, body, previewTint);
    else { clearTintTarget(previewImg); previewImg.src = body.photo; }
    previewImg.classList.toggle('low-contrast-photo', isLowContrastTint(previewTint));

    let pickerHtml = '';
    body.colorParts.forEach((part,pi)=>{
      pickerHtml += `<div class="cp-group"><div class="cp-label">${part.label}</div><div class="swatches swatches-sm" id="bodySwatch_${pi}"></div><div class="color-name">Working in <b id="bodyColorName_${pi}">—</b></div></div>`;
    });
    bodyPicker.innerHTML = pickerHtml;
    body.colorParts.forEach((part,pi)=>{
      const idx = colorIdxFromStore(bodyStore, part);
      buildSwatchRow(document.getElementById(`bodySwatch_${pi}`), idx, (i)=>{ bodyStore[part.key] = i; });
      document.getElementById(`bodyColorName_${pi}`).textContent = COLORS[idx].name;
    });

    const launchColorMapperBtn = document.getElementById('launchColorMapperBtn');
    const clearColorMapperBtn = document.getElementById('clearColorMapperBtn');
    const existingMap = state.customColorMaps[body.id];
    const hasCustomMap = existingMap && customColorMapMatchesBody(body, existingMap);
    launchColorMapperBtn.textContent = hasCustomMap ? 'Edit custom colors in Color Mapper' : 'Launch Color Mapper';
    launchColorMapperBtn.onclick = ()=> ColorMapper.open(body, hasCustomMap ? existingMap : null);
    clearColorMapperBtn.hidden = !hasCustomMap;
    clearColorMapperBtn.onclick = ()=> clearCustomColorMap(body.id);
  } else {
    bodyColorCard.hidden = true;
  }

  renderAddonsGrid(body);
  document.querySelectorAll('#addonGrid .addon-wrap .addon').forEach(btn=>{
    btn.style.opacity = state.bodyId ? '1' : '0.55';
  });

  const anyAddonOn = ADDONS.some(addon=>ensureAddonState(addon.key).on);

  const clearBtn = document.getElementById('clearBtn');
  clearBtn.disabled = !(state.bodyId || anyAddonOn);
  clearBtn.onclick = ()=>{
    state.bodyId = null;
    state.colors = {};
    state.addons = {};
    render();
    showToast('Selection cleared');
  };

  // step progress
  document.querySelectorAll('.step-progress .dot').forEach(d=>{
    const step = Number(d.dataset.step);
    let on = false;
    if(step===1) on = !!state.bodyId;
    if(step===2) on = anyAddonOn;
    d.classList.toggle('on', on);
  });

  const photo = document.getElementById('patternPhoto');
  const placeholder = document.getElementById('patternPhotoPlaceholder');
  const photoLabel = document.getElementById('patternPhotoLabel');
  const addonPhotos = document.getElementById('addonPhotos');
  const meta = document.getElementById('patternMeta');
  const patternBody = document.getElementById('patternBody');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const exportDocBtn = document.getElementById('exportDocBtn');

  if(!body){
    photo.hidden = true; placeholder.style.display='grid'; photoLabel.textContent = ''; addonPhotos.innerHTML = '';
    meta.innerHTML = '';
    patternBody.innerHTML = '<div class="empty-state">Your assembled pattern will build itself here as you make choices on the left.</div>';
    copyBtn.disabled = true; downloadBtn.disabled = true; exportDocBtn.disabled = true;
    return;
  }

  const bodyStore = ensureBodyDefaults(body);
  const { colors: bodyColors, segments } = compileBody(body, bodyStore);

  const activeAddons = ADDONS.map(addon=>{
    const addonState = ensureAddonState(addon.key);
    if(!addonState.on) return null;
    const style = addon.styles.find(s=>s.id===addonState.styleId) || addon.styles[0];
    const store = ensureStyleDefaults(body, style, addonState);
    const compiled = compilePieceBlocks(style, store);
    return { addon, style, colors: compiled.colors, segments: compiled.segments };
  }).filter(Boolean);

  photo.hidden = false; placeholder.style.display='none';
  photoLabel.textContent = body.name;
  photo.classList.toggle('is-cutout', !!body.cutout);
  const bodyTint = resolveTintColorsFromResolved(body, bodyColors);
  if(bodyTint){
    setTintedPhoto(photo, body, bodyTint);
  } else {
    clearTintTarget(photo);
    photo.src = body.photo;
  }
  photo.classList.toggle('low-contrast-photo', isLowContrastTint(bodyTint));
  const photoAddons = activeAddons.filter(a=>a.style.photo);
  const prevAddonPhotoLowByKey = {};
  Array.from(addonPhotos.children).forEach(itemEl=>{
    const img = itemEl.querySelector('.pattern-photo');
    if(img) prevAddonPhotoLowByKey[itemEl.dataset.addonKey] = img.classList.contains('low-contrast-photo');
  });
  addonPhotos.innerHTML = photoAddons
    .map(a=>`<div class="addon-photo-item" data-addon-key="${a.addon.key}"><img class="pattern-photo${a.style.cutout ? ' is-cutout' : ''}" alt="${a.style.name} reference photo"><div class="pattern-photo-label">${a.style.name}</div></div>`)
    .join('');
  Array.from(addonPhotos.children).forEach((itemEl, i)=>{
    const a = photoAddons[i];
    const imgEl = itemEl.querySelector('img');
    const addonTint = resolveTintColorsFromResolved(a.style, a.colors);
    if(addonTint) setTintedPhoto(imgEl, a.style, addonTint);
    else imgEl.src = a.style.photo;
    applyLowContrastFade(imgEl, isLowContrastTint(addonTint), prevAddonPhotoLowByKey[a.addon.key]);
  });
  const allColors = [bodyColors, ...activeAddons.map(a=>a.colors)].flat();
  const seenHex = new Set();
  const uniqueColors = allColors.filter(c=>seenHex.has(c.hex) ? false : (seenHex.add(c.hex), true));
  meta.innerHTML = uniqueColors.map(c=>`<span><span class="meta-dot" style="background:${c.hex}"></span>${c.name}</span>`).join('');

  let html = '';
  html += `<div class="p-section"><h3>Head &amp; Body</h3><div class="p-hint" style="background:transparent;padding:0 0 8px;">With ${formatColorNameList(bodyColors.map(c=>c.name.toLowerCase()))} yarn.</div>`;
  segments.forEach(seg=>{
    if(seg.kind==='table'){
      html += `<table class="rounds">`;
      seg.rows.forEach(r=>{
        html += `<tr><td class="rnd">Rnd ${r[0]}</td><td>${highlightYarnColorCallouts(r[1])}</td><td class="count">${r[2] ? '('+r[2]+')' : ''}</td></tr>`;
      });
      html += `</table>`;
    } else {
      html += `<div class="finishing">${seg.text}</div>`;
    }
  });
  html += `</div>`;

  if(activeAddons.length){
    activeAddons.forEach(a=>{
      const makeBadge = a.style.makeCount && a.style.makeCount > 1 ? ` <span style="text-transform:none;font-weight:600;color:var(--ink-soft);font-size:0.8rem;">(make ${a.style.makeCount})</span>` : '';
      html += `<div class="p-section"><h3>${a.style.name}${makeBadge}</h3><div class="p-hint" style="background:transparent;padding:0 0 8px;">With ${a.colors.map(c=>c.name.toLowerCase()).join(' and ')} yarn.</div>`;
      a.segments.forEach(seg=>{
        if(seg.kind==='table'){
          html += `<table class="rounds">`;
          seg.rows.forEach(r=>{
            html += `<tr><td class="rnd">Rnd ${r[0]}</td><td>${highlightYarnColorCallouts(r[1])}</td><td class="count">${r[2] ? '('+r[2]+')' : ''}</td></tr>`;
          });
          html += `</table>`;
        } else {
          html += `<div class="finishing">${seg.text}</div>`;
        }
      });
      html += `</div>`;
    });
  } else {
    const pieceNames = ADDONS.map(a=>a.label);
    html += `<div class="p-section"><div class="p-hint">Add <b>${pieceNames.join('</b> or <b>')}</b> in step 2 — choose a style, then a color, and it joins this pattern.</div></div>`;
  }

  patternBody.innerHTML = html;
  copyBtn.disabled = false; downloadBtn.disabled = false; exportDocBtn.disabled = false;

  copyBtn.onclick = async ()=>{
    try{
      await navigator.clipboard.writeText(buildPatternText(body));
      showToast('Pattern copied');
    }catch(e){ showToast('Could not copy — select and copy manually'); }
  };
  downloadBtn.onclick = async ()=>{
    const txt = buildPatternText(body);
    if(!downloadsReady){
      showToast('Downloads unavailable here — use Copy pattern instead');
      return;
    }
    try{
      const downloads = await claude.use('downloads');
      if(!downloads){ showToast('Downloads unavailable here — use Copy pattern instead'); return; }
      await downloads.save({ filename:`${slugify(buildPatternTitle(body))}-amigurumi.txt`, data: txt });
      showToast('Saved');
    }catch(e){
      if(e && e.code === 'declined'){ /* viewer said no, stay quiet */ }
      else showToast('Could not save — try Copy pattern instead');
    }
  };
  exportDocBtn.onclick = async ()=>{
    // The Drive/OAuth calls below only work from the published GitHub Pages
    // origin (the one authorized in Google Cloud Console) — anywhere else
    // (the claude.ai Artifact preview, a local file, etc.) fetch is blocked
    // or unauthorized, so send the user to the live site instead.
    if(location.origin !== STITCH_BUILDER_GH_PAGES_ORIGIN){
      window.open(STITCH_BUILDER_GH_PAGES_URL, '_blank', 'noopener');
      showToast('Google Doc export only works on the published site — opening it now');
      return;
    }
    exportDocBtn.disabled = true;
    const original = exportDocBtn.textContent;
    exportDocBtn.textContent = 'Creating doc…';
    try{
      await exportPatternToGoogleDoc(body);
    }catch(e){
      console.error(e);
      showToast('Could not create the Google Doc — check the browser console for details');
    }finally{
      exportDocBtn.disabled = false;
      exportDocBtn.textContent = original;
    }
  };
}

let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 1800);
}

// ---------- Embedded Color Mapper modal ----------
// A trimmed, in-page copy of the standalone color-mapper.html's 3D paint
// engine, bound to whichever body is already selected: its round list is
// fixed to that body's real construction (from bodyRoundSpec) instead of
// freely editable, and "Apply Colors" hands the painted result straight to
// applyCustomColorMap below instead of just displaying a summary. The 3D
// scene/mesh-building/raycasting code mirrors color-mapper.html's own —
// there's no shared build step between the two HTML outputs in this
// project, so keep them in sync by hand if that engine ever changes.
const ColorMapper = (function(){
  const SHAPE_PRESETS = {
    chick:   {equator:0.50, pTop:2.0, pBottom:2.0, aspect:1.00},
    penguin: {equator:0.60, pTop:2.0, pBottom:2.2, aspect:1.20},
    peanut:  {equator:0.50, pTop:2.2, pBottom:2.2, aspect:1.35},
    pebble:  {equator:0.62, pTop:2.0, pBottom:2.8, aspect:0.70},
    horse:   {equator:0.58, pTop:1.6, pBottom:1.6, aspect:1.40},
    dome:    {equator:0.45, pTop:2.6, pBottom:1.8, aspect:0.85},
    snowman: {equator:0.50, pTop:1.7, pBottom:2.0, aspect:1.25},
    thimble: {equator:0.60, pTop:2.2, pBottom:3.5, aspect:1.30},
    dino:    {equator:0.50, pTop:1.9, pBottom:1.4, aspect:1.90},
  };
  const SEAM_ANGLE = 0;
  const STITCH_UNIT = 1;
  const HILITE_OFFSET = 0.035;
  const PROFILE_SUBSTEPS = 3;
  const CLICK_MOVE_THRESHOLD = 6;

  let body = null, spec = null, rounds = [], shape = null, selected = null;
  let activeTool = 'pencil'; // 'pencil' | 'rect' | 'circle' — the fill bucket is a one-shot action, not a persistent tool
  let scene, camera, renderer, controls, raycaster, mouse, initialized = false, staticWired = false;
  let bodyMesh=null, lineMesh=null, seamMesh=null, markerGroup=null, highlightMesh=null;
  let triToBlock=[], blockVertexOffset=[], blockCorners=[];
  let unsetColor=null, seamColor=null, startColor=null;
  let pointerDownPos = null, shapeDragStart = null;

  function makeRoundsFromSpec(existingMap){
    return spec.list.map(entry=>{
      const saved = existingMap && existingMap.rounds[entry.index];
      return { count: entry.count, colors: saved ? saved.slice() : Array(entry.count).fill(null) };
    });
  }

  function radiusFor(count){ return count * STITCH_UNIT / (2*Math.PI); }
  function profileRadius(v){
    const {equator, pTop, pBottom} = shape;
    if(v <= equator){
      const u = v/equator;
      return Math.pow(1 - Math.pow(1-u, pTop), 1/pTop);
    }
    const u = (v-equator)/(1-equator);
    return Math.pow(1 - Math.pow(u, pBottom), 1/pBottom);
  }
  function computeProfile(){
    let maxCount = 0;
    rounds.forEach(r=>{ if(r.count>maxCount) maxCount=r.count; });
    const maxR = radiusFor(maxCount);
    return { N: rounds.length, maxR, totalHeight: maxR*2*shape.aspect };
  }
  function blockColor(val){ return val==null ? unsetColor : new THREE.Color(COLORS[val].hex); }

  function initThree(){
    const canvas = document.getElementById('cmThreeCanvas');
    renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(38, 1, 0.05, 200);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x9a8f96, 0.95));
    const dir = new THREE.DirectionalLight(0xffffff, 0.55);
    dir.position.set(3,5,2);
    scene.add(dir);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 1;
    controls.maxDistance = 80;
    controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: null };
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const bodyStyle = getComputedStyle(document.body);
    unsetColor = new THREE.Color(bodyStyle.getPropertyValue('--locked').trim() || '#C9C0C6');
    seamColor = new THREE.Color(bodyStyle.getPropertyValue('--hot-pink').trim() || '#E63888');
    startColor = new THREE.Color(bodyStyle.getPropertyValue('--gold').trim() || '#E3A62B');

    resizeThree();
    window.addEventListener('resize', resizeThree);
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('contextmenu', e=>e.preventDefault());
    renderer.domElement.addEventListener('pointermove', onCanvasHover);
    renderer.domElement.addEventListener('pointerleave', ()=>setHover(null));
    document.getElementById('cmResetViewBtn').addEventListener('click', ()=>fitCamera(true));
    document.getElementById('cmResetFrontBtn').addEventListener('click', resetToFront);
    animate();
    initialized = true;
  }
  function resizeThree(){
    const wrap = document.getElementById('cmThreeWrap');
    const size = wrap.clientWidth || 1;
    renderer.setSize(size, size, false);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  }
  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  function resetToFront(){
    const camAngle = SEAM_ANGLE + Math.PI;
    const dx = camera.position.x - controls.target.x;
    const dz = camera.position.z - controls.target.z;
    const horiz = Math.hypot(dx, dz);
    camera.position.x = controls.target.x + horiz*Math.cos(camAngle);
    camera.position.z = controls.target.z + horiz*Math.sin(camAngle);
    controls.update();
  }
  function disposeMesh(){
    if(bodyMesh){ scene.remove(bodyMesh); bodyMesh.geometry.dispose(); bodyMesh.material.dispose(); bodyMesh=null; }
    if(lineMesh){ scene.remove(lineMesh); lineMesh.geometry.dispose(); lineMesh.material.dispose(); lineMesh=null; }
    if(seamMesh){ scene.remove(seamMesh); seamMesh.geometry.dispose(); seamMesh.material.dispose(); seamMesh=null; }
    if(markerGroup){
      scene.remove(markerGroup);
      const seen = new Set();
      markerGroup.traverse(o=>{
        if(o.geometry && !seen.has(o.geometry)){ o.geometry.dispose(); seen.add(o.geometry); }
        if(o.material && !seen.has(o.material)){ o.material.dispose(); seen.add(o.material); }
      });
      markerGroup = null;
    }
  }
  function buildMesh(opts){
    disposeMesh();
    triToBlock = [];
    blockVertexOffset = rounds.map(()=>[]);
    blockCorners = rounds.map(()=>[]);
    if(rounds.length===0){ if(opts&&opts.refit) fitCamera(true); return; }

    const {N, maxR, totalHeight} = computeProfile();
    const height = v => totalHeight * (1-v);
    const radius = v => maxR * profileRadius(v);
    const positions = [], colors = [], linePts = [];

    for(let ri=0; ri<N; ri++){
      const rnd = rounds[ri];
      const step = (Math.PI*2)/rnd.count;
      for(let bi=0; bi<rnd.count; bi++){
        const a0 = SEAM_ANGLE + bi*step;
        const a1 = SEAM_ANGLE + (bi+1)*step;
        const col = blockColor(rnd.colors[bi]);
        const vOffset = positions.length/3;
        for(let s=0; s<PROFILE_SUBSTEPS; s++){
          const v0 = (ri+s/PROFILE_SUBSTEPS)/N, v1 = (ri+(s+1)/PROFILE_SUBSTEPS)/N;
          const r0=radius(v0), r1=radius(v1), h0=height(v0), h1=height(v1);
          const bl=[r0*Math.cos(a0),h0,r0*Math.sin(a0)];
          const br=[r0*Math.cos(a1),h0,r0*Math.sin(a1)];
          const tr=[r1*Math.cos(a1),h1,r1*Math.sin(a1)];
          const tl=[r1*Math.cos(a0),h1,r1*Math.sin(a0)];
          positions.push(...bl,...br,...tr, ...bl,...tr,...tl);
          for(let k=0;k<6;k++) colors.push(col.r,col.g,col.b);
          triToBlock.push({ri,bi},{ri,bi});
          linePts.push(...bl,...tl);
          linePts.push(...tl,...tr);
        }
        blockVertexOffset[ri][bi] = {offset:vOffset, count:PROFILE_SUBSTEPS*6};
        const vLo=ri/N, vHi=(ri+1)/N;
        const rLo=radius(vLo), rHi=radius(vHi), hLo=height(vLo), hHi=height(vHi);
        blockCorners[ri][bi] = [
          [rLo*Math.cos(a0),hLo,rLo*Math.sin(a0)],
          [rLo*Math.cos(a1),hLo,rLo*Math.sin(a1)],
          [rHi*Math.cos(a1),hHi,rHi*Math.sin(a1)],
          [rHi*Math.cos(a0),hHi,rHi*Math.sin(a0)],
        ];
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions,3));
    geom.setAttribute('color', new THREE.Float32BufferAttribute(colors,3));
    geom.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({vertexColors:true, side:THREE.DoubleSide, roughness:0.9, metalness:0});
    bodyMesh = new THREE.Mesh(geom, mat);
    scene.add(bodyMesh);

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePts,3));
    const lineMat = new THREE.LineBasicMaterial({color:0x2b2130, transparent:true, opacity:0.22});
    lineMesh = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lineMesh);

    buildSeamMarker(N, height, radius);
    if(opts && opts.refit) fitCamera(true, maxR, totalHeight);
  }
  function buildSeamMarker(N, height, radius){
    const totalSamples = N*PROFILE_SUBSTEPS;
    const pts = [];
    for(let k=0;k<=totalSamples;k++){
      const v = k/(N*PROFILE_SUBSTEPS);
      const r = radius(v), h = height(v);
      const [x,y,z] = pushOut([r*Math.cos(SEAM_ANGLE), h, r*Math.sin(SEAM_ANGLE)]);
      pts.push(new THREE.Vector3(x,y,z));
    }
    if(pts.length<2) return;
    const path = new THREE.CurvePath();
    for(let i=0;i<pts.length-1;i++) path.add(new THREE.LineCurve3(pts[i], pts[i+1]));
    const tubeGeom = new THREE.TubeGeometry(path, totalSamples, STITCH_UNIT*0.035, 6, false);
    seamMesh = new THREE.Mesh(tubeGeom, new THREE.MeshBasicMaterial({color:seamColor}));
    scene.add(seamMesh);
    const dotGeom = new THREE.SphereGeometry(STITCH_UNIT*0.09, 10, 8);
    const dotMat = new THREE.MeshBasicMaterial({color:seamColor});
    const startMat = new THREE.MeshBasicMaterial({color:startColor});
    markerGroup = new THREE.Group();
    for(let ri=0; ri<=N; ri++){
      const dot = new THREE.Mesh(dotGeom, ri===0 ? startMat : dotMat);
      dot.position.copy(pts[ri*PROFILE_SUBSTEPS]);
      if(ri===0) dot.scale.setScalar(1.7);
      markerGroup.add(dot);
    }
    scene.add(markerGroup);
  }
  function fitCamera(animateReset, maxR, totalHeight){
    if(maxR===undefined || totalHeight===undefined){
      const p = computeProfile();
      maxR = p.maxR; totalHeight = p.totalHeight;
    }
    const dist = Math.max(maxR*3.3, totalHeight*1.7, 3);
    const midH = totalHeight*0.5;
    const camAngle = SEAM_ANGLE + Math.PI;
    camera.position.set(dist*Math.cos(camAngle), midH, dist*Math.sin(camAngle));
    controls.target.set(0, midH, 0);
    camera.near = Math.max(dist/200, 0.01);
    camera.far = dist*20;
    camera.updateProjectionMatrix();
    controls.update();
  }
  function updateBlockColor(ri, bi){
    if(!bodyMesh) return;
    const info = blockVertexOffset[ri] && blockVertexOffset[ri][bi];
    if(!info) return;
    const col = blockColor(rounds[ri].colors[bi]);
    const attr = bodyMesh.geometry.attributes.color;
    for(let k=0;k<info.count;k++) attr.setXYZ(info.offset+k, col.r, col.g, col.b);
    attr.needsUpdate = true;
  }
  function pushOut(c){
    const len = Math.hypot(c[0],c[2]);
    if(len<1e-6) return c.slice();
    const k = HILITE_OFFSET/len;
    return [c[0]+c[0]*k, c[1], c[2]+c[2]*k];
  }
  function ensureHighlight(){
    if(highlightMesh) return;
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(18),3));
    const mat = new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.4, side:THREE.DoubleSide, depthTest:false});
    highlightMesh = new THREE.Mesh(geom, mat);
    highlightMesh.renderOrder = 999;
    highlightMesh.visible = false;
    scene.add(highlightMesh);
  }
  function setHover(hit){
    ensureHighlight();
    const info = document.getElementById('cmHoverInfo');
    if(!hit || !blockCorners[hit.ri] || !blockCorners[hit.ri][hit.bi]){
      highlightMesh.visible = false;
      info.textContent = '';
      return;
    }
    const {ri,bi} = hit;
    const [bl,br,tr,tl] = blockCorners[ri][bi].map(pushOut);
    const arr = [...bl,...br,...tr, ...bl,...tr,...tl];
    highlightMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(arr,3));
    highlightMesh.geometry.attributes.position.needsUpdate = true;
    highlightMesh.visible = true;
    const rnd = rounds[ri];
    const colName = rnd.colors[bi]==null ? 'unpainted' : COLORS[rnd.colors[bi]].name;
    info.textContent = `Round ${spec.list[ri].num} · stitch ${bi+1} of ${rnd.count} — ${colName}`;
  }
  function pickBlock(e){
    if(!bodyMesh) return null;
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX-rect.left)/rect.width)*2-1;
    mouse.y = -((e.clientY-rect.top)/rect.height)*2+1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObject(bodyMesh);
    if(!hits.length) return null;
    return triToBlock[hits[0].faceIndex] || null;
  }
  function currentPaintValue(){
    if(selected===null) return undefined;
    return selected==='erase' ? null : selected;
  }

  // Center point of a stitch's whole-stitch corners (blockCorners), used by
  // the circle tool to measure real 3D distance across the curved surface.
  function blockCenter(ri, bi){
    const c = blockCorners[ri] && blockCorners[ri][bi];
    if(!c) return null;
    const [bl, br, tr, tl] = c;
    return [
      (bl[0]+br[0]+tr[0]+tl[0])/4,
      (bl[1]+br[1]+tr[1]+tl[1])/4,
      (bl[2]+br[2]+tr[2]+tl[2])/4,
    ];
  }
  function dist3(a, b){
    return Math.hypot(a[0]-b[0], a[1]-b[1], a[2]-b[2]);
  }

  // Fills every stitch whose round falls between the two dragged rounds and
  // whose position-around-the-round (as a fraction, since round stitch
  // counts differ) falls between the two dragged fractions — a rectangle in
  // the unrolled round/stitch grid, which is the grid a crochet pattern is
  // actually written in.
  function fillRect(start, end){
    const val = currentPaintValue();
    if(val===undefined){ showToast('Pick a color first'); return; }
    const riLo = Math.min(start.ri, end.ri), riHi = Math.max(start.ri, end.ri);
    const fracA = start.bi / rounds[start.ri].count;
    const fracB = end.bi / rounds[end.ri].count;
    const fLo = Math.min(fracA, fracB), fHi = Math.max(fracA, fracB);
    for(let ri=riLo; ri<=riHi; ri++){
      const rnd = rounds[ri];
      for(let bi=0; bi<rnd.count; bi++){
        const frac = bi / rnd.count;
        if(frac >= fLo && frac <= fHi) rnd.colors[bi] = val;
      }
    }
    buildMesh({refit:false});
    renderRoundsList();
    renderLegend();
    renderPreview();
  }

  // Fills every stitch within the real 3D distance (across the curved
  // surface) between the drag's start and end stitches.
  function fillCircle(start, end){
    const val = currentPaintValue();
    if(val===undefined){ showToast('Pick a color first'); return; }
    const center = blockCenter(start.ri, start.bi);
    const edge = blockCenter(end.ri, end.bi);
    if(!center || !edge) return;
    const radius = dist3(center, edge);
    for(let ri=0; ri<rounds.length; ri++){
      const rnd = rounds[ri];
      for(let bi=0; bi<rnd.count; bi++){
        const c = blockCenter(ri, bi);
        if(c && dist3(c, center) <= radius) rnd.colors[bi] = val;
      }
    }
    buildMesh({refit:false});
    renderRoundsList();
    renderLegend();
    renderPreview();
  }

  // Orbit-rotate on left-drag is switched off (in favor of drawing) whenever
  // the rect/circle tool is active — those two tools have no other use for
  // a left-drag.
  function updateCanvasInteractionMode(){
    const dragToDraw = activeTool==='rect' || activeTool==='circle';
    controls.mouseButtons.LEFT = dragToDraw ? null : THREE.MOUSE.ROTATE;
  }
  function setActiveTool(tool){
    activeTool = tool;
    document.querySelectorAll('#cmToolRow .cm-tool-btn[data-tool]').forEach(b=>{
      b.classList.toggle('selected', b.dataset.tool===tool);
    });
    updateCanvasInteractionMode();
  }

  function onPointerDown(e){
    pointerDownPos = {x:e.clientX, y:e.clientY};
    if(activeTool==='rect' || activeTool==='circle'){
      if(e.button===0) shapeDragStart = pickBlock(e);
    }
  }
  function onPointerUp(e){
    if(activeTool==='rect' || activeTool==='circle'){
      const start = shapeDragStart;
      shapeDragStart = null;
      pointerDownPos = null;
      if(!start) return;
      const end = pickBlock(e) || start;
      if(activeTool==='rect') fillRect(start, end);
      else fillCircle(start, end);
      return;
    }
    if(!pointerDownPos) return;
    const moved = Math.hypot(e.clientX-pointerDownPos.x, e.clientY-pointerDownPos.y);
    pointerDownPos = null;
    if(moved > CLICK_MOVE_THRESHOLD) return;
    if(e.button===2){
      const hit = pickBlock(e);
      if(hit) paintBlock(hit.ri, hit.bi, null);
      return;
    }
    if(e.button!==0) return;
    const val = currentPaintValue();
    if(val===undefined){ showToast('Pick a color first'); return; }
    const hit = pickBlock(e);
    if(hit) paintBlock(hit.ri, hit.bi, val);
  }
  function onCanvasHover(e){ setHover(pickBlock(e)); }
  function paintBlock(ri, bi, val){
    rounds[ri].colors[bi] = val;
    updateBlockColor(ri, bi);
    renderRoundsList();
    renderLegend();
    renderPreview();
  }
  function fillRound(ri){
    if(selected===null){ showToast('Pick a color first'); return; }
    const val = selected==='erase' ? null : selected;
    rounds[ri].colors = Array(rounds[ri].count).fill(val);
    buildMesh({refit:false});
    renderRoundsList();
    renderLegend();
    renderPreview();
  }
  function clearRound(ri){
    rounds[ri].colors = Array(rounds[ri].count).fill(null);
    buildMesh({refit:false});
    renderRoundsList();
    renderLegend();
    renderPreview();
  }
  function fillAll(){
    if(selected===null){ showToast('Pick a color first'); return; }
    const val = selected==='erase' ? null : selected;
    rounds.forEach(r=>{ r.colors = Array(r.count).fill(val); });
    buildMesh({refit:false});
    renderRoundsList();
    renderLegend();
    renderPreview();
  }

  function renderPalette(){
    const wrap = document.getElementById('cmPaletteGrid');
    let html = `<div class="cm-swatch cm-eraser${selected==='erase'?' selected':''}" data-pick="erase" title="Eraser">&empty;</div>`;
    html += COLORS.map((c,i)=>`<div class="cm-swatch${selected===i?' selected':''}" data-pick="${i}" style="background:${c.hex}" title="${c.name}"></div>`).join('');
    wrap.innerHTML = html;
    const label = document.getElementById('cmSelectedLabel');
    if(selected===null) label.textContent = 'Pick a color, then paint stitches.';
    else if(selected==='erase') label.innerHTML = 'Selected: <b>Eraser</b>';
    else label.innerHTML = `Selected: <b>${COLORS[selected].name}</b>`;
  }
  function renderRoundsList(){
    const wrap = document.getElementById('cmRoundsList');
    wrap.innerHTML = rounds.map((rnd, ri)=>{
      const num = spec.list[ri].num;
      const unpainted = rnd.colors.filter(c=>c==null).length;
      return `
        <div class="cm-round-row">
          <span class="cm-round-num">R${num}</span>
          <span class="cm-round-count">${rnd.count} sts${unpainted ? ` &middot; ${unpainted} unpainted` : ''}</span>
          <div class="cm-round-actions">
            <button type="button" class="cm-icon-btn" data-fill="${ri}" title="Fill round with selected color">&#9638;</button>
            <button type="button" class="cm-icon-btn" data-clear="${ri}" title="Clear round">&empty;</button>
          </div>
        </div>`;
    }).join('');
  }
  function renderLegend(){
    const counts = new Map();
    rounds.forEach(r=>r.colors.forEach(c=>{ if(c!=null) counts.set(c, (counts.get(c)||0)+1); }));
    const used = COLORS.map((c,i)=>({...c, idx:i, n:counts.get(i)||0})).filter(c=>c.n>0);
    document.getElementById('cmLegend').innerHTML = used.length
      ? used.map(c=>`<div class="cm-legend-chip"><span class="cm-dot" style="background:${c.hex}"></span>${c.name}<span class="cm-n">${c.n}</span></div>`).join('')
      : '<span class="cm-legend-empty">No stitches painted yet.</span>';
  }
  function unpaintedCount(){
    return rounds.reduce((s,r)=> s + r.colors.filter(c=>c==null).length, 0);
  }
  function renderPreview(){
    const warn = document.getElementById('cmWarnings');
    const pre = document.getElementById('cmPatternPreview');
    const applyBtn = document.getElementById('cmApplyBtn');
    const unpainted = unpaintedCount();
    if(unpainted > 0){
      warn.textContent = `${unpainted} stitch${unpainted===1?'':'es'} still unpainted — pick a color and paint them in before applying.`;
      warn.classList.add('show');
      pre.textContent = '';
      applyBtn.disabled = true;
      return;
    }
    warn.classList.remove('show');
    applyBtn.disabled = false;
    const customMap = { rounds: rounds.map(r=>r.colors.slice()) };
    const segments = compileBodySegmentsWithCustomColors(body, customMap);
    const lines = [];
    // Only the stitch-by-stitch rounds matter while painting — a body's
    // finishing notes (eye placement, fasten off, join instructions) belong
    // in the real generated pattern, not in this in-progress preview.
    segments.forEach(seg=>{
      if(seg.kind!=='table') return;
      seg.rows.forEach(r=> lines.push(`Rnd ${r[0]}.  ${r[1]}${r[2] ? `  (${r[2]})` : ''}`));
    });
    pre.textContent = lines.join('\n');
  }

  function wireStaticControlsOnce(){
    document.getElementById('cmPaletteGrid').addEventListener('click', e=>{
      const el = e.target.closest('[data-pick]');
      if(!el) return;
      selected = el.dataset.pick==='erase' ? 'erase' : parseInt(el.dataset.pick,10);
      renderPalette();
    });
    document.getElementById('cmToolRow').addEventListener('click', e=>{
      const btn = e.target.closest('[data-tool]');
      if(!btn) return;
      if(btn.dataset.tool==='bucket') fillAll();
      else setActiveTool(btn.dataset.tool);
    });
    document.getElementById('cmRoundsList').addEventListener('click', e=>{
      if(e.target.dataset.fill!==undefined) fillRound(parseInt(e.target.dataset.fill,10));
      else if(e.target.dataset.clear!==undefined) clearRound(parseInt(e.target.dataset.clear,10));
    });
    document.getElementById('cmCloseBtn').addEventListener('click', close);
    document.getElementById('cmCancelBtn').addEventListener('click', close);
    document.getElementById('cmBackdrop').addEventListener('click', close);
    document.getElementById('cmApplyBtn').addEventListener('click', apply);
    document.addEventListener('keydown', e=>{
      if(e.key==='Escape' && !document.getElementById('colorMapperModal').hidden) close();
    });
  }

  function open(bodyArg, existingMap){
    body = bodyArg;
    spec = bodyRoundSpec(body);
    rounds = makeRoundsFromSpec(existingMap);
    shape = {...(SHAPE_PRESETS[body.id] || {equator:0.5, pTop:2, pBottom:2, aspect:1})};
    selected = null;
    activeTool = 'pencil';

    document.getElementById('colorMapperModal').hidden = false;
    document.getElementById('cmTitle').textContent = `Color Mapper — ${body.name}`;
    if(!staticWired){ wireStaticControlsOnce(); staticWired = true; }
    if(!initialized) initThree();
    document.querySelectorAll('#cmToolRow .cm-tool-btn[data-tool]').forEach(b=>{
      b.classList.toggle('selected', b.dataset.tool===activeTool);
    });
    if(initialized) updateCanvasInteractionMode();
    renderPalette();
    renderRoundsList();
    renderLegend();
    renderPreview();
    buildMesh({refit:true});
    requestAnimationFrame(resizeThree);
  }
  function close(){
    document.getElementById('colorMapperModal').hidden = true;
  }
  function apply(){
    if(unpaintedCount() > 0) return;
    applyCustomColorMap(body.id, { rounds: rounds.map(r=>r.colors.slice()) });
    close();
  }

  return { open };
})();

function applyCustomColorMap(bodyId, customMap){
  state.customColorMaps[bodyId] = customMap;
  saveState();
  render();
  showToast('Custom colors applied');
}
function clearCustomColorMap(bodyId){
  delete state.customColorMaps[bodyId];
  saveState();
  render();
  showToast('Custom colors cleared');
}

function initPatternTitle(){
  const text = document.getElementById('patternTitleText');
  const input = document.getElementById('patternTitleInput');
  const editBtn = document.getElementById('patternTitleEditBtn');

  function showView(){
    text.textContent = state.patternTitle.trim() || 'New Pattern';
    text.hidden = false;
    input.hidden = true;
  }
  function showEdit(){
    input.value = state.patternTitle;
    text.hidden = true;
    input.hidden = false;
    input.focus();
    input.select();
  }
  function commit(){
    state.patternTitle = input.value.trim();
    saveState();
    showView();
  }

  editBtn.addEventListener('click', showEdit);
  input.addEventListener('input', ()=>{
    state.patternTitle = input.value;
    saveState();
  });
  input.addEventListener('blur', commit);
  input.addEventListener('keydown', (e)=>{
    if(e.key==='Enter'){ input.blur(); }
    else if(e.key==='Escape'){ input.value = state.patternTitle; input.blur(); }
  });

  showView();
}

// The pattern panel is sticky-positioned so its Copy/Download buttons stay
// on screen, but its max-height needs to leave room for whatever the page
// header above it actually measures (title length, wrapping, etc. all shift
// this) rather than a guessed constant, or the buttons can render below the
// viewport on load. As the page scrolls, the sticky panel's own top shrinks
// toward its pinned `top:20px` — recomputing on scroll (not just resize)
// lets the panel grow to use that extra room instead of staying capped at
// the smaller pre-scroll height.
function syncPatternPanelMaxHeight(){
  const panel = document.querySelector('.pattern-panel');
  if(!panel || window.innerWidth <= 880){
    document.documentElement.style.removeProperty('--pattern-panel-max-height');
    return;
  }
  const top = panel.getBoundingClientRect().top;
  const maxHeight = Math.max(320, window.innerHeight - top - 20);
  document.documentElement.style.setProperty('--pattern-panel-max-height', `${maxHeight}px`);
}
let patternPanelSyncQueued = false;
function queueSyncPatternPanelMaxHeight(){
  if(patternPanelSyncQueued) return;
  patternPanelSyncQueued = true;
  requestAnimationFrame(()=>{ patternPanelSyncQueued = false; syncPatternPanelMaxHeight(); });
}
window.addEventListener('resize', queueSyncPatternPanelMaxHeight);
window.addEventListener('scroll', queueSyncPatternPanelMaxHeight, {passive:true});

loadState();
renderShapes();
render();
initPatternTitle();
syncPatternPanelMaxHeight();
