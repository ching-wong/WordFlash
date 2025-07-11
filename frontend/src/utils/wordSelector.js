import wordsData from '../data/all_words.json';
import { allWordLengths, maxLength, minLength } from '../constants/gameLevels'

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function selectRandomWords(lv) {
  const wordLengths = allWordLengths[lv];
  const words = [];

  for (let i = 0; i <= maxLength - minLength; i++) {
    const len = i + minLength;
    const count = wordLengths[i];
    
    if (count > 0) {
      const availableWords = wordsData[len];
      const copy = [...availableWords];
      fisherYatesShuffle(copy);
      const selected = copy.slice(0, count);
      words.push(...selected);
    }
  }

  fisherYatesShuffle(words);

  return words;
}
