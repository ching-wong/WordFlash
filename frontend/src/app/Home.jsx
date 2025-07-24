import { useState, useEffect } from "react";

import LevelButton from "../components/LevelButton";
import { getProgress, setProgress } from "../utils/storage";


export default function Home() {
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  useEffect(() => {
    const { unlockedLevel } = getProgress();
    setUnlockedLevel(unlockedLevel);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">WordFlash</h1>

      {/* First row: levels 1 to 3 */}
      <div className="flex gap-4">
        <LevelButton lv={1} unlockedLevel={unlockedLevel} />
        <LevelButton lv={2} unlockedLevel={unlockedLevel} />
        <LevelButton lv={3} unlockedLevel={unlockedLevel} />
      </div>

      {/* Second row: levels 4 to 6 */}
      <div className="flex gap-4">
        <LevelButton lv={4} unlockedLevel={unlockedLevel} />
        <LevelButton lv={5} unlockedLevel={unlockedLevel} />
        <LevelButton lv={6} unlockedLevel={unlockedLevel} />
      </div>

      {/* Third row: levels 7 to 9 */}
      <div className="flex gap-4">
        <LevelButton lv={7} unlockedLevel={unlockedLevel} />
        <LevelButton lv={8} unlockedLevel={unlockedLevel} />
        <LevelButton lv={9} unlockedLevel={unlockedLevel} />
      </div>

      {/* Fourth row: level 10, and reset button */}
      <div className="flex gap-4">
        <LevelButton lv={10} unlockedLevel={unlockedLevel} />
        <button
          onClick={() => {
            setProgress({ unlockedLevel: 1, highestScores: [] });
            setUnlockedLevel(1); // update local state too
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Reset Progress
        </button>
      </div>

      {/* Instructions */}
      <section className="text-left bg-gray-50 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-3">Game Instructions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            For each word:
            <ul className="list-decimal list-inside ml-5 mt-1 space-y-1">
              <li>A word is displayed on screen, when a timer starts automatically.</li>
              <li>You can press any key on your keyboard or click/tap the screen to hide the word and stop the timer.</li>
              <li>After a brief delay, an input field appears.</li>
              <li>You enter the word you just saw.</li>
            </ul>
          </li>
          <li>If your answer is correct, you move on to the next word.</li>
          <li>If it is incorrect, you can try again until you get it right.</li>
        </ul>
      </section>

      <h1>
        To see the code, visit{" "}
        <a href="https://github.com/ching-wong/WordFlash" target="_blank" rel="noopener noreferrer">
          https://github.com/ching-wong/WordFlash
        </a>.
      </h1>
    </div>
  );
}
