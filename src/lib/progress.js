// src/lib/progress.js
import modules from "../data/modules";

// Firebase-style key format: "budgeting-2"
export function makeLessonKey(moduleId, lessonId) {
  return `${moduleId}-${lessonId}`;
}

// Total # of lessons across all modules
export function getTotalLessons() {
  return modules.reduce((count, mod) => count + mod.lessons.length, 0);
}
