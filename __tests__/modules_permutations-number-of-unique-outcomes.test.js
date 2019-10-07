/* eslint no-use-before-define: 0 */
import { permutations_FindDistinctOutcomes } from '../src/modules/permutations-number-of-unique-outcomes';

describe('permutations_FindDistinctOutcomes', () => {
  it('should have a function to use', () => {
    expect(typeof permutations_FindDistinctOutcomes).toEqual("function");
  });

  it('should produce 8 when given string "AAB"', () => {
    let input     = 'AAB';
    let expected  = 8;
    let actual    = permutations_FindDistinctOutcomes(input);
    expect(Object.is(expected, actual)).toBeTruthy();
  });

});
