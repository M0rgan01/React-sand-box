
describe('Pack démo', () => {

  beforeEach(() => {
    console.log('Before Each test');
  });

  beforeAll(() => {
    console.log('Before All test');
  });

  test('testDemo', () => {
    const a = 2 + 2;
    expect(a).toBe(4);
  });

  test('testDemo2', () => {
    const a = 2 + 2;
    expect(a).toBe(4);
  });
});

