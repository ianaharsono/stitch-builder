const BODIES = [
  {
    id:'chick',
    name:'Round body',
    subtitle:'A simple round ball — chick-style',
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
    subtitle:'Classic tapered egg — penguin-style',
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
    subtitle:'Waisted double-lump, two-tone — peanut-style',
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
    subtitle:'Rounded, flattened oval — pebble-style',
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
      ]},
      {type:'note', text:'Your piece might start curling — that\'s totally normal. For a neater final look, push the middle of your piece until it curves the other way. This makes the "right side" face out. Then keep crocheting to the left. If you\'re a lefty, keep crocheting to the right.'},
      {type:'rounds', part:0, rows:[
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
    subtitle:'Curved head-and-neck silhouette — horse-style',
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
      ]},
      {type:'note', text:'Your piece might start curling — that\'s totally normal. For a neater final look, push the middle of your piece until it curves the other way. This makes the "right side" face out. Then keep crocheting to the left. If you\'re a lefty, keep crocheting to the right.'},
      {type:'rounds', part:0, rows:[
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
];

const COLORS = [
  {name:'Natural White', hex:'#F9F4F3', gain:0.6},
  {name:'Milk White', hex:'#EDE5DB', gain:0.6},
  {name:'Beige', hex:'#D0B79F', gain:0.90},
  {name:'Khaki', hex:'#DC9D62', gain:0.95},
  {name:'Brown', hex:'#9B4C22', gain:1.45},
  {name:'Coffee', hex:'#3E201E', gain:1.05},
  {name:'Goose Yellow', hex:'#F6C339', gain:0.8},
  {name:'Golden Yellow', hex:'#E6AD34', gain:0.85},
  {name:'Orange', hex:'#FB6209', gain:0.95},
  {name:'Red', hex:'#D2192B', gain:0.9},
  {name:'Terracotta Red', hex:'#AA464E', gain:1.05},
  {name:'Pink', hex:'#F0ABB6', gain:0.6},
  {name:'Magenta', hex:'#D1447E', gain:1.1},
  {name:'Lavender', hex:'#B79BCB', gain:0.8},
  {name:'Light Blue', hex:'#8DB1D8', gain:0.9},
  {name:'Sea Blue', hex:'#21ACDE', gain:1.15},
  {name:'Denim Blue', hex:'#213450', gain:1.1},
  {name:'Seafoam Green', hex:'#B3D6CA', gain:0.7},
  {name:'Autumn Green', hex:'#9FB951', gain:1.0},
  {name:'Sage Green', hex:'#768A60', gain:1.3},
  {name:'Kelly Green', hex:'#31B478', gain:1.4},
  {name:'Forest Green', hex:'#26502D', gain:1.3},
  {name:'Army Green', hex:'#403D20', gain:1.45},
  {name:'Pigeon Gray', hex:'#A7A4B6', gain:1.2},
  {name:'Dark Gray', hex:'#504C5C', gain:1.3},
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
];

const BEAK_STYLES = [
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
];

const EAR_STYLES = [
  {
    id:'round',
    name:'Round ears',
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
    id:'pointy',
    name:'Cat ears',
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

const ADDONS = [
  {key:'wings', label:'Limbs', emptyIcon:'🪽', chooseNote:'choose a style', styles:WING_STYLES},
  {key:'beak', label:'Face Feature', emptyIcon:'▲', chooseNote:'choose a style', styles:BEAK_STYLES},
  {key:'horns', label:'Horns', emptyIcon:'🐮', chooseNote:'choose a style', styles:HORN_STYLES},
  {key:'ears', label:'Ears', emptyIcon:'👂', chooseNote:'choose a style', styles:EAR_STYLES},
  {key:'tail', label:'Tail', emptyIcon:'➰', chooseNote:'choose a style', styles:TAIL_STYLES},
];


const LOCKED_ADDONS = [
  {label:'Feet', icon:'🦶'},
  {label:'Tail Feathers', icon:'🪶'},
  {label:'Tummy Patch', icon:'⬤'},
];

const state = { bodyId:null, colors:{}, addons:{} };
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

function decodeForTint(photoSrc){
  if(tintDecodeCache.has(photoSrc)) return tintDecodeCache.get(photoSrc);
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
      for(let y=0;y<height;y++){
        let rowCount = 0;
        for(let x=0;x<width;x++){
          const i = (y*width+x)*4;
          if(data[i+3]===0) continue;
          rowCount++;
          sum += 0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2];
          count++;
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
          if(y < waistY){ sumAbove += l; countAbove++; } else { sumBelow += l; countBelow++; }
        }
      }
      const lMeanAbove = countAbove ? (sumAbove/countAbove)/255 : lMean;
      const lMeanBelow = countBelow ? (sumBelow/countBelow)/255 : lMean;

      resolve({ img, lMean, waistY, lMeanAbove, lMeanBelow });
    };
    img.src = photoSrc;
  });
  tintDecodeCache.set(photoSrc, promise);
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
function renderSplitTint(img, decoded, hexTop, hexBottom){
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
  const FEATHER = Math.max(2, Math.round(height * 0.02));
  for(let y=0;y<height;y++){
    const isTop = y < decoded.waistY;
    const lMeanLocal = isTop ? decoded.lMeanAbove : decoded.lMeanBelow;
    const dist = y - decoded.waistY;
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
    for(let x=0;x<width;x++){
      const i = (y*width+x)*4;
      if(data[i+3]===0) continue;
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
// native-color region).
function getTintedPhoto(photoSrc, hexOrPair, onReady){
  const hexKey = Array.isArray(hexOrPair) ? hexOrPair.map(h=>h||'native').join('|') : hexOrPair;
  const key = photoSrc + '::' + hexKey;
  if(tintResultCache.has(key)) return tintResultCache.get(key);
  decodeForTint(photoSrc).then(decoded=>{
    const dataUrl = Array.isArray(hexOrPair)
      ? renderSplitTint(decoded.img, decoded, hexOrPair[0], hexOrPair[1])
      : renderTint(decoded.img, decoded.lMean, hexOrPair);
    tintResultCache.set(key, dataUrl);
    onReady(dataUrl);
  });
  return null;
}

// Points an <img> at a color-tinted version of a reference photo, showing
// the untinted photo until the tint is ready (decoding+tinting is cached
// per photo+color, so repeat renders resolve instantly from cache).
function setTintedPhoto(imgEl, photoSrc, hexOrPair){
  const hexKey = Array.isArray(hexOrPair) ? hexOrPair.map(h=>h||'native').join('|') : hexOrPair;
  tintTargets.set(imgEl, { photoSrc, hexKey });
  const cached = getTintedPhoto(photoSrc, hexOrPair, dataUrl=>{
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
    setTintedPhoto(card.querySelector('img'), b.photo, NATIVE_COLOR_HEX);
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

// Swatches this close to the panel's own paper-white background (e.g. Natural
// White, Milk White) nearly vanish against it, since their only edge is the
// thin var(--line) outline. Reuses the same perceived-brightness formula as
// checkColorFor, just against the opposite end of the range.
function isLowContrastSwatch(hex){
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  return brightness > 220;
}

// Same near-white problem as isLowContrastSwatch, but for a tinted reference
// photo sitting on var(--locked-wash): a cutout piece tinted Natural White or
// Milk White blends into that backdrop with nothing to mark its edge. Takes
// whatever resolveTintColors/resolveTintColorsFromResolved returned — a
// single hex, a [top, bottom] pair (either half possibly null for a
// native-color region), or null for an untinted native-color photo.
function isLowContrastTint(hexOrPair){
  if(!hexOrPair) return false;
  const hexes = Array.isArray(hexOrPair) ? hexOrPair : [hexOrPair];
  return hexes.some(h => h && isLowContrastSwatch(h));
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
  const segments = [];
  piece.blocks.forEach(block=>{
    if(block.type==='rounds'){
      const rows = block.rows.map(r=>{
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
      segments.push({kind:'note', text: block.text});
    }
  });
  return { colors, segments };
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
  grid.innerHTML='';

  ADDONS.forEach(addon=>{
    const addonState = ensureAddonState(addon.key);
    const wrap = el('div','addon-wrap' + (addonState.on ? ' on' : ''));
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
      if(thumbTint) setTintedPhoto(thumbImg, activeStyle.photo, thumbTint);
      else thumbImg.src = activeStyle.photo;
      thumbImg.classList.toggle('low-contrast-photo', isLowContrastTint(thumbTint));
      panelSide = panel.querySelector('.addon-panel-side');
      wrap.appendChild(panel);
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
          if(s.photo) setTintedPhoto(card.querySelector('img'), s.photo, NATIVE_COLOR_HEX);
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
        if(previewTint) setTintedPhoto(previewImg, style.photo, previewTint);
        else { clearTintTarget(previewImg); previewImg.src = style.photo; }
        previewImg.classList.toggle('low-contrast-photo', isLowContrastTint(previewTint));

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

    grid.appendChild(wrap);
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
  return body.name;
}

function buildPatternText(body){
  const bodyStore = ensureBodyDefaults(body);
  const { colors, segments } = compilePieceBlocks(body, bodyStore);

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
  body.colorParts.forEach((part,i)=>{
    lines.push(`- Yarn in ${colors[i].name} (${colors[i].hex}) for ${part.materialsLabel}`);
  });

  activeAddons.forEach(a=>{
    a.style.colorParts.forEach((part,i)=>{
      lines.push(`- Yarn in ${a.colors[i].name} (${a.colors[i].hex}) for ${part.materialsLabel}`);
    });
  });

  lines.push('- Crochet hook sized to your yarn weight');
  lines.push('- Stuffing');
  lines.push('- 2 safety eyes');
  lines.push('- Stitch marker');
  lines.push('- Yarn needle');
  lines.push('');
  lines.push('HEAD & BODY');
  lines.push(`With ${colors.map(c=>c.name.toLowerCase()).join(' and ')} yarn.`);
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
    if(previewTint) setTintedPhoto(previewImg, body.photo, previewTint);
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

  if(!body){
    photo.hidden = true; placeholder.style.display='grid'; photoLabel.textContent = ''; addonPhotos.innerHTML = '';
    meta.innerHTML = '';
    patternBody.innerHTML = '<div class="empty-state">Your assembled pattern will build itself here as you make choices on the left — same idea as the Wooble instruction cards, just generated instead of pre-printed.</div>';
    copyBtn.disabled = true; downloadBtn.disabled = true;
    return;
  }

  const bodyStore = ensureBodyDefaults(body);
  const { colors: bodyColors, segments } = compilePieceBlocks(body, bodyStore);

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
    setTintedPhoto(photo, body.photo, bodyTint);
  } else {
    clearTintTarget(photo);
    photo.src = body.photo;
  }
  photo.classList.toggle('low-contrast-photo', isLowContrastTint(bodyTint));
  const photoAddons = activeAddons.filter(a=>a.style.photo);
  addonPhotos.innerHTML = photoAddons
    .map(a=>`<div class="addon-photo-item"><img class="pattern-photo${a.style.cutout ? ' is-cutout' : ''}" alt="${a.style.name} reference photo"><div class="pattern-photo-label">${a.style.name}</div></div>`)
    .join('');
  Array.from(addonPhotos.children).forEach((itemEl, i)=>{
    const a = photoAddons[i];
    const imgEl = itemEl.querySelector('img');
    const addonTint = resolveTintColorsFromResolved(a.style, a.colors);
    if(addonTint) setTintedPhoto(imgEl, a.style.photo, addonTint);
    else imgEl.src = a.style.photo;
    imgEl.classList.toggle('low-contrast-photo', isLowContrastTint(addonTint));
  });
  const allColors = [bodyColors, ...activeAddons.map(a=>a.colors)].flat();
  const seenHex = new Set();
  const uniqueColors = allColors.filter(c=>seenHex.has(c.hex) ? false : (seenHex.add(c.hex), true));
  meta.innerHTML = uniqueColors.map(c=>`<span><span class="meta-dot" style="background:${c.hex}"></span>${c.name}</span>`).join('');

  let html = '';
  html += `<div class="p-section"><h3>Head &amp; Body</h3><div class="p-hint" style="background:transparent;padding:0 0 8px;">With ${bodyColors.map(c=>c.name.toLowerCase()).join(' and ')} yarn.</div>`;
  segments.forEach(seg=>{
    if(seg.kind==='table'){
      html += `<table class="rounds">`;
      seg.rows.forEach(r=>{
        html += `<tr><td class="rnd">Rnd ${r[0]}</td><td>${r[1]}</td><td class="count">${r[2] ? '('+r[2]+')' : ''}</td></tr>`;
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
            html += `<tr><td class="rnd">Rnd ${r[0]}</td><td>${r[1]}</td><td class="count">${r[2] ? '('+r[2]+')' : ''}</td></tr>`;
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
  copyBtn.disabled = false; downloadBtn.disabled = false;

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
      await downloads.save({ filename:`custom-${body.id}-amigurumi.txt`, data: txt });
      showToast('Saved');
    }catch(e){
      if(e && e.code === 'declined'){ /* viewer said no, stay quiet */ }
      else showToast('Could not save — try Copy pattern instead');
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

loadState();
renderShapes();
render();
