// Function to simulate brewing coffee with a random delay
async function brewCoffee(type) {
    return new Promise((resolve, reject) => {
        // Random delay between 2 and 5 seconds (2000 to 5000 ms)
        const delay = Math.floor(Math.random() * 3000) + 2000;
        
        // Simulate the brewing process with a delay
        setTimeout(() => {
            resolve(`${type} coffee is ready! Enjoy your drink.`);
        }, delay);
    });
}

// Function to handle coffee brewing and display result
async function makeCoffee(type) {
    console.log(`Brewing your ${type} coffee...`);
    
    try {
        const coffeeReadyMessage = await brewCoffee(type);
        console.log(coffeeReadyMessage);
    } catch (error) {
        console.log("There was an error brewing your coffee.");
    }
}

// Example usage
makeCoffee("Espresso");
makeCoffee("Latte");
