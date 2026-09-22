import { useState, useMemo } from 'react';
import { matchingSets } from '../data/matching';
import { firebaseAuthService, TestResult } from '../services/firebaseAuthService';
import './Matching.css';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface Connection {
  termIndex: number;
  defIndex: number;
}

interface SelectedPiece {
  index: number;
  isLeft: boolean;
}

export default function MatchingGame() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<SelectedPiece | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [categoryBreakdown, setCategoryBreakdown] = useState<{[key: string]: {attempted: number, correct: number}}>({});

  const shuffledSets = useMemo(() => matchingSets, []);
  const currentSet = shuffledSets[currentSetIndex];
  
  const limitedPairs = useMemo(() => {
    const maxPairs = 6;
    if (currentSet.pairs.length > maxPairs) {
      const indices = shuffleArray([...Array(currentSet.pairs.length)].map((_, i) => i));
      return indices.slice(0, maxPairs);
    }
    return currentSet.pairs.map((_, i) => i);
  }, [currentSet]);
  
  const shuffledTerms = useMemo(() => 
    shuffleArray([...limitedPairs]),
    [limitedPairs]
  );
  
  const shuffledDefinitions = useMemo(() => 
    shuffleArray([...limitedPairs]),
    [limitedPairs]
  );

  const handlePieceClick = (index: number, isLeft: boolean) => {
    if (showResults) return;
    
    // If clicking the same piece again, deselect it
    if (selectedPiece && selectedPiece.index === index && selectedPiece.isLeft === isLeft) {
      setSelectedPiece(null);
      return;
    }
    
    // If no piece selected yet, select this one
    if (selectedPiece === null) {
      setSelectedPiece({ index, isLeft });
      return;
    }
    
    // If clicking same side, switch selection to this piece
    if (selectedPiece.isLeft === isLeft) {
      setSelectedPiece({ index, isLeft });
      return;
    }
    
    // Different sides - make a connection
    const termIndex = isLeft ? index : selectedPiece.index;
    const defIndex = isLeft ? selectedPiece.index : index;
    
    // Remove any existing connections for these pieces
    const newConnections = connections.filter(
      c => c.termIndex !== termIndex && c.defIndex !== defIndex
    );
    
    // Add the new connection
    newConnections.push({ termIndex, defIndex });
    setConnections(newConnections);
    setSelectedPiece(null);
  };

  const isConnected = (index: number, isLeft: boolean) => {
    return connections.some(c => 
      isLeft ? c.termIndex === index : c.defIndex === index
    );
  };

  const getConnection = (index: number, isLeft: boolean) => {
    return connections.find(c => 
      isLeft ? c.termIndex === index : c.defIndex === index
    );
  };

  const handleCheck = () => {
    let correct = 0;
    let total = limitedPairs.length;
    
    connections.forEach(connection => {
      if (connection.termIndex === connection.defIndex) {
        correct++;
      }
    });

    const categoryScore = {
      attempted: total,
      correct: correct
    };

    setScore(prev => ({
      correct: prev.correct + correct,
      incorrect: prev.incorrect + (total - correct),
      total: prev.total + total
    }));

    setCategoryBreakdown(prev => ({
      ...prev,
      [currentSet.category]: {
        attempted: (prev[currentSet.category]?.attempted || 0) + categoryScore.attempted,
        correct: (prev[currentSet.category]?.correct || 0) + categoryScore.correct
      }
    }));

    setShowResults(true);
  };

  const handleNext = () => {
    if (currentSetIndex < shuffledSets.length - 1) {
      setCurrentSetIndex(prev => prev + 1);
      setConnections([]);
      setSelectedPiece(null);
      setShowResults(false);
    }
  };

  const handleFinish = () => {
    const result: TestResult = {
      id: `matching-${Date.now()}`,
      date: new Date().toISOString(),
      type: 'matching',
      questionsAnswered: score.total,
      correctAnswers: score.correct,
      score: score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0,
      categoryBreakdown
    };
    firebaseAuthService.recordTestResult(result);
    
    setCurrentSetIndex(0);
    setConnections([]);
    setSelectedPiece(null);
    setShowResults(false);
    setScore({ correct: 0, incorrect: 0, total: 0 });
    setCategoryBreakdown({});
  };

  const isCorrectConnection = (connection: Connection) => {
    return connection.termIndex === connection.defIndex;
  };

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const allMatched = connections.length === limitedPairs.length;

  return (
    <div className="matching-game">
      <div className="test-header">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentSetIndex + 1) / shuffledSets.length) * 100}%` }}
          />
        </div>
        <div className="test-stats">
          <span className="question-counter">
            Set {currentSetIndex + 1} of {shuffledSets.length}
          </span>
          <span className="score">
            Score: {score.correct}/{score.total} ({percentage}%)
          </span>
        </div>
        <div className="test-score-details">
          <span className="correct-count">✓ Correct: {score.correct}</span>
          <span className="incorrect-count">✗ Incorrect: {score.incorrect}</span>
        </div>
      </div>

      <div className="matching-container">
        <h2 className="matching-title">{currentSet.title}</h2>
        <p className="matching-instructions">
          {showResults ? 'Results shown below' : 'Tap a puzzle piece on the left, then tap its match on the right to connect them'}
        </p>

        <div className="puzzle-grid" id="puzzle-grid">
          <svg className="connection-lines" id="connection-svg">
            {connections.map((conn, idx) => {
              const leftEl = document.querySelector(`[data-term-index="${conn.termIndex}"]`);
              const rightEl = document.querySelector(`[data-def-index="${conn.defIndex}"]`);
              
              if (!leftEl || !rightEl) return null;
              
              const grid = document.getElementById('puzzle-grid');
              if (!grid) return null;
              
              const gridRect = grid.getBoundingClientRect();
              const leftRect = leftEl.getBoundingClientRect();
              const rightRect = rightEl.getBoundingClientRect();
              
              const x1 = leftRect.right - gridRect.left;
              const y1 = leftRect.top + leftRect.height / 2 - gridRect.top;
              const x2 = rightRect.left - gridRect.left;
              const y2 = rightRect.top + rightRect.height / 2 - gridRect.top;
              
              const isCorrect = showResults && isCorrectConnection(conn);
              const isIncorrect = showResults && !isCorrectConnection(conn);
              
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  className={`connection-line ${isCorrect ? 'correct-line' : ''} ${isIncorrect ? 'incorrect-line' : ''}`}
                  strokeWidth="3"
                />
              );
            })}
          </svg>

          <div className="puzzle-column left">
            {shuffledTerms.map((termIndex, position) => {
              const connection = getConnection(termIndex, true);
              const isSelected = selectedPiece?.isLeft && selectedPiece.index === termIndex;
              const connected = isConnected(termIndex, true);
              const isCorrect = showResults && connection && isCorrectConnection(connection);
              const isIncorrect = showResults && connection && !isCorrectConnection(connection);
              
              return (
                <button
                  key={termIndex}
                  className={`puzzle-piece left-piece ${isSelected ? 'selected' : ''} ${connected ? 'connected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                  onClick={() => handlePieceClick(termIndex, true)}
                  disabled={showResults}
                  data-term-index={termIndex}
                >
                  <div className="piece-content">
                    <span className="piece-text">{currentSet.pairs[termIndex].term}</span>
                  </div>
                  {showResults && connection && (
                    <span className="result-icon">{isCorrect ? '✓' : '✗'}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="puzzle-column right">
            {shuffledDefinitions.map((defIndex, position) => {
              const connection = getConnection(defIndex, false);
              const isSelected = selectedPiece?.isLeft === false && selectedPiece.index === defIndex;
              const connected = isConnected(defIndex, false);
              const isCorrect = showResults && connection && isCorrectConnection(connection);
              const isIncorrect = showResults && connection && !isCorrectConnection(connection);
              
              return (
                <button
                  key={defIndex}
                  className={`puzzle-piece right-piece ${isSelected ? 'selected' : ''} ${connected ? 'connected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                  onClick={() => handlePieceClick(defIndex, false)}
                  disabled={showResults}
                  data-def-index={defIndex}
                >
                  <div className="piece-content">
                    <span className="piece-text">{currentSet.pairs[defIndex].definition}</span>
                  </div>
                  {showResults && connection && (
                    <span className="result-icon">{isCorrect ? '✓' : '✗'}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {allMatched && !showResults && (
          <button className="check-button" onClick={handleCheck}>
            Check Answers
          </button>
        )}
      </div>

      <div className="navigation-buttons">
        {!showResults ? (
          <button className="nav-button secondary" disabled>
            Complete all matches first
          </button>
        ) : currentSetIndex === shuffledSets.length - 1 ? (
          <button className="nav-button primary" onClick={handleFinish}>
            Finish & Save
          </button>
        ) : (
          <button className="nav-button primary" onClick={handleNext}>
            Next Set →
          </button>
        )}
      </div>
    </div>
  );
}
