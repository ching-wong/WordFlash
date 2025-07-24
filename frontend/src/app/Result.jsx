import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { unlockScore } from '../constants/gameLevels'
import { getProgress, setProgress } from '../utils/storage';

export default function Result() {
  const navigate = useNavigate();

  const location = useLocation();
  const { lv, score } = location.state || {};
  
  const minScore = unlockScore[lv];
  const isNextLevel = minScore <= score && lv < 10;

  useEffect(() => {
    if (isNextLevel) {
      const progress = getProgress();
      if (lv + 1 > progress.unlockedLevel) {
        setProgress({ 
          ...progress, 
          unlockedLevel: lv + 1 
        });
      }
    }
  }, [isNextLevel, lv]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      
      <h2 className="text-4xl font-bold text-gray-800">
        Level: {lv}
      </h2>

      <h2 className="text-4xl font-bold text-gray-800">
        Score: {score}
      </h2>

      <h2 className="text-4xl font-bold text-gray-800">
        Passing Score: {minScore}
      </h2>

      {isNextLevel && <button
        onClick={() => navigate('/game', { state: { lv : lv + 1 } })}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Next level
      </button>}
      
      <button
        onClick={() => navigate('/game', { state: { lv } })}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Try again
      </button>

      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Home
      </button>
    </div>
  );
}
