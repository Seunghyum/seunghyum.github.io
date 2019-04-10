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
문자열, tuples, dictionaries, lists 에 모두 적용가능.
<pre>
[start:end]

[1:5] is equivalent to "from 1 to 5" (5 not included)
[1:] is equivalent to "1 to end"
[len(a):] is equivalent to "from length of a to end"
</pre>
