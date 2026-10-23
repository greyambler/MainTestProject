const getMinElementArray = require('./getMinElementArray');

test('Нийти минимальный элемент [1,2,3,4,5]', () => {
    expect(getMinElementArray([1, 2, 3, 4, 5])).toBe(1);
});
