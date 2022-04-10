const {matrix_rs, fibonacci_rs} = require('../pkg')
const {calculateJs} = require('./calculate');
const {run} = require('./banchmark');
const {fibonacciJS} = require('./fibonacci');

const [avgMatrixWASM, avgMatrixJS] = run(matrix_rs, calculateJs, 50);
console.log('Average time of calculations for Matrix: ');
console.log('WASM: ', avgMatrixWASM, 'ms');
console.log('JS vanilla: ', avgMatrixJS, 'ms');

const [avgFibonacciWASM, avgFibonacciJS] = run(fibonacci_rs, fibonacciJS, 40);
console.log('Average time of calculations for Fibonacci: ');
console.log('WASM: ', avgFibonacciWASM, 'ms');
console.log('JS vanilla: ', avgFibonacciJS, 'ms');