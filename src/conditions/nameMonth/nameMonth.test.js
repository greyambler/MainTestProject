const nameMonth = require('./nameMonth');

test('Сообщить название месяца по номеру 2', () => {
    expect(nameMonth(2)).toBe("Февраль");
});

test('При вводе ошибочного числа вернет undefined', () => {
    expect(nameMonth(22)).toBeUndefined();
});
