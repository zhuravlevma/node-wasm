const {fibonacci, calculate} = require('../pkg')
const {calculateJs} = require('./calculate');

function fibonacciJS(x) {
    if (x === 0) {
        return 0
    }

    if (x === 1) {
        return 1
    }

    return fibonacciJS(x - 1) + fibonacciJS(x - 2)
}


let sumWasmDuration = 0;
let sumJsDuration = 0;

for (let i = 0; i < 50; i++) {
    const wasmStart = Date.now()
    calculate()
    const wasmDuration = Date.now() - wasmStart

    const jsStart = Date.now()
    calculateJs()
    const jsDuration = Date.now() - jsStart

    sumWasmDuration += wasmDuration;
    sumJsDuration += jsDuration;
}

console.log('Average time of calculations for Matrix: ');
console.log('WASM: ', Math.floor(sumWasmDuration / 50));
console.log('JS vanilla: ', Math.floor(sumJsDuration) / 50);

sumWasmDuration = 0;
sumJsDuration = 0;

for (let i = 0; i < 42; i++) {
    const wasmStart = Date.now()
    fibonacci(i)
    const wasmDuration = Date.now() - wasmStart

    const jsStart = Date.now()
    fibonacciJS(i)
    const jsDuration = Date.now() - jsStart

    sumWasmDuration += wasmDuration;
    sumJsDuration += jsDuration;
}

console.log('Average time of calculations for Fibonacci: ');
console.log('WASM: ', Math.floor(sumWasmDuration / 42));
console.log('JS vanilla: ', Math.floor(sumJsDuration) / 42);