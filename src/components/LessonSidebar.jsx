// src/components/LessonSidebar.jsx
import { Link, useParams } from "react-router-dom";
import { isLessonComplete } from "../lib/progress";

export default function LessonSidebar({ module }) {
  const { moduleId, lessonId } = useParams();

  return (
    <aside className="hidden lg:block w-72 border-r border-gray-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide uppercase">
        {module.name}
      </h3>
      <ul className="space-y-2">
        {module.lessons.map((lsn, idx) => {
          const active = lsn.id === lessonId;
          const done = isLessonComplete(moduleId, lsn.id);
          return (
            <li key={lsn.id}>
              <Link
                to={`/lesson/${moduleId}/${lsn.id}`}
                className={[
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm transition",
                  active ? "bg-purple-100 text-purple-700 font-semibold" : "hover:bg-gray-100 text-gray-700"
                ].join(" ")}
              >
                <span className="truncate">{idx + 1}. {lsn.title}</span>
                {done && <span className="ml-2 text-green-600">✔</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
