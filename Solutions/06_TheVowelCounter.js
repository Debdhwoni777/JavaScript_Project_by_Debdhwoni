function countVowels(str) {
    // Define the vowels to check
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Loop through the string and count vowels
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
const exampleString = "Hello World";
const vowelCount = countVowels(exampleString);
console.log(vowelCount); // Output: 3