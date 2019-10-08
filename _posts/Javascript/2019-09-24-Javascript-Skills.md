---
layout: posts
title:  "Javascript Skills"
categories: [Javascript]
tags: [Skills]
comments: true
toc: true
---

<center>
<h2> 각 반복문의 용도 </h2>
</center>
<br>

- for : array에 대한 반복이 아닌 횟수 반복을 적용하고자할 때 사용.
- reduce : 깔대기에 물을 들이 붙는 것처럼 축적된 값(accumulator)를 반환. 비교할때, 축적된 값을 뽑을때 사용.
- forEach : 함수를 순회함. index를 볼 수 있음. for문을 대체가능
- map : 함수를 순회하며 인자를 다른 인자로 맵핑해서 새로운 array를 반환.
- some : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
- every : 모든 요소들이 조건을 만족시키는지 확인.
- [for ... of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  - 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복
  - [Symbol.iterator] 속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복
  - 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.
- [for ... in](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in) : 객체의 모든 non-Symbol, enumerable properties을 반복합니다.

Nested 반복문에서 제어
: Nested 반복문에서 break나 continue 걸고 바깥반복문으로 넘어가는 방법 : **label**

- [label](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/label) : 반복문(for문)안에서 사용가능.

```javascript
// MDN 예제를 가져옴.

//// continue
var i, j;

loop1:
for (i = 0; i < 3; i++) {      //첫번째 for문은 "loop1" 레이블을 붙였다.
   loop2:
   for (j = 0; j < 3; j++) {   //두번째 for문은 "loop2" 레이블을 붙였다.
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// 출력 결과:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// 다음 두 경우를 어떻게 스킵하는지 주목 : "i = 1, j = 1", "i = 1, j = 2"

//// break
for (let i = 0; i < numbers.length; i++) {
  loop:
  for (let j = 1; j < numbers.length - i; j++) {
    if (k) < 0) break loop;
  }
}
```

<hr>
<br>
<center>
<h2> 배열 중간에 요소 추가 및 삭제 </h2>
</center>
<br>

### [Splice 매서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
: 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

#### start

- 배열의 변경을 시작할 인덱스
- 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정됩니다. 
- 음수인 경우 배열의 끝에서부터 요소를 세어나갑니다(원점 -1, 즉 -n이면 요소 끝의 n번째 요소를 가리키며 array.length - n번째 인덱스와 같음).
- 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정됩니다.

#### deleteCount

- Optional
- 배열에서 제거할 요소의 수입니다.
- deleteCount를 생략하거나 값이 array.length - start보다 크면 start부터의 모든 요소를 제거합니다.
- deleteCount가 0 이하라면 어떤 요소도 제거하지 않습니다. 이 때는 최소한 하나의 새로운 요소를 지정해야 합니다.

#### item1, item2, ...

- Optional
- 배열에 추가할 요소입니다. 아무 요소도 지정하지 않으면 splice()는 요소를 제거하기만 합니다.

### 예제

```javascript
// # 하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가섹션
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"] 
// removed is [], no elements removed


// # 3번 인덱스에서 한 개 요소 제거섹션
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]


// # 2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가섹션
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

// # -2번 인덱스에서 한 개 요소 제거섹션
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"] 
// removed is ["mandarin"]
```

### [fill 매서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

: 배열의 startIndex 부터 endIndex까지 정적으로 채우기

> arr.fill(value[, start[, end]])

value
: 배열을 채울 값.

start Optional
: 시작 인덱스, 기본 값은 0.

end Optional
: 끝 인덱스, 기본 값은 this.length.
