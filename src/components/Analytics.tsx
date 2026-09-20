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

  return (
    <div className="analytics">
      <h2>Your Performance Analytics</h2>

      {/* Overall Stats */}
      <div className="stats-grid">
        <div className="stat-card overall-score">
          <div className="stat-value">{overallScore}%</div>
          <div className="stat-label">Overall Score</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{stats.questionsAttempted + stats.scenariosAttempted + stats.trueFalseAttempted + stats.fillBlankAttempted + stats.matchingAttempted}</div>
          <div className="stat-label">Total Questions</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{stats.testHistory.length}</div>
          <div className="stat-label">Sessions Completed</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{Math.round(stats.totalStudyTime / 60)}h {stats.totalStudyTime % 60}m</div>
          <div className="stat-label">Study Time</div>
        </div>
      </div>

      {/* Activity Breakdown */}
      <div className="section-card">
        <h3>Activity Breakdown</h3>
        <div className="activity-grid">
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <div className="activity-details">
              <div className="activity-name">Practice Questions</div>
              <div className="activity-stats">
                {stats.questionsAttempted} attempted · {stats.questionsCorrect} correct
                <span className="activity-percent">
                  {stats.questionsAttempted > 0 ? Math.round((stats.questionsCorrect / stats.questionsAttempted) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon">🎴</span>
            <div className="activity-details">
              <div className="activity-name">Flashcards</div>
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
            <h3>💪 Strong Areas</h3>
            <div className="area-tags">
              {strongAreas.map(area => (
                <span key={area} className="area-tag strong">{area}</span>
              ))}
            </div>
          </div>
        )}

        {weakAreas.length > 0 && (
          <div className="section-card weak-areas">
            <h3>📚 Areas to Focus On</h3>
            <div className="area-tags">
              {weakAreas.map(area => (
                <span key={area} className="area-tag weak">{area}</span>
              ))}
            </div>
            <p className="focus-tip">These topics need more practice. Focus your study time here!</p>
          </div>
        )}
      </div>

      {/* Category Performance */}
      <div className="section-card">
        <h3>Performance by Category</h3>
        {categoryPerformance.length > 0 ? (
          <div className="category-list">
            {categoryPerformance.map(cat => (
              <div key={cat.category} className="category-item">
                <div className="category-header">
                  <span className="category-name">{cat.category}</span>
                  <span className="category-score">{cat.percentage}%</span>
                </div>
                <div className="category-progress">
                  <div 
                    className={`category-progress-bar ${cat.percentage >= 70 ? 'passing' : 'failing'}`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
                <div className="category-details">
                  {cat.attempted} questions attempted
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">Start practicing to see your performance by category!</p>
        )}
      </div>

      {/* Recent Activity */}
      <div className="section-card">
        <h3>Recent Activity</h3>
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
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No activity yet. Start practicing!</p>
        )}
      </div>
    </div>
  );
}
