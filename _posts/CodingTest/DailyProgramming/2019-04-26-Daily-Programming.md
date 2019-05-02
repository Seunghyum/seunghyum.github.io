---
layout: posts
title:  "[CodingTest] 벽안에 고인 빗물의 양"
categories: [CodingTest]
tags: [Javascript, BinarySearch, Set]
comments: true
---
## 문제

주어지는 행렬 arr(ex - [3,0,1,3,0,5])값의 인자들을 벽이라고 했을때 비가와서 물이 고이는 부분의 양을 구하여라.

<img src="/assets/images/2019-04-26-explain.png" style="max-width: 350px;" />

답 : 8

## 내가 생각한 풀이

- 풀어본 시간 : 1시간
- 중간까지 밖에 못함. 접근방법이 복잡해져서 방향을 잘못잡음.
  - 위로 꺾은 선들을 찾아서 각 구간마다 물이 고일수있는 max값을 찾고
  - 해당 구간에서 max - arr[i] 값들의 합을 구하려고 했음

```javascript
function solution(arr) {
    let upperPoints = {0: arr[0]} // {index: value, ...}
    for(let i=0;i>arr.length;i++) {
        if(arr[i-1] < arr[i]) if(arr[i+1] == undefined) upperPoints[i] = arr[i]
        else if(arr[i] > arr[i+1]) upperPoints[i] = arr[i]
    }

    let filteredPoints = {0: arr[0]}, // {index: value, ...}
        startPoint = [0, arr[0]]
    for((p,i) of upperPoints) {
        if(&& startPoint >= upperPoints[i] && i != 0 ) {
            filteredPoints[i] = upperPoints[i];
        }
    }

    // 중단함.
} 
```

### 정답풀이법 

- 아이디어
  - 왼쪽과 오른쪽을 각각 돌며 각 index마다의 물이 고일 수 있는 max값 찾음.
  - 왼쪽 / 오른쪽에서 찾은 max값들 중 min 값으로 [min - 해당 index] 값을 구해서 total로 더함.

```javascript
// 시간복잡도 O(n) 공간복잡도 O(n)
function solution(arr) {
    let left_maxes = [], 
        right_maxes = [],
        current_left_max = 0, 
        current_right_max = 0, 
        total = 0;

    for(let i=0; arr.length > i; i++) {
        current_left_max = Math.max(current_left_max, arr[i]);
        left_maxes[i] = current_left_max;
    }
    
    for(let i=arr.length-1; 0 <= i; i--) {
        current_right_max = Math.max(current_right_max, arr[i]);
        right_maxes[i] = current_right_max;
    }

    for(let i=0; arr.length > i; i++) {
        total += Math.min(left_maxes[i], right_maxes[i]) - arr[i];
    }
    return total;
}
```

### 업그레이드된 정답풀이법 

- 목적
  - 공간 복잡도를 O(1)로 만들기위해 left_maxes, right_maxes를 없앰.
- 아이디어
  - 가장 큰 수를 기점으로 오른쪽 / 왼쪽 나눔.

- 단점
  - 울퉁불퉁한 모양이면 답이 제대로 나오지만 계단형태의 그래프일 경우 답이 이상하게 나옴.
  - arr = [1,2,3,4,5] 또는 [5,4,3,2,1]의 경우 답이 -3 나옴.
  - arr = [5,2,6,1,8,9,9,7] 에 해당하는 답안이 이상함.
  - arr = [3,0,1,3,0,5] 에만 잘 되는 답임.

```javascript
// 시간복잡도 O(n) 공간복잡도 O(1)
function solution(arr) {
    if (arr.length == 0) return 0

    let total = 0,
        max_i = arr.indexOf(Math.max(...arr)),
        left_max = arr[0],
        right_max = arr[arr.length-1];

    for (let i=1; max_i > i; i++) {
        total += left_max - arr[i];
        left_max = Math.max(left_max, arr[i]);
    }

    for (let i=arr.length-2; max_i<i; i--) {
        total += right_max - arr[i];
        right_max = Math.max(right_max, arr[i]);
    }

    return total;
}
```