# Firebase Authentication Setup Guide

This guide will help you configure Firebase Authentication with Google Sign-In for your application.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `insurance-exam-prep` (or your preferred name)
4. Follow the prompts (you can disable Google Analytics if desired)
5. Click "Create Project"

## Step 2: Enable Google Authentication

1. In your Firebase project, click "Authentication" in the left sidebar
2. Click "Get started" (if first time)
3. Click on the "Sign-in method" tab
4. Click on "Google" in the providers list
5. Toggle the "Enable" switch ON
6. Enter your project support email
7. Click "Save"

## Step 3: Register Your Web App

1. In Firebase Console, click the ⚙️ gear icon (Project Settings)
2. Scroll down to "Your apps" section
3. Click the `</>` (Web) icon
4. Enter an app nickname: "Insurance Exam Web App"
5. **Check** "Also set up Firebase Hosting" (recommended)
6. Click "Register app"
7. Copy the `firebaseConfig` object

## Step 4: Update Your Configuration

You have two options:

### Option A: Environment Variables (Recommended for GitHub)

1. Create a `.env` file in your project root (it's already gitignored):

```env
VITE_FIREBASE_API_KEY=AIzaSyD...your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

2. The app will automatically use these values!

### Option B: Direct Configuration

Edit `src/config/firebase.ts` and replace the placeholder values:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 5: Authorize Your Domain

1. In Firebase Console → Authentication → Settings
2. Scroll to "Authorized domains"
3. Add your GitHub Pages domain: `yourusername.github.io`
4. Click "Add domain"

## Step 6: (Optional) Restrict Access to Specific Users

Firebase offers several ways to restrict access:

### Method 1: Custom Claims (Server-Side) - Most Secure

You'll need Firebase Admin SDK on a backend, but it's the most secure:

1. Set up Cloud Functions for Firebase
2. Add custom claims to specific users
3. Check claims in your app

### Method 2: Firestore Security Rules - Good Balance

1. Create a Firestore collection called `authorized_users`
2. Add documents with user emails as IDs
3. Check against this collection in your app

### Method 3: Hardcoded List (Simple, Less Secure)

Create `src/config/authorizedUsers.ts`:

```typescript
export const AUTHORIZED_EMAILS = [
  'your-email@gmail.com',
  'another-email@gmail.com'
];
```

Then in `src/App.tsx`, after successful sign-in, check:

```typescript
const handleGoogleSignIn = async (): Promise<void> => {
  const user = await firebaseAuthService.signInWithGoogle();
  
  if (!AUTHORIZED_EMAILS.includes(user.email || '')) {
    await firebaseAuthService.signOut();
    alert('You are not authorized to access this application.');
    return;
  }
};
```

## Step 7: Deploy

### Local Testing First

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` and test Google Sign-In.

### Deploy to GitHub Pages

1. Commit your changes:
```bash
git add .
git commit -m "Add Firebase Authentication"
git push origin main
```

2. GitHub Actions will automatically deploy!

## Troubleshooting

### "auth/unauthorized-domain" Error

- Add your domain to Firebase Console → Authentication → Settings → Authorized domains

### "Firebase config not found" Error

- Check that your `.env` file exists and has correct values
- OR check that `src/config/firebase.ts` has your config values
- Restart your dev server after changing `.env`

### Google Sign-In Popup Blocked

- Allow popups for your domain
- Check browser console for specific errors

### Sign-in works locally but not on GitHub Pages

- Verify you added your GitHub Pages domain (`username.github.io`) to Authorized domains in Firebase Console
- Make sure you're using HTTPS (GitHub Pages automatically does this)

## Security Best Practices

✅ **What's Safe:**
- Firebase config values in code (they're public by design)
- Using environment variables (better practice)

⚠️ **Important:**
- Set up proper Firebase Security Rules for Firestore/Storage
- Never put Firebase Admin SDK keys in client-side code
- Consider using Firebase App Check for additional security

## Managing Users

To add/remove authorized users:

1. **If using Firebase Auth directly:** Anyone with a Google account can sign in
2. **If using custom claims:** Update claims via Firebase Admin SDK
3. **If using hardcoded list:** Update the `AUTHORIZED_EMAILS` array and redeploy

## Cost

Firebase Authentication is FREE for unlimited users! 🎉

---

Need help? Check the [Firebase Documentation](https://firebase.google.com/docs/auth) or create an issue in this repository.
