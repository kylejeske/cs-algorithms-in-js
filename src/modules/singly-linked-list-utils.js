/**
 * Utility Class for Building Singly-Linked-Lists
 * @module cs/singly-linked-list-utils
 *
 * @exports { SinglyLinkedList } SinglyLinkedList
 * @exports { SinglyLinkedListNode } SinglyLinkedListNode
 */

const SinglyLinkedListNode = class SinglyLinkedListNodeClass {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class SinglyLinkedListClass {
    constructor() {
        this.head = null;
    }
};

const wsLog = (() => console.table)();

function PrintSinglyLinkedList(node, sep) {
    let pretty = [];
    while (node != null) {
        pretty = [].concat(pretty, node);
        node = node.next;
    }
    //wsLog(pretty, ['data']);
    //wsLog([pretty.length, pretty[0].data, pretty[pretty.length-1].data]);
}

export {
  SinglyLinkedList,
  SinglyLinkedListNode,
  PrintSinglyLinkedList,
  wsLog
}
