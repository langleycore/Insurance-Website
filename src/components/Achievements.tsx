import { useState } from 'react';
import { getStats, getUnlockedAchievements, getLockedAchievements, getProgressToNextAchievement } from '../utils/gamification';
import { Achievement, getRarityColor, getRarityGradient } from '../data/achievements';
import './Achievements.css';

export default function Achievements() {
  const stats = getStats();
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [rarityFilter, setRarityFilter] = useState<'all' | 'common' | 'rare' | 'epic' | 'legendary'>('all');
  
  const unlockedAchievements = getUnlockedAchievements();
  const lockedAchievements = getLockedAchievements();
  
  let displayAchievements: Achievement[] = [];
  if (filter === 'all') {
    displayAchievements = [...unlockedAchievements, ...lockedAchievements];
  } else if (filter === 'unlocked') {
    displayAchievements = unlockedAchievements;
  } else {
    displayAchievements = lockedAchievements;
  }
  
  if (rarityFilter !== 'all') {
    displayAchievements = displayAchievements.filter(a => a.rarity === rarityFilter);
  }
  
  const completionPercentage = (unlockedAchievements.length / (unlockedAchievements.length + lockedAchievements.length)) * 100;
  
  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h2>🏆 Achievements</h2>
        <div className="completion-stats">
          <div className="completion-bar">
            <div 
              className="completion-fill" 
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="completion-text">
            {unlockedAchievements.length} / {unlockedAchievements.length + lockedAchievements.length} Unlocked
          </p>
        </div>
        
        <div className="points-display">
          <div className="points-card">
            <span className="points-icon">⭐</span>
            <div>
              <div className="points-value">{stats.totalPoints}</div>
              <div className="points-label">Total Points</div>
            </div>
          </div>
          <div className="points-card">
            <span className="points-icon">📊</span>
            <div>
              <div className="points-value">Level {stats.level}</div>
              <div className="points-label">{stats.xp}/{stats.xpToNextLevel} XP</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="filter-section">
        <div className="filter-group">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'unlocked' ? 'active' : ''}`}
            onClick={() => setFilter('unlocked')}
          >
            Unlocked ({unlockedAchievements.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'locked' ? 'active' : ''}`}
            onClick={() => setFilter('locked')}
          >
            Locked ({lockedAchievements.length})
          </button>
        </div>
        
        <div className="rarity-filters">
          <button 
            className={`rarity-btn ${rarityFilter === 'all' ? 'active' : ''}`}
            onClick={() => setRarityFilter('all')}
          >
            All Rarities
          </button>
          <button 
            className={`rarity-btn rarity-common ${rarityFilter === 'common' ? 'active' : ''}`}
            onClick={() => setRarityFilter('common')}
          >
            Common
          </button>
          <button 
            className={`rarity-btn rarity-rare ${rarityFilter === 'rare' ? 'active' : ''}`}
            onClick={() => setRarityFilter('rare')}
          >
            Rare
          </button>
          <button 
            className={`rarity-btn rarity-epic ${rarityFilter === 'epic' ? 'active' : ''}`}
            onClick={() => setRarityFilter('epic')}
          >
            Epic
          </button>
          <button 
            className={`rarity-btn rarity-legendary ${rarityFilter === 'legendary' ? 'active' : ''}`}
            onClick={() => setRarityFilter('legendary')}
          >
            Legendary
          </button>
        </div>
      </div>
      
      <div className="achievements-grid">
        {displayAchievements.map(achievement => {
          const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
          const progress = getProgressToNextAchievement(achievement);
          
          return (
            <div 
              key={achievement.id}
              className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'} rarity-${achievement.rarity}`}
              style={{
                borderColor: getRarityColor(achievement.rarity),
                background: isUnlocked ? getRarityGradient(achievement.rarity) : undefined
              }}
            >
              <div className="achievement-icon-wrapper">
                <div 
                  className={`achievement-icon ${isUnlocked ? 'unlocked' : ''}`}
                >
                  {achievement.icon}
                </div>
                {isUnlocked && <div className="shine-effect" />}
              </div>
              
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className={`rarity-badge rarity-${achievement.rarity}`}>
                    {achievement.rarity}
                  </span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                
                {!isUnlocked && progress > 0 && (
                  <div className="achievement-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${Math.min(progress, 100)}%`,
                          background: getRarityColor(achievement.rarity)
                        }}
                      />
                    </div>
                    <span className="progress-text">{Math.floor(progress)}%</span>
                  </div>
                )}
                
                <div className="achievement-footer">
                  <span className="achievement-points">
                    ⭐ {achievement.points} points
                  </span>
                  {isUnlocked && (
                    <span className="unlocked-badge">✓ Unlocked</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
