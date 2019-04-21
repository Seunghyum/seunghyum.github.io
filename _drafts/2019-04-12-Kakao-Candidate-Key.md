---
layout: posts
title:  "[CodingTest] 2019 카카오 신입 공채 1차 - 1번 오픈채팅방 문제 with Javascript"
categories: [CodingTest, Kakao]
tags: [Javascript]
comments: true
---

## 후보키
- [문제 바로가기 링크](https://www.welcomekakao.com/learn/courses/30/lessons/42890?language=javascript)
- [카카오의 설명 블로그](http://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/)
<br>
## 나의 답안
```javascript
function solution(relation) {
    //1. for 문으로 object로 통계값 추출 + set으로 중복되는 값있는지 확인. 후보키 가능열을 열마다 체크
    
    const numOfCols =  relation[0].length,  
          numOfRows = relation.length;
    let answer = 0,
        stats = [],
        candidateKeyCols = [];
    for (let i=0;i<numOfCols;i++){
        let rowsOfCol = new Set(),
            indexArr = [];
        for (let j=0;j<numOfRows;j++){
            // if(rowsOfCol) indexArr.push
            rowsOfCol.add(relation[j][i])
        }
        if(rowsOfCol.size == numOfRows) {
            answer++;
            candidateKeyCols.push(i)
        }
    }
    console.log("answer : ", answer)
    //2. 1번의 후보키가능 열을 제외하고 (통계값이 2인) 각 열마다 중복되는 값이 있는 경우, 
    // 해당 튜플들의 다른 값들을 비교.   
}
```

## 카카오의 풀이
> 문제 풀이
> 가능한 모든 어트리뷰트의 조합을 만들고, 이 조합에서 조건을 만족시키는 조합만 추려야 하는 문제입니다.
>
> dfs 또는 bit 를 이용한 집합 표현을 이용하여 어트리뷰트의 모든 부분 집합을 만들어냅니다.
> 만들어지는 각 부분 집합을 이용해서 중복 튜플이 있는지 검사합니다. 만약 중복 튜플이 없다면, 이 부분 집합을 슈퍼 키 집합(유일성을 만족하는 키들의 집합)에 포함시킵니다.
>
> 슈퍼 키 집합을 구한 후, 여기서 최소성을 만족하는 키들을 선택하여 후보 키 집합을 만들 수 있습니다.
> 만약 어떤 슈퍼 키 X에 대해 X의 부분집합인 슈퍼 키 Y가 없다면 (X ⊃ Y인 슈퍼 키 Y가 없다면) X는 후보 키로 선택될 수 있습니다.
>
> 예를 들어 어떤 릴레이션의 어트리뷰트가 ABCDE 이고, 슈퍼 키 집합이 {A, AB, BC, BCE, BDE, ...} 라고 해봅시다.
>
> A 는 후보 키로 선택될 수 있습니다.
> AB 는 AB ⊃ A 이므로 후보 키가 될 수 없습니다.
> BC 는 부분집합이 되는 다른 슈퍼 키가 없으므로 후보 키로 선택됩니다.
> BCE 는 BCE ⊃ BC 이므로 후보 키가 될 수 없습니다.
> BDE 는 부분집합이 되는 다른 슈퍼 키가 없으므로 후보 키로 선택됩니다.
> ...
> 따라서 이 경우 후보 키 집합은 {A, BC, BDE, ...} 가 됩니다.
>
> 가능한 모든 조합을 만드는 부분 때문인지 앞쪽에 배치된 문제임에도 많은 지원자들이 어려움을 겪은 것으로 보입니다.

## 알아야할 개념
- 깊이 우선 검색(DFS - Deep-First-Search)
  - [정리글](https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html)


## 다른사람의 답안 (bit를 이용한 연산)
```javascript
function solution(relation) {
  const tuples = relation[0].length,
    rows = relation.length;
  const cKey = [];

  for (let i = 1; i <= 1 << tuples; i++) {
    const set = new Set();

    for (let j = 0; j < rows; j++) {
      let key = "";

      for (let k = 0; k < tuples; k++) {
        if (i & (1 << k)) {
          key += relation[j][k];
        }
      }
      set.add(key);
    }

    // 유일성 및 최소성 체크
    if (rows === set.size && isMinimal(cKey, i)) {
      cKey.push(i);
    }
  }
  return cKey.length;
}

// 최소성 체크
function isMinimal(cKey, index) {
  for (let i = 0; i < cKey.length; i++) {
    if ((cKey[i] & index) == cKey[i]) return false;
  }
  return true;
}

const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"]
];

console.log(solution(relation));
```




```javascript
var Graph = (function() {
  function Vertex(key) {
    this.next = null;
    this.arc = null;
    this.key = key;
    this.inTree = null;
  }
  function Arc(data, dest, capacity) {
    this.nextArc = null;
    this.destination = dest;
    this.data = data;
    this.capacity = capacity;
    this.inTree = null;
  }
  function Graph() {
    this.count = 0;
    this.first = null;
  }
  Graph.prototype.insertVertex = function(key) {
    var vertex = new Vertex(key);
    var last = this.first;
    if (last) {
      while (last.next !== null) {
        last = last.next;
      }
      last.next = vertex;
    } else {
      this.first = vertex;
    }
    this.count++;
  };
  
  Graph.prototype.insertArc = function(data, fromKey, toKey, capacity) {
    var from = this.first;
    var to = this.first;
    while (from && from.key !== fromKey) {
      from = from.next;
    }
    while (to && to.key !== toKey) {
      to = to.next;
    }
    if (!from || !to) return false;
    var arc = new Arc(data, to, capacity);
    var fromLast = from.arc;
    if (fromLast) {
      while (fromLast.nextArc != null) {
        fromLast = fromLast.nextArc;
      }
      fromLast.nextArc = arc;
    } else {
      from.arc = arc;
    }
  };
  return Graph;
})();