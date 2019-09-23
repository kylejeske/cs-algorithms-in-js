import kadanesMaxSumModule from 'kadanes-maxsum-subarray';

describe('testing kadanes maxsum subarray module', () => {

  let expectedResult = 7;
  let inputArray     = [-2, -3, 4, -1, -2, 1, 5, -3];

  it('maxSubArraySum() should be a function', () => {
    expect(kadanesMaxSumModule instanceof Function).toBeTruthy();
  });

  it('maxSubArraySum() should return (MIN_SAFE_INTEGER - 1) when called without arguments', () => {
    expect(Object.is(kadanesMaxSumModule(), Number.MIN_SAFE_INTEGER - 1)).toBeTruthy();
  });

  it(`using input: (integer[${inputArray.toString()}]) the maximum contiguous sum should be: ${expectedResult}`, () => {
    expect(Object.is(kadanesMaxSumModule(inputArray), expectedResult)).toBe(true);
  });

});
