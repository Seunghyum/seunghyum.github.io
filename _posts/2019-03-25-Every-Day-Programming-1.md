---
layout: posts
title:  "[코딩 테스트] 매일 프로그래밍 - 피보나치 배열 2019-03-25"
categories: [CodingTest, EverydayProgramming]
tags: [Javascript]
comments: true
---

<!-- ## 문제
피보나치 배열은 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.  
정수 N이 주어지면, N보다 작은 모든 짝수 피보나치 수의 합을 구하여라.  
<br>
<br>
Fibonacci sequence starts with 0 and 1 where each fibonacci number is a sum of two previous fibonacci numbers. Given an integer N, find the sum of all even fibonacci numbers. -->


<!-- ## 예제

Input: N = 12  

Output: 10 // 0, 1, 2, 3, 5, 8 중 짝수인 2 + 8 = 10. -->


<!-- ## 풀이
A(n+1) = A(n) + A(n-1)
1 = 1+0
2 = 1+1 ***// 2^0***
3 = 2+1 ***// 2^1 + 2^0 ***
5 = 3 + 2 ***// 5 = (2+1) + 2 // 2^1 + 2^1 + 2^0***
8 = 5 + 3 ***// 8 = (2+2+1) + (2+1) // 2^2 + 1 + 2^1 + 2^1 + 1***
13 = 8 + 5 ***// 8 = (2+2+1 + 2+1) + (2+2+1) // 2^3 + 2^2 + 1***
21
34
.
.
. -->

```javascript
// 처음 답
function solution(n) {
  if(n < 2) return 0
  let initN = [1,1], output = 0, result = 0;

  while(n > initN[0] + initN[1]) {
    output = initN[0] + initN[1]
    initN = [initN[1], output]
    if(output%2 == 0) result += output
  }

  return result
}

// 수정 후
function solution(n) {
  if(n < 2) return 0
  let x = 1, y = 1, sum = 0;

  while(n > x) {
    if(x%2 == 0) sum += x
    let z = x + y
    x = y
    y = z
  }

  return sum
}
```

<!-- ## 정답 - python
```python
int evenFibSum(int N) {
  int sum = 0;
  int x = 1;
  int y = 2;
  while (x <= N) {
    if (x % 2 == 0) {
      sum += x;
    }
    int z = x + y;
    x = y;
    y = z;
  }
  return sum;
}
``` -->