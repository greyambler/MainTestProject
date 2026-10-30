const sum = require('./sum');

test('Сложить 1 + 2 равно 3', () => {
    expect(sum(1, 2)).toBe(3);
});
