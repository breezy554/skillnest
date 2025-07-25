// src/components/QuizBlock.jsx
import { useState } from "react";

export default function QuizBlock({ quiz }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    setLocked(true);
  };

  const isCorrect = locked && selected === quiz.answer;

  return (
    <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Check</h3>
      <p className="text-gray-800 mb-4">{quiz.question}</p>

      <ul className="space-y-3">
        {quiz.options.map((opt, idx) => {
          const isChosen = selected === idx;
          const correct = locked && idx === quiz.answer;
          const wrong = locked && isChosen && !correct;

          return (
            <li
              key={idx}
              className={[
                "cursor-pointer border rounded-lg p-3 transition",
                isChosen && !locked ? "border-purple-600 bg-purple-50" : "border-gray-200 bg-white",
                correct ? "border-green-600 bg-green-50" : "",
                wrong ? "border-red-600 bg-red-50" : ""
              ].join(" ")}
              onClick={() => !locked && setSelected(idx)}
            >
              <span className="text-sm text-gray-800">{opt}</span>
            </li>
          );
        })}
      </ul>

      {!locked ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-5 bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2 rounded-md font-medium hover:bg-purple-800 transition"
        >
          Submit
        </button>
      ) : (
        <div className="mt-5">
          {isCorrect ? (
            <p className="text-green-700 font-medium">✅ Correct!</p>
          ) : (
            <p className="text-red-700 font-medium">❌ Not quite.</p>
          )}
          <p className="text-gray-700 mt-2 text-sm">{quiz.explain}</p>
        </div>
      )}
    </div>
  );
}
