import { useState } from 'react';
import './Settings.css';

export default function Settings() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [progressDeleteStep, setProgressDeleteStep] = useState(0);
  const [deleteInput, setDeleteInput] = useState('');

  const handleClearCache = () => {
    // Clear all caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      });
    }
    
    // Clear localStorage
    localStorage.clear();
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    setShowSuccess(true);
    
    // Reload after 1 second
    setTimeout(() => {
      window.location.href = window.location.href.split('?')[0] + '?v=' + Date.now();
    }, 1000);
  };

  const handleHardRefresh = () => {
    window.location.reload();
  };

  const handleClearProgress = () => {
    if (progressDeleteStep === 0) {
      // First click - show first warning
      setProgressDeleteStep(1);
    } else if (progressDeleteStep === 1) {
      // Second click - show second warning
      setProgressDeleteStep(2);
    } else if (progressDeleteStep === 2) {
      // Third click - verify DELETE was typed
      if (deleteInput.toUpperCase() === 'DELETE') {
        localStorage.clear();
        alert('Progress data cleared. Refreshing...');
        window.location.reload();
      } else {
        alert('You must type DELETE in the text box to confirm deletion.');
      }
    }
  };

  const handleCancelDelete = () => {
    setProgressDeleteStep(0);
    setDeleteInput('');
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>⚙️ Settings</h2>
        <p className="settings-intro">
          Manage your app settings, clear cache, and control your data.
        </p>
      </div>

      <div className="settings-section">
        <h3>🔄 App Performance</h3>
        <div className="settings-card">
          <div className="setting-item">
            <div className="setting-info">
              <h4>Clear Cache & Reload</h4>
              <p>Clear all cached data and force refresh the app. Use this if you're not seeing the latest updates.</p>
            </div>
            <button className="btn-primary" onClick={handleClearCache}>
              🔄 Clear Cache
            </button>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h4>Hard Refresh</h4>
              <p>Force reload the current page without clearing cache.</p>
            </div>
            <button className="btn-secondary" onClick={handleHardRefresh}>
              ↻ Refresh Page
            </button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3>📊 Your Data</h3>
        <div className="settings-card">
          <div className="setting-item">
            <div className="setting-info">
              <h4>Clear Progress Data</h4>
              <p>Delete all your test scores, analytics, and progress. This cannot be undone.</p>
              
              {progressDeleteStep === 1 && (
                <div className="warning-box warning-1">
                  <strong>⚠️ WARNING #1:</strong> You are about to delete ALL your progress data including test scores, analytics, and study history. This is NOT the same as clearing cache. Click again to continue.
                </div>
              )}
              
              {progressDeleteStep === 2 && (
                <div className="warning-box warning-2">
                  <strong>🚨 FINAL WARNING #2:</strong> This will PERMANENTLY delete all your exam progress! To confirm, type <strong>DELETE</strong> in the box below and click the button.
                  <input 
                    type="text" 
                    className="delete-confirm-input"
                    placeholder="Type DELETE here"
                    value={deleteInput}
                    onChange={(e) => setDeleteInput(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="button-group">
              <button 
                className={`btn-danger ${progressDeleteStep > 0 ? 'btn-danger-active' : ''}`}
                onClick={handleClearProgress}
              >
                {progressDeleteStep === 0 && '🗑️ Clear Progress'}
                {progressDeleteStep === 1 && '⚠️ Click Again to Continue'}
                {progressDeleteStep === 2 && '🚨 Confirm DELETE'}
              </button>
              {progressDeleteStep > 0 && (
                <button className="btn-secondary" onClick={handleCancelDelete}>
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3>ℹ️ App Information</h3>
        <div className="settings-card info-card">
          <div className="info-item">
            <span className="info-label">Version:</span>
            <span className="info-value">2.0</span>
          </div>
          <div className="info-item">
            <span className="info-label">Last Updated:</span>
            <span className="info-value">September 20, 2026</span>
          </div>
          <div className="info-item">
            <span className="info-label">Exam Focus:</span>
            <span className="info-value">Virginia Personal Lines</span>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-toast">
          ✅ Cache cleared! Reloading...
        </div>
      )}
    </div>
  );
}
