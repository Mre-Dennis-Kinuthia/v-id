document.addEventListener('DOMContentLoaded', () => {
    // Find the button element
    const displayAllLearnersButton = document.getElementById('displayAllLearners');
    // Find the container where learner data will be displayed
    const learnerDisplayContainer = document.querySelector('.learner-display-card');

    // Add a click event listener to the button
    displayAllLearnersButton.addEventListener('click', async () => {
        try {
            // Make an AJAX request to fetch learner data
            const response = await fetch('/learners');
            if (response.ok) {
                // Parse the response as JSON
                const learners = await response.json();

                // Clear the container
                learnerDisplayContainer.innerHTML = '';

                // Display the learner data in the container (modify as needed)
                learners.forEach((learner) => {
                    const learnerCard = document.createElement('div');
                    learnerCard.classList.add('learner-card');
                    learnerCard.innerHTML = `
                        <h2>${learner.Name}</h2>
                        <p>Email: ${learner.learnerEmail}</p>
                        <p>Program: ${learner.Program}</p>
                    `;
                    learnerDisplayContainer.appendChild(learnerCard);
                });
            } else {
                console.error('Failed to fetch learner data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching and displaying learners:', error);
        }
    });
});
