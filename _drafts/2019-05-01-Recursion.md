---
layout: posts
title:  "[Algorithm] 순환(Recursion) 알고리즘 공부"
categories: [Algorithm]
tags: [Algorithm]
comments: true
---

## 참고

- [영리한 프로그래밍을 위한 알고리즘 강좌](https://www.inflearn.com/course/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%95%EC%A2%8C/lecture/4073)
- [recursion versus iteration - Stack Overflow](https://stackoverflow.com/questions/15688019/recursion-versus-iteration)


## 특징

- 모든 순환함수는 반복문(iteration)으로 변경가능. 그 역도 성립.

## 장점

- 순환함수는 복잡한 알고리즘을 단순하고 알기쉽게 표현하는 것을 가능하게 함.
- 반복문에 비해 코드가 짧아짐.

## 단점

- 함수호출에 따른 [오버해드](https://ko.wikipedia.org/wiki/%EC%98%A4%EB%B2%84%ED%97%A4%EB%93%9C)가 있음. 그래서 반복문 보다 일반적으로 느림.
  - ex) 스택에 함수 / 매개변수 저장과 그에 따른 메모리 할당.
- 종류처리에 오류가 있으면 시스템이 무한루프에 빠지게될수도 있음.

## 순환 알고리즘의 설계
- 적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야함. -> 무한루프 빠지지 않게.
- 모든 case는 결국 base case로 수렴해야 함.
- 재귀적 호출시 반드시 필요한 매개변수를 명시적 매개변수로 바꾸어라. 그렇지 않으면 재귀적 호출시 적절한 매개변수를 호출할 수 없을수도 있음.

## 예시

### 문자열의 프린트

```java
public static void printChars(String str) {
    if(str.lenfgth()==0)
        return;
    else {
        System.out.print(str.charAt(0));
        printChars(str.substring(1));
    }
}
```

### 문자열을 뒤집어서 프린트

```java
public static void printCharsReverse(String str) {
    if(str.lenfgth()==0)
        return;
    else {
        printChars(str.substring(1)); // 위의 '문자열의 프린트' 예시코드에서 바로 아래줄의 코드와 순서만 바뀌었는데 reverse가 됨.
        System.out.print(str.charAt(0));
    }
}
```

### 정수 input값을 2진수로 변환하여 출력
```java
public void printInBinary(int n) {
    if(n<2)
        System.out.print(n);
    else {
        printInBinary(n/2); 
        System.out.print(n%2);
    }
}
```