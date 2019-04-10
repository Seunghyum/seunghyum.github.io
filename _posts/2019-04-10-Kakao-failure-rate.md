---
layout: posts
title:  "[CodingTest] 2019 카카오 신입 공채 1차 - 2번 실패율 문제 with Javascript"
categories: [CodingTest, Kakao]
tags: [Javascript, Finished]
comments: true
---


## 오픈채팅방
- [문제 바로가기 링크](https://www.welcomekakao.com/learn/courses/30/lessons/42889)
- [카카오의 설명 블로그](http://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/)
<br>
  
## 나의 첫답안
```javascript
function solution(N, stages) {
  let st = stages, stats = [];
  for(let i=1;i<N+1;i++){ // n
    let selectedNumbers=0, obj = {};
    st = st.filter((s)=>{ // n * n
      if(s == i) selectedNumbers++;
      else return true;
    });
    obj.name = i;
    obj.per = (st.length == 0 ? 1 : selectedNumbers/st.length);
    stats.push(obj)
  }
  stats.sort((a,b)=> a.per - b.per >= 0 ? -1 : 1) // n^2 + logN
  return stats.map(s => s.name) // -> O(n^2)
}
```

## 나의 수정한 답안
```javascript
function solution(N, stages) {
  let eaStats = {}, perStats = [];

  for(let el of stages) { // Array 인자값들의 갯수 통계를 내고 = easStats -> n
    if(!eaStats[el]) eaStats[el] = 1;
    else eaStats[el]++;
  }

  let stageUsers = stages.length;

  for(let i=1;i<N+1;i++){ // 갯수통계(eaStats)를 확률들의 통계(perStats)로 다시 변환하고 -> 2n
    let perStatsObj = {}
    if(!eaStats[i]) {
      perStatsObj.name = i;
      perStatsObj.per = 0;
      perStats.push(perStatsObj)
    } else {
      perStatsObj.name = i
      perStatsObj.per = stageUsers == 0 ? 1 : eaStats[i]/stageUsers;
      stageUsers = stageUsers - eaStats[i];
      perStats.push(perStatsObj)
    }
  }

  perStats.sort((a,b)=> a.per - b.per >= 0 ? -1 : 1) // 확률들의 통계(perStats)로 다시 변환하고 -> 2n + nlogN
  return perStats.map(s => s.name) // -> O(nlogN)
}
```

## 결과 비교
<h4 class="text-center" style="width: 49%; display: inline-block; margin-bottom: 5px;" > 나의 첫답안 </h4>
<h4 class="text-center" style="width: 49%; display: inline-block; margin-bottom: 5px;" > 나의 수정한 답안 </h4>
<img style="width: 49%; display: inline-block;" src="/assets/images/kakao-failure-rate-1a-min.png"/>
<img style="width: 49%; display: inline-block;" src="/assets/images/kakao-failure-rate-2a-min.png"/>

## 공부해야할 자료
sort 매서드는 merge sort라고 한다. [관련링크](https://www.quora.com/What-is-the-time-complexity-of-JavaScripts-sort-function)  
다른 sort들의 특징과 장점을 봐야겠다.
- [JS Interview Question](https://khan4019.github.io/front-end-Interview-Questions/sort.html)
- [Sort Algorithms with Javascript](https://dev.to/wangonya/sorting-algorithms-with-javascript-part-1-4aca)