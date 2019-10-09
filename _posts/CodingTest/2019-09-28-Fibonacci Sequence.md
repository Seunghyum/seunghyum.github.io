---
layout: posts
title:  "[CodingTest] 피보나치 수열"
categories: [CodingTest]
tags: [Javascript, Goorm]
comments: true
---

## 문제 : 피보나치 수열
제 1항부터 입력한 자연수(N)까지의 피보나치 수열 항들의 합을 구하여라.

> F<sub>0</sub> = 0<br>
> F<sub>1</sub> = 1z<br>
> F<sub>n+2</sub> = F<sub>n+1</sub> + F<sub>n</sub>

|  N  | Fibonacci(N) | Answer |
|:---:|:--------:||:--------:|
|  0  |     0     |     0    |
|  1  |     1     |     1    |
|  2  |     1     |     2    | 
|  3  |     2     |     4    |
|  4  |     3     |     7    |
|  5  |     5     |     12   |
|  6  |     8     |     20   |
|  7  |     13    |     33   |
|  8  |     21    |     54   |
|  9  |     34    |     88   |
|  10 |     55    |     143  |

## 내 답안 : 메모제이션 적용

```javascript
// Run by Node.js
​
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
​
​
rl.on("line", function(line) {
  if(line==1) return console.log(1)
  let memo = {0:0, 1:1, 2:1}
  
  function fibonacci(n) {
    if(n==0) return 0
    if(!memo[n]) memo[n] = fibonacci(n-1) + fibonacci(n-2)
    return memo[n]
  }
​
  function sum(obj) {
    return Object.keys(obj).reduce((sum,key)=>sum+obj[key]||0,0);
  }
  fibonacci(line)
  console.log(sum(memo))
  rl.close();
}).on("close", function() {
  process.exit();
});
```

## 더 좋은 방법 

변수에 기억해두어서 공간 복잡도를 더 낮추는 방법

```javascript
// Run by Node.js
​
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
​
​
rl.on("line", function(line) {
  if(line==0) return console.log(0)
  if(line==1) return console.log(1)
  if(line==2) return console.log(2)
  let memo = {0:0, 1:1, 2:1}, before, after, answer=0
  for(let i=3;i<=line;i++){
    after += before
    before = after
    answer += after
  }
​
  rl.close();
}).on("close", function() {
  process.exit();
});
```

<!-- https://docs.google.com/document/d/1EyNSj9bc0BNZg6rgqKYh1wu2LlFF26iVe2SF0LLBCRY/edit -->