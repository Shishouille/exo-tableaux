const minimum = require('./1-min');

describe('Minimum', () => {
  it('Should return null on empty array', () => {
    expect(minimum([])).toBe(null);
  });
  it('Should get the only one element of a single element array', () => {
    expect(minimum([12])).toBe(12);
  });
  it('Should get the minimum of the array', () => {
    expect(minimum([12, 34, 22, 9, 23, 1000])).toBe(9);
  });
  it('Should works when duplicates', () => {
    expect(minimum([4, 4, 4, 9, 4, 4])).toBe(4);
  });
  it('Should works with negative numbers', () => {
    expect(minimum([12, -34, 22, 9, -23, 100, 0])).toBe(-34);
  });
  it('Should works when the min is 0', () => {
    expect(minimum([12, 34, 0, 22, 9, 3, 1000])).toBe(0);
  });
});
