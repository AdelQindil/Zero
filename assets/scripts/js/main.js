// --To top button
// Selectors
let topButton = document.getElementById("backToTop"); //select the btn

// *Scroll to Top
const scrollToTop = () => {
    document.documentElement.scrollIntoView(); //To top function
}

topButton.addEventListener('click', scrollToTop); // Event listener for top button click

// *Hide in top section
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop < 300) {
        topButton.style.bottom = "-5rem"; // Move below bottom to hide
    } else {
        topButton.style.bottom = "1rem"; // Set initial value
    }
})

// --Open navigation menu