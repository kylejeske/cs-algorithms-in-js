## Modules
| Module Name | Description | Location |
|---|---|---|
| <a name="module_cs/ArrayParition">cs/ArrayParition</a> | Compute Pair Sum of Ordered Pairs in List of Numbers | [array-partition-sum-of-pairs.js:1](./modules/array-partition-sum-of-pairs.js#L1) |
| <a name="module_cs/kadanes-maxsum-subarray">cs/kadanes-maxsum-subarray</a> | Kadane&#x27;s Algorithm for finding the maximum sum of a sub-array. | [kadanes-maxsum-subarray.js:2](./modules/kadanes-maxsum-subarray.js#L2) |
| <a name="module_cs/reverse-signed-int32">cs/reverse-signed-int32</a> | Reverse the digits in a Signed 32-bit Integer | [reverse-signed-int32.js:2](./modules/reverse-signed-int32.js#L2) |
| <a name="module_cs/singly-linked-list-utils">cs/singly-linked-list-utils</a> | A Utility class for building and formatting within a LinkedList in JavaScript. | [singly-linked-list-utils.js:1](./modules/singly-linked-list-utils.js#L1) |
| <a name="module_cs/singly-linked-list-insert-at-tail">cs/singly-linked-list-insert-at-tail</a> | Takes data and breaks it into a SinglyLinkedList | [singlylinkedlist-add-insert-to-tail.js:3](./modules/singlylinkedlist-add-insert-to-tail.js#L3) |

## Functions
| Name | Type | Description | Location | MemberOf | Scope |
|---|---|---|---|---|---|
| <a name="module_cs/ArrayParition..arraySorting_LowestToHighest">arraySorting_LowestToHighest</a> | function | arraySorting_LowestToHighest - Used to get numbered array in lowest to highest | array-partition-sum-of-pairs.js:22 | module:cs/ArrayParition | inner |
| <a name="module_cs/ArrayParition..arrayParititon_PairSumCompute">arrayParititon_PairSumCompute</a> | function | arrayParititon_PairSumCompute | array-partition-sum-of-pairs.js:30 | module:cs/ArrayParition | inner |
| <a name="module_cs/kadanes-maxsum-subarray..maxSubArraySum">maxSubArraySum</a> | function | Maximum Sum within a contiguous sub-array, Kadane&#x27;s Algorithm | kadanes-maxsum-subarray.js:23 | module:cs/kadanes-maxsum-subarray | inner |
| <a name="module_cs/reverse-signed-int32..reverseSignedInt32">reverseSignedInt32</a> | function | Reverse a Signed Integer 32 | reverse-signed-int32.js:31 | module:cs/reverse-signed-int32 | inner |
| <a name="module_cs/singly-linked-list-utils..annonymous">annonymous</a> | function | parseIntoHumanFormat - loop over a list of linked nodes, and format it into an array | singly-linked-list-utils.js:112 | module:cs/singly-linked-list-utils | inner |
| <a name="module_cs/singly-linked-list-utils..first">first</a> | function | first element in list | singly-linked-list-utils.js:132 | module:cs/singly-linked-list-utils | inner |
| <a name="module_cs/singly-linked-list-utils..last">last</a> | function | last element in list | singly-linked-list-utils.js:138 | module:cs/singly-linked-list-utils | inner |
| <a name="module_cs/singly-linked-list-utils..flat">flat</a> | function | produce an array indexed by position within the linked list | singly-linked-list-utils.js:144 | module:cs/singly-linked-list-utils | inner |
| <a name="module_cs/singly-linked-list-insert-at-tail..InsertNodeAtTail">InsertNodeAtTail</a> | function |  | singlylinkedlist-add-insert-to-tail.js:12 | module:cs/singly-linked-list-insert-at-tail | inner |
| <a name="module_cs/singly-linked-list-insert-at-tail..SinglyListManipulatorFunction">SinglyListManipulatorFunction</a> | function | Takes the data and turns it into a SinglyLinkedList | singlylinkedlist-add-insert-to-tail.js:34 | module:cs/singly-linked-list-insert-at-tail | inner |

---

# API Documentation

## Modules

<dl>
<dt><a href="#module_cs/ArrayParition">cs/ArrayParition</a></dt>
<dd><p>Compute Pair Sum of Ordered Pairs in List of Numbers</p>
</dd>
<dt><a href="#module_cs/kadanes-maxsum-subarray">cs/kadanes-maxsum-subarray</a></dt>
<dd><p>Kadane&#39;s Algorithm for finding the maximum sum of a sub-array.</p>
</dd>
<dt><a href="#module_cs/reverse-signed-int32">cs/reverse-signed-int32</a></dt>
<dd><p>Reverse the digits in a Signed 32-bit Integer</p>
</dd>
<dt><a href="#module_cs/singly-linked-list-utils">cs/singly-linked-list-utils</a></dt>
<dd><p>A Utility class for building and formatting within a LinkedList in JavaScript.</p>
</dd>
<dt><a href="#module_cs/singly-linked-list-insert-at-tail">cs/singly-linked-list-insert-at-tail</a></dt>
<dd><p>Takes data and breaks it into a SinglyLinkedList</p>
</dd>
</dl>

<a name="module_cs/ArrayParition"></a>

## cs/ArrayParition
Compute Pair Sum of Ordered Pairs in List of Numbers

**Example**  
```js
import { arrayParititon_PairSumCompute } from "./arrayParititon_PairSumCompute";
let listofNumbers = [1,4,2,3];
arrayParititon_PairSumCompute(listofNumbers([1,4,2,3])) => [[1,2], [3,4]]
 [1,2] -> Min. element within pair = 1
 [3,4] -> Min. element within pair = 3
  1 + 3 = 4
Result: 4
```

* [cs/ArrayParition](#module_cs/ArrayParition)
    * [~sum](#module_cs/ArrayParition..sum) : <code>integer</code>
    * [~pairs](#module_cs/ArrayParition..pairs) : <code>array</code>
    * [~arraySorting_LowestToHighest(a, b)](#module_cs/ArrayParition..arraySorting_LowestToHighest) ⇒ <code>numbers</code>
    * [~arrayParititon_PairSumCompute([&#x3D;pairs])](#module_cs/ArrayParition..arrayParititon_PairSumCompute) ⇒ <code>integer</code>

<a name="module_cs/ArrayParition..sum"></a>

### cs/ArrayParition~sum : <code>integer</code>
**Kind**: inner property of [<code>cs/ArrayParition</code>](#module_cs/ArrayParition)  
<a name="module_cs/ArrayParition..pairs"></a>

### cs/ArrayParition~pairs : <code>array</code>
sorted array from least to greatest

**Kind**: inner property of [<code>cs/ArrayParition</code>](#module_cs/ArrayParition)  
<a name="module_cs/ArrayParition..arraySorting_LowestToHighest"></a>

### cs/ArrayParition~arraySorting\_LowestToHighest(a, b) ⇒ <code>numbers</code>
arraySorting_LowestToHighest - Used to get numbered array in lowest to highest

**Kind**: inner method of [<code>cs/ArrayParition</code>](#module_cs/ArrayParition)  
**Returns**: <code>numbers</code> - [-1|1]  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="module_cs/ArrayParition..arrayParititon_PairSumCompute"></a>

### cs/ArrayParition~arrayParititon\_PairSumCompute([&#x3D;pairs]) ⇒ <code>integer</code>
arrayParititon_PairSumCompute

**Kind**: inner method of [<code>cs/ArrayParition</code>](#module_cs/ArrayParition)  
**Returns**: <code>integer</code> - sum - Sum of pairs  

| Param | Type | Description |
| --- | --- | --- |
| [=pairs] | <code>array</code> | List of Number Elements (stored in an Array) |

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

<a name="module_cs/reverse-signed-int32"></a>

## cs/reverse-signed-int32
Reverse the digits in a Signed 32-bit Integer

**Example**  
```js
import { reverseSignedInt32 } from './reverse-signed-int32.js';

let int = 123456;
let res = reverseSignedInt32(int); // Result: res = 654321;
```

* [cs/reverse-signed-int32](#module_cs/reverse-signed-int32)
    * [~MIN_INT32](#module_cs/reverse-signed-int32..MIN_INT32)
    * [~MAX_INT32](#module_cs/reverse-signed-int32..MAX_INT32)
    * [~reverseSignedInt32([int])](#module_cs/reverse-signed-int32..reverseSignedInt32) ⇒ <code>integer</code> \| <code>0</code>

<a name="module_cs/reverse-signed-int32..MIN_INT32"></a>

### cs/reverse-signed-int32~MIN\_INT32
**Kind**: inner constant of [<code>cs/reverse-signed-int32</code>](#module_cs/reverse-signed-int32)  
<a name="module_cs/reverse-signed-int32..MAX_INT32"></a>

### cs/reverse-signed-int32~MAX\_INT32
**Kind**: inner constant of [<code>cs/reverse-signed-int32</code>](#module_cs/reverse-signed-int32)  
<a name="module_cs/reverse-signed-int32..reverseSignedInt32"></a>

### cs/reverse-signed-int32~reverseSignedInt32([int]) ⇒ <code>integer</code> \| <code>0</code>
Reverse a Signed Integer 32

**Kind**: inner method of [<code>cs/reverse-signed-int32</code>](#module_cs/reverse-signed-int32)  
**Returns**: <code>integer</code> \| <code>0</code> - result  

| Param | Type | Description |
| --- | --- | --- |
| [int] | <code>integer</code> | Integer that we are reversing. |

<a name="module_cs/singly-linked-list-utils"></a>

## cs/singly-linked-list-utils
A Utility class for building and formatting within a LinkedList in JavaScript.

**Example**  
```js
import { SinglyLinkedList, SinglyLinkedNode, Utils, ParseIntoHumanFormat } from './singly-linked-list-utils';
const toHumanReadableList = async (mockSLL) => {
  return await ParseIntoHumanFormat(mockSLL.head);
};
```

* [cs/singly-linked-list-utils](#module_cs/singly-linked-list-utils)
    * [~SinglyLinkedListClass](#module_cs/singly-linked-list-utils..SinglyLinkedListClass)
        * [new SinglyLinkedListClass([mixed|void])](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)
        * [new SinglyLinkedListClass()](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)
    * [~SinglyLinkedListClass](#module_cs/singly-linked-list-utils..SinglyLinkedListClass)
        * [new SinglyLinkedListClass([mixed|void])](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)
        * [new SinglyLinkedListClass()](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)
    * [~SinglyLinkedList](#module_cs/singly-linked-list-utils..SinglyLinkedList)
        * [new SinglyLinkedList()](#new_module_cs/singly-linked-list-utils..SinglyLinkedList_new)
    * [~Utils](#module_cs/singly-linked-list-utils..Utils) ⇒ <code>interger</code>
    * [~Utils](#module_cs/singly-linked-list-utils..Utils) : <code>Object</code>
    * [~Utils](#module_cs/singly-linked-list-utils..Utils) : <code>Object</code>
    * [~Utils](#module_cs/singly-linked-list-utils..Utils) : <code>Object</code>
    * [~size](#module_cs/singly-linked-list-utils..size) : <code>function</code>
    * [~annonymous(Node)](#module_cs/singly-linked-list-utils..annonymous) ⇒ <code>Object</code>
    * [~first()](#module_cs/singly-linked-list-utils..first)
    * [~last()](#module_cs/singly-linked-list-utils..last)
    * [~flat()](#module_cs/singly-linked-list-utils..flat) ⇒ <code>Array</code>
    * [~SinglyLinkedNodeClass](#module_cs/singly-linked-list-utils..SinglyLinkedNodeClass) : <code>Object</code>
    * [~Utils](#module_cs/singly-linked-list-utils..Utils) ⇒ <code>function</code>

<a name="module_cs/singly-linked-list-utils..SinglyLinkedListClass"></a>

### cs/singly-linked-list-utils~SinglyLinkedListClass
**Kind**: inner class of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  

* [~SinglyLinkedListClass](#module_cs/singly-linked-list-utils..SinglyLinkedListClass)
    * [new SinglyLinkedListClass([mixed|void])](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)
    * [new SinglyLinkedListClass()](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)

<a name="new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new"></a>

#### new SinglyLinkedListClass([mixed|void])
SinglyLinkedNode Class container for SinglyLinkedListNodeClass

**Returns**: <code>void</code> - void  

| Param | Type |
| --- | --- |
| [mixed|void] | <code>nodeData</code> \| <code>void</code> | 

**Example**  
```js
const myNode = new SinglyLinkedNode(10);
```
<a name="new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new"></a>

#### new SinglyLinkedListClass()
SinglyLinkedList - Class container for a List of SinglyLinkedNodes

**Returns**: <code>void</code> - void  
**Example**  
```js
const myHead = new SinglyLinkedListNodeClass(15)
const myList = new SinglyLinkedListClass();
```
<a name="module_cs/singly-linked-list-utils..SinglyLinkedListClass"></a>

### cs/singly-linked-list-utils~SinglyLinkedListClass
**Kind**: inner class of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  

* [~SinglyLinkedListClass](#module_cs/singly-linked-list-utils..SinglyLinkedListClass)
    * [new SinglyLinkedListClass([mixed|void])](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)
    * [new SinglyLinkedListClass()](#new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new)

<a name="new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new"></a>

#### new SinglyLinkedListClass([mixed|void])
SinglyLinkedNode Class container for SinglyLinkedListNodeClass

**Returns**: <code>void</code> - void  

| Param | Type |
| --- | --- |
| [mixed|void] | <code>nodeData</code> \| <code>void</code> | 

**Example**  
```js
const myNode = new SinglyLinkedNode(10);
```
<a name="new_module_cs/singly-linked-list-utils..SinglyLinkedListClass_new"></a>

#### new SinglyLinkedListClass()
SinglyLinkedList - Class container for a List of SinglyLinkedNodes

**Returns**: <code>void</code> - void  
**Example**  
```js
const myHead = new SinglyLinkedListNodeClass(15)
const myList = new SinglyLinkedListClass();
```
<a name="module_cs/singly-linked-list-utils..SinglyLinkedList"></a>

### cs/singly-linked-list-utils~SinglyLinkedList
**Kind**: inner class of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="new_module_cs/singly-linked-list-utils..SinglyLinkedList_new"></a>

#### new SinglyLinkedList()
constructor - Assigns an object of SinglyLinkedNodes to the head, if provided.


| Param | Type |
| --- | --- |
|  | <code>void</code> | 

<a name="module_cs/singly-linked-list-utils..Utils"></a>

### cs/singly-linked-list-utils~Utils ⇒ <code>interger</code>
sizeOf - Checks for existance, and isArray, then returns the length of array

**Kind**: inner property of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  

| Param | Type | Description |
| --- | --- | --- |
| [=list] | <code>Array.&lt;mixed&gt;</code> | List |

**Example**  
```js
sizeOf([1,2,3,4]) => 4
```
<a name="module_cs/singly-linked-list-utils..Utils"></a>

### cs/singly-linked-list-utils~Utils : <code>Object</code>
first

**Kind**: inner property of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-utils..Utils"></a>

### cs/singly-linked-list-utils~Utils : <code>Object</code>
last

**Kind**: inner property of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-utils..Utils"></a>

### cs/singly-linked-list-utils~Utils : <code>Object</code>
all

**Kind**: inner property of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-utils..size"></a>

### cs/singly-linked-list-utils~size : <code>function</code>
number of nodes in list

**Kind**: inner property of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-utils..annonymous"></a>

### cs/singly-linked-list-utils~annonymous(Node) ⇒ <code>Object</code>
parseIntoHumanFormat - loop over a list of linked nodes, and format it into an array

**Kind**: inner method of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
**Returns**: <code>Object</code> - ParseIntoHumanFormat  

| Param | Type |
| --- | --- |
| Node | <code>node</code> | 

<a name="module_cs/singly-linked-list-utils..first"></a>

### cs/singly-linked-list-utils~first()
first element in list

**Kind**: inner method of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-utils..last"></a>

### cs/singly-linked-list-utils~last()
last element in list

**Kind**: inner method of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-utils..flat"></a>

### cs/singly-linked-list-utils~flat() ⇒ <code>Array</code>
produce an array indexed by position within the linked list

**Kind**: inner method of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
**Returns**: <code>Array</code> - [SinglyLinkedNode]  
<a name="module_cs/singly-linked-list-utils..SinglyLinkedNodeClass"></a>

### cs/singly-linked-list-utils~SinglyLinkedNodeClass : <code>Object</code>
**Kind**: inner typedef of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  

| Type | Description |
| --- | --- |
| <code>nodeData</code> | Various data to assign to the Node Element |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data relative to this element |
| next | <code>Object</code> | [=null] - Next element in linked list |

<a name="module_cs/singly-linked-list-utils..Utils"></a>

### cs/singly-linked-list-utils~Utils ⇒ <code>function</code>
Utils - Combined object of useful methods.

**Kind**: inner typedef of [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  
<a name="module_cs/singly-linked-list-insert-at-tail"></a>

## cs/singly-linked-list-insert-at-tail
Takes data and breaks it into a SinglyLinkedList

**Requires**: [<code>cs/singly-linked-list-utils</code>](#module_cs/singly-linked-list-utils)  

* [cs/singly-linked-list-insert-at-tail](#module_cs/singly-linked-list-insert-at-tail)
    * [~InsertNodeAtTail()](#module_cs/singly-linked-list-insert-at-tail..InsertNodeAtTail)
    * [~SinglyListManipulatorFunction([llistCount])](#module_cs/singly-linked-list-insert-at-tail..SinglyListManipulatorFunction)

<a name="module_cs/singly-linked-list-insert-at-tail..InsertNodeAtTail"></a>

### cs/singly-linked-list-insert-at-tail~InsertNodeAtTail()
**Kind**: inner method of [<code>cs/singly-linked-list-insert-at-tail</code>](#module_cs/singly-linked-list-insert-at-tail)  

| Type | Description |
| --- | --- |
| <code>head</code> | Node Head |
| <code>data</code> | Node Data |

<a name="module_cs/singly-linked-list-insert-at-tail..SinglyListManipulatorFunction"></a>

### cs/singly-linked-list-insert-at-tail~SinglyListManipulatorFunction([llistCount])
Takes the data and turns it into a SinglyLinkedList

**Kind**: inner method of [<code>cs/singly-linked-list-insert-at-tail</code>](#module_cs/singly-linked-list-insert-at-tail)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [llistCount] | <code>integer</code> | <code>0</code> | List counter, against input data rows |

