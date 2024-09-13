console.log("hello world");

// Get the checkbox and apply saved theme on page load
const toggleSwitch = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme from localStorage (if any)
if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

// Function to switch themes
function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
}

// Add event listener to the switch
toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(e) {
    const themeSwitchWrapper = document.querySelector('.theme-switch-wrapper');
    const allTextElements = document.querySelectorAll('body, h1, h2, h3, p, a, li, .navbar, .punjabictresses, .heading'); // Add any additional tags you want to target
    
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        allTextElements.forEach(element => {
            element.style.color = 'white'; // Set all text color to white
            element.style.backgroundColor = '#333'; // Set background color to dark
        });
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        allTextElements.forEach(element => {
            element.style.color = ''; // Reset text color to default
            element.style.backgroundColor = ''; // Reset background color to default
        });
        localStorage.setItem('theme', 'light-mode');
    }
    
    // Trigger re-animation of the theme switcher
    themeSwitchWrapper.classList.remove('fadeIn');
    void themeSwitchWrapper.offsetWidth; // Trigger reflow to restart the animation
    themeSwitchWrapper.classList.add('fadeIn');
}
