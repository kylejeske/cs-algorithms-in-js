
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
 * @module kadanes-maxsum-subarray
 * @exports maxSubArraySum
 */

 /**
  * @function maxSubArraySum
  * @returns {integer} max_so_far
  * @param {integer[]} [arr = []] - The array against which we are finding a sum.
  * @param {integer} [size = arr.length] - The size of the array {@link maxSubArraySum#arr}
  */
function maxSubArraySum(arr = [], size = arr.length) {
    /** @const {number} **/
    let max_so_far        = Number.MIN_SAFE_INTEGER - 1;
    /** @const {number} **/
    let max_endding_here  = 0;
    /** @const {number} **/
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
