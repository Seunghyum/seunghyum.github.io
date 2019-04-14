---
layout: posts
title:  "[CodingTest] 2019 네이버 핵데이 코드테스트 문제3 with Javascript"
categories: [CodingTest, Naver]
tags: [Javascript]
comments: true
---

## 문제3
문제 받으면 작성할 예정.

## 내가 작성한 답변
```javascript
function solution(N) {
  let maxUnderCurvedPoint = N[0];
  for(let i=0;i<=N.length;i++) {
    if(N[i]<N[i+1] && maxUnderCurvedPoint > N[i]) maxUnderCurvedPoint = N[i];
  }
  for(let i=N.length-1;i>=0;i--) {
    if (maxUnderCurvedPoint < N[i]) return i-1
  }
}
```
### 풀이해석
- 예시  
![풀이해석1](/assets/images/Naver-Hackday-solve-1_1.png)

- 생각했던 과정  
![풀이해석1](/assets/images/Naver-Hackday-solve-1_2.png)

### 부족했던 점
```javascript
N = [0,4,-1,3,10] // 이 경우를 제대로 못구함.
```
내 답은 단순히 아래로꺾은선 만을 고려하였고 위로꺾은 선은 고려하지 않았다.  
그래서 위의 예시처럼 첫번째 위로꺾은 선이 앞쪽에 배치될 경우 걸러내지 못했다.

## 수정한 답안
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
### 풀이해석
위처럼 아래로꺾은선, 위꺾은선 두가지를 고려할때 좋은 답이 나온다.

## 느낀점
답에 대한 테스트케이스를 여러개 생각해서 검토하지 않아서 오류를 놓침.