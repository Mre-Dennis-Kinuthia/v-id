#!/bin/bash

# Function to display a message in green color
print_green() {
  echo -e "\e[32m$1\e[0m"
}

# Function to display a message in red color
print_red() {
  echo -e "\e[31m$1\e[0m"
}

# Set the default commit message and branch name
default_commit_message="Committed from Codespace"
branch_name="main"

# Infinite loop
while true; do
  # Prompt for a custom commit message
  echo "Enter your commit message (or press Enter to use the default):"
  read commit_message

  # Set a default commit message if nothing is entered
  if [ -z "$commit_message" ]; then
    commit_message="$default_commit_message"
  fi

  # Check if there are changes to commit
  if git diff --quiet; then
    print_red "No changes to commit."
  else
    # Add all changes and commit
    git add .
    git commit -m "$commit_message" || {
      print_red "Error: Commit failed. Please resolve any conflicts or stage changes manually."
      exit 1
    }
    print_green "Changes committed successfully with message: $commit_message"

    # Push changes to the remote repository
    git push origin "$branch_name" || {
      print_red "Error: Push failed. Ensure you have the correct permissions and a valid remote."
      exit 1
    }
    print_green "Changes pushed to the remote repository successfully."
  fi

  # Sleep for 1 hour before prompting again
  sleep 3600  # 3600 seconds = 1 hour
done
