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

export default function MatchingGame() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
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
    
    const termIndex = isLeft ? index : selectedTerm;
    const defIndex = isLeft ? selectedTerm : index;
    
    if (selectedTerm === null) {
      setSelectedTerm(index);
    } else if (selectedTerm === index && isLeft) {
      setSelectedTerm(null);
    } else {
      const existingConnection = connections.findIndex(
        c => c.termIndex === termIndex || c.defIndex === defIndex
      );
      
      if (existingConnection !== -1) {
        const newConnections = [...connections];
        newConnections.splice(existingConnection, 1);
        setConnections(newConnections);
      }
      
      if (termIndex !== null && defIndex !== null) {
        setConnections([...connections, { termIndex, defIndex }]);
      }
      setSelectedTerm(null);
    }
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
      setSelectedTerm(null);
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
    setSelectedTerm(null);
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

        <div className="puzzle-grid">
          <div className="puzzle-column left">
            {shuffledTerms.map((termIndex, position) => {
              const connection = getConnection(termIndex, true);
              const isSelected = selectedTerm === termIndex;
              const connected = isConnected(termIndex, true);
              const isCorrect = showResults && connection && isCorrectConnection(connection);
              const isIncorrect = showResults && connection && !isCorrectConnection(connection);
              
              return (
                <button
                  key={termIndex}
                  className={`puzzle-piece left-piece ${isSelected ? 'selected' : ''} ${connected ? 'connected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                  onClick={() => handlePieceClick(termIndex, true)}
                  disabled={showResults}
                  data-position={position}
                >
                  <div className="piece-content">
                    <span className="piece-text">{currentSet.pairs[termIndex].term}</span>
                  </div>
                  <div className="connector right-connector">
                    {connected && <div className="connector-plug" />}
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
              const isSelected = selectedTerm !== null && !isConnected(defIndex, false);
              const connected = isConnected(defIndex, false);
              const isCorrect = showResults && connection && isCorrectConnection(connection);
              const isIncorrect = showResults && connection && !isCorrectConnection(connection);
              
              return (
                <button
                  key={defIndex}
                  className={`puzzle-piece right-piece ${isSelected ? 'highlight' : ''} ${connected ? 'connected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                  onClick={() => handlePieceClick(defIndex, false)}
                  disabled={showResults}
                  data-position={position}
                >
                  <div className="connector left-connector">
                    {connected && <div className="connector-plug" />}
                  </div>
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
