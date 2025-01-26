document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registeration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
    //validate user input with trim  
    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // asigning validations variables 

    let isValid = true;
    const messages = [];

    //username validation
    if (usernameInput.length < 3){
        isValid = false;
        messages.push("username must be 3 characters long.");
    }

    if (!emailInput.includes("@") || emailInput.includes(".")){
        isValid = false;
        messages.push("Enter a valid email address containing '@' and '.'")
    }

    if (passwordInput.length < 8){
        isValid = false; 
        messages.push("Password must be 8 characters long");
    }

    //Feedback Display Logic 
    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
        
    } else{
       feedbackDiv.innerHTML = messages.join("<br>")
       feedbackDiv.style.color =" #dc3545";

    }
    });

});
