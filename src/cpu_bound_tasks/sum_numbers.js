const funcSum = require('./../sum_numbers.js');

process.on('message', (obj) => {
    let sum = funcSum(Number.parseInt(obj.maxSum, 10));
    process.send({ sum });
})