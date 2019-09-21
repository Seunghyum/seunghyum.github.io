---
layout: posts
title:  "[CodingTest] 2019 네이버 핵데이 코드테스트 문제1 with Javascript"
categories: [CodingTest]
tags: [Javascript, NaverHackDay]
comments: true
---

## 문제1
문제를 알려줄 수 없다는 답변 받음. **github에서 네이버 핵데이** 검색하면 나옴.

## 내가 작성한 답변
```javascript
function solution(A) {
  const oppositeGroupA = new Set([1,6]),
        oppositeGroupB = new Set([2,5]),
        oppositeGroupC = new Set([3,4]);
  
  let stats = {},
      maxEl = A[0], 
      maxCount = 1,
      answer = 0;
  // 가장 많이 중복되는 el을 기준.
  // return = 기준 숫자의 반대편 숫자의 갯수 * 2 + 다른 숫자면들의 개수들 
  for(let i = 0; i < A.length; i++) {
    let el = A[i];
    if(stats[el] == null) stats[el] = 1;
    else stats[el]++;  
    if(stats[el] > maxCount) {
      maxEl = el;
      maxCount = stats[el];
    }
  }
  for(let s in stats) {
    let NumberS = Number(s);
    if(maxEl == NumberS) continue;
    else if(oppositeGroupA.has(maxEl) && oppositeGroupA.has(NumberS)) answer += stats[s] * 2;
    else if(oppositeGroupB.has(maxEl) && oppositeGroupB.has(NumberS)) answer += stats[s] * 2;
    else if(oppositeGroupC.has(maxEl) && oppositeGroupC.has(NumberS)) answer += stats[s] * 2;
    else answer += stats[s];
  }
  return answer;
}

console.log("1,2,3 : ", solution([1,2,3]))
console.log("1,1,6 : ", solution([1,1,6]))
console.log("1,6,2,3 : ", solution([1,6,2,3]))
console.log("1,1,2,3,6 : ", solution([1,1,2,3,6]))
```

## 수정한 답변
```javascript
function solution(A) {
  let stats = {},
      maxEl = A[0], 
      maxCount = 1,
      answer = 0;
      
  for(let i = 0; i < A.length; i++) {
    let el = A[i];
    if(stats[el] == null) stats[el] = 1;
    else stats[el]++;  
    if(stats[el] > maxCount) {
      maxEl = el;
      maxCount = stats[el];
    }
  }

  for(let s in stats) {
    let NumberS = Number(s);
    if(maxEl == NumberS) continue;
    else if(maxEl + NumberS === 7) answer += stats[s] * 2;
    else answer += stats[s];
  }
  return answer;
}

console.log("2,2,2,3,4,5,6 : ", solution([2,2,2,3,4,5,6 ]))
```
- 괜히 쓸데없이 oppositeGroupA 같은 형식으로 구하려고했다. 단순하게 ***maxEl + NumberS === 7*** 으로 했으면 더 좋았을텐데...