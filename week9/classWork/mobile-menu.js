function mobileMenu(toggleButton, targetMenu, className) {
    toggleButton.addEventListener('click', function() {
        targetMenu.classList.toggle(className);
    });
}

/*
Immediately invoked Function Execution life
*/
(function() {
    const button = document.querySelector('header button');
    const nav = document.querySelector('main nav');
    //window.something = 'on the global scope now';
    mobileMenu(button, nav, 'hide-menu');
})();