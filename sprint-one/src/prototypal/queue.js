var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.start = 0;
  queue.end = 0;
  return queue;
};

var queueMethods = {
  size: function() {
    return this.end - this.start;
  },
  enqueue: function(value){
    this[this.end] = value;
    this.end++;
  },
  dequeue: function(){
    if (this.end - this.start > 0){
      var value = this[this.start];
      delete this[this.start];
      this.start++;
      return value;
    }
  }
};
