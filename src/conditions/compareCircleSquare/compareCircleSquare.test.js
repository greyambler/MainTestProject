const compareCircleSquare = require('./compareCircleSquare');

test('Площадь круга больше полщади квадрата', () => {
    expect(compareCircleSquare((Math.PI * 5 * 5).toFixed(2), Math.pow(5, 2))).toBe(true);
});
