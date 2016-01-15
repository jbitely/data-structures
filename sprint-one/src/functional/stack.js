var Stack = function() {
  var size = 0;
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if (size) {
      size--;
      var value = storage[size];
      delete storage[size];
      return value;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
