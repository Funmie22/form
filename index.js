const form = document.getElementById("user-info");
const submitButton = document.getElementById("submit-btn");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const address = document.getElementById("address");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");
const creditCardNumber = document.getElementById("credit-card-number");
const cvv = document.getElementById("cvv");
const errorMessage = document.getElementById("error-message");
const errorMessage2 = document.getElementById("error-message2");
const phoneErrorMessage = document.getElementById("phoneerror-message");
const streetError = document.getElementById("street-error");
const cityError = document.getElementById("city-error");
const zipError = document.getElementById("zip-error");
const creditCardError = document.getElementById("credit-card-error");
const cvvError = document.getElementById("cvv-error");

// Add event listeners for input fields to handle dynamic validation
function addDynamicValidation(input, errorElem, validateFn, errorMessageText) {
    input.addEventListener('input', () => {
        if (validateFn(input.value)) {
            errorElem.textContent = '';
            errorElem.style.display = 'none';
            input.style.border = '1px solid #ccc'; // Reset border
        } else {
            errorElem.textContent = errorMessageText;
            errorElem.style.display = 'flex';
            errorElem.style.color = 'red';
            input.style.border = '2px solid red'; // Set error border
        }
    });
}

// Validation functions
function validateFirstName(value) {
    return value.length >= 3;
}

function validateLastName(value) {
    return value.length >= 3;
}

function validatePhoneNumber(value) {
    return !isNaN(value) && value.length >= 10;
}

function validateAddress(value) {
    return value.length >= 3;
}

function validateCity(value) {
    return value.length >= 3;
}

function validateZipcode(value) {
    return value.length >= 3;
}

function validateCreditCardNumber(value) {
    return !isNaN(value) && value.length >= 16;
}

function validateCvv(value) {
    return !isNaN(value) && value.length === 3;
}

// Attach dynamic validation to input fields
addDynamicValidation(firstName, errorMessage, validateFirstName, "First name must be at least 3 characters long.");
addDynamicValidation(lastName, errorMessage2, validateLastName, "Last name must be at least 3 characters long.");
addDynamicValidation(phoneNumber, phoneErrorMessage, validatePhoneNumber, "Phone number should be a valid number and at least 10 characters long.");
addDynamicValidation(address, streetError, validateAddress, "Enter a proper address.");
addDynamicValidation(city, cityError, validateCity, "Enter a proper city.");
addDynamicValidation(zipcode, zipError, validateZipcode, "Enter a zip code.");
addDynamicValidation(creditCardNumber, creditCardError, validateCreditCardNumber, "Credit card number should be a valid number and at least 16 characters long.");
addDynamicValidation(cvv, cvvError, validateCvv, "Input a valid CVV, check the back of your card.");

// Form submission handler
submitButton.addEventListener("click", (e) => {
    let isValid = true;

    if (!validateFirstName(firstName.value)) {
        errorMessage.textContent = "First name must be at least 3 characters long.";
        errorMessage.style.display = "flex";
        errorMessage.style.color = "red";
        firstName.style.border = "2px solid red";
        isValid = false;
    }

    if (!validateLastName(lastName.value)) {
        errorMessage2.textContent = "Last name must be at least 3 characters long.";
        errorMessage2.style.display = "flex";
        errorMessage2.style.color = "red";
        lastName.style.border = "2px solid red";
        isValid = false;
    }

    if (!validatePhoneNumber(phoneNumber.value)) {
        phoneErrorMessage.textContent = "Phone number should be a valid number and at least 10 characters long.";
        phoneErrorMessage.style.display = "flex";
        phoneErrorMessage.style.color = "red";
        phoneNumber.style.border = "2px solid red";
        isValid = false;
    }

    if (!validateAddress(address.value)) {
        streetError.textContent = "Enter a proper address.";
        streetError.style.display = "flex";
        streetError.style.color = "red";
        address.style.border = "2px solid red";
        isValid = false;
    }

    if (!validateCity(city.value)) {
        cityError.textContent = "Enter a proper city.";
        cityError.style.display = "flex";
        cityError.style.color = "red";
        city.style.border = "2px solid red";
        isValid = false;
    }

    if (!validateZipcode(zipcode.value)) {
        zipError.textContent = "Enter a zip code.";
        zipError.style.display = "flex";
        zipError.style.color = "red";
        zipcode.style.border = "2px solid red";
        isValid = false;
    }

    if (!validateCreditCardNumber(creditCardNumber.value)) {
        creditCardError.textContent = "Credit card number should be a valid number and at least 16 characters long.";
        creditCardError.style.display = "flex";
        creditCardError.style.color = "red";
        creditCardNumber.style.border = "2px solid red";
        isValid = false;
    }

    if (!validateCvv(cvv.value)) {
        cvvError.textContent = "Input a valid CVV, check the back of your card.";
        cvvError.style.display = "flex";
        cvvError.style.color = "red";
        cvv.style.border = "2px solid red";
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
});
