const objectUser = require('./objectUser');

test('Создайте объект user, содержащий поле name созначением John', () => {
    expect(objectUser().name).toBe('John');
});

test('Создайте объект user, содержащий поле name созначением John', () => {
    expect(objectUser()).toEqual({ name: 'John' });
});
