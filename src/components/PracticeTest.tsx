import { useState, useMemo, useEffect } from 'react';
import { questions } from '../data/questions';
import { firebaseAuthService } from '../services/firebaseAuthService';
import type { TestResult } from '../services/firebaseAuthService';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function PracticeTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [startTime] = useState(Date.now());
  
  // Shuffle questions once when component mounts
  const shuffledQuestions = useMemo(() => shuffleArray(questions), []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  // Scroll to top when question changes
  useEffect(() => {
    const questionContainer = document.querySelector('.question-container');
    if (questionContainer) {
      questionContainer.scrollTop = 0;
    }
  }, [currentQuestionIndex]);

  // Record test results when component unmounts if there are answered questions
  useEffect(() => {
    return () => {
      // Capture current score at cleanup time
      if (score.total > 0) {
        // Calculate category breakdown
        const categoryBreakdown: { [key: string]: { attempted: number; correct: number } } = {};
        
        const categoryCounts: { [key: string]: number } = {};
        shuffledQuestions.forEach(q => {
          categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
        });
        
        Object.keys(categoryCounts).forEach(category => {
          const proportion = categoryCounts[category] / shuffledQuestions.length;
          categoryBreakdown[category] = {
            attempted: Math.round(score.total * proportion),
            correct: Math.round(score.correct * proportion)
          };
        });

        const duration = Math.floor((Date.now() - startTime) / 1000);
        const testScore = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

        const result: TestResult = {
          id: `practice-${Date.now()}`,
          date: new Date().toISOString(),
          type: 'practice',
          duration,
          questionsAnswered: score.total,
          correctAnswers: score.correct,
          score: testScore,
          categoryBreakdown
        };

        firebaseAuthService.recordTestResult(result);
      }
    };
  }, [score, startTime, shuffledQuestions]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
      const isCorrectAnswer = answerIndex === currentQuestion.correctAnswer;
      setScore(prev => ({
        correct: prev.correct + (isCorrectAnswer ? 1 : 0),
        incorrect: prev.incorrect + (isCorrectAnswer ? 0 : 1),
        total: prev.total + 1
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(prev => ({
        ...prev,
        total: Math.max(0, prev.total - 1)
      }));
    }
  };

  const handleRestart = () => {
    // Record test result before restarting if user has answered questions
    if (score.total > 0) {
      recordTestCompletion();
    }
    
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0, total: 0 });
  };

  const recordTestCompletion = () => {
    // Calculate category breakdown
    const categoryBreakdown: { [key: string]: { attempted: number; correct: number } } = {};
    
    // This is a simplified approach - ideally we'd track which specific questions were answered
    // For now, we'll just record overall stats with the most common category
    const categoryCounts: { [key: string]: number } = {};
    shuffledQuestions.forEach(q => {
      categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
    });
    
    Object.keys(categoryCounts).forEach(category => {
      const proportion = categoryCounts[category] / shuffledQuestions.length;
      categoryBreakdown[category] = {
        attempted: Math.round(score.total * proportion),
        correct: Math.round(score.correct * proportion)
      };
    });

    const duration = Math.floor((Date.now() - startTime) / 1000);
    const testScore = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

    const result: TestResult = {
      id: `practice-${Date.now()}`,
      date: new Date().toISOString(),
      type: 'practice',
      duration,
      questionsAnswered: score.total,
      correctAnswers: score.correct,
      score: testScore,
      categoryBreakdown
    };

    firebaseAuthService.recordTestResult(result);
  };

  const getAnswerClassName = (answerIndex: number) => {
    if (!showExplanation) {
      return 'answer-option';
    }
    
    if (answerIndex === currentQuestion.correctAnswer) {
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
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
        <div className="test-stats">
          <span className="question-counter">
            Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
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
        <h2 className="question-text">{currentQuestion.question}</h2>
        
        <div className="answers-list">
          {currentQuestion.options.map((option, index) => (
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
              {showExplanation && index === currentQuestion.correctAnswer && (
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
            <p className="explanation-text">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </button>
        
        {currentQuestionIndex === shuffledQuestions.length - 1 ? (
          <button
            className="nav-button primary"
            onClick={handleRestart}
          >
            Restart Test
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
