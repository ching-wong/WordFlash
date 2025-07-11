const minLength = 5;
const maxLength = 12;
const scoreBase = 1.3;
const scoreMultiplier = 1200;
const allWordLengths = {
    1: [4, 4, 0, 0, 0, 0, 0, 0],
    2: [3, 3, 2, 0, 0, 0 ,0, 0],
    3: [2, 3, 3, 1, 0, 0, 0, 0],
    4: [2, 3, 3, 2, 0, 0, 0, 0],
    5: [2, 3, 3, 2, 1, 0, 0, 0],
    6: [1, 2, 3, 2, 3, 0, 0, 0],
    7: [1, 2, 3, 3, 2, 1, 0, 0],
    8: [1, 2, 3, 3, 2, 1, 1, 0],
    9: [1, 1, 3, 2, 3, 1, 1, 1],
    10:[1, 1, 2, 2, 2, 2, 2, 2]
};

const maxScore = {};
for (let i = minLength; i <= maxLength; i++) {
  maxScore[i] = Math.round(scoreMultiplier * Math.pow(scoreBase, i));
}

function getMaxScore(wordLengths) {
  let score = 0;
  for (let i = 0; i <= maxLength - minLength; i++) {
    const lv = minLength + i;
    const maxS = maxScore[lv] ?? -100000;
    score = score + wordLengths[i] * maxS;
  }
  return score;
}

const unlockScore = {};
for (let i = 1; i <= Object.keys(allWordLengths).length; i++) {
  unlockScore[i] = Math.round(getMaxScore(allWordLengths[i]) * 0.9);
}

export {
  allWordLengths,
  unlockScore,
  maxLength,
  minLength,
  maxScore
};
