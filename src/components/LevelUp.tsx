import { useEffect, useState } from 'react';
import './LevelUp.css';

interface LevelUpProps {
  level: number;
  onClose: () => void;
}

export default function LevelUp({ level, onClose }: LevelUpProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div className={`levelup-overlay ${visible ? 'visible' : ''}`}>
      <div className="levelup-modal">
        <div className="levelup-rays" />
        <div className="levelup-content">
          <h2 className="levelup-title">🎉 LEVEL UP! 🎉</h2>
          <div className="levelup-number">{level}</div>
          <p className="levelup-subtitle">You've reached level {level}!</p>
        </div>
      </div>
    </div>
  );
}
