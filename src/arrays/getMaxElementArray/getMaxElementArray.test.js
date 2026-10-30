const getMaxElementArray = require('./getMaxElementArray');

test('Нийти минимальный элемент [1,2,3,4,5]', () => {
    expect(getMaxElementArray([1, 2, 3, 4, 5])).toBe(5);
});
