---
layout: posts
title:  "[CodingTest] 2020 라인 SW개발 DEVEL-UP 인턴십 코드테스트 1번"
categories: [CodingTest]
tags: [Javascript, NaverHackDay]
comments: true
---

## 1번 : 못품

### 제출한 답변

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  // 인풋 데이터 정제
  const n = data.split(" "),
    tmp = n[1].split(/\n/),
    mesages = Number(n[0]),
    consumers = Number(tmp[0]);
  tmp.shift()
  const times = tmp;

  let result = 0,
    compare = [];
  
  // 로직 수행을 위한 데이터 정제
  for (let i = 0; i < consumers; i++) {
    let tmp = {}
    tmp['index'] = i
    tmp['time'] = 0
    compare.push(tmp)
  }

  // 가장 낮은 time 값을 sort로 찾고 대기열의 숫자 추가
   // A번
  for (let i = 0; i < times.length; i++) {
    compare.sort((a, b) => a.time - b.time); // m * nlogn
    compare[0].time += Number(times[i]);
  }

  // 최대값 추출
  compare.sort((a, b) => b.time - a.time);  //  nlogn
  console.log(String(compare[0].time))
});
```

### 느낀점

객체 배열(Obect Array)과 정렬(sort)로 푸려고함. 시간복잡도 O(nlogn)
**A번**에서 좀 더 효율적인 알고리즘을 만들 수 없었을까.
js 반복문 for, reduce, forEach, map, some, every 매서드들의 용도 다시 공부함.

- for : array에 대한 반복이 아닌 횟수 반복을 적용하고자할 때 사용.
- reduce : 깔대기에 물을 들이 붙는 것처럼 축적된 값(accumulator)를 반환. 비교할때, 축적된 값을 뽑을때 사용.
- forEach : 함수를 순회함. index를 볼 수 있음. for문을 대체가능
- map : 함수를 순회하며 인자를 다른 인자로 맵핑해서 새로운 array를 반환.
- some : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
- every : 모든 요소들이 조건을 만족시키는지 확인.

### 수정한 답

```javascript
  // ...
  // A번 수정
  // 가장 낮은 time 값을 sort로 찾고 대기열의 숫자 추가
  for (let i = 0; i < times.length; i++) { // n
    // compare.sort((a, b) => a.time - b.time);
    // compare[0].time += Number(times[i]);
    const target = compare.reduce((a,b) => a.time > b.time ? b : a) // n*m
    compare.forEach(e => {
      if(target.index === e.index) e.time += Number(times[i])
    }) // n*2m
  }

  // 최대값 추출
  // compare.sort((a, b) => b.time - a.time);
  // console.log(String(compare[0].time))
  const answer = compare.reduce((a,b) => a.time <b.time ? b : a)
  console.log(String(answer.time))
})
```