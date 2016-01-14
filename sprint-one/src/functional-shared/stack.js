var Stack = function() {
  var stack = {};
  stack.stackSize = 0;
  stack.size = stackMethods.size;
  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;
  return stack;
};

var stackMethods = {
  push: function(value) {
    this[this.stackSize] = value;
    this.stackSize++;
  },
  pop: function() {
    if (this.stackSize) {
      this.stackSize--;
      var value = this[this.stackSize];
      delete this[this.stackSize];
      return value;
    }
  },
  size: function() {
    return this.stackSize;
  }
};
