const creditCardFields = document.getElementById('credit-card-fields');
const paypalFields = document.getElementById('paypal-fields');
const paymentMethod = document.getElementById('payment-method');

document.addEventListener('DOMContentLoaded', function() {
    creditCardFields.style.display = 'none';
    paypalFields.style.display = 'none';
});

paymentMethod.addEventListener('change', function() {
    creditCardFields.style.display = 'none';
    paypalFields.style.display = 'none';
    if (this.value === 'credit-card') {
        creditCardFields.style.display = 'block';
    } else if (this.value === 'paypal') {
        paypalFields.style.display = 'block';
    }
});
