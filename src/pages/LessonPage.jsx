import { useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { modules } from "../data/modules";
import LessonSidebar from "../components/LessonSidebar";
import ProgressBar from "../components/ProgressBar";
import QuizBlock from "../components/QuizBlock";
import { makeLessonKey } from "../lib/progress";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const mod = modules[moduleId];
  const lessonIndex = useMemo(() => mod?.lessons.findIndex(l => l.id === lessonId), [mod, lessonId]);

  const [isCompleted, setIsCompleted] = useState(false);

  if (!mod || lessonIndex === -1) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-medium">Module or lesson not found.</p>
        <Link to="/modules" className="text-purple-600 underline mt-4 inline-block">Back to modules</Link>
      </div>
    );
  }

  const lesson = mod.lessons[lessonIndex];
  const totalLessons = mod.lessons.length;
  const isLast = lessonIndex === totalLessons - 1;
  const isFirst = lessonIndex === 0;

  const progress = 0; // Progress bar can be made dynamic later per module

  const handleMarkComplete = async () => {
    if (!user) return;

    const key = makeLessonKey(moduleId, lesson.id);
    const ref = doc(db, "users", user.uid);

    try {
      const snap = await getDoc(ref);
      const current = snap.exists() ? snap.data().progress || {} : {};

      await setDoc(
        ref,
        {
          progress: { ...current, [key]: true },
          lastLesson: { moduleId, lessonId },
        },
        { merge: true }
      );

      setIsCompleted(true);
    } catch (err) {
      console.error("Failed to save progress", err);
    }
  };

  const goPrev = () => {
    if (!isFirst) navigate(`/lesson/${moduleId}/${mod.lessons[lessonIndex - 1].id}`);
  };

  const goNext = () => {
    if (!isLast) navigate(`/lesson/${moduleId}/${mod.lessons[lessonIndex + 1].id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky header with progress */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm transition">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{mod.name}</h1>
            <p className="text-sm text-gray-500">Lesson {lessonIndex + 1} of {totalLessons}</p>
          </div>
          <div className="w-full sm:w-64">
            <ProgressBar value={progress} />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex">
        <LessonSidebar module={mod} />

        <main className="flex-1 px-4 sm:px-6 py-8">
          <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{lesson.title}</h2>

            <div className="prose prose-gray max-w-none mb-6">
              {lesson.body.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>

            <QuizBlock quizzes={lesson.quizzes} />

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  disabled={isFirst}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Prev
                </button>

                <button
                  onClick={goNext}
                  disabled={isLast}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>

              <button
                onClick={handleMarkComplete}
                className={[
                  "px-5 py-2 rounded-md font-semibold transition",
                  isCompleted
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-purple-700 text-white hover:bg-purple-800"
                ].join(" ")}
              >
                {isCompleted ? "Completed ✔" : "Mark Complete"}
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
