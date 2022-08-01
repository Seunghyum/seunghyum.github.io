---
layout: posts
title:  "[Syntax] 새로 알게된 파이썬 문법 정리"
categories: [Python, Syntax]
tags: [Python]
comments: true
---

## chaning comparison
파이썬은 chaning comparison이라는 신기한 문법이 있다. [참고](https://www.geeksforgeeks.org/chaining-comparison-operators-python/)
```python
if a < b and b < c :
  (...)
```
라는 구문이 
```python
if a < b < c :
  (...)
```
으로 연산된다. 직관적인 문법이 인상적. **Comparison operator Chaining** 이라고 불린다.

## Slice operater
### 특징
문자열, [tuples](https://www.scaler.com/topics/python/tuples-in-python/), dictionaries, lists 에 모두 적용가능.
<pre>
[start:end]

[1:5] is equivalent to "from 1 to 5" (5 not included)
[1:] is equivalent to "1 to end"
[len(a):] is equivalent to "from length of a to end"
</pre>
### List slicing
<pre>
list[시작:끝:스텝]
</pre>

```python
list = [1,2,3,4,5,6,7]

>>> list[0:3] # 끝 인덱스 값에 해당하는 요소값은 포함하지 않음.
[1,2,3]

>>> list[-5:-2] # 뒤에서 5번째 요소값부터 뒤에서 2번째 요소값 직전까지
[3,4,5]

>>> list[-2:-1] # 뒤에서 2번째 요소값부터 뒤에서 1번째 요소값 직전까지
[6]

>>> list[0:7:2]
[1,3,5,7]

```
