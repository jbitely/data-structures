var Queue = function(){
  var someInstance = {};
  var queueEnd = 0;
  var queueStart = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[queueEnd] = value;
    queueEnd++;
  };

  someInstance.dequeue = function(){
    if((queueEnd - queueStart) > 0){
      var value = storage[queueStart];
      delete storage[queueStart];
      queueStart++;
      return value;
    }
  };

  someInstance.size = function(){
    return queueEnd - queueStart;
  };

  return someInstance;
};
