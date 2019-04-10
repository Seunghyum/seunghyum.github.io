---
layout: posts
title:  "[CodingTest] i를 제외한 배열 요소들의 곱"
categories: [CodingTest, DailyProgramming]
tags: [Javascript, BinarySearch, Set]
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
- O(N<sup>2</sup>) 이외의 풀이법은 생각이 나지 않음.

## 답변 및 해설
```javascript
function solution(arr) {
    // Generate prefix solution
    let prefix_products = []
    for(el of arr) {
      if (prefix_products.length > 0) prefix_products.push(prefix_products[prefix_products.length-1] * el)
      else prefix_products.push(el)
    }
    console.log("prefix_products : ", prefix_products)

    // Generate suffix solution
    let suffix_products = []
    for(el of [...arr].reverse()) {
      if(suffix_products.length > 0) suffix_products.push(suffix_products[suffix_products.length-1] * el)
      else suffix_products.push(el)
    }
    suffix_products = [...suffix_products].reverse();
    console.log("suffix_products : ", suffix_products)

    // Generate result
    let result = []
    for (let i=0; i<arr.length; i++) {
      if(i == 0) result.push(suffix_products[i + 1]) // 첫 엘리먼트
      else if (i == arr.length - 1) result.push(prefix_products[i - 1]) // 마지막 엘리먼트
      else result.push(prefix_products[i - 1] * suffix_products[i + 1])
    }
    console.log("result : ", result)
    return result
}
```
해결방법 : 루프를 돌면서 해당 인덱스(i)의 prefix(앞부분들)와 suffix(뒷부분들)의 값들을 구해서 곱하는 방법.

prefix는 i번째의 앞부분들의 수의 곱  
suffix는 i번째의 뒷부분들의 수의 곱  
  
result는 루프를 돌면서 i번째 앞부분들의 곱과 뒷부분들의 곱에 해당하는 element 값들 간의 곱  
  
**아이디어**
- n<sup>2</sup>이외의 방법을 위해 여러가지 n을 만들어 풀기.
- i번째의 앞부분들의 곱과 뒷부분들의 곱에 해당하는 array추출.