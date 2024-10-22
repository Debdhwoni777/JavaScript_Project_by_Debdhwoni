// Get the button element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Smooth scroll function
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listener to button
scrollToTopBtn.addEventListener('click', smoothScrollToTop);
