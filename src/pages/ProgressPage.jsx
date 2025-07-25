// src/pages/ProgressPage.jsx
import { modules } from "../data/modules";
import { moduleProgressPct } from "../lib/progress";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";

export default function ProgressPage() {
  const list = Object.values(modules);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Progress</h2>

      <div className="space-y-5">
        {list.map((mod) => {
          const pct = moduleProgressPct(mod);
          return (
            <div key={mod.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{mod.name}</h3>
                <Link
                  to={`/lesson/${mod.id}/1`}
                  className="text-sm text-purple-700 hover:underline font-medium"
                >
                  Go to module →
                </Link>
              </div>
              <ProgressBar value={pct} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
