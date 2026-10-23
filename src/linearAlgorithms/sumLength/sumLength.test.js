const sumLength = require('./sumLength');

test(' a.length (Vasay.length = 5) + b.length (Ivan.length = 4) ', () => {
    expect(sumLength('Vasay', 'Ivan')).toBe(9);
});
