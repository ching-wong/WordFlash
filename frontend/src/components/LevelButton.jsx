import { useNavigate } from 'react-router-dom';

function LevelButton({ lv }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/game', { state: { lv } })}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {`Level ${lv}`}
    </button>
  )
}

export default LevelButton