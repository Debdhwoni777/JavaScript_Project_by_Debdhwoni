function multiplyByTwoWithDelay(numbers) {
    return numbers.map((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
        }, 500);
      });
    });
  }
  
  async function processNumbers(numbers) {
    const promises = multiplyByTwoWithDelay(numbers);
    return await Promise.all(promises);
  }
  
  // Example usage
  const numbersArray = [1, 2, 3, 4, 5];
  processNumbers(numbersArray).then((result) => {
    console.log(result); // Output: [2, 4, 6, 8, 10]
  });
  