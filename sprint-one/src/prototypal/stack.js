var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.stackSize = 0;
  return stack;
};

var stackMethods = {
  size : function() {
   return this.stackSize;
  },
  push: function(value) {
    this[this.stackSize] = value;
    this.stackSize++;
  },
  pop: function(){
    if (this.stackSize) {
      this.stackSize--;
      var value = this[this.stackSize];
      delete this[this.stackSize];
      return value;
    }
  }
};
