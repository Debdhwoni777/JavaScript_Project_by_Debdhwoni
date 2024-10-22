// Select all quantity inputs
const quantityInputs = document.querySelectorAll('.quantity');

// Function to update total
function updateCartTotal() {
    let total = 0;

    // Loop through each quantity input
    quantityInputs.forEach(input => {
        const price = parseFloat(input.getAttribute('data-price'));
        const quantity = parseInt(input.value);

        // Update total by multiplying price with quantity
        total += price * quantity;
    });

    // Update the total in the HTML
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Add event listeners to each input to trigger the total update
quantityInputs.forEach(input => {
    input.addEventListener('change', updateCartTotal);
    input.addEventListener('input', updateCartTotal);
});
