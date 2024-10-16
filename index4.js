const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const labels = document.querySelectorAll("label");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("confirm-password-error");
const age = document.getElementById("age");
const ageError = document.getElementById("age-error");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (e) => { 
    let isValid = true;

    if (username.value.length < 10) {
        undefined.textContent = "First name must be at least 3 characters long.";
        usernameError.style.display = "flex";
        usernameError.style.color = "red";
        isValid = false;
    } else {
        errorMessage.style.display = "none";
    }
});