const sum = require('./data')

test("testing sum 1 + 2 = 3", done => {
    expect(sum(1, 2)).toEqual(3);
    done();
});

