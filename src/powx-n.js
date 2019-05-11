/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 1) {
        return x;
    } else if (n === 0) {
        return 1;
    } else if (n < 0) {
        x = 1 / x;
        n = n * -1;
    }

    let result = myPow(x * x, Math.floor(n / 2));

    if (n % 2 != 0) {
        result = result * x;
    }

    return result
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter number to be powered: ', (number) => {
    rl.question('Please enter index: ', (index) => {
        console.log(`${number} to the power of ${index} (${number}^${index}) is ${myPow(number, index)}`);
        rl.close();
    });
});