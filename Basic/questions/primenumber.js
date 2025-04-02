function isPrime(number) {
  if (number <= 1) {
      console.log(`${number} is not a prime number`);
      return; // Exit the function early
  }
  if (number === 2) {
      console.log(`${number} is a prime number`); // 2 is a prime number
      return; // Exit the function early
  }
  // Check for factors from 2 to the number - 1
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          console.log(`${number} is not a prime number`);
          return; // Exit the function early
      }
  }
  console.log(`${number} is a prime number`);
}

// Test the function
isPrime(13);  // Output: "13 is a prime number"
isPrime(1);   // Output: "1 is not a prime number"
isPrime(4);   // Output: "4 is not a prime number"
isPrime(2);   // Output: "2 is a prime number"
