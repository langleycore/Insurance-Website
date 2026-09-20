# Security

## Authentication

This application uses **Firebase Authentication with Google Sign-In**.

### How It Works

- Users sign in with their Google account
- Authentication is handled entirely by Google/Firebase
- No passwords or credentials are stored in this codebase
- OAuth 2.0 tokens are used for session management

### What's Public (Safe)

The following information is public and safe to be in the codebase:

- Firebase configuration (API keys, project IDs, auth domains)
- Application source code
- UI components

**Note:** Firebase API keys are designed to be public. Security is enforced through:
- Firebase Security Rules (server-side)
- Authorized domains configuration
- User authentication requirements

### What's Private (Managed by Firebase)

The following is handled securely by Firebase/Google:

- User passwords (never exposed to our app)
- Authentication tokens
- User sessions
- Login credentials

### Access Control

To restrict who can use the application:

1. **Firebase Authentication** - Only users with valid Google accounts
2. **Authorized Domains** - Configure in Firebase Console
3. **Optional:** Implement custom authorization logic in the app

### Best Practices

✅ **This app implements:**
- OAuth 2.0 authentication via Google
- Secure session management by Firebase
- No credential storage in code

✅ **Firebase handles:**
- Password security
- Token management
- Session expiration
- Multi-factor authentication (if user enables it)

### Reporting Security Issues

If you discover a security vulnerability, please:
1. Do NOT open a public issue
2. Contact the repository owner privately
3. Provide details about the vulnerability

### Further Reading

- [Firebase Security Documentation](https://firebase.google.com/docs/security)
- [Google Sign-In Security](https://developers.google.com/identity/protocols/oauth2)
