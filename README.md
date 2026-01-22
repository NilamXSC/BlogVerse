# 📝 BlogVerse

**BlogVerse** is a modern, secure, and responsive blogging platform where anyone can read blogs and authenticated users can write, react, comment, follow creators, and build expressive profiles.

🌐 **Live Application:**  
👉 https://blog-verse-lime.vercel.app/

---

## 🚀 Overview

BlogVerse is built as a **production-ready web application**, not a demo.  
It focuses on **clean UI, strong security, smooth UX, and scalability**.

- Guests can read blogs freely
- Users sign in using **Google OAuth**
- First-time users complete a profile
- Authenticated users can write, react, comment, follow, and save posts
- Fully responsive and app-ready

---

## ✨ Features

### 👀 Guest Mode
- Read public blogs
- View author profiles
- Explore comments & reactions
- Read-only access (no login required)

---

### 🔐 Authentication
- Google OAuth 2.0
- No passwords stored
- Secure session handling
- Protected routes

---

### 👤 User Profiles
- Profile picture upload
- Emoji-supported bio 😄🔥✨
- Unique usernames
- Followers & following system
- Profile stats:
  - Posts
  - Followers
  - Reactions received

---

### ✍️ Blogging System
- Create, edit, delete your own posts
- Rich text editor with:
  - Headings
  - Images
  - Code blocks
  - Emojis
- Draft & publish support
- SEO-friendly URLs
- Bento-style post cards

---

### 💬 Engagement
- Nested comments & replies
- Custom reactions:
  - ❤️ Love
  - 🔥 Fire
  - 😂 Funny
  - 🧠 Insightful
  - 🚀 Inspiring
  - 😡 Controversial
- Save / bookmark posts
- Follow creators
- Personalized feed

---

### 🎨 UI / UX
- Bento-style layouts
- Skeleton loaders for slow networks
- Snackbar notifications (top-center)
- Smooth transitions & animations
- Premium, minimal design
- Fully mobile responsive

---

## 🔒 Security (OWASP-Aligned)

BlogVerse follows best security practices:

- ✅ Rate limiting (IP + user based)
- ✅ Strict input validation & sanitization
- ✅ Protection against XSS & injection attacks
- ✅ Secure file uploads (image-only, size limits)
- ✅ Environment-based secret handling
- ✅ Ownership & authorization checks
- ✅ Error masking (no sensitive leaks)

---

## 🛠 Tech Stack

- **Frontend:** Vite + React + TypeScript
- **Styling:** Tailwind CSS (shadcn-style components)
- **Authentication:** Google OAuth 2.0
- **Deployment:** Vercel
- **Architecture:** Component-based, API-driven
- **Security:** OWASP best practices

---

## 📁 Project Structure

```txt
src/
 ├─ App.tsx
 ├─ main.tsx
 ├─ routes/
 │   ├─ index.tsx
 │   └─ ProtectedRoute.tsx
 ├─ pages/
 │   ├─ Feed.tsx
 │   ├─ BlogView.tsx
 │   ├─ CreateBlog.tsx
 │   ├─ ProfileSetup.tsx
 │   └─ ProfileView.tsx
 ├─ components/
 │   ├─ layout/
 │   ├─ navbar/
 │   ├─ footer/
 │   ├─ bento/
 │   ├─ skeletons/
 │   ├─ snackbars/
 │   ├─ reactions/
 │   └─ comments/
 ├─ hooks/
 ├─ services/
 ├─ utils/
 └─ styles/

```

🚀 Getting Started (Local Development)
```txt
Prerequisites
Node.js 18+

npm
```

Clone & Run
```txt
git clone https://github.com/NilamXSC/BlogVerse.git
cd BlogVerse
npm install
npm run dev
```

🔐 Environment Variables
```txt
Create a .env file in the project root:

VITE_APP_NAME=BlogVerse
VITE_GOOGLE_CLIENT_ID=your_google_client_id
⚠️ Only variables prefixed with VITE_ are exposed to the client in Vite.
```

📱 Mobile & App Ready
```txt
Mobile-first responsive design

Touch-friendly UI

Architecture ready for:

Progressive Web App (PWA)

Android wrapper

iOS wrapper
```

🧪 Quality Standards
```txt
Clean TypeScript

Modular components

No hard-coded secrets

No tracked node_modules

Optimized Vercel build pipeline

Production-grade codebase
```

📌 Roadmap
```txt
Admin moderation panel

Notifications system

Offline read mode

Rich media embeds

Monetization features
```

🤝 Contributing
```txt
Contributions, issues, and feature requests are welcome.

Fork the repo

Create a feature branch

Commit changes

Open a Pull Request
```

📄 License
MIT License © 2026 BlogVerse

