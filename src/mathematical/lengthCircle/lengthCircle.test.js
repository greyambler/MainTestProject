const lengthCircle = require('./lengthCircle');

test('длину окружности радиусом 10', () => {
    expect(lengthCircle(10)).toBe(63);
});
