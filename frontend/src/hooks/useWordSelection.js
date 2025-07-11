import { useEffect, useState } from 'react';

import { selectRandomWordsByLength } from '../utils/wordSelector';
import { allWordLengths } from '../constants/gameLevels';

export default function useWordSelection(lv) {
  const [words, setWords] = useState([]);

  // here the dependencies include wordLength and numWords,
  // just to be safe
  useEffect(() => {
    setWords(selectRandomWordsByLength(allWordLengths[lv]));
  }, [lv]);

  return words;
}
