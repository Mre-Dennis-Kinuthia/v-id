#!/bin/bash

# Function to display a message in green color
print_green() {
  echo -e "\e[32m$1\e[0m"
}

# Function to display a message in red color
print_red() {
  echo -e "\e[31m$1\e[0m"
}

# Check if there are changes to commit
if git diff --quiet; then
  print_red "No changes to commit."
  exit 1
fi

# Set a default commit message
commit_message="Committed from Codespace"

# Check if a custom commit message is provided as an argument
if [ "$#" -gt 0 ]; then
  commit_message="$*"
fi

# Add all changes and commit
git add .
git commit -m "$commit_message" || {
  print_red "Error: Commit failed. Please resolve any conflicts or stage changes manually."
  exit 1
}
print_green "Changes committed successfully with message: $commit_message"

# Push changes to the remote repository
git push origin main || {
  print_red "Error: Push failed. Ensure you have the correct permissions and a valid remote."
  exit 1
}
print_green "Changes pushed to the remote repository successfully."
