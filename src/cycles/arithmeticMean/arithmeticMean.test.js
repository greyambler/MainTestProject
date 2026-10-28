const arithmeticMean = require('./arithmeticMean');

test('Среднее арифметическое нечётных чисел до 6', () => {
    expect(arithmeticMean(6)).toBe(3);
});
