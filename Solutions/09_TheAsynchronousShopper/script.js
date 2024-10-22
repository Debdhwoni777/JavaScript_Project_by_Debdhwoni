// Function to simulate placing an order with a random delay
async function placeOrder() {
    return new Promise((resolve, reject) => {
        // Random delay between 1 and 3 seconds (1000 to 3000 ms)
        const delay = Math.floor(Math.random() * 2000) + 1000;
        
        setTimeout(() => {
            resolve("Order placed successfully! Your order confirmation number is #" + Math.floor(Math.random() * 1000000));
        }, delay);
    });
}

// Function to handle the order placement and display result in the UI
async function handleOrder() {
    const resultElement = document.getElementById("orderResult");
    resultElement.innerHTML = "Placing your order...";

    try {
        const confirmationMessage = await placeOrder();
        resultElement.innerHTML = confirmationMessage;
    } catch (error) {
        resultElement.innerHTML = "There was an error placing your order.";
    }
}

// Event listener to trigger handleOrder when the button is clicked
document.getElementById("placeOrderButton").addEventListener("click", handleOrder);
