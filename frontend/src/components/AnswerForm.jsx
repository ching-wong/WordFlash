import { useState } from 'react'

export default function AnswerForm({ onSubmit }) {

  const [answer, setAnswer] = useState("")

  function submit(e) {
    e.preventDefault(); // stop page reload
    onSubmit(answer);
    setAnswer("");
  }

  function handleChange(e) {
    const value = e.target.value;
    // keep only English letters
    const filtered = value.replace(/[^a-zA-Z]/g, "");
    // maximum 15 characters
    const trimmed = filtered.slice(0, 15);
    setAnswer(trimmed);
  }

  function handlePaste(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={submit} className="flex items-center gap-2 w-full max-w-md px-2">
        <input
          value={answer}
          onChange={handleChange}
          onPaste={handlePaste} // user cannot paste anything here
          autoFocus
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          className="flex-1 border border-gray-400 rounded px-3 py-2 text-2xl text-center"
          maxLength={20}
          type="text"
        />
        <button
          type="submit"
          className="text-3xl px-2 text-blue-600 hover:text-blue-800 transition"
          aria-label="Submit"
        >
          ⏎
        </button>
      </form>
    </div>

  )
}