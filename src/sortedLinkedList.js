import linkedList from './linkedlList'


const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function defaultCompare(a, b) {
  if (a === b) { // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn; // {3}
  }

  

}