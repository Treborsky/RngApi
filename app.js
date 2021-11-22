const express = require('express');
const app = express();

const getRandomInt = (maxi) => {
    return Math.floor(Math.random() * maxi);
}

app.get('/', (req, res) => {
    let numbers = [];
    for (let index = 0; index < 10; index++) {
        numbers.push(getRandomInt(10));
    }
    res.send({
        "numbers": numbers
    });
});

app.listen(8000);
