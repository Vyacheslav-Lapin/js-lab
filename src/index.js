#! /usr/bin/env node

function fibanacci(x, xMinus1Fibanacci) {
    if (x < 2)
        return x;

    const xMinus2Fibanacci = fibanacci(x - 2);
    return (xMinus1Fibanacci | fibanacci(x - 1, xMinus2Fibanacci)) + xMinus2Fibanacci;
}

const x = 45;
console.log("Стартуем вычисление для x = " + x);
const start = Date.now();
console.log(`fibanacci(${x}) = ${fibanacci(x)}`);
console.log(`Подсчёт занял ${Date.now() - start} миллисекунд`);