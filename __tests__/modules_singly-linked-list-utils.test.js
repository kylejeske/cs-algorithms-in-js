import * as moduleMethods from '../src/modules/singly-linked-list-utils';

/**
 * @series SinglyLinkedListUtils
 * @uses cs/singly-linked-list-utils
 */
describe("Module: cs/Singly-Linked-List-Utils", () => {

  //var SinglyLinkedList = moduleMethods[SinglyLinkedList];
  //var SinglyLinkedNode = moduleMethods[SinglyLinkedNode];

  var SinglyLinkedList;
  var SinglyLinkedNode;
  var ParseIntoHumanFormat;
  var Utils;

  var {
    SinglyLinkedList,
    SinglyLinkedNode,
    ParseIntoHumanFormat,
    Utils
  } = moduleMethods;

  for (var {element} in [SinglyLinkedList, SinglyLinkedNode, ParseIntoHumanFormat]) {

    console.log(element);

    var name          = (new element()).constructor.name;

    // check for imported as a function, then check to make it instanciates
    describe(`${name} has imported correct`, () => {
      it(`${name}: Should be defined and import as a Function`, () => {
        expect(Object.is(element, undefined)).toBeFalsy();
        expect(Object.is((typeof element), "function")).toBeTruthy();
      });
    });

  }

  // check for imported as a function, then check to make it instanciates
  // describe(`${name} has imported correct`, () => {
  //  it(`${name}: Should be defined and import as a Function`, () => {
  //    expect(Object.is(element, undefined)).toBeFalsy();
  //    expect(Object.is((typeof element), "function")).toBeTruthy();
  //  });
  // });

});
