// --To top button
//+ Selectors
let topButton = document.getElementById("backToTop"); //select the btn

//+ Scroll to Top
function scrollToTop() {
    document.documentElement.scrollIntoView(); //To top function
};
topButton.addEventListener('click', scrollToTop); // Event listener for top button click

//+ Hide in top section
document.addEventListener('scroll', () => { // Event listener for scroll
    if (document.documentElement.scrollTop < 300) { // Condition for the scroll position away from top
        topButton.style.bottom = "-5rem"; // Move below bottom to hide
    } else {
        topButton.style.bottom = "1rem"; // Set initial value
    };
});

// --Toggle navigation menu
//+ Selectors
let menuToggle = document.getElementById('menuToggle');
let menuBox = document.querySelector('header nav article');

//+ toggle Menu
const toggleMenu = () => {
    if (menuBox.classList.contains('menu-hide')) {
        menuBox.classList.replace('menu-hide', 'menu-show'), menuToggle.classList.add('menuToggleBg-Show');
    } else {
        menuBox.classList.replace('menu-show', 'menu-hide'),
            menuToggle.classList.remove('menuToggleBg-Show');
    };
};

menuToggle.addEventListener('click', toggleMenu);

//+ Close menu when click outside
document.addEventListener('click', function (e) {
    if (!menuToggle.contains(e.target)) {
        menuBox.classList.replace('menu-show', 'menu-hide'), menuToggle.classList.remove('menuToggleBg-Show');
    };
});