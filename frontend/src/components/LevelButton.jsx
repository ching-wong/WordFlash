import { useNavigate } from 'react-router-dom';

function LevelButton({ lv, unlockedLevel }) {
  const navigate = useNavigate();

  const isLocked = lv > unlockedLevel;

  return (
    <button
      onClick={() => navigate('/game', { state: { lv } })}
      disabled={isLocked}
      className={`px-4 py-2 rounded transition ${
        isLocked
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {`Level ${lv}`}
    </button>
  )
}

export default LevelButton