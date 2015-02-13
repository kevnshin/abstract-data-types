var Node = require('./Node');
module.exports = LinkedList;

/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList () {
  this.head = null;
  this.length = 0;
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[type]}      [description]
 */
LinkedList.prototype.add = function (node) {
  if(node instanceof Node) {
    if(this.head === null){
      this.head = node;
      this.length++;
      return this.head;
    } else {
      var current = this.head;
      for (var i = 0; i < this.length - 1; i++) {
        current = current.getNext();
      };
      current.setNext(node);
      this.length++;

      return node;

    }

  } else {
    throw new Error;
  }
};

/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {
  if(index === 0) {
    return this.head;
  } else {
    var current = this.head;
    for (var i = 0; i < index; i++) {
      current = current.getNext();
    };
    return current;
  }
};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {

};
