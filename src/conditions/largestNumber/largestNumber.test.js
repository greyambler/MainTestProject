const largestNumber = require('./largestNumber');

test('Выбрать большее число из 1, 2 выбор 2', () => {
    expect(largestNumber(1, 2)).toBe(2);
});
