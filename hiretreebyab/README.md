# HireTreeByAB
Standalone professional networking app built on Next.js, Firebase Authentication, and Cloud Firestore. The app lives inside its own folder so the existing website remains untouched.

## Features
- Email/password account signup, sign-in, password reset and profile editing
- Member feed, posts, likes, comments, save-for-later, and report flow
- Member discovery, following, connection requests, and messages for accepted connections
- Member-posted jobs, applications, and applicant review
- Groups, events, RSVPs, and notifications
- Optional career-guidance request at ₹1,200. Requests stay pending; online payment has not been connected.

## Firebase activation
The Vercel project has the Firebase web configuration environment variables. In Firebase Console:
1. Enable Authentication → Sign-in method → Email/Password.
2. Add the deployed Vercel hostname in Authentication → Settings → Authorized domains.
3. Review and publish the collection-specific match blocks from `firestore.rules` in Firestore Database → Rules. Merge them into the existing rules rather than overwriting unrelated personal-site rules.
4. Test sign-up, sign-in, profile save, post creation and guidance requests.

Collections use the `hiretreebyab_` prefix to separate app records from the other website's named data collections. This deployment currently uses the Firebase web project configured in Vercel. For full infrastructure separation, create a dedicated Firebase project and replace the six `NEXT_PUBLIC_FIREBASE_*` values.

## Local development
Copy `.env.example` to `.env.local`, then run `npm install` and `npm run dev`.
No fake users, sample job listings, fabricated testimonials, or fake payment success are seeded.
