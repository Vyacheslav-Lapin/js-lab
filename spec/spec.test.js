import {half, fibanacci} from '../src'

test('half', () => {
    expect(half(6)).toBe(3);
});

test('fibonacci', () => {
    const x = 5;
// console.log("Стартуем вычисление для x = " + x);
// const start = Date.now();
    console.log(`fibanacci(${x}) = ${fibanacci(x)}`);
// console.log(`Подсчёт занял ${Date.now() - start} миллисекунд`);
   expect(fibanacci(x)).toBe(5);
});
