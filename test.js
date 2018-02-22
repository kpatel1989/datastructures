var { Graph } = require("./graph");

var edges = [
    [6, 4],
    [4, 5],
    [4, 3],
    [5, 2],
    [5, 1],
    [2, 1]
];
var g = new Graph(edges);
console.log(JSON.stringify(g.getAllConnectedVertices(6)));

var edges = [
    [0, 1],
    [0, 4],
    [0, 5],
    [1, 2],
    [2, 3],
    [5, 6]
]

var g = new Graph(edges);
g.addVertex(10);
g.addVertex(11);
g.addVertex(12);
g.addVertex(13);
g.addVertex(14);
g.addEdge(10, 15);
g.addEdge(10, 13);
g.addEdge(13, 15);
g.removeVertex(12);
g.removeEdges(0, 4);
console.log(JSON.stringify(g.getAllConnectedVertices(6)));
console.log(JSON.stringify(g.getAllConnectedVertices(10)));


var edges = [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 2],
    [5, 3],
    [5, 4],
    [4, 6],
    [7, 6],
    [6, 7],
    [7, 4],
    [7, 9],
    [8, 7],
    [10, 7],
];
var g = new Graph(edges, true);
console.log(JSON.stringify(g.getAllConnectedVertices(6)));
console.log(1, JSON.stringify(g.getPathToAllVertices(1)));
console.log(2, JSON.stringify(g.getPathToAllVertices(2)));
console.log(3, JSON.stringify(g.getPathToAllVertices(3)));
console.log(4, JSON.stringify(g.getPathToAllVertices(4)));
console.log(5, JSON.stringify(g.getPathToAllVertices(5)));
console.log(6, JSON.stringify(g.getPathToAllVertices(6)));
console.log(7, JSON.stringify(g.getPathToAllVertices(7)));
console.log(8, JSON.stringify(g.getPathToAllVertices(8)));
console.log(9, JSON.stringify(g.getPathToAllVertices(9)));
console.log(9, JSON.stringify(g.getPathToAllVertices(10)));
