function findTopFiveNumbers(arr) {
    if (arr.length < 5) {
        console.log("Array should have at least five numbers.");
        return;
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Extract the top five numbers
    const topFive = arr.slice(0, 5);

    console.log("Top five numbers:", topFive);
}

// Example usage
const numbersArray = [10, 5, 8, 20, 15, 25, 30, 18, 12, 7];
findTopFiveNumbers(numbersArray);
