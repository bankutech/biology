document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before accessing elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('s4ac');  // Correct ID for the username
    const passwordInput = document.getElementById('biology');  // Correct ID for the password

    // Ensure that the elements are not null before proceeding
    if (!usernameInput || !passwordInput) {
        console.error("Elements not found.");
        return;  // Stop further execution if elements are not found
    }

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission behavior

        // Get the input values
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Validate credentials (this is a simple example, you should use backend validation for production)
        if (username === 's4ac' && password === 'bio') {
            // Successful login - Redirect to main page
            window.location.href = 'main.html';  // Redirect to main.html page
        } else {
            // Display an error message if login fails
            alert('Invalid username or password. Please try again.');
        }
    });
});
