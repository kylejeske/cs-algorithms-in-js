# CS Algorithms Deployed in JavaScript

### Documentation available at:
[https://kylejeske.github.io/cs-algorithms-in-js/](https://kylejeske.github.io/cs-algorithms-in-js/)

### Full List of 'Modules' with Internal Documentation
See full list of modules:
[link: src/modules.md](src/modules.md)

---

## Example
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

---

##### Generated with JSDoc
