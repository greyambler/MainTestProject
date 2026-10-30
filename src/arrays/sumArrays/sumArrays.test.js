const sumArrays = require('./sumArrays');

test('Сложить все элементы [1,2,3,4,5]', () => {
    expect(sumArrays([1, 2, 3, 4, 5])).toBe(15);
});
