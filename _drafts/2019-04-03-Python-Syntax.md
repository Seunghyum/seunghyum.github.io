---
layout: posts
title:  "[Syntax] 파이썬 문법 공부"
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