import { maxScore } from "../constants/gameLevels";

export default function calculateScore(word, timeUsed) {
  const wrongPenalty = (1 - 0.05 * Math.min(timeUsed.length - 1, 4));
  const totalTimeUsed = timeUsed.reduce((a, b) => a + b, 0);
  const length = word.length;
  const rawScore = Math.round(wrongPenalty * (maxScore[length] - totalTimeUsed));
  
  return Math.max(100, rawScore);
}
