const PORT = 3000;
const express = require('express');
const child_process = require('child_process');
const app = express();

/*  REQUEST EXAMPLES
http://127.0.0.1:3000/sync?max=1500000000
http://127.0.0.1:3000/async?max=1500000000
*/

app.route('/sync')
.get((req, res) => {
    const data = new Date();
    console.log(`${data.toLocaleDateString()} ${data.toLocaleTimeString()}: Execução síncrona iniciada`);
    const maxSum = req.query.max;
    const funcSum = require('./src/sum_numbers.js');
    let sum = funcSum(maxSum);
    res.end(`The sum is ${sum}`);
});

app.route('/async')
.get((req, res) => {
    const data = new Date();
    console.log(`${data.toLocaleDateString()} ${data.toLocaleTimeString()}: Execução assíncrona iniciada`);
    const maxSum = req.query.max;
    let child = child_process.fork('./src/cpu_bound_tasks/sum_numbers.js');
    child.on('message', obj => {
        res.end(`The sum is ${obj.sum}`);
        child.kill();
    });

    child.on('exit', () => {
        console.log('Thread is dead');
    });

    child.send({ maxSum });
});

app.listen(PORT, () => {
    console.log(`Server started! Listening port ${PORT}`);
});