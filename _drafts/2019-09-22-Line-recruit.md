---
layout: posts
title:  "[CodingTest] 2020 라인 SW개발 DEVEL-UP 인턴십 코드테스트"
categories: [CodingTest]
tags: [Javascript, NaverHackDay]
comments: true
---

<!-- https://docs.google.com/document/d/1Agv0wWVtUVfxEsDiL2XNMTXW3VtOp4VdeJjA_V53BQQ/edit?usp=sharing -->

## 2번 - Not Solved

### 마지막까지 적은 답

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split("\n"),
    k = Number(n[1]),
    b = n[0],
    tmp = b.split(" "),
    numbers = tmp.sort((a, b) => a - b),
    stats = {};
  for (let i = 0; i < numbers.length; i++) {
    if (stats[numbers[i]]) stats[numbers[i]]++;
    else stats[numbers[i]] = 0
  }

  for (let i = 0; i < numbers.length; i++) {
    let v = 0;
    loop:
    for (let j = 1; j < numbers.length - i; j++) {
      if (i == 0 && numbers[0] == '0') continue;
      k = k - factorial(numbers.length - j)
      if (k) < 0) break loop;
      else v++;
    }
    stats[i] = v
  }

  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }

  // console.log(a + b);
});
```

### 느낀점

순열문제라는 것은 알았지만 풀지 못함. 순열 조합 관련 코드를 인터넷에서 찾아서 바로 적용했다면 풀 수 있었음. 겁먹고 멘탈이 나간게 폐인.

### 풀이법

```javascript

```

<hr>

## 3번 - Not Solved

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const tmp = data.split(/\n/);
  const n = Number(tmp[0]);
  tmp.shift()
  const timeline = tmp.map(t => t.split(" ").map(e => Number(e)))
  console.log("n : ", n);
  console.log("timeline : ", timeline);
  let endTime = 0;
  let answer = 0;

  for (let i = 0; i < timeline.length; i++) {
    let k = 0;
    for (let j = i + 1; j < timeline.length; j++) {
      if (timeline[i][1] > timeline[j][0] && timeline[i][0])
    }
  }

  // for(let i=0;i<timeline.length;i++){
  //     endTime = timeline[i][1] > endTime ? timeline[i][1] : endTime;
  // }

  // for(let i=0;i<endTime;i++) {
  //     for(let i=0;i<timeline.length;i++){
  //         endTime = timeline[i][1] > endTime ? timeline[i][1] : endTime;
  //     }
  // }
});
```

## 6번 - Not Solved

```javascript
```