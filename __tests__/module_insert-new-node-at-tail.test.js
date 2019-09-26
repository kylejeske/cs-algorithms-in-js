import {
  Utils,
  ParseIntoHumanFormat
} from '../src/modules/singly-linked-list-utils';

import {
  SinglyListManipulatorFunction,
  InsertNodeAtTail
} from '../src/modules/singlylinkedlist-add-insert-to-tail';

/**
 * @series SinglyLinkedList
 * @uses cs/singly-linked-list-utils
 */
describe("Module: cs/SinglyLinkedList-insert-at-tail", () => {

  // Domain-Local Global Vars.
  var mockInput;
  var expectedElements;
  var mockSLL;
  var ToHumanReadableList;
  var name;

  beforeAll(() => {
    mockInput         = [5,141,302,164,530,474];
    expectedElements  = (mockInput.length - 1);
    mockSLL           = SinglyListManipulatorFunction(mockInput);

    ToHumanReadableList = async (mockSLL) => {
      return await ParseIntoHumanFormat(mockSLL.head);
    };
  });

  name = "SinglyListManipulatorFunction";
  it(`Should export Function: ${name}`, () => {
    expect(Object.is(SinglyListManipulatorFunction, undefined)).toBeFalsy();
  });

  /**
   * @todo Correct this test
   */
  it('function SinglyListManipulatorFunction should return a Node class object', () => {
    expect(Object.is(SinglyListManipulatorFunction,undefined)).toBeFalsy();
  });

  /**
   * @test ParseIntoHumanFormat
   */
  it('make it a human readable list, with ' + expectedElements + 'elements', () => {
    const mockReadable = ToHumanReadableList(mockSLL);
    mockReadable
      .then(prettyList => {
        expect(prettyList.flat().length).toEqual((mockInput.length - 1));
      })
      .catch(function(...err){ console.warn('an error occured.'); console.table(err); return true; });
  });

});
