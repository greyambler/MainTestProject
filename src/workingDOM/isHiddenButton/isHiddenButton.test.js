const isHiddenButton = require('./isHiddenButton');

test('Если входная строка пуста то возвращается true', () => {
    expect(isHiddenButton("")).toBe(true);
});

test('Если входная строка "не пуста" то возвращается false', () => {
    expect(isHiddenButton("не пуста")).toBe(false);
});
