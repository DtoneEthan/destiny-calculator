// engine.js — deterministic "destiny" generator.
// Pure & language-agnostic: returns numbers + chosen template indices,
// so switching language only re-renders text without changing the fate.

function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function weightedPick(rng, weights) {
  const total = weights.reduce((s, w) => s + w, 0);
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    if (r < weights[i]) return i;
    r -= weights[i];
  }
  return weights.length - 1;
}

// inputs: { year, month, day, time: "HH:MM"|null, rememberTime: bool, location: string, gender: "male"|"female" }
function compute(inputs) {
  const loc = (inputs.location || "").trim().toLowerCase();
  const timeKey = inputs.rememberTime && inputs.time ? inputs.time : "NA";
  const seedStr =
    [inputs.year, inputs.month, inputs.day, timeKey, loc, inputs.gender].join("|");
  const seedFn = xmur3(seedStr);
  const rng = mulberry32(seedFn());

  const rand = (min, max) => Math.floor(rng() * (max - min + 1)) + min;
  const big = () => Math.floor(rng() * 1000); // template index (modulo'd at render)

  const lifespan = rand(74, 96);
  const deathAge = lifespan;
  const marriageAge = rand(21, 36);
  const numChildren = weightedPick(rng, [8, 22, 34, 24, 12]); // 0..4
  let firstChildAge = null;
  if (numChildren > 0) {
    firstChildAge = Math.min(marriageAge + rand(1, 6), lifespan - 4);
  }

  // Life-stage narrative indices
  const idx = {
    youth: big(),
    young: big(),
    middle: big(),
    old: big()
  };

  // Luck windows (2), spread across life
  const luckAges = [rand(18, 40), rand(41, Math.max(42, lifespan - 10))];
  idx.luck1 = big();
  idx.luck2 = big();

  // Crisis windows (2), spread across life, each with a resolution
  const crisisAges = [rand(20, 45), rand(46, Math.max(47, lifespan - 5))];
  idx.crisis1 = big();
  idx.crisis2 = big();
  idx.advice1 = big();
  idx.advice2 = big();

  // Birth season index (0..7) from month
  const seasonIdx = Math.min(7, Math.floor(((inputs.month - 1) / 12) * 8));

  return {
    lifespan,
    deathAge,
    marriageAge,
    firstChildAge,
    numChildren,
    seasonIdx,
    luckAges,
    crisisAges,
    idx
  };
}

if (typeof module !== "undefined") {
  module.exports = { compute, xmur3, mulberry32, weightedPick };
}
