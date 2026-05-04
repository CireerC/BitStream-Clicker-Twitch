#!/bin/bash
# BitStream v2.0 — One-command deployment script

echo "🎮 BitStream v2.0 Deployment"
echo "============================"
echo ""

# Step 1: Verify build
echo "✓ Testing production build..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Fix errors above."
  exit 1
fi

# Step 2: Verify preview
echo ""
echo "✓ Build successful!"
echo ""
echo "To test locally before deploying:"
echo "  npm run preview"
echo "  # Open http://localhost:5173"
echo ""

# Step 3: Deploy
echo "Ready to deploy to Vercel?"
echo ""
echo "Option 1: CLI Deploy"
echo "  vercel --prod"
echo ""
echo "Option 2: GitHub + Vercel Dashboard"
echo "  1. git push origin main"
echo "  2. Go to https://vercel.com/new"
echo "  3. Import repository"
echo "  4. Add environment variables:"
echo "     VITE_TWITCH_CLIENT_ID = your_client_id"
echo "     VITE_TWITCH_CHANNEL = your_channel"
echo "  5. Deploy"
echo ""
echo "After deployment, test:"
echo "  ✓ Clicker works"
echo "  ✓ Generators produce Bits"
echo "  ✓ Projects panel visible"
echo "  ✓ Bits accumulate correctly"
echo ""
