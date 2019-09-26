import { SinglyLinkedList, SinglyLinkedListNode, PrintSinglyLinkedList, wsLog } from "./singly-linked-list-utils";

  /**
  * SinglyLinkedList: Insert Node at Tail
  * @fileOverview Takes data and breaks it into a SinglyLinkedList
  * @module cs/singlylinkedlist-insert-at-tail
  * @requires cs/singly-linked-list-utils
  */

  /**
   * @function readLine
   * @param {Array} [[inputString, currentLine]=args] Arguments
   */
  function readLine(...args) {
      let [inputString, currentLine] = args;
      return inputString[currentLine];
  }

  /**
   * @function InsertNodeAtTail
   * @param {head=} - Node Head
   * @param {data=} - Node Data
   */
  const InsertNodeAtTail = (head, data) => {
    let temp = new SinglyLinkedListNode(data);

    // 1. if head == null, set head from temp; continue;
    // 2. if head.next == null, set head.next = temp; return;
    // 3. Recursively move on to the next position head.next;
    // 4. return head;

    if (head == null) {
      head = temp;
    } else if (head.next == null) {
      head.next = temp;
      return head;
    } else {
      InsertNodeAtTail(head.next, data);
    }
    return head;
  };

 /**
  * Takes the data and turns it into a SinglyLinkedList
  * @function
  * @param {integer} [llistCount=0] - List counter, against input data rows
  */
  function SinglyListManipulatorFunction([llistCount = 0, ...currentLine]) {
    let llist = new SinglyLinkedList();
    for (let i = 0; i < llistCount; i++) {
      const llistItem   = parseInt(currentLine[i], 10);
      const llist_head  = InsertNodeAtTail(llist.head, llistItem);
      llist.head = llist_head;
    }
    PrintSinglyLinkedList(llist.head);
    return llist;
  }


/**
 * @exports { SinglyListManipulatorFunction } SinglyListManipulatorFunction
 * @exports { InsertNodeAtTail } InsertNodeAtTail
 */
export {
  SinglyListManipulatorFunction,
  InsertNodeAtTail,
  PrintSinglyLinkedList
};
