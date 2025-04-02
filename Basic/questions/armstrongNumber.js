function isArmstrong(number) {
    let temp = number;
    let sum = 0;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder; // Accumulate the sum of cubes
        temp = Math.floor(temp / 10); // Use Math.floor for integer division
    }
    if (sum === number) {
        console.log(`${number} is an Armstrong number`);
    } else {
        console.log(`${number} is not an Armstrong number`);
    }
}

// Test the function
isArmstrong(153); // This should output: 153 is an Armstrong number
