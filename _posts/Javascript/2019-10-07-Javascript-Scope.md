---
layout: posts
title:  "Javascript 개념 정리"
categories: [Javascript]
tags: [Skills]
comments: true
toc: true
---

알고리즘 공부를 하며 부족했던 개념을 다시 정리

## 함수 표현식의 장점
- 참고 : [캠틴 판교님 블로그 - 함수 표현식 vs 함수 선언식](https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/)
> 함수 선언식과 달리 호이스팅에 영향안받음.
> 클로져로 사용.
> 콜백으로 사용(다른 함수의 인자로 넘길수 있음)

: [AirBnb의 스타일가이드](https://github.com/airbnb/javascript#functions)에서는 함수 표현식을 쓰길 권함.

## 스코프

- 참고 : 
  - 제로초님 블로그 [함수의 범위(scope)](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)
  - [poiemaweb - 스코프](https://poiemaweb.com/js-closure)

> 변수의 유효범위. 
> 스코프는 함수 호출이 아닌 함수 **선언**시 생성. -> 렉시컬 스코핑(Lexical Scoping), 정적 스코핑
> C-family language는 블록레벨 스코프. Js는 함수 레벨 스코프

```javascript
var name = 'zero';
function log() {
  console.log(name);
}

function wrapper() {
  name = 'nero'; // 1번
  var name = 'nero'; // 2번
  log();
}
wrapper();
```

1번과 2번일때 결과가 다름.

## 실행 컨텍스트

- 참고 : 
  - 제로초님 블로그 [실행 컨텍스트](https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0) - 더 자세한 예시 참고
  - Poiemaweb [실행 컨텍스트](https://poiemaweb.com/js-execution-context) - 실행 컨텍스트 그림설명 필독.

> 실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경. 
> 생성된 실행 컨텍스트는 실행 컨텍스트 스택에 쌓임. 
> 실행 컨텍스트 스택은 LIFO(후입선출) 의 방식으로 관리됨

- 실행 컨텍스트는 3가지 객체를 가짐. 
  - Variable Object
    - 변수
    - 매개변수(parameter)와 인수 정보(arguments)
    - 함수 선언(함수 표현식은 제외)
  - Scope Chain
  - this

1. 전역 컨텍스트 생성 -> **콜스택(실행 컨텍스트 스택)에 쌓임**
2. <U>함수 호출</U> 시마다 컨텍스트 생성 -> **콜스택(실행 컨텍스트 스택)에 쌓임**
3. 컨텍스트 생성 시 컨텍스트 안에 변수객체(arguments, variable), scope chain, this가 생성
4. 컨텍스트 생성 후 <U>함수실행</U>. 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾음
5. 함수 실행이 마무리되면 해당 컨텍스트는 소멸.(클로저 제외)  -> **콜스택(실행 컨텍스트 스택)에서 추출**
6. 페이지가 종료되면 전역 컨텍스트가 소멸 -> **콜스택(실행 컨텍스트 스택)에서 추출**

## 활성객체

> 실행 컨텍스트가 생성되면 자바스크립트 엔진은 해당 컨텍스트에서 실행에 필요한 여러가지 정보를 담을 객체를 생성한다. 이를 활성객체라 한다.
> 객체가 사용할 매개변수, 사용자가 정의한 변수 및 객체를 저장 한다.

## 클로저
- 참고 : [poiemaweb - 클로저](https://poiemaweb.com/js-closure)
> 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수다
: 실행 컨텍스트의 관점에 설명하면, 내부함수가 유효한 상태에서 외부함수가 종료하여 외부함수의 실행 컨텍스트가 반환되어도, 외부함수 실행 컨텍스트 내의 활성 객체(Activation object)(변수, 함수 선언 등의 정보를 가지고 있다)는 내부함수에 의해 참조되는 한 유효하여 내부함수가 스코프 체인을 통해 참조할 수 있는 것을 의미한다.

<!-- > 'IIFE(즉시 호출 함수 표현식) == 모듈 패턴' 을 이용한 비공개 변수 선언

```javascript

``` -->