const getVariables = require('./getVariables');

test('Получить имя из переменной name.', () => {
    expect(getVariables('name')).toBe('admin');
});

test('Получить возраст из переменной age.', () => {
    expect(getVariables('age')).toBe(32);
});

test('Получить роль из переменной role.', () => {
    expect(getVariables('role')).toBe('admin');
});
