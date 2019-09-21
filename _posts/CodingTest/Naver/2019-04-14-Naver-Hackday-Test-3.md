---
layout: posts
title:  "[CodingTest] 2019 네이버 핵데이 코드테스트 문제3 with Javascript"
categories: [CodingTest]
tags: [Javascript, NaverHackDay]
comments: true
---

## 문제3
문제를 알려줄 수 없다는 답변 받음. **github에서 네이버 핵데이** 검색하면 나옴.

## 내가 작성한 답변 - 아래로 꺾인선만 구하기
```javascript
function solution(N) {
  let maxUnderCurvedPoint = N[0];
  for(let i=0;i<=N.length;i++) {
    if(N[i]>N[i+1] && maxUnderCurvedPoint > N[i]) maxUnderCurvedPoint = N[i];
  }
  for(let i=N.length-1;i>=0;i--) {
    if (maxUnderCurvedPoint < N[i]) return i-1
  }
}
```
### 풀이해석
- 예시  
<img src="/assets/images/Naver-Hackday-solve-1_1.png" style="max-width: 400px;" />

- 생각했던 과정  
<img src="/assets/images/Naver-Hackday-solve-1_2.png" style="max-width: 300px;" />

### 부족했던 점
```javascript
N = [0,4,-1,3,10] // 이 경우를 제대로 못구함.
```
내 답은 단순히 아래로꺾은선 만을 고려하였고 위로꺾은 선은 고려하지 않았다.  
그래서 위의 예시처럼 첫번째 위로꺾은 선이 앞쪽에 배치될 경우 걸러내지 못했다.

## 수정한 답안1 - 위로꺾인선, 아래로꺾인선 구하기
```javascript
function solution(N) {
  let maxUnderCurvedPoint = N[0], maxUpperCurvedPoint = N[0];
  for(let i=0;i<=N.length;i++) {
    if(N[i]<N[i+1] && maxUnderCurvedPoint < N[i]) maxUnderCurvedPoint = N[i];
    else if(N[i]>N[i+1] && maxUpperCurvedPoint < N[i]) maxUpperCurvedPoint = N[i]; // 추가
  }
  for(let i=N.length-1;i>=0;i--) {
    if (maxUnderCurvedPoint < N[i] && maxUpperCurvedPoint < N[i]) return i; // 수정
  }
}
```
### 부족한 점
다시생각해보니 위로 꺾인선만 고려하면 쉽게 답이 나옴.

## 수정한 답안2 - 위로꺾인선만 구하기
```javascript
function solution(N) {
  let maxUpperCurvedPoint = N[0];
  for(let i=0;i<=N.length;i++) {
    if(N[i]>N[i+1] && maxUpperCurvedPoint > N[i]) maxUpperCurvedPoint = N[i]; // 추가
  }
  
  for(let i=N.length-1;i>=0;i--) {
    if (maxUpperCurvedPoint < N[i]) return i; // 수정
  }
}
console.log("solution([-5,-5,3,10]) : ", solution([-5,-5,3,10]))
console.log("solution([3,-5,5,10]) : ", solution([3,-5,5,10]))
```

## 느낀점
답에 대한 테스트케이스를 여러개 생각해서 검토하지 않아서 오류를 놓침. 
여러가지 테스트케이스를 해보고 오류점검하는 버릇이 좀 더 들어야함.