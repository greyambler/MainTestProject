const whoIsYounger = require('./whoIsYounger');

test('Определяет более молодого пользователя "1933-10-07" "1938-08-17"', () => {
    const BirthdayIvan = new Date("1933-10-07")
    const BirthdayVasay = new Date("1938-08-17")

    expect(whoIsYounger(BirthdayIvan, BirthdayVasay)).toBe("Wed Aug 17 1938");
});

test('Передаем не верное значение', () => {
    expect(whoIsYounger(undefined, undefined)).toBeUndefined();
});
