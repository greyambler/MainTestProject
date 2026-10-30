const newObjestadmin = require('./newObjestadmin');

test('Создать копию объекта user с именем admin .', () => {
    // expect(newObjestadmin()).toEqual({ name: 'admin' });
    expect(newObjestadmin().name).toBe('admin');
});

test('Создать копию объекта user с именем admin роль admin .', () => {
    expect(newObjestadmin().role).toBe('admin');
});
