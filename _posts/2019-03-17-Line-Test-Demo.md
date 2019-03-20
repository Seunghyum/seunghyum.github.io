---
layout: posts
title:  "[코딩 테스트 공부] 2019 라인 테스트 데모 문제풀이"
categories: [코딩 테스트 공부]
tags: [Javascript]
comments: true
---

## 문제
직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

## 제한사항
v는 세 점의 좌표가 들어있는 2차원 배열입니다.
v의 각 원소는 점의 좌표를 나타내며, 좌표는 [x축 좌표, y축 좌표] 순으로 주어집니다.
좌표값은 1 이상 10억 이하의 자연수입니다.
직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 [x축 좌표, y축 좌표] 순으로 담아 return 해주세요.

## 입출력 예

| insert | result |
|:--------:|:--------:|
| [[1, 4], [3, 4], [3, 10]] |	[1, 10] |
| [[1, 1], [2, 2], [1, 2]] | [2, 1] |

### 입출력 예 설명
- 입출력 예 #1
세 점이 [1, 4], [3, 4], [3, 10] 위치에 있을 때, [1, 10]에 점이 위치하면 직사각형이 됩니다.

- 입출력 예 #2
세 점이 [1, 1], [2, 2], [1, 2] 위치에 있을 때, [2, 1]에 점이 위치하면 직사각형이 됩니다.

# 내가 작성한 답안
```javascript
function solution(v) {
    const rangeX = [
            Math.max(v[0][0],v[1][0],v[2][0]), 
            Math.min(v[0][0],v[1][0],v[2][0])
        ],
        rangeY = [
            Math.max(v[0][1],v[1][1],v[2][1]), 
            Math.min(v[0][1],v[1][1],v[2][1])
        ],
        stringfiedResult = [
            JSON.stringify([rangeX[0], rangeY[0]]),
            JSON.stringify([rangeX[0], rangeY[1]]),
            JSON.stringify([rangeX[1], rangeY[0]]),
            JSON.stringify([rangeX[1], rangeY[1]])
        ],
        stringfiedV = [
            JSON.stringify(v[0]), 
            JSON.stringify(v[1]),
            JSON.stringify(v[2])
        ];
    let answer
    stringfiedResult.map(val => {
        if(stringfiedV.indexOf(val) == -1) {
            console.log("val : ", val)
            answer = JSON.parse(val)
        }
    })
    return answer
}
```

## 내 답안풀이
직사각형이라면 모든 좌표들의 x축값은 a와 b 둘 중 하나이고 y축값 역시 c,d 둘 중 하나라고 생각했다.
그래서
```javascript
[a,c], [b,c], 
[a,d], [b,d]
```
의 형태일거라고 생각했다.

그래서 세 점의 좌표값들중 
x축값들의 최소값, 최대값이 a와 b이고 ***=> rangeX***  
y축값들의 최소값, 최대값이 c와 d이다. ***=> rangeY***

stringfiedResult는 그값들의 좌표값들이다. 
stringfiedResult에서 없는 좌표값을 찾는 것이 내가 생각한 답이었다.

## 다른 사람들의 풀이
- 나와는 다른 작성자분께 문의하여 답을 분석해볼 예정이다.