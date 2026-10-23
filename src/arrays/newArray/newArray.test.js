const newArray = require('./newArray');

test('Новый массив такой же длины [1,2,3,4,5]', () => {
    expect(newArray([1, 2, 3, 4, 5])).toHaveLength(5);
});

test('Новый массив элементы вдвое больше [1,2,3,4,5]', () => {
    const oldArray = [1, 2, 3, 4, 5];
    const nArray = newArray(oldArray);
    nArray.forEach((element, index) => {
        expect(element === oldArray[index] * 2).toBe(true);
    });
});
