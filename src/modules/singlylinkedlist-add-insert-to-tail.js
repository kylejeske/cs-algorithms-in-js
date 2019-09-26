import { SinglyLinkedList, SinglyLinkedNode } from "./singly-linked-list-utils";

  /**
  * SinglyLinkedList - Insert Node at Tail
  * @fileOverview Takes data and breaks it into a SinglyLinkedList
  * @example
  *
  * @module cs/singly-linked-list-insert-at-tail
  * @requires cs/singly-linked-list-utils
  * @exports SinglyListManipulatorFunction - SinglyLinkedList Generator Function.
  * @exports InsertNodeAtTail - Function to insert a new node into the tail of a singly linked list.
  */

  /**
   * @function InsertNodeAtTail
   * @param {head=} - Node Head
   * @param {data=} - Node Data
   */
  const InsertNodeAtTail = (head, data) => {
    let temp = new SinglyLinkedNode(data);
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
   * @function SinglyListManipulatorFunction
   * @param {integer} [llistCount=0] - List counter, against input data rows
   */
   function SinglyListManipulatorFunction([llistCount = 0, ...currentLine]) {
     let llist = new SinglyLinkedList();
     for (let i = 0; i < llistCount; i++) {
       const llistItem   = parseInt(currentLine[i], 10);
       const llist_head  = InsertNodeAtTail(llist.head, llistItem);
       llist.head = llist_head;
     }
   return llist;
  }

export {
  SinglyListManipulatorFunction,
  InsertNodeAtTail
};
