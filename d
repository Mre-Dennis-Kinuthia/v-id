#!/bin/bash

# Function to display a message in green color
print_green() {
  echo -e "\e[32m$1\e[0m"
}

# Function to display a message in red color
print_red() {
  echo -e "\e[31m$1\e[0m"
}

# Set the branch name
branch_name="main"

# Infinite loop
while true; do
  # Check if there are changes to commit
  if git diff --quiet; then
    print_red "No changes to commit."
  else
    # Prompt for a custom commit message
    echo "Enter your commit message:"
    read commit_message

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

  # Sleep for 1 hour before checking for changes again
  sleep 3600  # 3600 seconds = 1 hour
done
