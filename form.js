document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-info');
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', () => {
        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // Get form values
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phone-number').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const zipCode = document.getElementById('zipcode').value.trim();
        const creditCardNumber = document.getElementById('credit-card-number').value.trim();
        const expirationDate = document.getElementById('expiration-date').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        // Validate first name
        if (firstName === '') {
            showError('error-message', 'First name is required.');
            isValid = false;
        }

        // Validate last name
        if (lastName === '') {
            showError('error-message2', 'Last name is required.');
            isValid = false;
        }

        // Validate email
        if (email === '' || !validateEmail(email)) {
            showError('error-message', 'A valid email is required.');
            isValid = false;
        }

        // Validate phone number
        if (phoneNumber === '' || !validatePhoneNumber(phoneNumber)) {
            showError('phoneerror-message', 'A valid phone number is required.');
            isValid = false;
        }

        // Validate address
        if (address === '') {
            showError('street-error', 'Street address is required.');
            isValid = false;
        }

        // Validate city
        if (city === '') {
            showError('city-error', 'City is required.');
            isValid = false;
        }

        // Validate zip code
        if (zipCode === '' || !validateZipCode(zipCode)) {
            showError('zip-error', 'A valid zip code is required.');
            isValid = false;
        }

        // Validate credit card number
        if (creditCardNumber === '' || !validateCreditCardNumber(creditCardNumber)) {
            showError('credit-card-error', 'A valid credit card number is required.');
            isValid = false;
        }

        // Validate CVV
        if (cvv === '' || !validateCVV(cvv)) {
            showError('cvv-error', 'A valid CVV is required.');
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            return;
        }

        // If valid, you can submit the form or perform other actions
        form.submit(); // Or handle the form submission with AJAX
    });

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('span[id$="-error"]');
        errorMessages.forEach(span => span.textContent = '');
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        const regex = /^\d{10}$/; // Example: 1234567890
        return regex.test(phoneNumber);
    }

    function validateZipCode(zipCode) {
        const regex = /^\d{5}$/; // Example: 12345
        return regex.test(zipCode);
    }

    function validateCreditCardNumber(cardNumber) {
        const regex = /^\d{16}$/; // Example: 1234567812345678
        return regex.test(cardNumber);
    }

    function validateCVV(cvv) {
        const regex = /^\d{3}$/; // Example: 123
        return regex.test(cvv);
    }
});
