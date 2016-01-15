var Stack = function() {
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  this[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  if (this.stackSize) {
    this.stackSize--;
    var value = this[this.stackSize];
    delete this[this.stackSize];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.stackSize;
};
