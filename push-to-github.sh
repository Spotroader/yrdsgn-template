#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

REPO="Spotroader/yrdsgn-template"
REMOTE="https://github.com/${REPO}.git"

if ! git remote get-url origin &>/dev/null; then
  git remote add origin "$REMOTE"
  echo "Added origin → $REMOTE"
fi

if command -v gh &>/dev/null && gh auth status &>/dev/null; then
  if ! gh repo view "$REPO" &>/dev/null; then
    gh repo create "$REPO" --public --description "YuruDesign 1 — cinematic shop template baseline"
    echo "Created GitHub repo"
  fi
  git push -u origin main
  git push origin yurudesign-1
  echo "Done: https://github.com/${REPO}"
  gh repo view "$REPO" --web 2>/dev/null || open "https://github.com/${REPO}"
  exit 0
fi

echo "gh not authenticated. Install: brew install gh && gh auth login"
echo "Then re-run: ./push-to-github.sh"
echo ""
echo "Or push manually after creating empty repo at:"
echo "  https://github.com/new  (name: yurudesign-template)"
echo ""
git push -u origin main
git push origin yurudesign-1
