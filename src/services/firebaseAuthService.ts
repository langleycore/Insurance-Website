// Firebase Authentication Service
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import firebaseConfig from '../config/firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account' // Always show account selection
});

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
  totalStudyTime: number;
}

export interface TestResult {
  id: string;
  date: string;
  type: 'practice' | 'timed' | 'flashcards' | 'scenarios' | 'trueFalse' | 'fillBlank' | 'matching';
  duration?: number;
  questionsAnswered: number;
  correctAnswers: number;
  score: number;
  categoryBreakdown: {
    [category: string]: {
      attempted: number;
      correct: number;
    };
  };
}

class FirebaseAuthService {
  private readonly STORAGE_PREFIX = 'insurance_exam_';

  /**
   * Sign in with Google
   */
  async signInWithGoogle(): Promise<User> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      this.updateLastLogin(result.user.email || '');
      return result.user;
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      throw new Error(error.message || 'Failed to sign in with Google');
    }
  }

  /**
   * Sign out
   */
  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
  }

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  /**
   * Listen to auth state changes
   */
  onAuthStateChange(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, callback);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return auth.currentUser !== null;
  }

  /**
   * Get user email
   */
  getUserEmail(): string | null {
    return auth.currentUser?.email || null;
  }

  /**
   * Get user display name
   */
  getUserDisplayName(): string {
    return auth.currentUser?.displayName || auth.currentUser?.email?.split('@')[0] || 'User';
  }

  // User Stats Management (stored per user email)
  private getStorageKey(email: string, key: string): string {
    // Use email hash to avoid storing email directly in localStorage keys
    const emailHash = btoa(email).substring(0, 10);
    return `${this.STORAGE_PREFIX}${emailHash}_${key}`;
  }

  private updateLastLogin(email: string): void {
    const stats = this.getUserStats(email);
    stats.lastLogin = new Date().toISOString();
    this.saveUserStats(email, stats);
  }

  getUserStats(email?: string): UserStats {
    const userEmail = email || this.getUserEmail();
    if (!userEmail) {
      return this.getDefaultStats();
    }

    const stored = localStorage.getItem(this.getStorageKey(userEmail, 'stats'));
    if (stored) {
      return JSON.parse(stored);
    }
    
    const newStats = this.getDefaultStats();
    this.saveUserStats(userEmail, newStats);
    return newStats;
  }

  private getDefaultStats(): UserStats {
    return {
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
  }

  saveUserStats(email: string, stats: UserStats): void {
    localStorage.setItem(this.getStorageKey(email, 'stats'), JSON.stringify(stats));
  }

  recordTestResult(result: TestResult): void {
    const email = this.getUserEmail();
    if (!email) return;

    const stats = this.getUserStats(email);
    stats.testHistory.push(result);

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

    Object.entries(result.categoryBreakdown).forEach(([category, scores]) => {
      if (!stats.categoryScores[category]) {
        stats.categoryScores[category] = { attempted: 0, correct: 0 };
      }
      stats.categoryScores[category].attempted += scores.attempted;
      stats.categoryScores[category].correct += scores.correct;
    });

    this.saveUserStats(email, stats);
  }

  addStudyTime(minutes: number): void {
    const email = this.getUserEmail();
    if (!email) return;

    const stats = this.getUserStats(email);
    stats.totalStudyTime += minutes;
    this.saveUserStats(email, stats);
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
    const email = this.getUserEmail();
    if (!email) return;

    localStorage.removeItem(this.getStorageKey(email, 'stats'));
  }
}

export const firebaseAuthService = new FirebaseAuthService();
export { auth };
