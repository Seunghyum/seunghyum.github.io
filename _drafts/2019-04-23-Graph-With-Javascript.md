---
layout: posts
title:  "[DataType] 그래프 구조"
categories: [Data Type]
tags: [Graph]
comments: true
toc: true
---

## 그래프

- 참고 자료 :
  - [GeeksForGeeks - Implementation graph javascript](https://www.geeksforgeeks.org/implementation-graph-javascript/)

```javascript
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices // the numbers of vertices. 인접한 버텍스들을 저장하기 위함.
    this.AdjList = new Map() // 인접 리스트
  }

  addVertex(v) { // v를 AdjList의 키로 추가하고, 인접 리스트를  null array 로 초기화
    this.AdjList.set(v, [])
  }

  addEdge(src, dest) { // src와 dest간에 에지 생성
    this.AdjList.get(src).push(dest)
    this.AdjList.get(dest).push(src)
  }

  printGraph() {
    let get_keys = this.AdjList.keys()
    for(let i of get_keys) {
      let get_values = this.AdjList.get(i)
      let conc = ''

      for(let j of get_values) {
        conc += j + " "
      }

      console.log(i + " -> " + conc)
    }
  }

  
  bfs(startingNode) { // BFS(Breadth First Search) 너비 우선 탐색
    let visited = Array(this.noOfVertices.length).fill(false);
    let q = new Queue()
  }
}

let g = new Graph(6); 
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  
// adding vertices 
for (let i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i])
} 
  
// adding edges 
g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')
g.addEdge('B', 'C')
g.addEdge('D', 'E')
g.addEdge('E', 'F')
g.addEdge('E', 'C')
g.addEdge('C', 'F')
  
// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph(); 
```

## BFS(Breadth First Search) 너비 우선 탐색

```javascript
```

## DFS(Depth First Search) 깊이 우선 탐색

```javascript
```