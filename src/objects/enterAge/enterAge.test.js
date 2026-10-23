const enterAge = require('./enterAge');

test('Ввести возраст John = 32', () => {
    expect(enterAge(32)).toMatchObject({ age: 32 });
});
