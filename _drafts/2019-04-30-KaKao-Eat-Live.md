---
layout: posts
title:  "[CodingTest] 2019 카카오 신입 공채 1차 - 4번 무지의 먹방 라이브 문제 with Javascript"
categories: [CodingTest, Kakao]
tags: [Javascript]
comments: true
---

## 무지의 먹방 라이브

- [문제 바로가기 링크](https://www.welcomekakao.com/learn/courses/30/lessons/42890?language=javascript)
- [카카오의 설명 블로그](http://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/)

<hr>

## 나의 답안

```javascript
function solution(food_times, k) {
    if(food_times.length > k) return k+1

    const val = k / food_times.length,
          rest = k % food_times.length,
          timesSum = food_times.reduce((a, b) => a + b);
    
    if(timesSum <= k) return -1;
    
    let count = 0;
    for(let i=0;timesSum>i;i++) {
        const idx = i%food_times.length
        if(food_times[idx] > 0) {
            food_times[idx]--
            count++;
            if(count == k) return (food_times.length < idx+2 ? idx+2 - food_times.length : idx+2);
        }
    }
}
```

### 결과

<img src='/assets/images/posts/kakao/Eat-Live-result-my.png' style='max-width: 200px;'>


### 접근방식 및 아쉬웠던 점.

좋은 참고 사이트 : [참고사이트](https://boohyunsik.github.io/muzi/)
Brute Force 문제였다. Object Array로 풀수있는 방법 중 좋은 방식을 생각하지 못했다. 루프를 진행하며 제외할수 있는 값을 계속 고려해서 루프를 돌았다. 그래서 불필요한 로직이 생겨버렸다. 

<img src='/assets/images/posts/kakao/Eat-Live-solving-process1.png' style='max-width: 250px;'>

정답들의 풀이 골격은
1. food_times 배열을 값과 인덱스로 Object Array을 만들고
2. 각 줄마다 값이 있는 것들만 측정해서 k값을 지워나가고
3. k값을 

<hr>

## 최고의 파이썬 답안

```python
def solution(food_times, k):
    if sum(food_times) <= k: return -1
    if len(food_times) > k: return k+1
    n = len(food_times)
    for i in range(n):
        food_times[i] = [food_times[i],i+1]
    ft = sorted(food_times,key=lambda x:x[0])
    i,r=0,0
    while True:
        if k - (n-i)*(ft[i][0]-r) < 0:
            break
        else:
            k -= (n-i)*(ft[i][0]-r)
            r += (ft[i][0]-r)
            i += 1
    ft = sorted(ft[i:n], key = lambda x: x[1])
    return ft[k%len(ft)][1]
```

### 결과

<img src='/assets/images/posts/kakao/Eat-Live-result-python.png' style='max-width: 200px;'>

<hr>

## 파이썬 답안을 보고 수정한 자바스크립트 답안

```javascript
function solution(food_times, k) {
    if(food_times.length > k) return k+1;
    if( food_times.reduce((a, b) => a + b) <= k ) return -1;

    const n = food_times.length;

    for(let i=0;n>i;i++) {
        food_times[i] = [food_times[i],i+1];
    }
    let ft = food_times.sort((a, b) => a[0] - b[0]),
        i = 0,
        r = 0;
    while(true) {
        if( k-(n-i)*(ft[i][0]-r) < 0 ) break;
        else {
            k -= (n-i)*(ft[i][0]-r);
            r += ft[i][0]-r;
            i += 1;
        }
    }
    ft = food_times.slice(i,n).sort((a, b) => a[1] - b[1]);
    return ft[k%ft.length][1];
}
```

### 결과
<img src='/assets/images/posts/kakao/Eat-Live-result-remake.png' style='max-width: 200px;'>

<hr>

## 좋은 자바스크립트 답안

```javascript
function solution(food_times, k) {
  let copy = [],
      total = 0;
  for (let i = 0; i < food_times.length; i++) {
    total += food_times[i];
    copy[i] = { val: food_times[i], index: i + 1 };
  }

  if (total <= k) return -1;

  copy.sort((a, b) => {
    if (a.val === b.val) a.index - b.index;
    return a.val - b.val;
  });

  let sum = 0;
  let sub = 0;

  for (let i = 0; i < copy.length; i++) {
    sub = (copy[i].val - sum) * (copy.length - i);
    if (k - sub >= 0) {
      sum += copy[i].val - sum;
      k -= sub;
    } else {
      let temp = Math.floor(k / (copy.length - i));
      k -= temp * (copy.length - i);
      sum += temp;
      break;
    }
  }

  copy = copy.filter(item => item.val - sum > 0);
  copy.sort((a, b) => a.index - b.index;);

  return copy[k].index;
}
```