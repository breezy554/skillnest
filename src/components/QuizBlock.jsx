// src/components/QuizBlock.jsx
import { useState } from "react";

function QuestionCard({ q, index, locked, selected, onSelect }) {
  const isChosen = (i) => selected === i;
  const correct = locked && selected === q.answer;

  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-white">
      <p className="font-medium text-gray-900 mb-3">
        {index + 1}. {q.question}
      </p>
      <ul className="space-y-2">
        {q.options.map((opt, i) => {
          const isThisCorrect = locked && i === q.answer;
          const isThisWrong = locked && isChosen(i) && !isThisCorrect;

          return (
            <li
              key={i}
              className={[
                "cursor-pointer border rounded-md p-3 text-sm transition",
                !locked && isChosen(i) ? "border-purple-600 bg-purple-50" : "border-gray-200 bg-white",
                isThisCorrect ? "border-green-600 bg-green-50" : "",
                isThisWrong ? "border-red-600 bg-red-50" : ""
              ].join(" ")}
              onClick={() => !locked && onSelect(i)}
            >
              {opt}
            </li>
          );
        })}
      </ul>

      {locked && (
        <div className="mt-3 text-sm text-gray-700">
          {correct ? (
            <p className="text-green-700 font-semibold">✅ Correct!</p>
          ) : (
            <p className="text-red-700 font-semibold">❌ Not quite.</p>
          )}
          <p className="mt-1">{q.explain}</p>
        </div>
      )}
    </div>
  );
}

export default function QuizBlock({ quizzes }) {
  const [selected, setSelected] = useState(Array(quizzes.length).fill(null));
  const [locked, setLocked] = useState(false);

  const unanswered = selected.some((s) => s === null);
  const correctCount = locked
    ? quizzes.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0)
    : 0;

  const submitAll = () => setLocked(true);
  const resetAll = () => {
    setLocked(false);
    setSelected(Array(quizzes.length).fill(null));
  };

  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Quiz</h3>

      {quizzes.map((q, idx) => (
        <QuestionCard
          key={idx}
          q={q}
          index={idx}
          locked={locked}
          selected={selected[idx]}
          onSelect={(ans) => {
            const copy = [...selected];
            copy[idx] = ans;
            setSelected(copy);
          }}
        />
      ))}

      {!locked ? (
        <button
          onClick={submitAll}
          disabled={unanswered}
          className="mt-4 bg-purple-700 text-white px-5 py-2 rounded-md font-medium hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-4">
          <p className="text-gray-800 font-medium">
            You got <span className="text-purple-700">{correctCount}</span> / {quizzes.length} correct.
          </p>
          <button
            onClick={resetAll}
            className="mt-2 text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Reset quiz
          </button>
        </div>
      )}
    </section>
  );
}
