---
layout: posts
title:  "[CodingTest] 매일 프로그래밍 - 2019-03-26"
categories: [CodingTest]
tags: [Javascript, EverydayProgramming]
comments: true
---
## 문제
정수 배열(int array)가 주어지면 가장 큰 이어지는 원소들의 합을 구하시오. 단, 시간복잡도는 O(n).  

Given an integer array, find the largest consecutive sum of elements.

## 예제
```
Input: [-1, 3, -1, 5]

Output: 7 // 3 + (-1) + 5



Input: [-5, -3, -1]

Output: -1 // -1



Input: [2, 4, -2, -3, 8]

Output: 9 // 2 + 4 + (-2) + (-3) + 8
```

## 내 풀이
난 중복된 수만 제오하고 합쳐라 라는 건줄 앎.... 문제에 대한 설명이 좀 더 정확했으면...
```javascript
function solution(input) {
  return [...new Set(input)].reduce((i, j) => i + j)
}
```

## 정답
시간 복잡도: O(n)  
공간 복잡도: O(1)
```python
int solution(int[] arr) {
  int maxSum = arr[0];
  int currentSum = arr[0];
  for(int i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
```
