const getNameDay = require('./getNameDay');

test('Выведит четверг на дату 01.01.2026.', () => {
    const dateUnput = new Date("2026-01-01");
    expect(getNameDay(dateUnput)).toBe("четверг");
});

test('Выведит понедельник на дату 05.01.2026.', () => {
    const dateUnput = new Date("2026-01-01");
    expect(getNameDay(dateUnput)).toBe("четверг");
});
