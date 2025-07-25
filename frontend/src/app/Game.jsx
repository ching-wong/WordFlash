import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import WordDisplay from '../components/WordDisplay';
import AnswerForm from '../components/AnswerForm';
import CountdownDisplay from '../components/CountdownDisplay';
import useGameLogic from '../hooks/useGameLogic';
import QuestionNumberDisplay from '../components/QuestionNumberDisplay';
import CheckAnswerDisplay from '../components/CheckAnswerDisplay';
import ScoreDisplay from '../components/ScoreDisplay';
import { selectRandomWords } from '../utils/wordSelector';
import LevelDisplay from '../components/LevelDisplay';

export default function Game() {
  const navigate = useNavigate();

  const location = useLocation();
  const lv = location.state?.lv;

  const [words, setWords] = useState([]);

  useEffect(() => {
    console.log("Level (lv):", lv);

    async function selectWords() {
      const selected = await selectRandomWords(lv);
      console.log("Selected words:", selected);
      setWords(selected);
    }
    
    if (lv !== undefined && lv !== null) {
      selectWords();
    }
  }, [lv]);

  const {
    countdown,
    isWordShown,
    isFormShown,
    isCheckShown,
    wordIndex,
    currAnswer,
    score,
    stop,
    submit
  } = useGameLogic(lv, words, 1500, 2000);

  // stop when keyboard is pressed / screen is clicked
  useEffect(() => {
    if (!isWordShown) return;

    const handler = () => {
      stop();
    };

    window.addEventListener('keydown', handler);
    window.addEventListener('click', handler);
    window.addEventListener('touchstart', handler);

    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('click', handler);
      window.removeEventListener('touchstart', handler);
    };
  }, [isWordShown]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div className="w-full max-w-md px-4 mx-auto">
        {/* info on the top */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 px-4 max-w-full">
          <LevelDisplay lv={lv} />
          <QuestionNumberDisplay total={words.length} current={wordIndex + 1} />
          <ScoreDisplay score={score} />
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Home
          </button>
        </div>

        {/* countdown */}
        {countdown > 0 && <CountdownDisplay countdown={countdown} />}

        {/* word is shown */}
        {isWordShown && <WordDisplay text={words[wordIndex]} />}

        {/* user input form */}
        {isFormShown && <AnswerForm onSubmit={submit} />}

        {/* check answer */}
        {isCheckShown && <CheckAnswerDisplay answer={currAnswer} word={words[wordIndex]} />}
      </div>
    </div>
  );

}