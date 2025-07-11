import LevelButton from '../components/LevelButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">WordFlash</h1>

      {/* First row: levels 1 to 3 */}
      <div className="flex gap-4">
        <LevelButton lv={1} />
        <LevelButton lv={2} />
        <LevelButton lv={3} />
      </div>

      {/* Second row: levels 4 to 6 */}
      <div className="flex gap-4">
        <LevelButton lv={4} />
        <LevelButton lv={5} />
        <LevelButton lv={6} />
      </div>

      {/* Third row: levels 7 to 9 */}
      <div className="flex gap-4">
        <LevelButton lv={7} />
        <LevelButton lv={8} />
        <LevelButton lv={9} />
      </div>

      <div className="flex gap-4">
        <LevelButton lv={10} />
      </div>

      {/* Instructions */}
      <section className="text-left bg-gray-50 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-3">Game Instructions</h2>
        <p className="mt-4 font-medium text-gray-800">Choose Level 1 to start.</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            For each word:
            <ul className="list-decimal list-inside ml-5 mt-1 space-y-1">
              <li>The word is displayed on screen.</li>
              <li>A timer starts automatically.</li>
              <li>You can press any key on your keyboard or click/tap the screen to hide the word and stop the timer.</li>
              <li>After a brief delay, an input field appears.</li>
              <li>You enter the word you just saw.</li>
            </ul>
          </li>
          <li>If your answer is correct, you move on to the next word.</li>
          <li>If it is incorrect, you can try again until you get it right.</li>
        </ul>
      </section>
    </div>
  );
}
