import useCountdownLogic from './useCountdownLogic';
import calculateScore from './useScoreLogic'; // or from a `utils` folder if it's not a hook
import { getProgress, setProgress } from '../utils/storage';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function useGameLogic(lv, words, pauseDurationBeforeWord, pauseDurationBeforeInput) {
  const navigate = useNavigate();
  
  const { countdown } = useCountdownLogic();

  const [isPausedBeforeWord, setIsPausedBeforeWord] = useState(false);
  const [isPausedBeforeInput, setIsPausedBeforeInput] = useState(false);
  const [isWordShown, setIsWordShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const [isCheckShown, setIsCheckShown] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [timeUsed, setTimeUsed] = useState([]);
  const [currAnswer, setCurrAnswer] = useState(null);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [score, setScore] = useState(0);

  const startTimeRef = useRef(null);

  // start the game
  useEffect(() => {
    if (countdown === 0) {
      setIsPausedBeforeWord(true);
    }
  }, [countdown]);

  // pause before word
  useEffect(() => {
    if (isPausedBeforeWord) {
      if (nextQuestion) {
        setWordIndex((prev) => prev + 1);
        setNextQuestion(false);
      }

      const timer = setTimeout(() => {
        setIsPausedBeforeWord(false);
        setIsWordShown(true);
      }, pauseDurationBeforeWord);

      return () => clearTimeout(timer);
    }
  }, [isPausedBeforeWord]);

  // show the word
  useEffect(() => {
     if (isWordShown) {
      startTimeRef.current = performance.now();
    }
  }, [isWordShown]);

  // when the user presses stop
  const stop = () => {
    const stopTime = performance.now();
    if (startTimeRef.current !== null) {
      setTimeUsed(arr => [...arr, Math.round(stopTime - startTimeRef.current)]);
      setIsWordShown(false);
      setIsPausedBeforeInput(true);
    }
  };

  // pause before input
  useEffect(() => {
    if (isPausedBeforeInput) {
      const timer = setTimeout(() => {
        setIsPausedBeforeInput(false);
        setIsFormShown(true);
      }, pauseDurationBeforeInput);

      return () => clearTimeout(timer);
    }
  }, [isPausedBeforeInput]);

  // checking
  useEffect(() => {
    if (isCheckShown) {
      const timer = setTimeout(() => {
        setIsCheckShown(false);
        setIsPausedBeforeWord(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCheckShown]);

  // when the user submits an answer
  function submit(answer) {

    setCurrAnswer(answer);
    setIsFormShown(false);
    setIsCheckShown(true);

    if (answer === words[wordIndex]) {
      const increment = calculateScore(words[wordIndex], timeUsed);
      
      // Update score and mark to move to next question
      setTimeUsed([]);
      setScore(prev => prev + increment);
      setNextQuestion(true);
    }
  }

  // when wordIndex changes, check whether the game is done
  useEffect(() => {
    if (wordIndex === words.length) {
      // save score to local storage
      const progress = getProgress();

      const updatedScores = [...progress.highestScores, score]
        .sort((a, b) => b - a);

      setProgress({
        ...progress,
        highestScores: updatedScores,
      });

      navigate('/result', { state: { lv, score } });
    }
  }, [wordIndex]);

  return {
    countdown,
    isWordShown,
    isFormShown,
    isCheckShown,
    wordIndex,
    currAnswer,
    score,
    stop,
    submit};
}
