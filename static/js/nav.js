document.addEventListener('DOMContentLoaded', () => {
    var navBar = document.getElementById('navigation-section');
    var menu = document.querySelector('.menu');
    
    window.addEventListener('scroll', () => {
        navBar.classList.toggle('sticky', window.scrollY > 0);
        menu.classList.toggle('stick', window.scrollY > 0);
    });

    

    
});


document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.getElementById('nav-open');
    const navCls = document.getElementById('nav-cls');
    const navBar = document.getElementById('nav-bar');
    const navSearchIcon = document.getElementById('search-icon');
    const navBarOpen = document.getElementById('nav-search');

    if (navOpen) {
        navOpen.addEventListener('click', () => {
            navBar.classList.add('nav-open-slide');
        });
    }

    if (navCls) {
        navCls.addEventListener('click', () => {
            navBar.classList.remove('nav-open-slide');
        });
    }

    if (navSearchIcon) {
        navSearchIcon.addEventListener('click', () => {
            console.log('clicked');
            navBarOpen.classList.toggle('search-open-slide');

            // Toggle the icon
            const icon = navSearchIcon.querySelector('i');
            if (icon.classList.contains('fa-magnifying-glass')) {
                icon.classList.remove('fa-magnifying-glass');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-magnifying-glass');
            }
        });
    }
});

