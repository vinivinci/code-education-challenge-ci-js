const dataGet = {
    data: 'Full Cycle!'
}

test("testing data is equal to Full Cycle", async () => {
    global.fetch = jest.fn(() => Promise.resolve(dataGet))
    expect(await global.fetch()).toEqual({ data: 'Full Cycle!' });
});

