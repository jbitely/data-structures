var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value){
  var newNode = {};
  newNode.edges = [];
  newNode.value = value;
  this[value] = newNode;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value){
  return this[value] ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(value){
  delete this[value];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edges.indexOf(toNode) > -1;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this[fromNode].edges.indexOf(toNode);
  var toIndex = this[toNode].edges.indexOf(fromNode);
  this[fromNode].edges.splice(fromIndex, 1);
  this[toNode].edges.splice(toIndex, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(key);
    }
  }
  console.log(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addNode - constant - O(1)
 .contains - constant - O(1)
 .removeNode - constant - O(1)
 .hasEdge - linear - O(n)
 .addEdge - constant - O(1)
 .removeEdge - linear - O(n)
 .forEachNode - linear - O(n)
 */



