import { allWordLengths, maxLength, minLength } from '../constants/gameLevels'
import api from '../api.js';

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const fetchWordsByLength = async (length) => {
  try {
    const response = await api.get(`words/${length}`);
    const data = response.data;
    return data.words || [];
  } catch (error) {
    console.error("Error fetching words", error)
    return [];
  }
}

export async function selectRandomWords(lv) {
  const wordLengths = allWordLengths[lv];
  const words = [];

  for (let i = 0; i <= maxLength - minLength; i++) {
    const len = i + minLength;
    const count = wordLengths[i];
    
    if (count > 0) {
      const availableWords = await fetchWordsByLength(len);
      const copy = [...availableWords];
      fisherYatesShuffle(copy);
      const selected = copy.slice(0, count);
      words.push(...selected);
    }
  }

  fisherYatesShuffle(words);

  return words;
}
