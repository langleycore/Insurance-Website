import { useEffect, useState } from 'react';
import { getStats } from '../utils/gamification';
import './SideQuests.css';

export default function SideQuests() {
  const [stats, setStats] = useState(getStats());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(getStats());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const getTimeRemaining = (expiresAt?: number): string => {
    if (!expiresAt) return '';
    
    const now = Date.now();
    const diff = expiresAt - now;
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`;
    }
    return `${minutes}m remaining`;
  };
  
  return (
    <div className="side-quests-container">
      <div className="side-quests-header">
        <h2>🎯 Side Quests</h2>
        <p className="intro-text">Complete quests for bonus XP and rewards!</p>
      </div>
      
      <div className="quests-content">
        <section className="quest-section">
          <h3 className="section-title">📅 Daily Quests</h3>
          <p className="section-subtitle">Refresh every day at midnight</p>
          
          <div className="quests-grid">
            {stats.sideQuests.map(quest => (
              <div 
                key={quest.id} 
                className={`quest-card ${quest.completed ? 'completed' : ''}`}
              >
                <div className="quest-icon">{quest.icon}</div>
                
                <div className="quest-content">
                  <h4>{quest.title}</h4>
                  <p className="quest-description">{quest.description}</p>
                  
                  <div className="quest-progress-bar">
                    <div 
                      className="quest-progress-fill"
                      style={{ width: `${(quest.progress / quest.target) * 100}%` }}
                    />
                  </div>
                  
                  <div className="quest-footer">
                    <span className="quest-progress-text">
                      {quest.progress} / {quest.target}
                    </span>
                    <span className="quest-reward">{quest.reward}</span>
                  </div>
                  
                  {quest.completed && (
                    <div className="completed-badge">
                      ✓ Completed!
                    </div>
                  )}
                  
                  {!quest.completed && quest.expiresAt && (
                    <div className="time-remaining">
                      ⏱️ {getTimeRemaining(quest.expiresAt)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="quest-section">
          <h3 className="section-title">📆 Weekly Challenges</h3>
          <p className="section-subtitle">Reset every Sunday at midnight</p>
          
          <div className="quests-grid">
            {stats.weeklyChallenges.map(challenge => (
              <div 
                key={challenge.id} 
                className={`quest-card weekly ${challenge.completed ? 'completed' : ''}`}
              >
                <div className="quest-icon">{challenge.icon}</div>
                
                <div className="quest-content">
                  <h4>{challenge.title}</h4>
                  <p className="quest-description">{challenge.description}</p>
                  
                  <div className="quest-progress-bar">
                    <div 
                      className="quest-progress-fill weekly-fill"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    />
                  </div>
                  
                  <div className="quest-footer">
                    <span className="quest-progress-text">
                      {challenge.progress} / {challenge.target}
                    </span>
                    <span className="quest-reward">{challenge.reward}</span>
                  </div>
                  
                  {challenge.completed && (
                    <div className="completed-badge weekly-badge">
                      ✓ Completed!
                    </div>
                  )}
                  
                  {!challenge.completed && challenge.expiresAt && (
                    <div className="time-remaining">
                      ⏱️ {getTimeRemaining(challenge.expiresAt)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="stats-overview">
          <h3 className="section-title">📊 Your Stats</h3>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-value">{stats.currentStreak}</div>
              <div className="stat-label">Current Streak</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-value">{stats.bestStreak}</div>
              <div className="stat-label">Best Streak</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-value">{stats.dailyStreak}</div>
              <div className="stat-label">Daily Streak</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-value">{stats.highScore}%</div>
              <div className="stat-label">High Score</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">💎</div>
              <div className="stat-value">{stats.perfectTests}</div>
              <div className="stat-label">Perfect Tests</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-value">{stats.totalQuestions}</div>
              <div className="stat-label">Questions Answered</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
