
/**
 * Reverse the digits in a Signed 32-bit Integer
 * @fileOverview Reverse the digits in a Signed 32-bit Integer
 * @example
 * import { reverseSignedInt32 } from './reverse-signed-int32.js';
 *
 * let int = 123456;
 * let res = reverseSignedInt32(int); // Result: res = 654321;
 *
 *
 * @module cs/reverse-signed-int32
 * @exports reverseSignedInt32
 */

/**
 * @const MIN_INT32
 */
const MIN_INT32 = 1<<31;      // -2147483648
/**
 * @const MAX_INT32
 */
const MAX_INT32 = 1<<31>>>0;  //  2147483648

 /**
  * Reverse a Signed Integer 32
  * @function
  * @param {integer} [int] - Integer that we are reversing.
  * @returns {integer|0} result
  */
const reverseSignedInt32 = (int) => {
  let result = 0;
  while (int !== 0) {
    result = result * 10 + (int % 10);
    int = Math.trunc(int / 10);
  }
  return (result > MAX_INT32 || result < MIN_INT32)
          ? 0
          : result;
}

export { reverseSignedInt32 }
