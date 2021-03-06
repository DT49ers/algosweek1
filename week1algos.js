  
/* 
  1. Mon
    1. isEmpty
    2. insertAtBack
    3. seedFromArr
        - given an array, insert each item of the array to the back of this linked list
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // all the methods (functionality) of our linked list go here:

  isEmpty() {
    return this.head === null;
  }

  insertAtBack(data) {
    const newTail = new Node(data);

    if (this.isEmpty()) {
      // list that has only a head means, the head is both the head and the tail
      this.head = newTail;
      return this;
    }

    let runner = this.head;

    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = newTail;
    return this;
  }

  // Time: O(n * m), n = arr.length, m = this linked list's length
  // Space: O(1) constant
  seedFromArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insertAtBack(arr[i]);
    }
    return this;
  }

  print() {
    let runner = this.head;
    let vals = "";

    while (runner) {
      vals += `${runner.data}${runner.next ? ", " : ""}`;
      runner = runner.next;
    }
    console.log(vals);
    return vals;
  }
}

const emptyList = new SinglyLinkedList();
const singleNodeList = new SinglyLinkedList().insertAtBack(1);
const biNodeList = new SinglyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new SinglyLinkedList().seedFromArr([1, 2, 3]);

const secondThreeList = new SinglyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new SinglyLinkedList().seedFromArr([
  -5,
  -10,
  4,
  -3,
  6,
  1,
  -7,
  -2,
]);

const sortedDupeList = new SinglyLinkedList().seedFromArr([
  1,
  1,
  1,
  2,
  3,
  3,
  4,
  5,
  5,
]);

// sortedDupeList.biNodeList();