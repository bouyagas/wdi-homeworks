// Require that server.js uses these dependencies
const express = require('express');
const logger = require('morgan');

const server = express();
const port = process.env.PORT || 3000;

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(logger('dev'));

server.listen(port, () => console.log('Sever is listening on port ', port));


server.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  const result = num1 + num2;
  res.render('add', {
    firstNumber: num1,
    secondNumber: num2,
    answer: result,
  });
});

server.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  const result = num1 - num2;
  res.render('sub', {
    firstNumber: num1,
    secondNumber: num2,
    answer: result,
  });
});

server.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  const result = num1 * num2;
  res.render('multiply', {
    firstNumber: num1,
    secondNumber: num2,
    answer: result,
  });
});

server.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  const result = num1 / num2;
  res.render('divide', {
    firstNumber: num1,
    secondNumber: num2,
    answer: result,
  });
});

server.get('/circle/:num1', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const result = num1 * num1 * Math.PI;
  res.render('circle', {
    firstNumber: num1,
    answer: result,
  });
});
