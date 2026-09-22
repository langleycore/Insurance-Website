import { useState, useEffect } from 'react';
import Login from './components/Login';
import PracticeTest from './components/PracticeTest';
import Flashcards from './components/Flashcards';
import Scenarios from './components/Scenarios';
import TrueFalseQuiz from './components/TrueFalseQuiz';
import FillBlankQuiz from './components/FillBlankQuiz';
import MatchingGame from './components/MatchingGame';
import Analytics from './components/Analytics';
import TimedTest from './components/TimedTest';
import Videos from './components/Videos';
import Settings from './components/Settings';
import Achievements from './components/Achievements';
import SideQuests from './components/SideQuests';
import AchievementUnlock from './components/AchievementUnlock';
import LevelUp from './components/LevelUp';
import { firebaseAuthService } from './services/firebaseAuthService';
import { Achievement } from './data/achievements';
import { getStats } from './utils/gamification';
import './styles.css';

type Mode = 'home' | 'test' | 'timed' | 'flashcards' | 'scenarios' | 'truefalse' | 'fillblank' | 'matching' | 'analytics' | 'videos' | 'settings' | 'achievements' | 'quests';

function App() {
  // TESTING: Bypass authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<Mode>('matching'); // Start directly in matching mode
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);
  const [levelUp, setLevelUp] = useState<number | null>(null);
  const stats = getStats();

  // Comment out auth state listener for testing
  /*
  useEffect(() => {
    const unsubscribe = firebaseAuthService.onAuthStateChange((user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  */

  useEffect(() => {
    window.scrollTo(0, 0);
    const mainContent = document.querySelector('.app-main');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    const questionContainer = document.querySelector('.question-container');
    if (questionContainer) {
      questionContainer.scrollTop = 0;
    }
  }, [mode]);

  const handleGoogleSignIn = async (): Promise<void> => {
    await firebaseAuthService.signInWithGoogle();
  };

  const handleLogout = async () => {
    setMode('home');
  };

  if (isLoading) {
    return (
      <div className="app loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (mode) {
      case 'test':
        return <PracticeTest />;
      case 'timed':
        return <TimedTest />;
      case 'flashcards':
        return <Flashcards />;
      case 'scenarios':
        return <Scenarios />;
      case 'truefalse':
        return <TrueFalseQuiz />;
      case 'fillblank':
        return <FillBlankQuiz />;
      case 'matching':
        return <MatchingGame />;
      case 'analytics':
        return <Analytics />;
      case 'videos':
        return <Videos />;
      case 'settings':
        return <Settings />;
      case 'achievements':
        return <Achievements />;
      case 'quests':
        return <SideQuests />;
      default:
        return null;
    }
  };

  if (mode !== 'home') {
    return (
      <div className="app">
        {unlockedAchievements.length > 0 && (
          <AchievementUnlock 
            achievement={unlockedAchievements[0]}
            onClose={() => setUnlockedAchievements(prev => prev.slice(1))}
          />
        )}
        <header className="app-header">
          <button className="back-button" onClick={() => setMode('home')}>
            ← Back
          </button>
          <h1>
            {mode === 'test' && 'Practice Test'}
            {mode === 'timed' && 'Timed Test'}
            {mode === 'flashcards' && 'Flashcards'}
            {mode === 'scenarios' && 'Scenarios'}
            {mode === 'truefalse' && 'True/False'}
            {mode === 'fillblank' && 'Fill in the Blank'}
            {mode === 'matching' && 'Matching Game'}
            {mode === 'analytics' && 'Performance Analytics'}
            {mode === 'videos' && 'Video Library'}
            {mode === 'settings' && 'Settings'}
            {mode === 'achievements' && 'Achievements'}
            {mode === 'quests' && 'Side Quests'}
          </h1>
          <button className="logout-button" onClick={handleLogout}>
            Home
          </button>
        </header>
        <main className="app-main">
          {renderContent()}
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header home-header">
        <h1>TEST MODE - Matching Game</h1>
        <p className="subtitle">Direct Access</p>
      </header>
      <main className="app-main home-main">
        <div className="home-content">
          <button className="mode-card" onClick={() => setMode('matching')}>
            <div className="mode-icon">🔗</div>
            <h3>Matching Game</h3>
            <p>Test the new puzzle piece interface</p>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
