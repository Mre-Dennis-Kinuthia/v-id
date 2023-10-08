document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const learnerDisplayContainer = document.getElementById('learnerDisplayContainer');

    searchButton.addEventListener('click', async () => {
        try {
            const searchTerm = searchInput.value.trim(); // Get the search term from the input field
            if (searchTerm === '') {
                return; // Do nothing if the search term is empty
            }

            // Make a request to fetch learners based on the search term
            const response = await fetch(`/learners?searchTerm=${searchTerm}`);
            if (response.ok) {
                const learners = await response.json();

                // Clear the learner display container
                learnerDisplayContainer.innerHTML = '';

                if (learners.length > 0) {
                    // Display each learner's information
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
                    // Display a message when no learners are found
                    learnerDisplayContainer.innerHTML = '<p>No learners found.</p>';
                }
            } else {
                console.error('Failed to fetch learner data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching and displaying learners:', error);
        }
    });
});
