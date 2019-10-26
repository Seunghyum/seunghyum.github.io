---
layout: posts
title:  "[CodingTest] 직사각형의 한점 좌표값 유추하기"
categories: [CodingTest]
tags: [Javascript]
comments: true
---

## 문제

직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구해 전체 좌표값들을 구해야한다. 
점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때( v = [[x축 좌표, y축 좌표], ... ] ), 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성하라. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어짐.
직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 [x축 좌표, y축 좌표] 순으로 담아 return.

## 입출력 예

| insert | result |
|:--------:|:--------:|
| \[[1, 4], [3, 4], [3, 10]] |	[1, 10] |
| \[[1, 1], [2, 2], [1, 2]] | [2, 1] |

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

[YanghaKoo 님이 푸신 식](https://github.com/YanghaKoo/algorithm-study/blob/master/NAVERLINE/demo/demo1.js)을 보면 더 간단하다. 
```javascript
function solution(v) {
  var a = {}
  var b = {}
  const answer = []
  
  v.forEach(r => {
    if(a[r[0]]){
      a[r[0]] = a[r[0]] +1
    }else{
      a[r[0]] = 1
    }

    if(b[r[1]]){
      b[r[1]] = b[r[1]] +1
    }else{
      b[r[1]] = 1
    }
  });

  for(var i in a){
    if(a[i] === 1) {
      answer.push(Number(i))
      break;
    }
  }
  
  for(var i in b){
    if(b[i] === 1) {
      answer.push(Number(i))
      break;
    }
  }

  return answer
}
```

연산

```javascript
v = [[1,4], [3,4], [3,10]]
```

| r | a | b |
|:--------:|:--------:|:--------:|
| [1,4]일때 | {"1":1} | {"4": 1} |
| [3,4]일때 | {"1":1, "3":1} | {"4": 2} |
| [3,10]일때 | {"1":1, "3":2} | {"4": 1, "10": 1} |

연결배열로 input 값으로 주어진 각 숫자들의 출현빈도를 뽑고  
뽑은 것들중 1번 출현한 숫자의 x,y축 값을 리턴하여 답을 내고 있다.

내 답의 경우 JSON.stringfy 매서드로 배열을 문자화시켜 그것들을 비교하고 있다.  
문자화 연산의 비용을 고려하자면 연결배열로 문제를 해결하는 방법이 효율적이다.

실제 [jsben.ch](http://jsben.ch/)에서 테스트해본결과 내 로직보다 50% 더 효율적이었다.
