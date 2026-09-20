import { useState, useMemo } from 'react';
import { scenarios } from '../data/scenarios';
import { authService, TestResult } from '../services/authService';
import '../styles.css';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Scenarios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [categoryBreakdown, setCategoryBreakdown] = useState<{[key: string]: {attempted: number, correct: number}}>({});

  const shuffledScenarios = useMemo(() => shuffleArray(scenarios), []);
  const currentScenario = shuffledScenarios[currentIndex];
  const isCorrect = selectedAnswer === currentScenario.correctAnswer;

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
      const correct = answerIndex === currentScenario.correctAnswer;
      
      setScore(prev => ({
        correct: prev.correct + (correct ? 1 : 0),
        incorrect: prev.incorrect + (correct ? 0 : 1),
        total: prev.total + 1
      }));

      setCategoryBreakdown(prev => ({
        ...prev,
        [currentScenario.category]: {
          attempted: (prev[currentScenario.category]?.attempted || 0) + 1,
          correct: (prev[currentScenario.category]?.correct || 0) + (correct ? 1 : 0)
        }
      }));
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledScenarios.length - 1) {
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
      id: `scenario-${Date.now()}`,
      date: new Date().toISOString(),
      type: 'scenarios',
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

  const getAnswerClassName = (answerIndex: number) => {
    if (!showExplanation) {
      return 'answer-option';
    }
    if (answerIndex === currentScenario.correctAnswer) {
      return 'answer-option correct';
    }
    if (answerIndex === selectedAnswer && !isCorrect) {
      return 'answer-option incorrect';
    }
    return 'answer-option disabled';
  };

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="practice-test">
      <div className="test-header">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentIndex + 1) / shuffledScenarios.length) * 100}%` }}
          />
        </div>
        <div className="test-stats">
          <span className="question-counter">
            Scenario {currentIndex + 1} of {shuffledScenarios.length}
          </span>
          <span className="score">
            Score: {score.correct}/{score.total} ({percentage}%)
          </span>
        </div>
        <div className="test-score-details">
          <span className="correct-count">✓ Correct: {score.correct}</span>
          <span className="incorrect-count">✗ Incorrect: {score.incorrect}</span>
        </div>
        <div className="category-badge">{currentScenario.category}</div>
      </div>

      <div className="question-container">
        <div className="scenario-box">
          <h3 className="scenario-title">{currentScenario.title}</h3>
          <p className="scenario-text">{currentScenario.scenario}</p>
        </div>

        <h2 className="question-text">{currentScenario.question}</h2>
        
        <div className="answers-list">
          {currentScenario.options.map((option, index) => (
            <button
              key={index}
              className={getAnswerClassName(index)}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
              {showExplanation && index === currentScenario.correctAnswer && (
                <span className="check-mark">✓</span>
              )}
              {showExplanation && index === selectedAnswer && !isCorrect && (
                <span className="x-mark">✗</span>
              )}
            </button>
          ))}
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
            <p className="explanation-text">{currentScenario.explanation}</p>
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
        
        {currentIndex === shuffledScenarios.length - 1 ? (
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
