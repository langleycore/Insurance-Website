#!/bin/bash
# Script to completely remove old credentials from git history
# WARNING: This rewrites git history! Run only if you understand the implications.

echo "⚠️  WARNING: This will rewrite git history!"
echo "This is necessary to completely remove exposed credentials."
echo ""
echo "Before proceeding:"
echo "1. Make sure you have no uncommitted changes"
echo "2. Make sure no one else is working on this repository"
echo "3. You will need to force-push after this completes"
echo ""
read -p "Continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Aborted."
    exit 1
fi

echo ""
echo "🔄 Removing old credentials from git history..."
echo ""

# Use git filter-repo to remove the old auth service file
# This removes all traces from history
git filter-repo --path src/services/authService.ts --invert-paths --force

echo ""
echo "✅ Git history has been rewritten!"
echo ""
echo "Next steps:"
echo "1. Review your git log to verify credentials are gone"
echo "2. Force push to GitHub: git push origin main --force"
echo ""
echo "⚠️  IMPORTANT: After force push, anyone else working on this repo"
echo "   will need to delete their local copy and re-clone it."
