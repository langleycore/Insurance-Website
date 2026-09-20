import { Achievement, SideQuest, achievements, dailySideQuests, weeklyChallenges } from '../data/achievements';

export interface UserStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalPoints: number;
  highScore: number;
  perfectTests: number;
  totalTests: number;
  totalQuestions: number;
  currentStreak: number;
  bestStreak: number;
  dailyStreak: number;
  lastStudyDate: string;
  categoryMastery: Record<string, number>;
  fastestTestTime: number;
  unlockedAchievements: string[];
  sideQuests: SideQuest[];
  weeklyChallenges: SideQuest[];
}

const STORAGE_KEY = 'gamification_stats';

export const getStats = (): UserStats => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const stats = JSON.parse(stored);
    // Refresh daily quests if it's a new day
    const lastDate = new Date(stats.lastStudyDate || 0).toDateString();
    const today = new Date().toDateString();
    if (lastDate !== today) {
      stats.sideQuests = dailySideQuests();
    }
    return stats;
  }
  
  return {
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    totalPoints: 0,
    highScore: 0,
    perfectTests: 0,
    totalTests: 0,
    totalQuestions: 0,
    currentStreak: 0,
    bestStreak: 0,
    dailyStreak: 0,
    lastStudyDate: new Date().toISOString(),
    categoryMastery: {},
    fastestTestTime: Infinity,
    unlockedAchievements: [],
    sideQuests: dailySideQuests(),
    weeklyChallenges: weeklyChallenges()
  };
};

export const saveStats = (stats: UserStats) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const addXP = (amount: number): { newLevel: boolean; level: number } => {
  const stats = getStats();
  stats.xp += amount;
  
  let newLevel = false;
  while (stats.xp >= stats.xpToNextLevel) {
    stats.xp -= stats.xpToNextLevel;
    stats.level += 1;
    stats.xpToNextLevel = Math.floor(100 * Math.pow(1.5, stats.level - 1));
    newLevel = true;
  }
  
  saveStats(stats);
  return { newLevel, level: stats.level };
};

export const updateDailyStreak = () => {
  const stats = getStats();
  const lastDate = new Date(stats.lastStudyDate).toDateString();
  const today = new Date().toDateString();
  
  if (lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastDate === yesterday.toDateString()) {
      stats.dailyStreak += 1;
    } else {
      stats.dailyStreak = 1;
    }
    
    stats.lastStudyDate = new Date().toISOString();
    saveStats(stats);
  }
};

export const recordTestResult = (
  score: number,
  totalQuestions: number,
  category: string,
  timeInSeconds: number,
  correctAnswersInRow: number
): Achievement[] => {
  const stats = getStats();
  const newAchievements: Achievement[] = [];
  
  // Update basic stats
  stats.totalTests += 1;
  stats.totalQuestions += totalQuestions;
  stats.highScore = Math.max(stats.highScore, score);
  
  if (score === 100) {
    stats.perfectTests += 1;
  }
  
  if (timeInSeconds < stats.fastestTestTime) {
    stats.fastestTestTime = timeInSeconds;
  }
  
  // Update streak
  stats.currentStreak = correctAnswersInRow;
  stats.bestStreak = Math.max(stats.bestStreak, correctAnswersInRow);
  
  // Update category mastery
  if (score >= 90) {
    stats.categoryMastery[category] = (stats.categoryMastery[category] || 0) + 1;
  }
  
  // Update daily streak
  updateDailyStreak();
  
  // Check achievements
  achievements.forEach(achievement => {
    if (stats.unlockedAchievements.includes(achievement.id)) return;
    
    let unlocked = false;
    
    switch (achievement.requirement.type) {
      case 'score':
        unlocked = score >= achievement.requirement.value;
        break;
      case 'perfect_test':
        unlocked = stats.perfectTests >= achievement.requirement.value;
        break;
      case 'streak':
        unlocked = stats.currentStreak >= achievement.requirement.value;
        break;
      case 'total_questions':
        unlocked = stats.totalQuestions >= achievement.requirement.value;
        break;
      case 'speed':
        unlocked = timeInSeconds <= achievement.requirement.value;
        break;
      case 'daily_streak':
        unlocked = stats.dailyStreak >= achievement.requirement.value;
        break;
      case 'category_master':
        if (achievement.requirement.category) {
          unlocked = (stats.categoryMastery[achievement.requirement.category] || 0) >= achievement.requirement.value;
        } else {
          const totalMastery = Object.values(stats.categoryMastery).reduce((sum, val) => sum + val, 0);
          unlocked = totalMastery >= achievement.requirement.value;
        }
        break;
    }
    
    if (unlocked) {
      stats.unlockedAchievements.push(achievement.id);
      stats.totalPoints += achievement.points;
      addXP(achievement.points * 2);
      newAchievements.push({
        ...achievement,
        unlockedAt: Date.now()
      });
    }
  });
  
  // Update side quests
  stats.sideQuests = stats.sideQuests.map(quest => {
    if (quest.completed) return quest;
    
    if (quest.id === 'daily_25') {
      quest.progress = Math.min(quest.target, quest.progress + totalQuestions);
    }
    if (quest.id === 'daily_perfect' && correctAnswersInRow >= 5) {
      quest.progress = quest.target;
    }
    
    if (quest.progress >= quest.target) {
      quest.completed = true;
      addXP(50);
    }
    
    return quest;
  });
  
  // Update weekly challenges
  stats.weeklyChallenges = stats.weeklyChallenges.map(challenge => {
    if (challenge.completed) return challenge;
    
    if (challenge.id === 'weekly_tests') {
      challenge.progress = Math.min(challenge.target, challenge.progress + 1);
    }
    if (challenge.id === 'weekly_score' && score >= 85) {
      challenge.progress = Math.min(challenge.target, challenge.progress + 1);
    }
    
    if (challenge.progress >= challenge.target) {
      challenge.completed = true;
      addXP(200);
    }
    
    return challenge;
  });
  
  saveStats(stats);
  return newAchievements;
};

export const updateFlashcardProgress = (count: number) => {
  const stats = getStats();
  
  stats.sideQuests = stats.sideQuests.map(quest => {
    if (quest.id === 'daily_flashcards' && !quest.completed) {
      quest.progress = Math.min(quest.target, quest.progress + count);
      if (quest.progress >= quest.target) {
        quest.completed = true;
        addXP(30);
      }
    }
    return quest;
  });
  
  saveStats(stats);
};

export const getUnlockedAchievements = (): Achievement[] => {
  const stats = getStats();
  return achievements
    .filter(a => stats.unlockedAchievements.includes(a.id))
    .map(a => ({
      ...a,
      unlockedAt: Date.now() // We'd need to store this in stats for real timestamps
    }));
};

export const getLockedAchievements = (): Achievement[] => {
  const stats = getStats();
  return achievements.filter(a => !stats.unlockedAchievements.includes(a.id));
};

export const getProgressToNextAchievement = (achievement: Achievement): number => {
  const stats = getStats();
  
  switch (achievement.requirement.type) {
    case 'score':
      return stats.highScore >= achievement.requirement.value ? 100 : (stats.highScore / achievement.requirement.value) * 100;
    case 'perfect_test':
      return (stats.perfectTests / achievement.requirement.value) * 100;
    case 'streak':
      return (stats.bestStreak / achievement.requirement.value) * 100;
    case 'total_questions':
      return (stats.totalQuestions / achievement.requirement.value) * 100;
    case 'daily_streak':
      return (stats.dailyStreak / achievement.requirement.value) * 100;
    case 'category_master':
      if (achievement.requirement.category) {
        const progress = stats.categoryMastery[achievement.requirement.category] || 0;
        return (progress / achievement.requirement.value) * 100;
      }
      const totalMastery = Object.values(stats.categoryMastery).reduce((sum, val) => sum + val, 0);
      return (totalMastery / achievement.requirement.value) * 100;
    default:
      return 0;
  }
};
