const STORAGE_KEY = 'wordflash_progress';

const defaultProgress = {
  unlockedLevel: 1,
  highestScores: [],
};

export function getProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : defaultProgress;
}

export function setProgress(newProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
}
