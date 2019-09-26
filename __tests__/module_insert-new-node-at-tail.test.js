import { SinglyListManipulatorFunction, InsertNodeAtTail, PrintSinglyLinkedList } from '../src/modules/singlylinkedlist-add-insert-to-tail';

  const sizeOf = list => (list == null || Array.isArray(list) == false)
                              ? void 0
                              : list.length;

  const first  = list => (list == null || list.length < 1)
                              ? void 0
                              : list[0];

  const last = list => (list == null || list.length < 1)
                              ? void 0
                              : list.slice(-1);
  const all = list => (list == null)
                              ? void 0
                              : list;

  const parseIntoHumanFormat = function(node) {
      let pretty = [];
      while (node != null) {
        pretty.push(node);
        node = node.next;
      };
      return {
        // size() -> number of nodes in list
        size:   _ => sizeOf(pretty),

        // first() -> first element
        first:  _ => first(pretty),

        // last() -> last element
        last:   _ => last(pretty),

        // flat() -> flattened into Array
        flat:   _ => all(pretty)
      };
  };

  const toHumanReadableList = async (mockSLL) => {
    return await parseIntoHumanFormat(mockSLL.head);
  };

  var mockInput = [5,141,302,164,530,474];
  var mockSLL   = SinglyListManipulatorFunction(mockInput);

  test('SinglyListManipulatorFunction(): should create a human readable list with a length of ' + (mockInput.length - 1), () => {
    const mockReadable = toHumanReadableList(mockSLL);
    mockReadable
      .then(prettyList => {
        expect(prettyList.flat().length).toEqual((mockInput.length - 1));
      })
      .catch(function(...err){ console.warn('an error occured.'); console.table(err); return true; });
  });
