// Authentication and User Management Service
const CREDENTIALS = {
  username: 'mercy',
  password: 'Piedad85'
};

export interface UserStats {
  questionsAttempted: number;
  questionsCorrect: number;
  flashcardsStudied: number;
  flashcardsKnew: number;
  scenariosAttempted: number;
  scenariosCorrect: number;
  trueFalseAttempted: number;
  trueFalseCorrect: number;
  fillBlankAttempted: number;
  fillBlankCorrect: number;
  matchingAttempted: number;
  matchingCorrect: number;
  timedTestsCompleted: number;
  categoryScores: {
    [category: string]: {
      attempted: number;
      correct: number;
    };
  };
  testHistory: TestResult[];
  lastLogin: string;
  totalStudyTime: number; // in minutes
}

export interface TestResult {
  id: string;
  date: string;
  type: 'practice' | 'timed' | 'flashcards' | 'scenarios' | 'trueFalse' | 'fillBlank' | 'matching';
  duration?: number; // in minutes, if timed
  questionsAnswered: number;
  correctAnswers: number;
  score: number; // percentage
  categoryBreakdown: {
    [category: string]: {
      attempted: number;
      correct: number;
    };
  };
}

class AuthService {
  private readonly STORAGE_KEY = 'insurance_exam_user';
  private readonly SESSION_KEY = 'insurance_exam_session';
  private readonly SESSION_EXPIRY_KEY = 'insurance_exam_session_expiry';
  private readonly SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  isAuthenticated(): boolean {
    const sessionActive = localStorage.getItem(this.SESSION_KEY);
    const expiryTime = localStorage.getItem(this.SESSION_EXPIRY_KEY);

    if (!sessionActive || !expiryTime) {
      return false;
    }

    // Check if session has expired
    const now = new Date().getTime();
    const expiry = parseInt(expiryTime, 10);

    if (now > expiry) {
      // Session expired, clean up
      this.logout();
      return false;
    }

    return sessionActive === 'true';
  }

  login(username: string, password: string): boolean {
    if (username.toLowerCase() === CREDENTIALS.username.toLowerCase() && password === CREDENTIALS.password) {
      const now = new Date().getTime();
      const expiryTime = now + this.SESSION_DURATION_MS;

      localStorage.setItem(this.SESSION_KEY, 'true');
      localStorage.setItem(this.SESSION_EXPIRY_KEY, expiryTime.toString());
      
      this.updateLastLogin();
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.SESSION_EXPIRY_KEY);
  }

  getSessionExpiryDate(): Date | null {
    const expiryTime = localStorage.getItem(this.SESSION_EXPIRY_KEY);
    if (!expiryTime) {
      return null;
    }
    return new Date(parseInt(expiryTime, 10));
  }

  getRemainingSessionTime(): string {
    const expiryDate = this.getSessionExpiryDate();
    if (!expiryDate) {
      return 'No active session';
    }

    const now = new Date().getTime();
    const remaining = expiryDate.getTime() - now;

    if (remaining <= 0) {
      return 'Session expired';
    }

    const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }

  private updateLastLogin(): void {
    const stats = this.getUserStats();
    stats.lastLogin = new Date().toISOString();
    this.saveUserStats(stats);
  }

  getUserStats(): UserStats {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize new user
    const newStats: UserStats = {
      questionsAttempted: 0,
      questionsCorrect: 0,
      flashcardsStudied: 0,
      flashcardsKnew: 0,
      scenariosAttempted: 0,
      scenariosCorrect: 0,
      trueFalseAttempted: 0,
      trueFalseCorrect: 0,
      fillBlankAttempted: 0,
      fillBlankCorrect: 0,
      matchingAttempted: 0,
      matchingCorrect: 0,
      timedTestsCompleted: 0,
      categoryScores: {},
      testHistory: [],
      lastLogin: new Date().toISOString(),
      totalStudyTime: 0
    };
    this.saveUserStats(newStats);
    return newStats;
  }

  saveUserStats(stats: UserStats): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stats));
  }

  recordTestResult(result: TestResult): void {
    const stats = this.getUserStats();
    stats.testHistory.push(result);

    // Update global stats
    switch (result.type) {
      case 'practice':
        stats.questionsAttempted += result.questionsAnswered;
        stats.questionsCorrect += result.correctAnswers;
        break;
      case 'timed':
        stats.timedTestsCompleted++;
        stats.questionsAttempted += result.questionsAnswered;
        stats.questionsCorrect += result.correctAnswers;
        break;
      case 'flashcards':
        stats.flashcardsStudied += result.questionsAnswered;
        stats.flashcardsKnew += result.correctAnswers;
        break;
      case 'scenarios':
        stats.scenariosAttempted += result.questionsAnswered;
        stats.scenariosCorrect += result.correctAnswers;
        break;
      case 'trueFalse':
        stats.trueFalseAttempted += result.questionsAnswered;
        stats.trueFalseCorrect += result.correctAnswers;
        break;
      case 'fillBlank':
        stats.fillBlankAttempted += result.questionsAnswered;
        stats.fillBlankCorrect += result.correctAnswers;
        break;
      case 'matching':
        stats.matchingAttempted += result.questionsAnswered;
        stats.matchingCorrect += result.correctAnswers;
        break;
    }

    // Update category scores
    Object.entries(result.categoryBreakdown).forEach(([category, scores]) => {
      if (!stats.categoryScores[category]) {
        stats.categoryScores[category] = { attempted: 0, correct: 0 };
      }
      stats.categoryScores[category].attempted += scores.attempted;
      stats.categoryScores[category].correct += scores.correct;
    });

    this.saveUserStats(stats);
  }

  addStudyTime(minutes: number): void {
    const stats = this.getUserStats();
    stats.totalStudyTime += minutes;
    this.saveUserStats(stats);
  }

  getCategoryPerformance(): { category: string; percentage: number; attempted: number }[] {
    const stats = this.getUserStats();
    return Object.entries(stats.categoryScores)
      .map(([category, scores]) => ({
        category,
        percentage: scores.attempted > 0 ? Math.round((scores.correct / scores.attempted) * 100) : 0,
        attempted: scores.attempted
      }))
      .sort((a, b) => b.attempted - a.attempted);
  }

  getWeakAreas(): string[] {
    const performance = this.getCategoryPerformance();
    return performance
      .filter(p => p.attempted >= 5 && p.percentage < 70)
      .map(p => p.category);
  }

  getStrongAreas(): string[] {
    const performance = this.getCategoryPerformance();
    return performance
      .filter(p => p.attempted >= 5 && p.percentage >= 85)
      .map(p => p.category);
  }

  getOverallScore(): number {
    const stats = this.getUserStats();
    const totalAttempted = stats.questionsAttempted + stats.scenariosAttempted + 
                          stats.trueFalseAttempted + stats.fillBlankAttempted + stats.matchingAttempted;
    const totalCorrect = stats.questionsCorrect + stats.scenariosCorrect + 
                        stats.trueFalseCorrect + stats.fillBlankCorrect + stats.matchingCorrect;
    return totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  }

  resetAllData(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.SESSION_EXPIRY_KEY);
  }
}

export const authService = new AuthService();
