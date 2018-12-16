module.exports = maxSum => {
    let sum = 0;
    for (let index = 0; index < maxSum; index++) {
        sum += index;
    }
    return sum;
}