document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const learnerDisplayContainer = document.getElementById('learnerDisplayContainer');

    searchButton.addEventListener('click', async () => {
        try {
            const name = searchInput.value.trim(); // Get the name to search for
            if (name === '') {
                return; // Do nothing if the name is empty
            }

            // Make a request to search for learners by name
            const response = await fetch(`/search?name=${name}`);

            if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    // Parse the response as JSON
                    const learner = await response.json();

                    // Clear the learner display container
                    learnerDisplayContainer.innerHTML = '';

                    if (learner) {
                        // Display the learner's profile
                        const learnerCard = document.createElement('div');
                        learnerCard.classList.add('learner-card');
                        learnerCard.innerHTML = `
                            <h2>${learner.Name}</h2>
                            <p>Email: ${learner.learnerEmail}</p>
                            <p>Program: ${learner.Program}</p>
                        `;
                        learnerDisplayContainer.appendChild(learnerCard);
                    } else {
                        // Display a message when no learner is found
                        learnerDisplayContainer.innerHTML = '<p>No learner found with that name.</p>';
                    }
                } else {
                    console.error('Response is not JSON:', contentType);
                    // Handle the case where the response is not JSON
                    // You can display an error message or handle it as needed.
                }
            } else {
                console.error('Failed to fetch learner data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching and displaying learners:', error);
        }
    });
});
