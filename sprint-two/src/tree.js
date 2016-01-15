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
  console.log(this.value);

  if (this.value === target) {
    return true;
  } else if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].contains(target);
    }
  }
  return false;
};
