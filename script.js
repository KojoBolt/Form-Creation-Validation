document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validate user input with trim  
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Assigning validation variables 
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Enter a valid email address containing '@' and '.'");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false; 
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic 
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
