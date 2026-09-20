import { useEffect, useState } from 'react';
import { Achievement, getRarityGradient } from '../data/achievements';
import './AchievementUnlock.css';

interface AchievementUnlockProps {
  achievement: Achievement;
  onClose: () => void;
}

export default function AchievementUnlock({ achievement, onClose }: AchievementUnlockProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation
    setTimeout(() => setVisible(true), 100);
    
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div className={`achievement-unlock-overlay ${visible ? 'visible' : ''}`}>
      <div className="achievement-unlock-modal">
        <div className="unlock-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${50 + Math.cos(i * 18 * Math.PI / 180) * 40}%`,
                top: `${50 + Math.sin(i * 18 * Math.PI / 180) * 40}%`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
        </div>
        
        <div className="unlock-content">
          <h2 className="unlock-title">🎉 Achievement Unlocked! 🎉</h2>
          
          <div 
            className={`unlock-icon-wrapper rarity-${achievement.rarity}`}
            style={{ background: getRarityGradient(achievement.rarity) }}
          >
            <div className="unlock-icon">{achievement.icon}</div>
            <div className="unlock-shine" />
          </div>
          
          <h3 className="unlock-achievement-title">{achievement.title}</h3>
          <p className="unlock-description">{achievement.description}</p>
          
          <div className="unlock-rewards">
            <div className="reward-item">
              <span className="reward-icon">⭐</span>
              <span className="reward-text">+{achievement.points} Points</span>
            </div>
            <div className="reward-item">
              <span className="reward-icon">✨</span>
              <span className="reward-text">+{achievement.points * 2} XP</span>
            </div>
          </div>
          
          <button className="unlock-close-btn" onClick={() => {
            setVisible(false);
            setTimeout(onClose, 500);
          }}>
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
}
