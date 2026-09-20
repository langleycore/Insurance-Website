import { useState } from 'react';
import PracticeTest from './components/PracticeTest';
import Flashcards from './components/Flashcards';
import './styles.css';

type Mode = 'home' | 'test' | 'flashcards';

function App() {
  const [mode, setMode] = useState<Mode>('home');

  if (mode === 'test') {
    return (
      <div className="app">
        <header className="app-header">
          <button className="back-button" onClick={() => setMode('home')}>
            ← Back
          </button>
          <h1>Practice Test</h1>
        </header>
        <main className="app-main">
          <PracticeTest />
        </main>
      </div>
    );
  }

  if (mode === 'flashcards') {
    return (
      <div className="app">
        <header className="app-header">
          <button className="back-button" onClick={() => setMode('home')}>
            ← Back
          </button>
          <h1>Flashcards</h1>
        </header>
        <main className="app-main">
          <Flashcards />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header home-header">
        <h1>Virginia P&C Insurance</h1>
        <p className="subtitle">Exam Prep</p>
      </header>
      <main className="app-main home-main">
        <div className="home-content">
          <div className="welcome-section">
            <h2>Welcome!</h2>
            <p>Prepare for your Virginia Property & Casualty Insurance exam with practice tests and flashcards.</p>
          </div>

          <div className="mode-cards">
            <button className="mode-card" onClick={() => setMode('test')}>
              <div className="mode-icon">📝</div>
              <h3>Practice Test</h3>
              <p>30 questions with instant feedback and detailed explanations</p>
              <div className="mode-features">
                <span>✓ Multiple choice questions</span>
                <span>✓ Immediate explanations</span>
                <span>✓ Track your score</span>
              </div>
            </button>

            <button className="mode-card" onClick={() => setMode('flashcards')}>
              <div className="mode-icon">🎴</div>
              <h3>Flashcards</h3>
              <p>50 essential insurance terms and definitions</p>
              <div className="mode-features">
                <span>✓ Flip to reveal definitions</span>
                <span>✓ Track studied cards</span>
                <span>✓ Key terminology</span>
              </div>
            </button>
          </div>

          <div className="info-section">
            <h3>About This App</h3>
            <p>This study tool is specifically designed for the Virginia Property & Casualty Insurance licensing exam. All content focuses on Virginia-specific regulations and general P&C insurance principles.</p>
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
