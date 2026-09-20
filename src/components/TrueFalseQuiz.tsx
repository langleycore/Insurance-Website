import { useState, useMemo } from 'react';
import { trueFalseQuestions } from '../data/trueFalse';
import { authService, TestResult } from '../services/authService';
import '../styles.css';
import './TrueFalse.css';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function TrueFalseQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [categoryBreakdown, setCategoryBreakdown] = useState<{[key: string]: {attempted: number, correct: number}}>({});

  const shuffledQuestions = useMemo(() => shuffleArray(trueFalseQuestions), []);
  const currentQuestion = shuffledQuestions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.answer;

  const handleAnswerSelect = (answer: boolean) => {
    if (!showExplanation) {
      setSelectedAnswer(answer);
      setShowExplanation(true);
      const correct = answer === currentQuestion.answer;
      
      setScore(prev => ({
        correct: prev.correct + (correct ? 1 : 0),
        incorrect: prev.incorrect + (correct ? 0 : 1),
        total: prev.total + 1
      }));

      setCategoryBreakdown(prev => ({
        ...prev,
        [currentQuestion.category]: {
          attempted: (prev[currentQuestion.category]?.attempted || 0) + 1,
          correct: (prev[currentQuestion.category]?.correct || 0) + (correct ? 1 : 0)
        }
      }));
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleFinish = () => {
    const result: TestResult = {
      id: `truefalse-${Date.now()}`,
      date: new Date().toISOString(),
      type: 'trueFalse',
      questionsAnswered: score.total,
      correctAnswers: score.correct,
      score: score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0,
      categoryBreakdown
    };
    authService.recordTestResult(result);
    
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0, total: 0 });
    setCategoryBreakdown({});
  };

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="practice-test">
      <div className="test-header">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
        <div className="test-stats">
          <span className="question-counter">
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </span>
          <span className="score">
            Score: {score.correct}/{score.total} ({percentage}%)
          </span>
        </div>
        <div className="test-score-details">
          <span className="correct-count">✓ Correct: {score.correct}</span>
          <span className="incorrect-count">✗ Incorrect: {score.incorrect}</span>
        </div>
        <div className="category-badge">{currentQuestion.category}</div>
      </div>

      <div className="question-container">
        <h2 className="question-text tf-statement">{currentQuestion.statement}</h2>
        
        <div className="tf-buttons">
          <button
            className={`tf-button true-button ${showExplanation && currentQuestion.answer === true ? 'correct' : ''} ${showExplanation && selectedAnswer === true && !isCorrect ? 'incorrect' : ''}`}
            onClick={() => handleAnswerSelect(true)}
            disabled={showExplanation}
          >
            <span className="tf-icon">✓</span>
            <span className="tf-label">TRUE</span>
            {showExplanation && currentQuestion.answer === true && (
              <span className="check-mark">✓</span>
            )}
            {showExplanation && selectedAnswer === true && !isCorrect && (
              <span className="x-mark">✗</span>
            )}
          </button>

          <button
            className={`tf-button false-button ${showExplanation && currentQuestion.answer === false ? 'correct' : ''} ${showExplanation && selectedAnswer === false && !isCorrect ? 'incorrect' : ''}`}
            onClick={() => handleAnswerSelect(false)}
            disabled={showExplanation}
          >
            <span className="tf-icon">✗</span>
            <span className="tf-label">FALSE</span>
            {showExplanation && currentQuestion.answer === false && (
              <span className="check-mark">✓</span>
            )}
            {showExplanation && selectedAnswer === false && !isCorrect && (
              <span className="x-mark">✗</span>
            )}
          </button>
        </div>

        {showExplanation && (
          <div className={`explanation ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`}>
            <div className="explanation-header">
              {isCorrect ? (
                <>
                  <span className="result-icon">🎉</span>
                  <strong>Correct!</strong>
                </>
              ) : (
                <>
                  <span className="result-icon">📚</span>
                  <strong>Incorrect</strong>
                </>
              )}
            </div>
            <p className="explanation-text">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        
        {currentIndex === shuffledQuestions.length - 1 ? (
          <button
            className="nav-button primary"
            onClick={handleFinish}
          >
            Finish & Save
          </button>
        ) : (
          <button
            className="nav-button primary"
            onClick={handleNext}
            disabled={!showExplanation}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
