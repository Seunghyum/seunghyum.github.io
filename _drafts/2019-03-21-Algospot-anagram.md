---
layout: posts
title:  "[코딩 테스트] Anagram 문제"
categories: [코딩 테스트]
tags: [Javascript]
comments: true
---
## 설명
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
```

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

## Baekjoon 문제
- [바로가기 링크](https://www.acmicpc.net/short/status/7587)


## 입력값
```
3
aabc
aabcdd
```

## 내가 작성한 답안
```javascript
function solution(v) {
  const inputs = v.split("\n"), 
        inputsLength = inputs.length;
  let answers = "";
  
  for(let i=1;i<inputsLength;i++) { // 단어들 반복
    const strings = inputs[i].split(""),
          stringsLength = strings.length;
    let stringsStats = {}
    for(let j=0;j<stringsLength;j++) { // {a: 2, b:1, c: 1}
      if(stringsStats[strings[j]]) stringsStats[strings[j]] += 1
      else stringsStats[strings[j]] = 1
    }
    let answer = "";
    console.log("reduceStrings : ", reduceStrings(strings, answer))

  }
  // return answer
}

function reduceStrings(strings, answer) {
  const stringArray = [...strings];
  stringArray.forEach((sa)=> {

    answer += sa;
    stringArray.splice(stringArray.indexOf(sa),1)
    console.log("stringArray.length : ", stringArray.length)
    console.log("stringArray : ", stringArray)
    console.log("answer : ", answer)
    console.log("=========")
    reduceStrings(stringArray, answer)
  })
}
```


