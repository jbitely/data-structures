var Queue = function() {
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.end] = value;
  this.end++;
}

Queue.prototype.size = function() {
  return this.end - this.start;
};
