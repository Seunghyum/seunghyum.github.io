---
layout: posts
title:  "[CodingTest] 2019 카카오 신입 공채 1차 - 1번 오픈채팅방 문제 with Javascript"
categories: [CodingTest, Kakao]
tags: [Javascript, Kakao]
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
