---
layout: posts
title:  "[Algorithm] 유클리드 호제법(최대공약수 구하기) 공부"
categories: [Algorithm]
tags: [Algorithm]
comments: true
---

## 정의

> 유클리드 호제법(- 互除法, Euclidean Algorithm)은 2개의 자연수 또는 정식(整式)의 **최대공약수(Greatest Common Divisor)**를 구하는 알고리즘의 하나이다. 
> 
> 호제법이란 말은 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리즘을 나타낸다. 
> 
> <u>2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다. <br>
> 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다. </u>
> 
> 이는 명시적으로 기술된 가장 오래된 알고리즘으로서도 알려져 있으며, 기원전 300년경에 쓰인 유클리드의 《원론》 제7권, 명제 1부터 3까지에 해당한다.
> 
> <small> - 위키백과, 우리 모두의 백과사전.</small>

<br>
<br>
<hr>

## 설명

### 글설명

- [칸아카데미 참고](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)
- 270과 192의 최대공약수 - ***GCD(270,192)***
<br>
<br>

1. **GCD(270,192)** - 270과 192의 최대공약수 찾기
   - A=270, B=192
   - A ≠ 0
   - B ≠ 0

   <u>270 = 192 * 1 +78</u>
   <br>

2. ***GCD(270,192)=GCD(192,78)*** - 이기 때문에 192와 78의 최대공약수 찾기
   - A=192, B=78
   - A ≠0
   - B ≠0

    <u>192 = 78 * 2 + 36</u>
    <br>

3. ***GCD(192,78)=GCD(78,36)*** - 이기 때문에 78과 36의 최대공약수 찾기
   - A=78, B=36
   - A ≠0
   - B ≠0

    <u>78 = 36 * 2 + 6</u>
    <br>

4. ***GCD(78,36)=GCD(36,6)*** - 이기 때문에 36과 6의 최대공약수 찾기
   - A=36, B=6
   - A ≠0
   - B ≠0
    <u>36 = 6 * 6 + 0</u>
    <br>

5. ***GCD(36,6)=GCD(6,0)*** - 이기 때문에 6과 0의 최대공약수 찾기
   - A=6, B=0
   - A ≠0
   - B =0, GCD(6,0)=6

> 지금까지의 과정 : <br>
> GCD(270,192) = GCD(192,78) = GCD(78,36) = GCD(36,6) = GCD(6,0) = 6 <br>
> ***GCD(270,192) = 6***

## 그림설명

- 106와 16의 최대공약수 구하기 - ***GCD(106,16)***

![GCD-ex2](/assets/images/posts/algorithm/GCD-ex.png)
<br>
<br>
<hr>

## 관련 코드

### 파이썬 코드

```python
# 방법1
def gcd(m,n): # gcd == "Greatest Common Divisor"
	if m < n:
		m, n = n, m
	if n == 0:
		return m
    if m % n == 0:
		return n
	else:
		return gcd(n, m%n)


# 방법2
def gcd(m,n):
    while n != 0:
       t = m%n
       (m,n) = (n,t)
    return abs(m)

# 방법3
def gcd(m,n):
    while n! = 0:
	    if m < n:
		    m, n = n, m
	    if n == 0:
		    return m
	    if m % n == 0:
		    return n

```

### 자바코드

```java
 public static int gcd(int p, int q)
 {
	if (q == 0) return p;
	return gcd(q, p%q);
 }
```

### 자바스크립트코드

- [freeCodeCamp 참고](https://guide.freecodecamp.org/algorithms/greatest-common-divisor-euclidean/)

#### Javascript Code to Perform GCD

```javascript
function gcd(a, b) { // 단, a가 b보다 커야함.
  var R;
  while ((a % b) > 0)  {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}
```

#### Javascript Code to Perform GCD using Recursion

```javascript
function gcd(a, b) { // 단, a가 b보다 커야함.
  if (b == 0)
    return a;
  else
    return gcd(b, (a % b));
}
```