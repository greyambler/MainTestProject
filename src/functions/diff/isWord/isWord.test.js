const isWord = require('./isWord');

test('Вывести true в строек "функцию" одно слово', () => {
    expect(isWord("функцию")).toBe(true);
});

test('Вывести false в строек "функцию новая" несколько слов', () => {
    expect(isWord("функцию новая")).toBe(false);
});
