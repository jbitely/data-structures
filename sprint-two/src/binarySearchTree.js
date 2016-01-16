var BinarySearchTree = function(value){
  var tree = {};
  tree.value = value;
  tree.right = null;
  tree.left = null;

  tree.insert = function(value){
  // is new value less than or greater than current value
    // if less than call insert starting with left node
    if(value < tree.value){
      if(tree.left){
        tree.left.insert(value);
      } else {
        tree.left = BinarySearchTree(value);
      }
    }
    // if greater than call insert starting with right node
    if(value > tree.value){
      if(tree.right){
        tree.right.insert(value);
      } else {
        tree.right = BinarySearchTree(value);
      }
    }
    return tree;
  };

  tree.contains = function(value){
    var found = false;
    console.log(tree);
    console.log(tree.value);
    if(tree.value === value){
      return true;
    } else {
      if(value < tree.value && tree.left){
        found = tree.left.contains(value);
      } else if (value > tree.value && tree.right){
        found = tree.right.contains(value);
      }
    }
    return found;
  };

  tree.depthFirstLog = function(){
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
