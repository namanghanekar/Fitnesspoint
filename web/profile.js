document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editModal = document.getElementById('edit-modal');
    const closeBtn = document.querySelector('.close-btn');
    const editForm = document.getElementById('edit-form');
    const imgUpload = document.getElementById('img-upload');
    const profileImg = document.getElementById('profile-img');
    
    // Profile data elements
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profilePhone = document.getElementById('profile-phone');
    const profileBirthdate = document.getElementById('profile-birthdate');
    const profileGender = document.getElementById('profile-gender');
    const profileHeight = document.getElementById('profile-height');
    const profileWeight = document.getElementById('profile-weight');
    
    // Form elements
    const editName = document.getElementById('edit-name');
    const editEmail = document.getElementById('edit-email');
    const editPhone = document.getElementById('edit-phone');
    const editBirthdate = document.getElementById('edit-birthdate');
    const editGender = document.getElementById('edit-gender');
    const editHeight = document.getElementById('edit-height');
    const editWeight = document.getElementById('edit-weight');
    
    // Open modal and populate form with current data
    editProfileBtn.addEventListener('click', function() {
        // Format birthdate for input date field (YYYY-MM-DD)
        const birthdate = profileBirthdate.textContent;
        let formattedDate = '';
        
        // Simple date conversion (this is basic and might need improvement for production)
        if (birthdate) {
            const date = new Date(birthdate);
            if (!isNaN(date.getTime())) {
                formattedDate = date.toISOString().split('T')[0];
            }
        }
        
        // Populate form fields
        editName.value = profileName.textContent;
        editEmail.value = profileEmail.textContent;
        editPhone.value = profilePhone.textContent;
        editBirthdate.value = formattedDate;
        editGender.value = profileGender.textContent;
        editHeight.value = profileHeight.textContent;
        editWeight.value = profileWeight.textContent;
        
        // Show modal
        editModal.style.display = 'block';
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        editModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === editModal) {
            editModal.style.display = 'none';
        }
    });
    
    // Handle form submission
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Update profile with form data
        profileName.textContent = editName.value;
        profileEmail.textContent = editEmail.value;
        profilePhone.textContent = editPhone.value;
        
        // Format date for display
        if (editBirthdate.value) {
            const date = new Date(editBirthdate.value);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            profileBirthdate.textContent = date.toLocaleDateString('en-US', options);
        }
        
        profileGender.textContent = editGender.value;
        profileHeight.textContent = editHeight.value;
        profileWeight.textContent = editWeight.value;
        
        // Close modal
        editModal.style.display = 'none';
        
        // Show success message (optional)
        alert('Profile updated successfully!');
    });
    
    // Handle profile image upload
    imgUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                profileImg.src = e.target.result;
            };
            
            reader.readAsDataURL(file);
        }
    });
});



