## Modules
| Module Name | Description | Location |
|---|---|---|
| <a name="module_cs/kadanes-maxsum-subarray">cs/kadanes-maxsum-subarray</a> | Kadane&#x27;s Algorithm for finding the maximum sum of a sub-array. | [kadanes-maxsum-subarray.js:2](./modules/kadanes-maxsum-subarray.js#L2) |
| <a name="module_cs/singly-linked-list-utils">cs/singly-linked-list-utils</a> | Utility Class for Building Singly-Linked-Lists | [singly-linked-list-utils.js:1](./modules/singly-linked-list-utils.js#L1) |
| <a name="module_cs/singlylinkedlist-insert-at-tail">cs/singlylinkedlist-insert-at-tail</a> | Takes data and breaks it into a SinglyLinkedList | [singlylinkedlist-add-insert-to-tail.js:3](./modules/singlylinkedlist-add-insert-to-tail.js#L3) |
| <a name="module_{">{</a> |  | [singlylinkedlist-add-insert-to-tail.js:64](./modules/singlylinkedlist-add-insert-to-tail.js#L64) |

## Functions
| Name | Type | Description | Location | MemberOf | Scope |
|---|---|---|---|---|---|
| <a name="module_cs/kadanes-maxsum-subarray..maxSubArraySum">maxSubArraySum</a> | function | Maximum Sum within a contiguous sub-array, Kadane&#x27;s Algorithm | kadanes-maxsum-subarray.js:23 | module:cs/kadanes-maxsum-subarray | inner |
| <a name="module_cs/singlylinkedlist-insert-at-tail..readLine">readLine</a> | function |  | singlylinkedlist-add-insert-to-tail.js:10 | module:cs/singlylinkedlist-insert-at-tail | inner |
| <a name="module_cs/singlylinkedlist-insert-at-tail..InsertNodeAtTail">InsertNodeAtTail</a> | function |  | singlylinkedlist-add-insert-to-tail.js:19 | module:cs/singlylinkedlist-insert-at-tail | inner |
| <a name="module_cs/singlylinkedlist-insert-at-tail..SinglyListManipulatorFunction">SinglyListManipulatorFunction</a> | function | Takes the data and turns it into a SinglyLinkedList | singlylinkedlist-add-insert-to-tail.js:48 | module:cs/singlylinkedlist-insert-at-tail | inner |

---

# API Documentation

## Modules

<dl>
<dt><a href="#module_cs/kadanes-maxsum-subarray">cs/kadanes-maxsum-subarray</a></dt>
<dd><p>Kadane&#39;s Algorithm for finding the maximum sum of a sub-array.</p>
</dd>
<dt><a href="#module_cs/singly-linked-list-utils">cs/singly-linked-list-utils</a></dt>
<dd><p>Utility Class for Building Singly-Linked-Lists</p>
</dd>
<dt><a href="#module_cs/singlylinkedlist-insert-at-tail">cs/singlylinkedlist-insert-at-tail</a></dt>
<dd><p>Takes data and breaks it into a SinglyLinkedList</p>
</dd>
<dt><a href="#module_{">{</a></dt>
<dd></dd>
</dl>

<a name="module_cs/kadanes-maxsum-subarray"></a>

## cs/kadanes-maxsum-subarray
Kadane's Algorithm for finding the maximum sum of a sub-array.

**Example**  
```js
import { maxSubArraySum } from './kadanes-maxsum-subarray.js';

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let sum = maxSubArraySum(arr); // Result: sum = 7;
```
<a name="module_cs/kadanes-maxsum-subarray..maxSubArraySum"></a>

### cs/kadanes-maxsum-subarray~maxSubArraySum([arr], [size]) ⇒ <code>integer</code>
Maximum Sum within a contiguous sub-array, Kadane's Algorithm

**Kind**: inner method of [<code>cs/kadanes-maxsum-subarray</code>](#module_cs/kadanes-maxsum-subarray)  
**Returns**: <code>integer</code> - max_so_far  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [arr] | <code>Array.&lt;integer&gt;</code> | <code>[]</code> | The array against which we are finding a sum. |
| [size] | <code>integer</code> | <code>arr.length</code> | The size of the array [maxSubArraySum#arr](maxSubArraySum#arr) |

<a name="module_cs/singly-linked-list-utils"></a>

## cs/singly-linked-list-utils
Utility Class for Building Singly-Linked-Lists

<a name="module_cs/singlylinkedlist-insert-at-tail"></a>

## cs/singlylinkedlist-insert-at-tail
Takes data and breaks it into a SinglyLinkedList

**Requires**: [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  

* [cs/singlylinkedlist-insert-at-tail](#module_cs/singlylinkedlist-insert-at-tail)
    * [~readLine([[inputString, currentLine]])](#module_cs/singlylinkedlist-insert-at-tail..readLine)
    * [~InsertNodeAtTail()](#module_cs/singlylinkedlist-insert-at-tail..InsertNodeAtTail)
    * [~SinglyListManipulatorFunction([llistCount])](#module_cs/singlylinkedlist-insert-at-tail..SinglyListManipulatorFunction)

<a name="module_cs/singlylinkedlist-insert-at-tail..readLine"></a>

### cs/singlylinkedlist-insert-at-tail~readLine([[inputString, currentLine]])
**Kind**: inner method of [<code>cs/singlylinkedlist-insert-at-tail</code>](#module_cs/singlylinkedlist-insert-at-tail)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [[inputString, currentLine]] | <code>Array</code> | <code>args</code> | Arguments |

<a name="module_cs/singlylinkedlist-insert-at-tail..InsertNodeAtTail"></a>

### cs/singlylinkedlist-insert-at-tail~InsertNodeAtTail()
**Kind**: inner method of [<code>cs/singlylinkedlist-insert-at-tail</code>](#module_cs/singlylinkedlist-insert-at-tail)  

| Type | Description |
| --- | --- |
| <code>head</code> | Node Head |
| <code>data</code> | Node Data |

<a name="module_cs/singlylinkedlist-insert-at-tail..SinglyListManipulatorFunction"></a>

### cs/singlylinkedlist-insert-at-tail~SinglyListManipulatorFunction([llistCount])
Takes the data and turns it into a SinglyLinkedList

**Kind**: inner method of [<code>cs/singlylinkedlist-insert-at-tail</code>](#module_cs/singlylinkedlist-insert-at-tail)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [llistCount] | <code>integer</code> | <code>0</code> | List counter, against input data rows |

<a name="module_{"></a>

## {
