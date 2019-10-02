/* eslint no-use-before-define: 0 */
import { reverseSignedInt32 } from '../src/modules/reverse-signed-int32'

describe('Reverse Integer', () => {
  it('should have a function to use', () => {
    expect(typeof reverseSignedInt32).toEqual("function");
  });
  it('should reverse a positive int (from 123 to 321)', () => {
    expect(Object.is(reverseSignedInt32(123), 321)).toBeTruthy();
  });
  it('should reverse a negative int (from -123 to -321)', () => {
    expect(Object.is(reverseSignedInt32(-123), -321)).toBeTruthy();
  });
  it('should know the limits of a signed Int32', () => {
    expect(Object.is(reverseSignedInt32(-2147483649), -8463847412)).toBeFalsy();
  })
  it('should return a zero, if we are beyond the limits of a negative signed Int32', () => {
    expect(Object.is(reverseSignedInt32(-2147483649), 0)).toBeTruthy();
  })
});
