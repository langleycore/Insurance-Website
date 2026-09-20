# 🚀 Quick Start - Firebase Setup Required

## ⚠️ Important: App Now Uses Firebase Authentication

The application has been upgraded to use **Firebase Authentication with Google Sign-In** for better security. No credentials are stored in the code!

## To Get the App Working:

### Option 1: Quick Test (Use My Firebase Project)
I'll provide you with temporary Firebase credentials to test immediately.

### Option 2: Your Own Firebase Project (Recommended)
Follow the complete guide in **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**

**Quick Steps:**
1. Create Firebase project at https://console.firebase.google.com/
2. Enable Google Authentication
3. Get your config values
4. Add them to `.env` file or `src/config/firebase.ts`
5. Deploy!

## What Changed:

### ❌ OLD (Removed):
- Username/password with hashed credentials
- Credentials visible in code
- Manual session management

### ✅ NEW (Current):
- Google Sign-In
- Zero credentials in code
- Managed by Firebase (Google's infrastructure)
- More secure, better UX

## Need Help?

Check **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** for:
- Step-by-step setup instructions
- Screenshots and examples
- Troubleshooting guide
- How to restrict access to specific users

---

**Note:** The app is deployed but won't work until Firebase is configured. This is intentional for security!
