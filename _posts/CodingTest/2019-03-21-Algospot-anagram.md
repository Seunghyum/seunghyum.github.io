---
layout: posts
title:  "[CodingTest] Algospot - Anagram 문제"
categories: [CodingTest]
tags: [Javascript, Algospot]
comments: true
---

<!-- ## 설명
각 문자열의 알파벳을 재배열하였을때 같은 단어가 되는 단어들.  
<br>
![Anagram - Wikipedia](https://upload.wikimedia.org/wikipedia/commons/3/33/Anagram_Listen_%3D_Silent.gif)
### 예시
tab - bat  
github - hbuitg

## 풀어본 문제
- Algospot 문제
- Baekjoon 문제

## Algospot 문제
- [바로가기 링크](https://algospot.com/judge/problem/read/ANAGRAM)

## 예제 입력

```
3
weird wired
apple angle
apple elppa
```

## 예제 출력

```
Yes
No.
Yes
``` -->

## 내가 작성한 답안
```javascript
function solution(v) {
  const inputs = v.split("\n"), 
        inputsLength = inputs.length;
  let answer = "";

  for(let i=1;i<inputsLength;i++) {
    let elements = inputs[i].split(" ");
    if(elements[0] == elements[1]) answer += "No.\n";
    else {
      answer += elements[0].split("").sort().reduce(reducer) == elements[1].split("").sort().reduce((accumulator, currentValue) => accumulator + currentValue) ? "YES\n" : "No.\n";
    }
  }
  return answer
}

```

## 더 좋은 방식 찾기 - O(NlogN) 보다 낮은방법

## Baekjoon 문제 - Anagram Generater
- [바로가기 링크](https://www.acmicpc.net/problem/6443)


<!-- ## 입력값
```
3
aabc
aabcdd
``` -->

## 내가 작성한 답안
```javascript
function solution(v) {
  const inputs = v.split("\n"), 
        inputsLength = inputs.length;
  let answers = "";
  
  for(let i=1;i<inputsLength;i++) { // 여러줄의 단어들 반복
    const strings = inputs[i].split(""),
          stringsLength = strings.length;
    let stringsStats = {}

    for(let j=0;j<stringsLength;j++) { // {a: 2, b:1, c: 1}
      if(stringsStats[strings[j]]) stringsStats[strings[j]] += 1
      else stringsStats[strings[j]] = 1
    }

    let initArray = []
    for(s in stringsStats) {  // [a,b,c]
      if(stringsStats[s] > 0) initArray.push(s)
      else continue;
    }
    
    let answer = "";
    console.log("initArray : ", initArray)
    console.log("stringsStats : ", stringsStats)
    console.log("reduceStrings : ", reduceStrings(initArray, stringsStats, answer))
  }
  // return answer
}

function reduceStrings(strings, stringsStats, answer) {
  let stringArray = [...strings],
      stats = {...stringsStats};

  stringArray.forEach((sa)=> {
    newStringArray = []; 
    answer += sa;
    stats[sa] -= 1;
    
    for(s in stats) {
      if(stats[s] > 0) newStringArray.push(s);
    }
    console.log("sa : ", sa)
    console.log("stringArray : ", stringArray)
    console.log("stats : ", stats)
    console.log("newStringArray : ", newStringArray)
    console.log("answer : ", answer)
    console.log("=========")
    if(newStringArray.length > 0) reduceStrings(newStringArray, stats, answer);
    else (answer += "\n");
  })
}
```

## 느낀점
처음 anagram 문제를 접한것은 같이 js를 공부하던 친구가 회사면접에서 받은 질문에서 시작되었다.  
막상 나도 "그때 나였더라면 제대로 풀 수 있었을까?" 라는 생각에 접하게되었다.  
아마 Youtube에 올라온 구글 면접 예시 영상의 분위기 였을것 같다. [링크](https://www.youtube.com/watch?v=BF3FLDAzWxo)  

그다음 비슷한 문제가 어디있지 하며 찾은게 Algospot의 문제와 Backjoon 사이트의 문제였다.  

Algospot의 문제는 생각했을때 비교적 간단했다. 두 문자열이 주어지고 같은지 비교만 하면 되었다.  
하지만 Backjoon 사이트의 아나그램 문제를 풀어보며 ***"내가 js를 잘 이해하고 있는건가?"*** 라는 생각이 들었다.  

Backjoon 사이트의 아나그램 문제는 **하나의 문자열을 주고 그것에 해당하는 아나그램을 산출하라**는 문제였다.  
제한 조건은
- 알파벳 순서대로 나열할것
- 대소문자 구분할것
- 입력받은 철자들 중 중복되는 철자들이 있을경우, 중복해서 출력할 수 있으나 하나만 출력하라. ex) google -> ggoole이 하나만 출력

### 문자열 풀이방식
1. 받은 문자열을 array로 쪼개어 sorting하여 abc순으로 구성한다.
2. for문 재귀함수로 구성하여 n!로 문제를 해결

이라고 생각했다. 하지만 이럴경우 중복되는 문자들이 있을때 적절하게 문제를 해결하지 못했다.  
가령 [a,a,b,c]가 있을떄 첫번째 문자가 b가 나올경우 [a,a,c]가 남는다는 것이다.  
a는 1개로 취급되어야하는데 2개로 취급된다는 것이다.

내가 삽질을 하며 얻은 해결방법은 
1. [a,a,b,c] 의 문자열을 루프를 돌때마다 하나씩 꺼내들고 
2. {a:2, b:1, c:1}같은 형식의 객체로 루프를 돌때마다 문자열의 개수를 카운팅하고  
3. 카운팅한 객체들 중 0이 아닌 문자들을 배열에 담고[a,b,c] 
4. 1번을 다시 반복하며 배열에 문자가 하나도 없을때까지 반복한다.
는 것이었다.  

하지만 이 루프를 돌며 반복하는 코드에서 스코프 문제가 발생했다.