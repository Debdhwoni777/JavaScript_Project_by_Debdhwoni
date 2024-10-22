function doubleTrouble(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        // If the current element is not the same as the previous one, double it
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        } else {
            // If it's a duplicate, just push the original element
            result.push(arr[i]);
        }
    }

    return result;
}

// Example usage
const inputArray = [2, 2, 3, 5, 5, 5, 6, 7, 7];
const doubledArray = doubleTrouble(inputArray);
console.log(doubledArray);