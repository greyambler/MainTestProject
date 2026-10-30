const sumAllNumber = require('./sumAllNumber');

test('Вывести в консоль сумму всех целы хчисел от 50 до 100.', () => {
    expect(sumAllNumber()).toBe(3725);
});
