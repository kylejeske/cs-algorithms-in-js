/**
  // * @notes
  // * You have a set of tiles, where each tile has one letter tiles[i] printed on it.
  // * Return the number of possible non-empty sequences of letters you can make.
  // *
  // * Example 1:
  // * Input: "AAB"
  // * Output: 8
  // * Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
  // * Example 2:
  // * Input: "AAABBC"
  // * Output: 188
  // * Note:
  // * 1 <= tiles.length <= 7
  // * tiles consists of uppercase English letters.
**/

/**
 * Permutations on a sequence or list of elements.
 * @module cs/permutations
 * @fileOverview Permutations of elements within a list or sequence.
 * @exports permutations_FindDistinctOutcomes
 * @example
 * import { permutations_FindDistinctOutcomes } from 'permutations-number-of-unique-outcomes';
 * let input    = 'AAB';
 * let result   = permutationsFindDistinctOutcomes(input);
 * let expected = 8;
 * console.assert(result, expected, `Note: The actual result (${result}) was different from the expected result. Expected: ${expected}, Actual: ${result}.`);
 */

 /**
  * Produce a set of distinct (unique) permutations of characters.
  * @function
  * @param {string} input - string of letters to form permutations.
  * @returns {integer} output
  */
const permutations_FindDistinctOutcomes = function __permutationsFindDistinctOutcomes(input) {
    let output = 0;
    /**
     * @notes
     * Approach: create a key-value set of characters, holding a count index, then count backwards using the count index to generate a sum.
     * {
     *    'a': 2, // Number of occurances of 'a' in string.
     *    'b': 1  // Number of occurances of 'b' in string.
     * }
     *
     * sum: [
     *   {
     *     'A': [
     *        {'A':2,'B':1} // Key: a2a1
     *        {'A':2,'B':0} // Key: a2b0
     *        {'A':1,'B':1} // Key: a1b1
     *        {'A':1,'B':0} // Key: a1b0
     *        {'A':0,'B':0} // Key: a0b0
     *      ],
     *     'B': [
     *        {'A':1,'B':1} // Key: a1b1
     *        {'A':1,'B':0} // Key: a1b0
     *        {'A':0,'B':0} // Key: a0b0
     *     ]
     *   }
     * ]
     *
     * output = count(sum.A) + count(sum.B) ==> "8"
     */
    const table = () => {
      return new Map();
    };
    const buildIndex = (key, value) => {

    };
    return output;
}

export { permutations_FindDistinctOutcomes }
