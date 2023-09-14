function createNode(data) {
  return {
    data: data,
    next: null,
  };
}
function appendNode(head, data) {
  if (!head) {
    return createNode(data);
  } else {
    head.next = appendNode(head.next, data);
    return head;
  }
}
function deleteNode(head, data) {
  if (!head) {
    return null;
  } else if (head.data == data) {
    return head.next;
  } else {
    head.next = deleteNode(head.next, data);
    return head;
  }
}
function prependNode(head, data) {
  const newFrontNode = createNode(data);
  newFrontNode.next = head;
  return newFrontNode;
}
function displayNodes(head) {
  if (head) {
    console.log(head);
    displayNodes(head.next);
  }
}

function deleteMutipleNodes(head, data, number) {
  if (number > 0) {
    if (!head) {
      return null;
    } else if (head.data == data) {
      return head.next;
    } else {
      head.next = deleteMutipleNodes(head.next, head.next, number - 1);
      return head;
    }
  }
}

let myList = null;
myList = appendNode(myList, 1);
myList = appendNode(myList, 2);
myList = appendNode(myList, 3);
myList = appendNode(myList, 4);
myList = appendNode(myList, 5);
myList = appendNode(myList, 6);
myList = deleteMutipleNodes(myList, 2, 2);
displayNodes(myList);
