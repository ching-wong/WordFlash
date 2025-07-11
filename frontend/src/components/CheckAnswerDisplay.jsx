export default function CheckAnswerDisplay({ answer, word }) {
  const isCorrect = answer === word;

  return (
    <div className="flex items-center space-x-4 text-2xl mt-6">
      <span>Your answer: <span className="font-semibold">{answer}</span></span>
      {isCorrect ? (
        <span className="text-green-600 text-3xl">✔️</span>
      ) : (
        <span className="text-red-600 text-3xl">❌</span>
      )}
    </div>
  );
}
