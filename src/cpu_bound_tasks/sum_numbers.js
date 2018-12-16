const funcSum = require('./../sum_numbers.js');

process.on('message', (maxSum) => {
    let sum = funcSum(maxSum);
    process.send(sum);
})