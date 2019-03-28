---
layout: posts
title:  "[CodingTest] 배열의 두 값을 합하여 k값 만들기"
categories: [CodingTest]
tags: [Javascript, BinarySearch, Set, Continue]
comments: true
---
## 문제
정수 배열이 주어지면 인덱스 i에 해당하는 값 이외의 모든 값들의 곱인 배열을 구하여라.  
보너스 : 나눗셈을 안쓰고 풀기

## 예시
```
[1,2,3] => [6,3,2]
[1,2,3,4,5 ] => [120, 60, 40, 30, 24]
```

## 나눗셈이 있는 풀이법
```javascript
// 2n => O(n)
function solution(arr) {
  const max = arr.reduce((a,b)=>a*b); // n
  let answer = [];
  for(let el of arr) { // n + n
    answer.push(max/el)
  }
  return answer
}
```

## 나눗셈 없는 풀이법
```javascript
// n^2 = N(n^2)
function solution(arr) {
  return arr.map(el => // n
    arr.reduce((a,b) => { // n
      return el == b ? a : a*b
    },1)
  )
}
```

## 느낀점
- O(N^2) 이외의 풀이법은 생각이 나지 않음.

## 답변 및 해설
- 진행중