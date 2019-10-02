 /**
  * Compute Pair Sum of Ordered Pairs in List of Numbers
  * @module cs/ArrayParition
  * @Example
  * import { arrayParititon_PairSumCompute } from "./arrayParititon_PairSumCompute";
  * let listofNumbers = [1,4,2,3];
  * arrayParititon_PairSumCompute(listofNumbers([1,4,2,3])) => [[1,2], [3,4]]
  *  [1,2] -> Min. element within pair = 1
  *  [3,4] -> Min. element within pair = 3
  *   1 + 3 = 4
  * Result: 4
  * @exports arrayParititon_PairSumCompute
  */

 /**
  * arraySorting_LowestToHighest - Used to get numbered array in lowest to highest
  * @function
  * @param {number} a
  * @param {number} b
  * @returns {numbers} [-1|1]
  */
  const arraySorting_LowestToHighest = (a, b) => (a < b) ? -1 : 1;

 /**
  * arrayParititon_PairSumCompute
  * @function
  * @param {array} [=pairs] - List of Number Elements (stored in an Array)
  * @returns {integer} sum - Sum of pairs
  */
  const arrayParititon_PairSumCompute = (pairs) => {
    /** @member {integer} sum **/
    let sum = 0;
    /** @member {array} pairs - sorted array from least to greatest **/
    pairs = pairs.sort(arraySorting_LowestToHighest);
    // loop the array, grab every 2 elements per iteration
    for (let iter = 0; iter < pairs.length; iter = iter + 2){
        // Using Math.min, return the smallest of the pair of the sub-array (Pair[0], Pair[1])
        // Add that to the running sum (minSum)
        sum += Math.min(pairs[iter], pairs[iter+1]);
    }
    return sum;
};

export { arrayParititon_PairSumCompute }
