---
layout: posts
title:  "[DataType] 트리 구조"
categories: [Data Type]
tags: [Tree]
comments: true
toc: true
---
## 그래프


## 트리
> 트리 구조란 <u>그래프의 일종</u>으로, 여러 노드가 한 노드를 가리킬 수 없는 구조이다. 간단하게는 회로가 없고, 서로 다른 두 노드를 잇는 길이 하나뿐인 그래프를 트리라고 부른다. *-- 위키백과*

![트리 기본구조](/assets/images/tree-basic-structure.png)

### 코드 - Binary Search Tree

- 참고 : 
  - [HackerRank - with Java](https://www.youtube.com/watch?v=oSWTXtMglKE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=8&t=559s)
  - [기본기를 쌓는 정아마추어 코딩블로그 - ES6 이진 탐색 트리 구현하기, 어떻게 특정 값을 빠르게 찾을 수 있을까? (Binary Search Tree, BST)](https://jeong-pro.tistory.com/131)

```javascript
class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  insert(value) {
    if(value <= this.data) {
      if(this.left == null) {
        this.left = new Node(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right == null) {
        this.right = new Node(value)
      } else {
        this.right.insert(value)
      }
    }
  }

  contains(value) {
    if(value == this.data) {
      return true
    } else if (value < this.data) {
      if( this.left == null) {
        return false
      } else {
        return this.left.contains(value)
      }
    } else {
      if(this.right == null) {
        return false
      } else {
        return this.right.contains(value)
      }
    }
  }

  printInOrder() {
    if(this.left != null) {
      this.left.printInOrder();
    }
    console.log(this.data)
    if(this.right != null) {
      this.right.printInOrder();
    }
  }

  printPostOrder() {
    if(this.right != null) {
      this.right.printPostOrder();
    }
    console.log(this.data)
    if(this.left != null) {
      this.left.printPostOrder();
    }
  }

  printPreOrder() {
    console.log(this.data)
    if(this.left != null) {
      this.left.printPreOrder();
    }
    if(this.right != null) {
      this.right.printPreOrder();
    }
  }
}

const tree = new Node();
tree.insert(10)
tree.insert(20)
tree.insert(7)
tree.insert(3)
tree.insert(6)
tree.insert(13)
tree.insert(16)
tree.insert(1)
tree.insert(19)
console.log('=======Start In Order======')
tree.printInOrder()
console.log('=======End======')
console.log('=======Start Pre Order======')
tree.printPreOrder()
console.log('=======End======')
console.log('=======Start Post Order======')
tree.printPostOrder()
console.log('=======End======')
```

### 트리를 이용한 문제 예시

행렬(numArray)과 그 행렬의 개수(N)이 주어질때,
행렬을 순서대로 +, - 등식으로 조합하여 결과값이 0이상 ~ 20이하로 값이 유지되고,
최종 값 역시 0이상 ~ 20이하로 값이 되도록하는 
부등식의 갯수를 구하시오.

```javascript
const N = 11, numArray= [8,3,2,4,8,7,2,4,0,8,8];

let answer = 0;
class Node {
  constructor(data, count, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.count = count
  }

  insert(value, c) {
    if(this.data == undefined) {
      this.data = value
      this.count = c
      return 
    }

    if(this.left == undefined) {  
      if(this.data - value >= 0) {
        this.left = new Node(this.data-value, c)
      }
    } else {
      this.left.insert(value, c)
    }
    if(this.right == undefined) {
      if(this.data + value <= 20) {
        this.right = new Node(this.data+value, c)
      }
    } else {
      this.right.insert(value, c)
    }
  }

  traverse() {
    if(this.left != undefined) {
      this.left.traverse()
    }

    if(this.right != undefined) {
      this.right.traverse()
    }

    if(this.count == N) {
      console.log(this.data)
      answer++
    }
  }
}

const tree = new Node()
for(let i=0;i<N;i++) {
  tree.insert(numArray[i], i+1)
}
tree.traverse()
console.log('answer : ', answer)
```