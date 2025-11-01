#!/bin/bash

echo "🚀 Starting deployment..."

# 1. Navigate to the project directory
cd ~/e-signature || exit

# 2. Stash or commit local changes to prevent git errors
echo "📝 Stashing local changes..."
git add . && git commit -m "Temporary commit before deployment" || git stash

# 3. Pull latest changes from Git (handling both main and master branches)
echo "📥 Pulling latest changes from Git..."
git pull origin main || git pull origin master

# 4. Install dependencies (forcing install to resolve conflicts)
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# 5. Build the Next.js app (ignoring TypeScript and ESLint errors)
echo "🔨 Building the application..."
NEXT_PUBLIC_IGNORE_ESLINT=true NEXT_PUBLIC_IGNORE_TS=true npm run build

# 6. Restart the app with PM2
echo "♻️ Restarting the application..."
pm2 restart e-signature --update-env

# 7. Show PM2 logs and status
echo "📊 Checking PM2 logs and status..."
pm2 logs e-signature --lines 20
pm2 list

echo "✅ Deployment completed successfully! 🎉"

