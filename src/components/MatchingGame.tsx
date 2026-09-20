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

export default function MatchingGame() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [matches, setMatches] = useState<{[key: number]: number}>({});
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [categoryBreakdown, setCategoryBreakdown] = useState<{[key: string]: {attempted: number, correct: number}}>({});

  const shuffledSets = useMemo(() => matchingSets, []);
  const currentSet = shuffledSets[currentSetIndex];
  
  const shuffledTerms = useMemo(() => 
    shuffleArray(currentSet.pairs.map((_, index) => index)),
    [currentSet]
  );
  
  const shuffledDefinitions = useMemo(() => 
    shuffleArray(currentSet.pairs.map((_, index) => index)),
    [currentSet]
  );

  const handleTermClick = (termIndex: number) => {
    if (showResults) return;
    
    if (selectedTerm === termIndex) {
      setSelectedTerm(null);
    } else if (selectedTerm !== null) {
      // Make a match
      setMatches(prev => ({
        ...prev,
        [selectedTerm]: termIndex
      }));
      setSelectedTerm(null);
    } else {
      setSelectedTerm(termIndex);
    }
  };

  const handleDefinitionClick = (defIndex: number) => {
    if (showResults) return;
    
    if (selectedTerm !== null) {
      setMatches(prev => ({
        ...prev,
        [selectedTerm]: defIndex
      }));
      setSelectedTerm(null);
    }
  };

  const handleCheck = () => {
    let correct = 0;
    let total = currentSet.pairs.length;
    
    Object.entries(matches).forEach(([termIdx, defIdx]) => {
      if (parseInt(termIdx) === defIdx) {
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
      setMatches({});
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
    setMatches({});
    setSelectedTerm(null);
    setShowResults(false);
    setScore({ correct: 0, incorrect: 0, total: 0 });
    setCategoryBreakdown({});
  };

  const isCorrectMatch = (termIndex: number, defIndex: number) => {
    return showResults && matches[termIndex] === defIndex && termIndex === defIndex;
  };

  const isIncorrectMatch = (termIndex: number, defIndex: number) => {
    return showResults && matches[termIndex] === defIndex && termIndex !== defIndex;
  };

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const allMatched = Object.keys(matches).length === currentSet.pairs.length;

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
          {showResults ? 'Results shown below' : 'Click a term, then click its matching definition'}
        </p>

        <div className="matching-columns">
          <div className="matching-column">
            <h3>Terms</h3>
            {shuffledTerms.map(termIndex => (
              <button
                key={termIndex}
                className={`matching-item ${selectedTerm === termIndex ? 'selected' : ''} ${Object.keys(matches).includes(String(termIndex)) ? 'matched' : ''} ${isCorrectMatch(termIndex, matches[termIndex]) ? 'correct' : ''} ${isIncorrectMatch(termIndex, matches[termIndex]) ? 'incorrect' : ''}`}
                onClick={() => handleTermClick(termIndex)}
                disabled={showResults || Object.keys(matches).includes(String(termIndex))}
              >
                {currentSet.pairs[termIndex].term}
                {isCorrectMatch(termIndex, matches[termIndex]) && <span className="match-icon">✓</span>}
                {isIncorrectMatch(termIndex, matches[termIndex]) && <span className="match-icon">✗</span>}
              </button>
            ))}
          </div>

          <div className="matching-column">
            <h3>Definitions</h3>
            {shuffledDefinitions.map(defIndex => (
              <button
                key={defIndex}
                className={`matching-item ${Object.values(matches).includes(defIndex) ? 'matched' : ''} ${isCorrectMatch(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex) ? parseInt(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex)!) : -1, defIndex) ? 'correct' : ''} ${isIncorrectMatch(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex) ? parseInt(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex)!) : -1, defIndex) ? 'incorrect' : ''}`}
                onClick={() => handleDefinitionClick(defIndex)}
                disabled={showResults || Object.values(matches).includes(defIndex)}
              >
                {currentSet.pairs[defIndex].definition}
                {isCorrectMatch(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex) ? parseInt(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex)!) : -1, defIndex) && <span className="match-icon">✓</span>}
                {isIncorrectMatch(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex) ? parseInt(Object.keys(matches).find(k => matches[parseInt(k)] === defIndex)!) : -1, defIndex) && <span className="match-icon">✗</span>}
              </button>
            ))}
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
