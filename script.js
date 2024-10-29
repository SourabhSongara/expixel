// Get the form element
const form = document.getElementById('signup-form');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the input values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;

    // Validate the input values
    if (firstName === '') {
        alert('First name is required');
        return;
    }

    if (lastName === '') {
        alert('Last name is required');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert('Invalid phone number');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    // If all input values are valid, submit the form
    form.submit();
});

// Function to validate email address
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
}