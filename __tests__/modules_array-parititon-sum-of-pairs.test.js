/* eslint no-use-before-define: 0 */
import { arrayParititon_PairSumCompute } from '../src/modules/array-partition-sum-of-pairs';

describe('Array Partition - Sum of Pairs', () => {
  it('should have a function to use', () => {
    expect(typeof arrayParititon_PairSumCompute).toEqual("function");
  });
  it('should return integer 4 when given values [1,4,3,2]', () => {
    expect(Object.is(arrayParititon_PairSumCompute([1,4,3,2]), 4)).toBeTruthy();
  });
});
