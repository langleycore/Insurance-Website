import { useState } from 'react';
import './Login.css';

interface LoginProps {
  onGoogleSignIn: () => Promise<void>;
}

export default function Login({ onGoogleSignIn }: LoginProps) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);
    
    try {
      await onGoogleSignIn();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Virginia Personal Lines</h1>
          <p>Insurance Exam Prep</p>
        </div>

        <div className="login-form">
          <div className="google-signin-section">
            <p className="signin-description">
              Sign in with your Google account to access your personalized study materials and track your progress.
            </p>
            
            <button 
              onClick={handleGoogleSignIn}
              className="google-signin-button"
              disabled={isLoading}
            >
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {isLoading ? 'Signing in...' : 'Sign in with Google'}
            </button>

            {error && <div className="error-message">{error}</div>}
          </div>
        </div>

        <div className="login-footer">
          <p>Study smart, test with confidence</p>
          <p className="session-note">Secure authentication powered by Google</p>
        </div>
      </div>
    </div>
  );
}
