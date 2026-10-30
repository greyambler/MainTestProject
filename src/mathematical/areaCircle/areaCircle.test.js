const areaCircle = require('./areaCircle');

test('площадь окружности радиусом 10', () => {
    expect(areaCircle(10)).toBe(314);
});
