const numberMinutes = require('./numberMinutes');

test('Выводит количество минут ', () => {
    const iputDate = new Date("2026-01-01T12:00:00Z")
    const currentDay = new Date("2026-01-01T15:00:00Z")
    expect(numberMinutes(iputDate, currentDay)).toBe("180");
});
