---
layout: posts
title:  "[CodingTest] 숫자값 인코딩 조합구하기"
categories: [CodingTest]
tags: [Javascript]
comments: true
---

## 문제
알파벳의 인코딩 값을
<pre>
 a = 1
 b = 2
 c = 3
 .
 .
 z = 26
 </pre>
 으로 매핑.  

숫자값 n이 주어지고 그 숫자에 대한 알파벳 디코딩 값 조합의 개수를 구하여라.

단, '0020' 과 같이 앞에 '0'이 나오는 값은 주어지지 않음.







This looks like a problem that is ripe for solving with recursion. First, let's try to think of a recurrence we can use for this problem. We can try some cases:

"", the empty string and our base case, should return 1.
"1" should return 1, since we can parse it as "a" + "".
"11" should return 2, since we can parse it as "a" + "a" + "" and "k" + "".
"111" should return 3, since we can parse it as:
"a" + "k" + ""
"k" + "a" + ""
"a" + "a" + "a" + "".
"011" should return 0, since no letter starts with 0 in our mapping.
"602" should also return 0 for similar reasons.
We have a good starting point. We can see that the recursive structure is as follows:

If string starts with zero, then there's no valid encoding.
If the string's length is less than or equal to 1, there is only 1 encoding.
If the first two digits form a number k that is less than or equal to 26, we can recursively count the number of encodings assuming we pick k as a letter.
We can also pick the first digit as a letter and count the number of encodings with this assumption.
def num_encodings(s):
    if s.startswith('0'):
        return 0
    elif len(s) <= 1: # This covers empty string
        return 1

    total = 0

    if int(s[:2]) <= 26:
        total += num_encodings(s[2:])

    total += num_encodings(s[1:])
    return total
However, this solution is not very efficient. Every branch calls itself recursively twice, so our runtime is O(2n). We can do better by using dynamic programming.

All the following code does is repeat the same computation as above except starting from the base case and building up the solution. Since each iteration takes O(1), the whole algorithm now takes O(n).

from collections import defaultdict

def num_encodings(s):
    # On lookup, this hashmap returns a default value of 0 if the key doesn't exist
    # cache[i] gives us # of ways to encode the substring s[i:]
    cache = defaultdict(int)
    cache[len(s)] = 1 # Empty string is 1 valid encoding

    for i in reversed(range(len(s))):
        if s[i].startswith('0'):
            cache[i] = 0
        elif i == len(s) - 1:
            cache[i] = 1
        else:
            if int(s[i:i + 2]) <= 26:
                cache[i] = cache[i + 2]
            cache[i] += cache[i + 1]
    return cache[0]









## 예시
<pre>
input : n = '111'  // 'aaa', 'ka', 'ak
output : 3
</pre>

## 나의 풀이법
```javascript
function solution(n) {
  //'111' // 1,1,1 & 11,1 & 11,1
  숫자 하나의 값은 무조건 가능. O(1)로 마지막 결과값에 + 1
  // '101' -> 10,1 만 가능.
  // '1001' -> 불가능.
  // '444' -> 4,4,4 값만 가능

  // '1271' -> 1,2,7,1 & 12,7,1  // 뒤의 27, 71은 디코딩 안됨

  // '1202' -> 1,20,2 만 됨.

  // '120220' -> 1,20,2,1 && 1,20,21 만 됨.

  // method 1 O(n)방식
  let nArr = n.split(''),
      output = 0; // 한 자리 숫자들만 일때

  // 두자리 숫자 조합으로 고를 경우
  for(let i=0;i<nArr.length;i++) {
    ouput
    let current = Number(nArr[i]),
        next = Number(nArr[i+1]),
        nnext = Number(nArr[i+2]),
        count = 1;
    // 첫번째 숫자만
    if(current==1 && nnext>0 || !nnext) {
      
    }
    else if(current==2 && next<7 && nnext>0 || !nnext) {

    }
  }
}

function countArr  ()
```