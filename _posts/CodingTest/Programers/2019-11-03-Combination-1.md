---
layout: posts
title:  "[CodingTest] Combination(조합) 문제풀이 1"
categories: [CodingTest]
tags: [Javascript, Combination]
comments: true
---

## 문제 

1. 주어진 숫자(nums) 중 3개의 수를 더했을 때,
2. 소수가 되는 경우의 개수를 구하시오.

입출력 예시

|     nums    |  Result |
|-------------|---------|
| [1,2,3,4]   |    1    |
| [1,2,7,6,4] |    4    |

## 작성한 답

```javascript
function solution(nums) {
  const set = new Set(nums)
  let combinationOfSet = []

  function getCombination(array, size, start, initialStuff) {
    if (initialStuff.length >= size) {
      combinationOfSet.push(initialStuff);
    } else {
      let i;
      for (i = start; i < array.length; ++i) {
        getCombination(array, size, i + 1, initialStuff.concat(array[i]))
      }
    }
  }
  getCombination(Array.from(set), 3, 0, []);

  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false
    return num > 1;
  }
  let answer = 0
  combinationOfSet.forEach(e => {
    const multiply = e.reduce((a, b) => a + b)
    if (isPrime(multiply)) answer++
  })
  return answer;
}
```

### 참고한 자료

- [Number prime test in Javascript](https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript)
- [Getting All Possible Combinations](https://www.ibm.com/developerworks/community/blogs/hazem/entry/javascript_getting_all_possible_combinations?lang=en)

## 배운점

: 소수를 구하는 방식<br>

[Stack Overflow관련 글 링크](https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr)

만일 n이 소수가 아니고, n이 a와 b로 구성된다면 아래와 같다.
```
n = a * b
```

만약 a와 b 둘다 n의 제곱근 보다 크다면, a * b는 n보다 크다.<br>
따라서 적어도 둘중 하나는 반드시 n의 제곱근보다 작거나 같아야한다. <br>
그리고 만약 n의 제곱근보다 작거나 같은 수를 못구한다면 그 수는 소수이다.
<br><br>
코드로 나타내면 아래와 같다.

```javascript
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1;
}
```
