import moduleLoader from './modules/loader';

/**
 * Entrypoint into the logic of the modules.
 * @fileOverview Serves as an entrypoint into the modules logic.
 * @see module:my/entrypoint
 */

/**
 * @module my/entrypoint
 * @exports {void} Nothing is exported.
 * @returns {void} Nothing is returned.
 */

/**
 * Main logical driver
 * @function driver
 * @param void {void} No parameters are accepted by this function.
 * @returns {void} Nothing is returned from this function.
 * @type void
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
