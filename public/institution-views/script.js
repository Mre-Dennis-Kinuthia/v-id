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
    const content = document.querySelector('main'); // Updated selector
    const learnerContainer = document.getElementById('learnerContainer');

    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const nav = document.querySelector('.vertical-sidebar');

    toggleSidebarBtn.addEventListener('click', () => {
        nav.classList.toggle('collapsed');
        content.classList.toggle('expanded');
    });

    // By default, you might want the sidebar to be collapsed on page load
    nav.classList.add('collapsed');

    btnView1.addEventListener('click', () => {
        hideAllViews();
        view1.style.display = 'block';
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
});
