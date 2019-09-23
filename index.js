import { maxSubArraySum } from './kadanes-maxsum-subarray.js';

/**
 * Main logical driver
 * @fileOverview Contains the 'switch board' of operations within this tool.
 * @type lambda-function
 * @function driver
 * @param void {void} No parameters are accepted by this function.
 * @returns {void} Nothing is returned from this function.
 * @example
 * driver();
 */
const driver = () => {
    let expectedResult = 7;
    let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
    let actualResult = maxSubArraySum(arr);
    console.assert(actualResult === expectedResult, `The maximum contiguous array sum should be '${expectedResult}'. The actual result was:`, actualResult);
    console.log(`Executing maxSubArraySum(${arr.toString()}) -> Result: Max Sum = ${actualResult}`);
}

driver();
