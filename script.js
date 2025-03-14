// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Add spinning logo functionality
const logo = document.querySelector('.logo');
let isSpinning = false;

logo.addEventListener('click', () => {
    if (!isSpinning) {
        isSpinning = true;
        logo.classList.add('spin');
        
        // Remove the spin class after animation completes
        setTimeout(() => {
            logo.classList.remove('spin');
            isSpinning = false;
        }, 800); // Match this with the CSS transition duration
    }
}); 