---
layout: posts
title:  "[CodingTest] 배열의 두 값을 합하여 k값 만들기"
categories: [CodingTest]
tags: [Javascript, BinarySearch, Set]
comments: true
---

## 문제
list라는 행렬과 k라는 자연수가 주어짐. list의 두 값을 합하여 k값을 만들 수 있으면 true, 없으면 false를 리턴해라.  
보너스 : 한줄 표기

## 입력
```javascript
let list = [3, 9, 10, 14], k = 12
solution(list, k) // => true
```

## 내가 풀어본 풀이
### 방법1 - 처음 풀어본 답안
```javascript
function solution(list, k) {
  for(let i = 0; i<list.length;i++) {
    for(let j = 1; j<list.length;j++) {
      if(list[i] + list[j] == k) return true 
    }
  }
  return false
}
// jsBench 기준
// 198,911,753 ops/s ±0.73%
// fastest
```
풀어보고 나니 이 방식보다 더 좋은 방식. 한줄에 풀 수 있는 방식이 있나 궁금해졌다. 시간복잡도는 O(N<sup>2</sup>)이다.

### 방법2 - 한줄에 풀어본 답안
```javascript
function solution(list, k) {
  return list.some((currentVal,idx) => list.slice(idx+1).includes(k - currentVal))
}
// jsBench 기준
// 17,822,052 ops/s ±1.82%
// 91.04% slower (for문 중첩보다)
```
최대한 한줄에 풀어봄.  
이렇게 할경우 한줄에는 쓸 수 있지만 
- 루프(n)를 돌며 계속해서 slice를 해야한다는점.  
- 루프(n)를 돌며 계속해서 includes매서드로 해당 인자가 포함되어있는지를 체크해야한다는점 
때문에 효율적인지에 대한 의문이 있다.  
차라리 중첩 for문으로 O(N<sup>2</sup>)번 푸는게 낫지 않을까 라는 생각이 든다.  
benchmark를 해도 for문 중첩이 9 더 좋은 퍼포먼스를 내었다. [jsBench](https://jsbench.me/)
<br>
***slice 매서드***와 ***includes 매서드***가 움직이는 방법식을 확인해보고 위의 한줄코드가 더 좋은 것인지 파악해봐야겠다.  

### slice 매서드 폴리필
```javascript
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// 필요한 부분만 가져옴
  
Array.prototype.slice = function(begin, end) {
  // 정의되지 않은 끝 인자로 IE <9가 불만해진다.
  end = (typeof end !== 'undefined') ? end : this.length;

  // 네이티브 Array 객체의 경우 네이티브 slice 함수를 사용합니다.
  if (Object.prototype.toString.call(this) === '[object Array]'){
    return _slice.call(this, begin, end); 
  }

  // object와 같은 배열을 위해 우리는 스스로 처리한다.
  var i, cloned = [],
    size, len = this.length;

  // "begin"에 대한 음수 값을 처리합니다.
  var start = begin || 0;
  start = (start >= 0) ? start : Math.max(0, len + start);

  // "end"에 대한 음수 값을 처리합니다.
  var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
  if (end < 0) {
    upTo = len + end;
  }

  // 슬라이스의 실제 예상 크기
  size = upTo - start;

  if (size > 0) {
    cloned = new Array(size);
    if (this.charAt) {
      for (i = 0; i < size; i++) {
        cloned[i] = this.charAt(start + i);
      }
    } else {
      for (i = 0; i < size; i++) {
        cloned[i] = this[start + i];
      }
    }
  }

  return cloned;
};
```
해당 배열을 for문으로 돌면서 조건과 일치하는 엘리먼트들을 가져옴. 

### includes 매서드 폴리필
```javascript
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      .
      .
      .

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1. 
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}
```
위를 보면 includes매서드는 while문으로 배열을 탐색하고 찾으면 리턴하는 구조.
<br>
방법1의 경우 O(N<sup>2</sup>)보다 방법2는 O(N<sup>3</sup>) n번의 시간복잡도를 더 가지고 있다.  
풀이해보자면  
지금까지 내가 이해한 시간복잡도를 공식화 하자면  
- 방법1 : 2n<sup>2</sup> + 2n - 1 => O(N<sup>2</sup>)
```javascript
function solution(list, k) {
  for(let i = 0; i<list.length;i++) { // n
    for(let j = 1; j<list.length;j++) { // n * (n-1)
      if(list[i] + list[j] == k) return true // (n-1) * (n-1)
    }
  }
  return false
}
```
- 방법2 : n * (n-1) * (n-1) => O(N<sup>3</sup>)
```javascript
function solution(list, k) { 
  return list.some((currentVal,idx) => { // n
    list.slice(idx+1) // n * (n-1)
        .includes(k - currentVal) // n * (n-1) * (n-1)
  })
}
```

## 다른 사람들의 풀이 - Set을 이용
```javascript
function solution(list, k) {
  let seen = new Set();
  for (let num of list) {
    if(seen.has(k-num)) return true // O(1)
    seen.add(num)
  }
  return false
}
solution([3, 9, 10, 14], 12)
```
iterate 하면서 이터레이팅 한 수들을 기억하여 찾아내는 방법.  
배열의 요소들을 반복하면서
set에 우리가 지금까지 봤던 수들을 넣고 (seen 변수)
각 수마다 K값이 되기위해 필요한 수들을 seen에서 찾기

Set으로 이터레이팅하고있는 엘리먼트들을 기억하며 반복문을 돌린다.
이때의 시간복잡도는 O(N)라고 한다. ==> 이해가 잘안간다. 결국 has 매서드로 다시 seen을 한바퀴 도는게 아닌가?

## 다른 사람들의 풀이 - 이진탐색으로 구하기 - 시간복잡도 O(nlogN) + O(1)
```javascript
function binarySearch (list, value) {
  // initial values for start, middle and end
  let start = 0,
      stop = list.length - 1,
      middle = Math.floor((start + stop) / 2);

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}

function solution(list, k) {
  list.sort((a,b) => a-b); // O(logN)

  for(let i=0;i<list.length;i++) { // // O(n)
    let target = k-item,
        j = binarySearch(list, target); // O(n*logN)

    if(j == -1) continue; // O(n*logN*1)
    else if(j != i) return true;
    else if(j + 1 < list.length && list[j + 1] == target) return true
    else if(j - 1 >= 0 && list[j - 1] == target) return true
  }
  return false
}
```
![Big O 표기법](/assets/images/BigO.jpg)
개념적으로 보자면 그래프에서 보듯이 어느 시점에서는 O(nlogN)이 O(n)보다 효율적일 수 있다.  
그래서 두가지 방법을 혼용하는 것이 나은것 같다.

### 이해하는데 필요한 개념 & 궁금한점
1. 시간복잡도 Big O 표기법 개념
2. binary search 개념 및 구현
  - [구현 관련 블로그 설명](https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3)
3. 성능을 제대로 비교해볼 수 있는 Benchmark 라이브러리 적용.
4. 어느시점에서 nlogN이 N보다 효율인지 알 수 있나?