---
layout: posts
title:  "[Algorithm] 방법론 공부"
categories: [Algorithm]
tags: [Algorithm]
comments: true
---

## 동적 프로그래밍(Dynamic Programming)

> 기억하기 프로그래밍이라고도 함. 기법으로는 메모제이션, 분할정복을 많이 씀.

### 메모제이션(Memozation)

> - 동일한 계산을 반복할때 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램의 실행 속도를 빠르게 하는 기술
> - 하향식(Top-down) 계산법
  
### 분할 정복 

> - 문제를 해결이 가능한 더 작은 문제로 분할. 그 다음 작은 문제를 먼저 해결하고 그 결과를 활용하여 전체 문제를 해결하는 방법.
> - 상향식(Bottom Up) 계산법

<br>

- 관련글 : 
  - [제로초님 - 동적 프로그래밍](https://www.zerocho.com/category/Algorithm/post/584b979a580277001862f182)
- 관련 문제 :
  - 이항계수 구하기
  - 최단경로의 플로이드 알고리즘
  - 최적화 문제
  - 외판원 문제
- 내가 작성한 글
  - [피보나치 수열 글](http://seunghyum.github.io/codingtest/Fibonacci-Sequence)

<br>

---

<br>

## 그리디 알고리즘(Greedy Algorithm)

> 현재 상태에서 가장 좋다고 판단되는 것부터 선택하여 나가는 방법. <br>
> 때로는 동적 프로그래밍 보다 그리디 알고리즘이 가장 효율적이고 간단할 때가 있기 때문에 알고리즘이 항상 최적인 해답을 주는지 확인이 필요함.<br>
> 동적 프로그래밍과 같이 쓰이며 서로 보완하는 개념

## 역추적 기법(Back Tracking)

> 가능한 모든 방법을 빠짐없이 탐색하여 문제를 해결하는 방법. <br>
> 이 기법은 데이터의 양이 조금만 늘어나도 실행시간이 엄청나게 늘어나기 때문에 불필요한 탐색을 하지 않기 위해 가지치기 전략을 구사하여 실행시간을 줄여야 함.

## 그래프 탐색 방법

- 깊이 우선 탐색(DFS - Depth First Search)
- 너비 우선 탐색(BFS - Breadth First Search)

