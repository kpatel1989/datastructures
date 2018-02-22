function Graph(edges, isDirected = false) {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
    if (edges) {
        edges.forEach(edge => {
            this.addEdge(edge[0], edge[1], !isDirected);
        })
    }
}

Graph.prototype.addVertex = function (v) {
    if (this.vertices.indexOf(v) == -1) {
        this.vertices.push(v)
        this.edges[v] = [];
    }
}
Graph.prototype.removeVertex = function (v) {
    var index = this.vertices.indexOf(v);
    if (index != -1) {
        this.vertices.splice(index, 1);
        var adjacentVertices = this.edges[v];
        adjacentVertices.forEach(adj => {
            this.removeEdges(adj, v);
        });
    }
}
Graph.prototype.addEdge = function (v1, v2, twoWay = false) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.edges[v1].push(v2);
    this.numberOfEdges += 1;
    if (twoWay) {
        this.edges[v2].push(v1);
        this.numberOfEdges += 1;
    }
}

Graph.prototype.removeEdges = function (v1, v2) {
    var index = this.edges[v1].indexOf(v2);
    if (index != -1) {
        this.edges[v1].splice(index, 1);
    }
    index = this.edges[v2].indexOf(v1);
    if (index != -1) {
        this.edges[v2].splice(index, 1);
    }
}
Graph.prototype.size = function () {
    return this.vertices.length;
}
Graph.prototype.relations = function () {
    return this.numberOfEdges;
}
Graph.prototype.getAdjacentVertices = function (v) {
    return this.edges[v];
}
Graph.prototype.getAllConnectedVertices = function (v, visitedVertices = []) {
    var child = [];
    var adjacent = this.edges[v];
    visitedVertices.push(v);
    adjacent.forEach(adj => {
        if (visitedVertices.indexOf(adj) == -1) {
            child.push(adj);
            if (child.length == this.vertices) {
                return child;
            }
            child = child.concat(this.getAllConnectedVertices(adj, visitedVertices));
        }
    });
    return child;
}

Graph.prototype.getPathToAllVertices = function (v, visitedVertices = []) {
    var paths = [];
    var adjacent = this.edges[v];
    visitedVertices.push(v);
    var p = [v];
    var hasUnVisitedAdjacent = false;
    adjacent.forEach(adj => {
        if (visitedVertices.indexOf(adj) == -1) {
            var childPaths = this.getPathToAllVertices(adj, visitedVertices.slice(0));
            childPaths.forEach(cPath => {
                paths.push(p.concat(cPath));
            });
            hasUnVisitedAdjacent = true;
        }
    });
    if (adjacent.length == 0 || !hasUnVisitedAdjacent) {
        return p;
    }
    return paths;
}

module.exports = { Graph }
