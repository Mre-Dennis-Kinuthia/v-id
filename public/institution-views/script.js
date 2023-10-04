document.addEventListener('DOMContentLoaded', function () {
    const btnView1 = document.getElementById('btnView1');
    const btnView2 = document.getElementById('btnView2');
    const btnView3 = document.getElementById('btnView3');
    const btnView4 = document.getElementById('btnView4');
    const view1 = document.getElementById('view1');
    const view2 = document.getElementById('view2');
    const view3 = document.getElementById('view3');
    const view4 = document.getElementById('view4');
    const sidebar = document.querySelector('.vertical-sidebar');
    const content = document.querySelector('.content');
    const learnerContainer = document.getElementById('learnerContainer');


    // Function to create a learner card
    function createLearnerCard(learner) {
        const card = document.createElement('div');
        card.classList.add('learner-card');

        const name = document.createElement('h2');
        name.textContent = learner.name; // Assuming the learner object has a 'name' property

        const program = document.createElement('p');
        program.textContent = 'Program: ' + learner.program;
        // Assuming the learner object has a 'program' property
        // You can add more learner details here
        card.appendChild(name);
        card.appendChild(program);

        return card;
    }

    // Function to fetch learner data and display cards
    async function displayLearners() {
        try {
            const response = await fetch('/api/learners'); // Replace with your API endpoint
            const learners = await response.json();

            // Clear existing learner cards
            learnerContainer.innerHTML = '';

            // Create and append learner cards
            learners.forEach((learner) => {
                const learnerCard = createLearnerCard(learner);
                learnerContainer.appendChild(learnerCard);
            })
        } catch (error) {
            console.error('Error fetching and displaying learners:', error);
        }
    }

    btnView1.addEventListener('click', () => {
        hideAllViews();
        view1.style.display = 'block';
        displayLearners(); 
        // Fetch and display learners when the "Dashboard" button is clicked
    });

    btnView2.addEventListener('click', () => {
        hideAllViews();
        view2.style.display = 'block';
    });

    btnView3.addEventListener('click', () => {
        hideAllViews();
        view3.style.display = 'block';
    });

    btnView4.addEventListener('click', () => {
        hideAllViews();
        view4.style.display = 'block';
    });


    function hideAllViews() {
        view1.style.display = 'none';
        view2.style.display = 'none';
        view3.style.display = 'none';
        view4.style.display = 'none';
    }

    const toggleSidebar = document.getElementById('toggleSidebar');

    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('expanded');
    });
});