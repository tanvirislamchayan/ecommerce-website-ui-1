document.addEventListener('DOMContentLoaded', () => {
    var navBar = document.getElementById('navigation-section');
    var menu = document.querySelector('.menu');
    
    window.addEventListener('scroll', () => {
        navBar.classList.toggle('sticky', window.scrollY > 0);
        menu.classList.toggle('stick', window.scrollY > 0);
    });

    const navOpen = document.getElementById('nav-open');

    if (navOpen) {
        navOpen.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        });
    }

    const menuOverlay = document.querySelector('.menu-overlay');

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            menu.classList.remove('show-menu');
        });
    }
});
