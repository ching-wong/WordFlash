import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { unlockScore } from '../constants/gameLevels'
import { getProgress, setProgress } from '../utils/storage';

export default function Result() {
  const navigate = useNavigate();

  const location = useLocation();
  const { lv, score } = location.state || {};
  
  const minScore = unlockScore[lv];
  const isNextLevel = minScore <= score && lv < 10;

  const [highestScores, setHighestScores] = useState([]);

  useEffect(() => {
    const progress = getProgress();
    setHighestScores(progress.highestScores || []);

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

      <div className="flex flex-row items-center justify-center gap-4 flex-wrap">

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


      {/* History */}
      <div className="mt-8 bg-gray-100 p-4 rounded shadow w-72">
        <h3 className="text-xl font-semibold mb-2 text-center text-gray-700">History</h3>
        <ul className="list-decimal list-inside text-gray-800 space-y-1">
          {highestScores.length === 0 && (
            <li className="text-gray-500">No scores yet.</li>
          )}
          {highestScores.map((s, idx) => (
            <li
              key={idx}
              className={s === score ? 'font-bold text-blue-600' : ''}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
