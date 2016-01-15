var Queue = function(){
  var queue = {};
  queue.end = 0;
  queue.start = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.end] = value;
    this.end++;
  },
  dequeue: function() {
    if (this.end - this.start > 0) {
      var value = this[this.start];
      delete this[this.start];
      this.start++;
      return value;
    }
  },
  size: function() {
    return this.end - this.start;
  }
};
