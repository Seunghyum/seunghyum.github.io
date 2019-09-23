---
layout: posts
title:  "[CodingTest] 2020 라인 SW개발 DEVEL-UP 인턴십 코드테스트 4번"
categories: [CodingTest]
tags: [Javascript, NaverHackDay]
comments: true
---

<!-- https://docs.google.com/document/d/1Agv0wWVtUVfxEsDiL2XNMTXW3VtOp4VdeJjA_V53BQQ/edit?usp=sharing -->

## 4번 - Solved

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(/\n/);
  const a = Number(n[0]),
    b = n[1];
  const sits = b.split(" ");
  let answer;

  for (let i = 0; i < sits.length; i++) {
    if (sits[i] == "1") continue;
    let right = 1,
      left = 1;
    loop:
      for (let j = i; j < sits.length; j++) {
        if (!sits[j + 1] || sits[j + 1] == "1") break loop;
        right++;
        if (!sits[j - 1] || sits[j - 1] == "1") break loop;
        left++;
      }

    let tmp = right > left ? left : right;
    if (!answer) answer = tmp;
    else answer = answer > tmp ? answer : tmp;
  }
  console.log(answer)
});
```

### 내가 푼 방식 

[1, 0, 1, 0, 0, 0, 1] 중 0인 값들만 선택적으로 골라 i-1, i+1인 곳을 찾아 통계를 매김.

### 다시 생각한 방식

1. 1과 0이 이어지는 곳 중 0이 가장 많이 이어지는 곳들을 찾고
2. 해당 구간의 중간을 찾아 좌우 거리를 측정
했다면 시간 복잡도를 더 줄일 수 있을 것 같음.

```javascript
function solution(data) {
  const n = data.split(/\n/),
        a = Number(n[0]),
        b = n[1];
  const sits = b.split(" ");
  let answer,
      maxLength=0,
      maxLengthStartIndex=0;

  for (let i = 0; i < sits.length; i++) {
    console.log("iiiiiii : ",i)
    if (sits[i] == "1") continue;
    else {
      let checkLength=0,
          checkIndex=i;
      loop:
      for(let j=1;j<sits.length-i;j++) {
        if(sits[i+j]=="1") {
          if(maxLength < checkLength) {
            i+=j // 계산한 값들은 건너뛰어서 측정
            maxLength = checkLength
            maxLengthStartIndex = checkIndex
          }
          break loop;
        } else {
          checkLength+=1
        }
      }
    }
  }
  if(maxLength%2 == 0) answer = Math.floor(maxLength/2)+1
  else answer = Math.floor(maxLength/2)
  console.log(answer)
}
solution(`8
1 0 1 0 0 0 0 1`)
```