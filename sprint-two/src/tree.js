var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else if (this.children) {
    var result = false;
    for (var i = 0; result === false && i < this.children.length; i++) {
      result = this.children[i].contains(target);
    }
    return result;
  }
};
