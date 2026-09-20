import { useState, useEffect, useMemo } from 'react';
import { questions } from '../data/questions';
import { authService, TestResult } from '../services/authService';
import '../styles.css';
import './TimedTest.css';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function TimedTest() {
  const [duration, setDuration] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [categoryBreakdown, setCategoryBreakdown] = useState<{[key: string]: {attempted: number, correct: number}}>({});

  const questionCount = duration === 15 ? 25 : duration === 30 ? 50 : duration === 60 ? 100 : 200;
  const shuffledQuestions = useMemo(() => shuffleArray(questions).slice(0, questionCount), [questionCount]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining]);

  const handleStartTest = (mins: number) => {
    setDuration(mins);
    setTimeRemaining(mins * 60);
    setIsActive(true);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleFinish = () => {
    setIsActive(false);
    setShowResults(true);

    let correct = 0;
    const breakdown: {[key: string]: {attempted: number, correct: number}} = {};

    shuffledQuestions.forEach((question, index) => {
      const category = question.category;
      if (!breakdown[category]) {
        breakdown[category] = { attempted: 0, correct: 0 };
      }

      if (answers[index] !== undefined) {
        breakdown[category].attempted++;
        if (answers[index] === question.correctAnswer) {
          correct++;
          breakdown[category].correct++;
        }
      }
    });

    setCategoryBreakdown(breakdown);

    const result: TestResult = {
      id: `timed-${Date.now()}`,
      date: new Date().toISOString(),
      type: 'timed',
      duration: duration || 0,
      questionsAnswered: Object.keys(answers).length,
      correctAnswers: correct,
      score: Object.keys(answers).length > 0 ? Math.round((correct / Object.keys(answers).length) * 100) : 0,
      categoryBreakdown: breakdown
    };
    authService.recordTestResult(result);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  if (!duration) {
    return (
      <div className="timed-test-setup">
        <h2>Select Test Duration</h2>
        <p className="setup-description">
          Choose how long you want to practice. The number of questions will be adjusted accordingly.
        </p>

        <div className="duration-options">
          <button className="duration-card" onClick={() => handleStartTest(15)}>
            <div className="duration-time">15 Minutes</div>
            <div className="duration-questions">25 Questions</div>
            <div className="duration-desc">Quick Practice</div>
          </button>

          <button className="duration-card" onClick={() => handleStartTest(30)}>
            <div className="duration-time">30 Minutes</div>
            <div className="duration-questions">50 Questions</div>
            <div className="duration-desc">Short Session</div>
          </button>

          <button className="duration-card" onClick={() => handleStartTest(60)}>
            <div className="duration-time">60 Minutes</div>
            <div className="duration-questions">100 Questions</div>
            <div className="duration-desc">Full Practice</div>
          </button>

          <button className="duration-card highlight" onClick={() => handleStartTest(120)}>
            <div className="duration-time">120 Minutes</div>
            <div className="duration-questions">200 Questions</div>
            <div className="duration-desc">Full Exam Simulation</div>
            <div className="exam-badge">Real Exam Time</div>
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const totalAnswered = Object.keys(answers).length;
    const correct = Object.values(answers).filter((ans, idx) => ans === shuffledQuestions[idx].correctAnswer).length;
    const percentage = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    const timeTaken = duration * 60 - timeRemaining;

    return (
      <div className="test-results">
        <h2>Test Complete!</h2>
        
        <div className="results-grid">
          <div className="result-card main-score">
            <div className="result-value">{percentage}%</div>
            <div className="result-label">Final Score</div>
          </div>

          <div className="result-card">
            <div className="result-value">{correct}/{totalAnswered}</div>
            <div className="result-label">Correct Answers</div>
          </div>

          <div className="result-card">
            <div className="result-value">{formatTime(timeTaken)}</div>
            <div className="result-label">Time Used</div>
          </div>

          <div className="result-card">
            <div className="result-value">{totalAnswered}/{shuffledQuestions.length}</div>
            <div className="result-label">Questions Attempted</div>
          </div>
        </div>

        <div className="category-results">
          <h3>Performance by Category</h3>
          {Object.entries(categoryBreakdown).map(([category, scores]) => (
            <div key={category} className="category-result-item">
              <div className="category-result-header">
                <span className="category-result-name">{category}</span>
                <span className="category-result-score">
                  {scores.attempted > 0 ? Math.round((scores.correct / scores.attempted) * 100) : 0}%
                </span>
              </div>
              <div className="category-result-details">
                {scores.correct}/{scores.attempted} correct
              </div>
            </div>
          ))}
        </div>

        <div className="results-actions">
          <button className="nav-button primary" onClick={() => window.location.reload()}>
            Take Another Test
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="timed-test">
      {/* Timer and Progress Header */}
      <div className="timed-header">
        <div className="timer-display">
          <span className="timer-icon">⏱️</span>
          <span className={`timer-value ${timeRemaining < 300 ? 'warning' : ''}`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
        <div className="progress-info">
          <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
          <span className="answered-count">{answeredCount} answered</span>
        </div>
      </div>

      {/* Question Navigator */}
      <div className="question-navigator">
        <div className="navigator-scroll">
          {shuffledQuestions.map((_, index) => (
            <button
              key={index}
              className={`question-nav-button ${currentQuestionIndex === index ? 'active' : ''} ${answers[index] !== undefined ? 'answered' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Current Question */}
      <div className="question-container">
        <div className="category-badge">{currentQuestion.category}</div>
        <h2 className="question-text">{currentQuestion.question}</h2>
        
        <div className="answers-list">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`answer-option ${answers[currentQuestionIndex] === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option}</span>
              {answers[currentQuestionIndex] === index && (
                <span className="selected-mark">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="timed-navigation">
        <button
          className="nav-button secondary"
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </button>

        <button
          className="nav-button finish"
          onClick={handleFinish}
        >
          Finish Test ({answeredCount}/{shuffledQuestions.length})
        </button>

        <button
          className="nav-button primary"
          onClick={() => setCurrentQuestionIndex(prev => Math.min(shuffledQuestions.length - 1, prev + 1))}
          disabled={currentQuestionIndex === shuffledQuestions.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
