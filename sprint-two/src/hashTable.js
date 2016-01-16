var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }
  var found = false;
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      found = true;
    }
  }
  if (!found) {
    bucket.push([k, v]);
  }
  console.log(bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      result = true;
      return bucket[j][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
