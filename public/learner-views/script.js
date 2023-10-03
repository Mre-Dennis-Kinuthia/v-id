// script.js

document.addEventListener('DOMContentLoaded', function () {
    const btnView1 = document.getElementById('btnView1');
    const btnView2 = document.getElementById('btnView2');
    const view1 = document.querySelector('.main-id');
    const view2 = document.querySelector('.broadcast');

    btnView1.addEventListener('click', () => {
        hideAllViews();
        view1.style.display = 'block';
    });

    btnView2.addEventListener('click', () => {
        hideAllViews();
        view2.style.display = 'block';
    });

    function hideAllViews() {
        view1.style.display = 'none';
        view2.style.display = 'none';
    }
});
