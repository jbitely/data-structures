var Queue = function() {
  var someInstance = {};
  var queueEnd = 0;
  var queueStart = 0;
  var storage = {};

  someInstance.enqueue = function(value){
    storage[queueEnd] = value;
    queueEnd++;
  };

  someInstance.dequeue = function() {
    if ((queueEnd - queueStart) > 0) {
      var value = storage[queueStart];
      delete storage[queueStart];
      queueStart++;
      return value;
    }
  };

  someInstance.size = function() {
    return queueEnd - queueStart;
  };

  return someInstance;
};
