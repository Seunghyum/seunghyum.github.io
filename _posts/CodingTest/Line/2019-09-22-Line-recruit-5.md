---
layout: posts
title:  "[CodingTest] 2020 라인 SW개발 DEVEL-UP 인턴십 코드테스트 5번"
categories: [CodingTest]
tags: [Javascript, NaverHackDay]
comments: true
---

<!-- https://docs.google.com/document/d/1Agv0wWVtUVfxEsDiL2XNMTXW3VtOp4VdeJjA_V53BQQ/edit?usp=sharing -->

## 5번 - Solved

### 제출한 코드

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(/\n/),
    a = n[0],
    b = n[1],
    field = a.split(" ").map(f => Number(f)),
    position = b.split(" ").map(f => Number(f));
  if (position[0] > field[0] || position[1] > field[1]) console.log("fail")
  let answer = factorial(position[0] + position[1]) / (factorial(position[0]) * factorial(position[1]))

  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }

  console.log(answer + "\n" + (position[0] + position[1]))
});
```

<center>
<br>
<img src="/assets/images/posts/Line/2020-Line-Recruit-5.png" style="max-width: 600px;" />
</center>

### 소감

팩토리얼 공식을 구글에서 찾아 팩토리얼로 품. 순열, 조합 문제를 코드로 처음 풀어봐서 개념 정리하고 접근 방법을 생각하는데 시간이 많이 듦.