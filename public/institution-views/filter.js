// Add this JavaScript code to your script.js file
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cards = document.querySelectorAll('.card');

    // Event listener for the search button
    searchButton.addEventListener('click', filterCards);

    // Event listener for the input field (for real-time search)
    searchInput.addEventListener('input', filterCards);

    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const category = card.getAttribute('data-category').toLowerCase();

            if (category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
