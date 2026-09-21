import { Achievement } from '../data/achievements';

type AchievementCallback = (achievements: Achievement[]) => void;

class AchievementEventEmitter {
  private listeners: AchievementCallback[] = [];

  subscribe(callback: AchievementCallback): () => void {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  emit(achievements: Achievement[]): void {
    if (achievements.length > 0) {
      this.listeners.forEach(listener => listener(achievements));
    }
  }
}

export const achievementEmitter = new AchievementEventEmitter();
