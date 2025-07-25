// src/components/ProgressBar.jsx
export default function ProgressBar({ value }) {
  return (
    <div className="w-full">
      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-purple-600 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="mt-2 text-xs text-gray-600 font-medium">{value}% complete</div>
    </div>
  );
}
