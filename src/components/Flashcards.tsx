import { useState } from 'react';
import { flashcards } from '../data/flashcards';

export default function Flashcards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState(new Set<number>());

  const currentCard = flashcards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
    if (!isFlipped) {
      setStudiedCards(prev => new Set([...prev, currentCard.id]));
    }
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const progress = Math.round((studiedCards.size / flashcards.length) * 100);

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
            Card {currentCardIndex + 1} of {flashcards.length}
          </span>
          <span className="studied-count">
            Studied: {studiedCards.size}/{flashcards.length}
          </span>
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

      <div className="navigation-buttons">
        <button
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          ← Previous
        </button>
        
        {currentCardIndex === flashcards.length - 1 ? (
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
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
