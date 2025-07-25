// src/lib/progress.js
const KEY = 'skillnest_progress_v1';

export function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

export function setProgress(progress) {
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function markLessonComplete(moduleId, lessonId) {
  const progress = getProgress();
  if (!progress[moduleId]) progress[moduleId] = { completed: [] };
  if (!progress[moduleId].completed.includes(lessonId)) {
    progress[moduleId].completed.push(lessonId);
    setProgress(progress);
  }
}

export function isLessonComplete(moduleId, lessonId) {
  const progress = getProgress();
  return !!progress[moduleId]?.completed?.includes(lessonId);
}

export function moduleProgressPct(module) {
  const total = module.lessons.length;
  const done = (getProgress()[module.id]?.completed?.length ?? 0);
  return Math.round((done / total) * 100);
}
