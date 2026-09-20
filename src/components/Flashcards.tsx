import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Flashcards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [hasAnswered, setHasAnswered] = useState(false);
  
  // Shuffle flashcards once when component mounts
  const shuffledFlashcards = useMemo(() => shuffleArray(flashcards), []);

  const currentCard = shuffledFlashcards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleKnewIt = () => {
    if (!hasAnswered) {
      setScore(prev => ({
        correct: prev.correct + 1,
        incorrect: prev.incorrect,
        total: prev.total + 1
      }));
      setHasAnswered(true);
    }
  };

  const handleDidntKnow = () => {
    if (!hasAnswered) {
      setScore(prev => ({
        correct: prev.correct,
        incorrect: prev.incorrect + 1,
        total: prev.total + 1
      }));
      setHasAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < shuffledFlashcards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
      setHasAnswered(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
      setHasAnswered(false);
    }
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setScore({ correct: 0, incorrect: 0, total: 0 });
    setHasAnswered(false);
  };

  const progress = Math.round(((currentCardIndex + 1) / shuffledFlashcards.length) * 100);
  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="flashcards">
      <div className="flashcard-header">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flashcard-stats">
          <span className="card-counter">
            Card {currentCardIndex + 1} of {shuffledFlashcards.length}
          </span>
          <span className="score">
            Score: {score.correct}/{score.total} ({percentage}%)
          </span>
        </div>
        <div className="flashcard-score-details">
          <span className="correct-count">✓ Knew: {score.correct}</span>
          <span className="incorrect-count">✗ Didn't Know: {score.incorrect}</span>
        </div>
        <div className="category-badge">{currentCard.category}</div>
      </div>

      <div className="flashcard-container">
        <div 
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="card-label">Term</div>
              <h2 className="card-content">{currentCard.term}</h2>
              <div className="tap-hint">Tap to flip</div>
            </div>
            <div className="flashcard-back">
              <div className="card-label">Definition</div>
              <p className="card-content">{currentCard.definition}</p>
              <div className="tap-hint">Tap to flip back</div>
            </div>
          </div>
        </div>
      </div>

      {isFlipped && !hasAnswered && (
        <div className="knowledge-buttons">
          <button
            className="knowledge-button knew-it"
            onClick={handleKnewIt}
          >
            ✓ I Knew It
          </button>
          <button
            className="knowledge-button didnt-know"
            onClick={handleDidntKnow}
          >
            ✗ Didn't Know It
          </button>
        </div>
      )}

      <div className="navigation-buttons">
        <button
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          ← Previous
        </button>
        
        {currentCardIndex === shuffledFlashcards.length - 1 ? (
          <button
            className="nav-button primary"
            onClick={handleReset}
          >
            Start Over
          </button>
        ) : (
          <button
            className="nav-button primary"
            onClick={handleNext}
            disabled={!hasAnswered}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
