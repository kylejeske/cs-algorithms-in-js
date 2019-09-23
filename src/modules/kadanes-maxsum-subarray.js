
/**
 * Find the maximum Sum of a Sub-Array.
 * @fileOverview Kadane's Algorithm for finding the maximum sum of a sub-array.
 * @example
 * import { maxSubArraySum } from './kadanes-maxsum-subarray.js';
 *
 * let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
 * let sum = maxSubArraySum(arr); // Result: sum = 7;
 *
 *
 * @module cs/kadanes-maxsum-subarray
 * @exports maxSubArraySum
 */

 /**
  * Maximum Sum within a contiguous sub-array, Kadane's Algorithm
  * @function
  * @param {integer[]} [arr = []] - The array against which we are finding a sum.
  * @param {integer} [size = arr.length] - The size of the array {@link maxSubArraySum#arr}
  * @returns {integer} max_so_far
  */
function maxSubArraySum(arr = [], size = arr.length) {
    let max_so_far        = Number.MIN_SAFE_INTEGER - 1;
    let max_endding_here  = 0;
    let position          = 0;
    while (position < size) {
        max_endding_here  = max_endding_here + arr[position];

        (max_endding_here > max_so_far)
        ? max_so_far = max_endding_here
        : false;

        (max_endding_here < 0)
        ? max_endding_here = 0
        : false;

        position++;
    }
    return max_so_far;
}

export default maxSubArraySum;
