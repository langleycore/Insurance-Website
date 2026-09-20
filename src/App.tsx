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
import { firebaseAuthService } from './services/firebaseAuthService';
import './styles.css';

type Mode = 'home' | 'test' | 'timed' | 'flashcards' | 'scenarios' | 'truefalse' | 'fillblank' | 'matching' | 'analytics' | 'videos' | 'settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('home');

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
          default:
            return null;
        }
      };

  if (mode !== 'home') {
    return (
      <div className="app">
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
          <header className="app-header home-header">
            <h1>Virginia Personal Lines Insurance</h1>
            <p className="subtitle">Exam Prep</p>
            <div className="header-actions">
              <span className="session-info">Welcome, {firebaseAuthService.getUserDisplayName()}!</span>
              <button className="logout-button-home" onClick={handleLogout}>
                Logout
              </button>
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
                <button className="mode-card" onClick={() => setMode('settings')}>
                  <div className="mode-icon">⚙️</div>
                  <h3>Settings</h3>
                  <p>Clear cache, manage data, and app controls</p>
                  <div className="mode-features">
                    <span>✓ Clear cache</span>
                    <span>✓ Manage progress</span>
                    <span>✓ App info</span>
                  </div>
                </button>

                <button className="mode-card" onClick={() => setMode('videos')}>
                  <div className="mode-icon">📺</div>
                  <h3>Video Library</h3>
                  <p>Educational videos covering all exam topics</p>
                  <div className="mode-features">
                    <span>✓ Expert explanations</span>
                    <span>✓ Visual learning</span>
                    <span>✓ All categories</span>
                  </div>
                </button>

                <button className="mode-card" onClick={() => setMode('test')}>
                  <div className="mode-icon">📝</div>
                  <h3>Practice Test</h3>
                  <p>200 comprehensive questions with instant feedback</p>
                  <div className="mode-features">
                    <span>✓ All exam topics</span>
                    <span>✓ Detailed explanations</span>
                    <span>✓ Track your score</span>
                  </div>
                </button>

            <button className="mode-card" onClick={() => setMode('timed')}>
              <div className="mode-icon">⏱️</div>
              <h3>Timed Test</h3>
              <p>Simulate real exam conditions with timer</p>
              <div className="mode-features">
                <span>✓ 15, 30, 60, or 120 minutes</span>
                <span>✓ Exam-day practice</span>
                <span>✓ Performance metrics</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('flashcards')}>
              <div className="mode-icon">🎴</div>
              <h3>Flashcards</h3>
              <p>120 essential insurance terms and definitions</p>
              <div className="mode-features">
                <span>✓ Interactive flip cards</span>
                <span>✓ Self-assessment</span>
                <span>✓ Key terminology</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('scenarios')}>
              <div className="mode-icon">🎯</div>
              <h3>Scenarios</h3>
              <p>50 real-world insurance situations</p>
              <div className="mode-features">
                <span>✓ Practical application</span>
                <span>✓ Complex situations</span>
                <span>✓ Decision-making practice</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('truefalse')}>
              <div className="mode-icon">✓✗</div>
              <h3>True/False</h3>
              <p>100 statements to test your knowledge</p>
              <div className="mode-features">
                <span>✓ Quick assessment</span>
                <span>✓ All categories</span>
                <span>✓ Immediate feedback</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('fillblank')}>
              <div className="mode-icon">📋</div>
              <h3>Fill in the Blank</h3>
              <p>50 exercises testing precise knowledge</p>
              <div className="mode-features">
                <span>✓ Exact terminology</span>
                <span>✓ Numbers and limits</span>
                <span>✓ Virginia-specific</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('matching')}>
              <div className="mode-icon">🔗</div>
              <h3>Matching</h3>
              <p>30 sets of terms and definitions</p>
              <div className="mode-features">
                <span>✓ 200+ term pairs</span>
                <span>✓ Interactive matching</span>
                <span>✓ Comprehensive review</span>
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
