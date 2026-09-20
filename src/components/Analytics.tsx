import { authService } from '../services/authService';
import './Analytics.css';

export default function Analytics() {
  const stats = authService.getUserStats();
  const categoryPerformance = authService.getCategoryPerformance();
  const weakAreas = authService.getWeakAreas();
  const strongAreas = authService.getStrongAreas();
  const overallScore = authService.getOverallScore();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const recentTests = stats.testHistory.slice(-10).reverse();

  const getReadinessLevel = () => {
    if (overallScore >= 85) return { level: 'Excellent', color: '#27ae60', message: 'You are well-prepared for the exam!' };
    if (overallScore >= 70) return { level: 'Good', color: '#f39c12', message: 'You are on track, but review weak areas to strengthen your knowledge.' };
    if (overallScore >= 60) return { level: 'Fair', color: '#e67e22', message: 'More practice needed. Focus on categories below 70%.' };
    return { level: 'Needs Work', color: '#e74c3c', message: 'Significant study time required. Focus on fundamentals and weak areas.' };
  };

  const readiness = getReadinessLevel();
  const totalQuestions = stats.questionsAttempted + stats.scenariosAttempted + stats.trueFalseAttempted + stats.fillBlankAttempted + stats.matchingAttempted;
  const totalCorrect = stats.questionsCorrect + stats.scenariosCorrect + stats.trueFalseCorrect + stats.fillBlankCorrect + stats.matchingCorrect;

  const getRecommendations = () => {
    const recommendations = [];
    
    if (totalQuestions < 100) {
      recommendations.push("Complete at least 100 questions across all activities to get a reliable performance baseline.");
    }
    
    if (weakAreas.length > 0) {
      recommendations.push(`Focus your study time on ${weakAreas.join(', ')}. These areas need improvement before the exam.`);
    }
    
    if (stats.timedTestsCompleted === 0) {
      recommendations.push("Take at least one full-length timed test (120 minutes) to simulate exam conditions and build stamina.");
    }
    
    if (stats.timedTestsCompleted < 3 && overallScore < 85) {
      recommendations.push("Practice more timed tests to improve time management and reduce test anxiety.");
    }
    
    if (stats.flashcardsStudied < 50) {
      recommendations.push("Review more flashcards to master key terminology. Understanding terms is crucial for the exam.");
    }
    
    if (overallScore >= 85 && weakAreas.length === 0) {
      recommendations.push("Excellent work! Continue practicing to maintain your knowledge and take timed tests to stay sharp.");
    }
    
    return recommendations;
  };

  const recommendations = getRecommendations();

  const getStudyProgress = () => {
    const totalPossible = 200 + 120 + 50 + 100 + 50 + 30; // All activities
    const progress = Math.min(Math.round((totalQuestions / totalPossible) * 100), 100);
    return progress;
  };

  const studyProgress = getStudyProgress();

  return (
    <div className="analytics">
      <h2>📊 Your Comprehensive Performance Report</h2>
      <p className="analytics-intro">
        Track your progress, identify strengths and weaknesses, and get personalized recommendations to maximize your exam success.
      </p>

      {/* Exam Readiness */}
      <div className="readiness-card" style={{ borderColor: readiness.color }}>
        <h3>🎯 Exam Readiness: <span style={{ color: readiness.color }}>{readiness.level}</span></h3>
        <div className="readiness-bar">
          <div className="readiness-fill" style={{ width: `${overallScore}%`, backgroundColor: readiness.color }} />
          <span className="readiness-percentage">{overallScore}%</span>
        </div>
        <p className="readiness-message">{readiness.message}</p>
        <div className="readiness-details">
          <span><strong>Passing Score:</strong> 70% (You {overallScore >= 70 ? 'meet' : 'need'} this requirement)</span>
          <span><strong>Your Score:</strong> {overallScore}% ({overallScore >= 70 ? `+${overallScore - 70}` : overallScore - 70} points {overallScore >= 70 ? 'above' : 'below'} passing)</span>
        </div>
      </div>

      {/* Personalized Recommendations */}
      {recommendations.length > 0 && (
        <div className="recommendations-card">
          <h3>💡 Personalized Study Recommendations</h3>
          <ul className="recommendations-list">
            {recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Overall Stats */}
      <div className="stats-grid">
        <div className="stat-card overall-score">
          <div className="stat-value">{overallScore}%</div>
          <div className="stat-label">Overall Accuracy</div>
          <div className="stat-sublabel">{totalCorrect} correct out of {totalQuestions} total</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Total Questions Answered</div>
          <div className="stat-sublabel">Across all {stats.testHistory.length} study sessions</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{Math.round(stats.totalStudyTime / 60)}h {stats.totalStudyTime % 60}m</div>
          <div className="stat-label">Total Study Time</div>
          <div className="stat-sublabel">Average {stats.testHistory.length > 0 ? Math.round(stats.totalStudyTime / stats.testHistory.length) : 0} min/session</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{studyProgress}%</div>
          <div className="stat-label">Material Coverage</div>
          <div className="stat-sublabel">{studyProgress < 100 ? 'More practice recommended' : 'All material covered!'}</div>
        </div>
      </div>

      {/* Activity Breakdown */}
      <div className="section-card">
        <h3>📚 Activity Performance Breakdown</h3>
        <p className="section-description">Detailed view of your performance across all learning activities. Each activity tests different skills crucial for exam success.</p>
        <div className="activity-grid">
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <div className="activity-details">
              <div className="activity-name">Practice Questions</div>
              <div className="activity-description">Tests comprehensive knowledge with detailed explanations</div>
              <div className="activity-stats">
                {stats.questionsAttempted} attempted · {stats.questionsCorrect} correct
                <span className="activity-percent">
                  {stats.questionsAttempted > 0 ? Math.round((stats.questionsCorrect / stats.questionsAttempted) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">⏱️</span>
            <div className="activity-details">
              <div className="activity-name">Timed Tests</div>
              <div className="activity-description">Simulates real exam conditions and time pressure</div>
              <div className="activity-stats">
                {stats.timedTestsCompleted} completed · {stats.timedTestsCompleted === 0 ? 'Take one to simulate exam!' : 'Great practice!'}
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">🎴</span>
            <div className="activity-details">
              <div className="activity-name">Flashcards</div>
              <div className="activity-description">Builds vocabulary and definition recognition</div>
              <div className="activity-stats">
                {stats.flashcardsStudied} studied · {stats.flashcardsKnew} knew
                <span className="activity-percent">
                  {stats.flashcardsStudied > 0 ? Math.round((stats.flashcardsKnew / stats.flashcardsStudied) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">🎯</span>
            <div className="activity-details">
              <div className="activity-name">Scenarios</div>
              <div className="activity-description">Tests real-world application and decision-making</div>
              <div className="activity-stats">
                {stats.scenariosAttempted} attempted · {stats.scenariosCorrect} correct
                <span className="activity-percent">
                  {stats.scenariosAttempted > 0 ? Math.round((stats.scenariosCorrect / stats.scenariosAttempted) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">✓✗</span>
            <div className="activity-details">
              <div className="activity-name">True/False</div>
              <div className="activity-description">Quick knowledge verification and concept clarity</div>
              <div className="activity-stats">
                {stats.trueFalseAttempted} attempted · {stats.trueFalseCorrect} correct
                <span className="activity-percent">
                  {stats.trueFalseAttempted > 0 ? Math.round((stats.trueFalseCorrect / stats.trueFalseAttempted) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">📋</span>
            <div className="activity-details">
              <div className="activity-name">Fill in the Blank</div>
              <div className="activity-description">Tests precise knowledge of numbers, limits, and specifics</div>
              <div className="activity-stats">
                {stats.fillBlankAttempted} attempted · {stats.fillBlankCorrect} correct
                <span className="activity-percent">
                  {stats.fillBlankAttempted > 0 ? Math.round((stats.fillBlankCorrect / stats.fillBlankAttempted) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">🔗</span>
            <div className="activity-details">
              <div className="activity-name">Matching</div>
              <div className="activity-description">Strengthens term recognition and associations</div>
              <div className="activity-stats">
                {stats.matchingAttempted} attempted · {stats.matchingCorrect} correct
                <span className="activity-percent">
                  {stats.matchingAttempted > 0 ? Math.round((stats.matchingCorrect / stats.matchingAttempted) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strong and Weak Areas */}
      <div className="areas-container">
        {strongAreas.length > 0 && (
          <div className="section-card strong-areas">
            <h3>💪 Your Strongest Areas</h3>
            <p className="area-description">You excel in these topics! Maintain your knowledge with periodic review.</p>
            <div className="area-tags">
              {strongAreas.map(area => (
                <span key={area} className="area-tag strong">{area}</span>
              ))}
            </div>
            <p className="area-tip">✨ Strong areas: 85%+ accuracy with at least 5 questions attempted</p>
          </div>
        )}

        {weakAreas.length > 0 && (
          <div className="section-card weak-areas">
            <h3>📚 Areas Needing Improvement</h3>
            <p className="area-description">Focus your study time here for maximum score improvement. These topics need additional practice.</p>
            <div className="area-tags">
              {weakAreas.map(area => (
                <span key={area} className="area-tag weak">{area}</span>
              ))}
            </div>
            <p className="focus-tip">⚠️ Priority areas: Below 70% accuracy. Review these before taking the exam!</p>
          </div>
        )}

        {weakAreas.length === 0 && strongAreas.length === 0 && totalQuestions >= 5 && (
          <div className="section-card">
            <h3>📊 Performance Evaluation</h3>
            <p>You're making steady progress! No significant weak areas identified yet. Continue practicing across all topics to build comprehensive knowledge.</p>
          </div>
        )}
      </div>

      {/* Category Performance */}
      <div className="section-card">
        <h3>📖 Detailed Performance by Exam Category</h3>
        <p className="section-description">
          The Virginia Personal Lines exam covers 7 main categories. Track your mastery of each topic and identify where to focus your study efforts.
        </p>
        {categoryPerformance.length > 0 ? (
          <div className="category-list">
            {categoryPerformance.map(cat => {
              const status = cat.percentage >= 85 ? 'Mastered' : cat.percentage >= 70 ? 'Passing' : cat.percentage >= 60 ? 'Developing' : 'Needs Focus';
              return (
                <div key={cat.category} className="category-item">
                  <div className="category-header">
                    <span className="category-name">{cat.category}</span>
                    <div className="category-score-group">
                      <span className="category-status" style={{
                        color: cat.percentage >= 85 ? '#27ae60' : cat.percentage >= 70 ? '#f39c12' : '#e74c3c'
                      }}>{status}</span>
                      <span className="category-score">{cat.percentage}%</span>
                    </div>
                  </div>
                  <div className="category-progress">
                    <div 
                      className={`category-progress-bar ${cat.percentage >= 70 ? 'passing' : 'failing'}`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                  <div className="category-details">
                    {cat.attempted} questions answered · {Math.round((cat.percentage / 100) * cat.attempted)} correct · 
                    {cat.percentage >= 85 ? ' Excellent!' : cat.percentage >= 70 ? ' Keep it up!' : ' More practice needed'}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-data">
            <p>Start practicing to see your performance by category!</p>
            <p className="no-data-tip">Understanding your strengths and weaknesses in each exam topic helps you study more efficiently.</p>
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="section-card">
        <h3>📅 Recent Study Sessions</h3>
        <p className="section-description">Review your recent practice sessions to track improvement over time.</p>
        {recentTests.length > 0 ? (
          <div className="recent-tests">
            {recentTests.map(test => (
              <div key={test.id} className="test-item">
                <div className="test-header">
                  <span className="test-type">{test.type.toUpperCase()}</span>
                  <span className="test-date">{formatDate(test.date)}</span>
                </div>
                <div className="test-score">
                  <span className={`score-value ${test.score >= 70 ? 'passing' : 'failing'}`}>
                    {test.score}%
                  </span>
                  <span className="test-details">
                    {test.correctAnswers}/{test.questionsAnswered} correct
                    {test.duration && ` · ${test.duration} min`}
                    {test.score >= 85 ? ' · Excellent!' : test.score >= 70 ? ' · Passing!' : ' · Review needed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">
            <p>No activity yet. Start practicing to build your study history!</p>
            <p className="no-data-tip">Regular practice sessions help you identify patterns in your learning and track improvement.</p>
          </div>
        )}
      </div>

      {/* Study Tips */}
      <div className="tips-card">
        <h3>💡 Study Tips for Exam Success</h3>
        <ul className="tips-list">
          <li><strong>Aim for 85%+</strong> across all categories to ensure you pass comfortably (70% required)</li>
          <li><strong>Take full-length timed tests</strong> (120 min, 200 questions) to build endurance</li>
          <li><strong>Review explanations</strong> even when you answer correctly to deepen understanding</li>
          <li><strong>Focus on weak areas</strong> first, but don't neglect strong areas</li>
          <li><strong>Mix activities</strong> - Different formats test different aspects of knowledge</li>
          <li><strong>Practice regularly</strong> - Short daily sessions are better than cramming</li>
          <li><strong>Simulate exam conditions</strong> - Take timed tests in a quiet environment</li>
        </ul>
      </div>
    </div>
  );
}
