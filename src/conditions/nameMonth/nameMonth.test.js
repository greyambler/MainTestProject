const nameMonth = require('./nameMonth');

test('Сообщить название месяца по номеру 0', () => {
    expect(nameMonth(0)).toBeUndefined();
});

test('Сообщить название месяца по номеру 1', () => {
    expect(nameMonth(1)).toBe("Январь");
});

test('Сообщить название месяца по номеру 2', () => {
    expect(nameMonth(2)).toBe("Февраль");
});

test('Сообщить название месяца по номеру 12', () => {
    expect(nameMonth(12)).toBe("Декабрь");
});

test('При вводе ошибочного числа вернет undefined', () => {
    expect(nameMonth(13)).toBeUndefined();
});

test('При вводе ошибочного числа вернет undefined', () => {
    expect(nameMonth("ввв")).toBeUndefined();
});
