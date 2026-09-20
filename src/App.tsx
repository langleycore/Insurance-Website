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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('home');
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);
  const [levelUp, setLevelUp] = useState<number | null>(null);
  const stats = getStats();

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = firebaseAuthService.onAuthStateChange((user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async (): Promise<void> => {
    await firebaseAuthService.signInWithGoogle();
  };

  const handleLogout = async () => {
    await firebaseAuthService.signOut();
    setIsAuthenticated(false);
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

  if (!isAuthenticated) {
    return <Login onGoogleSignIn={handleGoogleSignIn} />;
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
            Logout
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
      {unlockedAchievements.length > 0 && (
        <AchievementUnlock 
          achievement={unlockedAchievements[0]}
          onClose={() => setUnlockedAchievements(prev => prev.slice(1))}
        />
      )}
      {levelUp !== null && (
        <LevelUp 
          level={levelUp}
          onClose={() => setLevelUp(null)}
        />
      )}
          <header className="app-header home-header">
            <h1>Virginia Personal Lines Insurance</h1>
            <p className="subtitle">Exam Prep</p>
            <button className="logout-button-home" onClick={handleLogout}>
              Logout
            </button>
            <div className="header-actions">
              <div className="level-badge" onClick={() => setMode('achievements')}>
                <span className="level-text">Level {stats.level}</span>
                <div className="xp-bar">
                  <div 
                    className="xp-fill" 
                    style={{ width: `${(stats.xp / stats.xpToNextLevel) * 100}%` }}
                  />
                </div>
                <span className="xp-text">{stats.xp}/{stats.xpToNextLevel} XP</span>
              </div>
            </div>
          </header>
      <main className="app-main home-main">
        <div className="home-content">
          <div className="welcome-section">
            <h2>Welcome, {firebaseAuthService.getUserDisplayName()}!</h2>
            <p>Prepare for your Virginia Personal Lines Insurance licensing exam with comprehensive practice materials designed specifically for the Series 11-07 exam.</p>
          </div>

          {/* Analytics Preview */}
          <div className="analytics-preview" onClick={() => setMode('analytics')}>
            <h3>📊 Your Progress</h3>
            <div className="quick-stats">
              <div className="quick-stat">
                <span className="stat-value">{firebaseAuthService.getOverallScore()}%</span>
                <span className="stat-label">Overall Score</span>
              </div>
              <div className="quick-stat">
                <span className="stat-value">{firebaseAuthService.getUserStats().testHistory.length}</span>
                <span className="stat-label">Sessions</span>
              </div>
            </div>
            <p className="view-analytics">View Detailed Analytics →</p>
          </div>

              <h3 className="section-title">Practice Activities</h3>
              <div className="mode-cards">
                <button className="mode-card" onClick={() => setMode('test')}>
                  <div className="mode-icon">📝</div>
                  <h3>Practice Test</h3>
                  <p>200 comprehensive questions</p>
                  <div className="mode-features">
                    <span>✓ All exam topics</span>
                    <span>✓ Detailed explanations</span>
                  </div>
                </button>

            <button className="mode-card" onClick={() => setMode('timed')}>
              <div className="mode-icon">⏱️</div>
              <h3>Timed Test</h3>
              <p>Simulate real exam conditions</p>
              <div className="mode-features">
                <span>✓ 15-120 minutes</span>
                <span>✓ Exam-day practice</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('flashcards')}>
              <div className="mode-icon">🎴</div>
              <h3>Flashcards</h3>
              <p>120 essential insurance terms</p>
              <div className="mode-features">
                <span>✓ Interactive flip cards</span>
                <span>✓ Key terminology</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('scenarios')}>
              <div className="mode-icon">💼</div>
              <h3>Scenarios</h3>
              <p>50 real-world situations</p>
              <div className="mode-features">
                <span>✓ Practical application</span>
                <span>✓ Complex situations</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('truefalse')}>
              <div className="mode-icon">✓✗</div>
              <h3>True/False</h3>
              <p>100 quick-fire statements</p>
              <div className="mode-features">
                <span>✓ Fast-paced learning</span>
                <span>✓ Core concepts</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('fillblank')}>
              <div className="mode-icon">✏️</div>
              <h3>Fill in the Blank</h3>
              <p>50 terminology exercises</p>
              <div className="mode-features">
                <span>✓ Active recall</span>
                <span>✓ Memory building</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('matching')}>
              <div className="mode-icon">🔗</div>
              <h3>Matching Game</h3>
              <p>30 term and definition sets</p>
              <div className="mode-features">
                <span>✓ Pattern recognition</span>
                <span>✓ Interactive learning</span>
              </div>
            </button>

                <button className="mode-card" onClick={() => setMode('videos')}>
                  <div className="mode-icon">📺</div>
                  <h3>Video Library</h3>
                  <p>Educational exam prep videos</p>
                  <div className="mode-features">
                    <span>✓ Expert explanations</span>
                    <span>✓ Visual learning</span>
                  </div>
                </button>

                <button className="mode-card" onClick={() => setMode('achievements')}>
                  <div className="mode-icon">🏆</div>
                  <h3>Achievements</h3>
                  <p>Unlock badges and rewards</p>
                  <div className="mode-features">
                    <span>✓ Track progress</span>
                    <span>✓ Earn points</span>
                  </div>
                </button>

                <button className="mode-card" onClick={() => setMode('quests')}>
                  <div className="mode-icon">🎯</div>
                  <h3>Side Quests</h3>
                  <p>Daily and weekly challenges</p>
                  <div className="mode-features">
                    <span>✓ Daily goals</span>
                    <span>✓ Bonus XP</span>
                  </div>
                </button>

                <button className="mode-card" onClick={() => setMode('settings')}>
                  <div className="mode-icon">⚙️</div>
                  <h3>Settings</h3>
                  <p>App controls and data management</p>
                  <div className="mode-features">
                    <span>✓ Clear cache</span>
                    <span>✓ Manage progress</span>
                  </div>
                </button>
          </div>

          <div className="info-section">
            <h3>About the Virginia Personal Lines Exam</h3>
            <p>The Series 11-07 exam consists of 100 scored questions (plus 5 pretest items) with a 120-minute time limit. A score of 70% is required to pass. This comprehensive study tool covers all exam topics including Virginia regulations, auto insurance, homeowners policies, dwelling policies, and general insurance principles.</p>
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p>Study smart, test with confidence</p>
      </footer>
    </div>
  );
}

export default App;
