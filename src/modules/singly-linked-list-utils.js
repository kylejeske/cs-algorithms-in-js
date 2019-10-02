/**
 * Utility Class for Building Singly-Linked-Lists
 * @fileOverview A Utility class for building and formatting within a LinkedList in JavaScript.
 * @example 
 *
 * import { SinglyLinkedList, SinglyLinkedNode, Utils, ParseIntoHumanFormat } from './singly-linked-list-utils';
 * const toHumanReadableList = async (mockSLL) => {
 *   return await ParseIntoHumanFormat(mockSLL.head);
 * };
 *
 * @module cs/singly-linked-list-utils
 * @exports SinglyLinkedList - List of Singly Linked Nodes
 * @exports SinglyLinkedNode - Node element capable of being linked.
 * @exports Utils - Utility Module for Linked Nodes
 * @exports ParseIntoHumanFormat
 */

/**
 * SinglyLinkedNode Class container for SinglyLinkedListNodeClass
 * @class SinglyLinkedListClass
 * @param {nodeData|void} [mixed|void]
 * @example
 * const myNode = new SinglyLinkedNode(10);
 *
 * @returns {void} void
 */
const SinglyLinkedNode = class SinglyLinkedNodeClass {
    /**
     * @constructor
     * @param {nodeData} - Various data to assign to the Node Element
     * @typedef {Object} SinglyLinkedNodeClass
     * @property {Object} data - Data relative to this element
     * @property {Object} next [=null] - Next element in linked list
     */
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

/**
 * SinglyLinkedList - Class container for a List of SinglyLinkedNodes
 *
 * @class SinglyLinkedListClass
 * @example
 * const myHead = new SinglyLinkedListNodeClass(15)
 * const myList = new SinglyLinkedListClass();
 * @returns {void} void
 */
const SinglyLinkedList = class SinglyLinkedListClass {
   /**
    * constructor - Assigns an object of SinglyLinkedNodes to the head, if provided.
    * @param {void}
    * @returns {void}
    */
    constructor() {
        this.head = null;
    }
};

/**
 * wsLog
 * @function wsLog
 * @ignore
 */
const wsLog = (() => console.table)();

/**
 * sizeOf - Checks for existance, and isArray, then returns the length of array
 * @function sizeOf
 * @member {Object} Utils
 * @example
 *  sizeOf([1,2,3,4]) => 4
 * @param {mixed[]} [=list] - List
 * @returns {interger}
 */
const sizeOf = list => (list == null || Array.isArray(list) == false)
                            ? void 0
                            : list.length;

/**
 * first
 * @function first
 * @member {Object} Utils
 */
const first  = list => (list == null || list.length < 1)
                            ? void 0
                            : list[0];
/**
 * last
 * @function last
 * @member {Object} Utils
 */
const last = list => (list == null || list.length < 1)
                            ? void 0
                            : list.slice(-1);
/**
 * all
 * @function last
 * @member {Object} Utils
 */
const all = list => (list == null)
                            ? void 0
                            : list;
/**
 * Utils - Combined object of useful methods.
 * @typedef {Object} Utils
 * @returns {Function}
 */
const Utils = { sizeOf, first, last, all };

/**
 * parseIntoHumanFormat - loop over a list of linked nodes, and format it into an array
 * @function annonymous
 * @param {node} Node
 * @returns {Object} ParseIntoHumanFormat
 */
const ParseIntoHumanFormat = function(node) {
    let pretty = [];
    while (node != null) {
      pretty.push(node);
      node = node.next;
    };
    /** @typedef {Object} **/
    return {
      /**
       * number of nodes in list
       * @member {Function}
       */
      size:   _ => Utils.sizeOf(pretty),

      /**
       * first element in list
       * @function first
       */
      first:  _ => Utils.first(pretty),

      /**
       * last element in list
       * @function last
       */
      last:   _ => Utils.last(pretty),

      /**
       * produce an array indexed by position within the linked list
       * @function flat
       * @returns {Array} [SinglyLinkedNode]
       */
      flat:   _ => Utils.all(pretty)
    };
};

export {
  SinglyLinkedList,
  SinglyLinkedNode,
  ParseIntoHumanFormat,
  Utils
};
