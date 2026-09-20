# Security Notice

## Client-Side Authentication

This application uses **client-side authentication** which has inherent security limitations:

### Current Implementation

- **SHA-256 Hashed Credentials**: Usernames and passwords are hashed using SHA-256 before comparison
- **No Plaintext Storage**: Credentials are NOT stored in plaintext in the code
- **Session Management**: 7-day session tokens stored in localStorage

### Security Limitations

⚠️ **Important**: Client-side authentication is NOT suitable for production applications with sensitive data.

**Known Limitations:**
1. Hash values are visible in the source code
2. Anyone with the hash can reverse-engineer using rainbow tables or brute force
3. No rate limiting on login attempts
4. Sessions stored in localStorage (vulnerable to XSS)
5. No secure password reset mechanism
6. No multi-factor authentication (MFA)

### Recommendations for Production

For a production environment, you should implement:

1. **Backend Authentication Server**
   - Use a proper authentication service (Auth0, Firebase Auth, AWS Cognito, etc.)
   - Never store credentials client-side
   - Implement JWT tokens with secure httpOnly cookies

2. **Security Best Practices**
   - Rate limiting on login attempts
   - Password complexity requirements
   - Multi-factor authentication (MFA)
   - Secure password reset via email
   - Account lockout after failed attempts
   - Session management with refresh tokens

3. **Data Protection**
   - HTTPS only
   - Content Security Policy (CSP)
   - Protection against XSS and CSRF attacks

### Current Use Case

This application is designed as a **personal study tool** with basic access control. The current implementation is acceptable for:
- Personal use
- Non-sensitive study materials
- Educational content that doesn't require high security

## Changing Credentials

To change the username or password:

1. Generate new SHA-256 hashes:
```javascript
async function generateHash(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Usage:
await generateHash('newusername'); // for username
await generateHash('NewPassword123'); // for password
```

2. Update the hashes in `src/services/authService.ts`:
```typescript
const HASHED_CREDENTIALS = {
  usernameHash: 'your-new-username-hash',
  passwordHash: 'your-new-password-hash',
};
```

## Reporting Security Issues

If you discover a security vulnerability, please report it by creating an issue in the repository.
