// Toggle dropdown menu when clicking on profile photo
function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const profilePhoto = document.querySelector('.profile-photo');
    const dropdown = document.getElementById('profileDropdown');
    
    // If click is outside profile photo and dropdown
    if (!profilePhoto.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
const navToggle = document.getElementById('nav-toggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.checked = false;
    });
});



