function sumUntilNegative(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        // If a negative number is encountered, stop the summation
        if (arr[i] < 0) {
            break;
        }
        sum += arr[i];
    }

    return sum;
}

// Example usage
const numbers = [3, 5, 7, 10, -1, 4, 2];
const result = sumUntilNegative(numbers);
console.log(result); // Output: 25
