---
layout: posts
title:  "[CodingTest] 2020 카카오 신입 공채 1차 - 2번 괄호 문자열 정제 문제 with Javascript"
categories: [CodingTest, Kakao]
tags: [Javascript, Kakao, Recursion]
comments: true
---

<!-- https://drive.google.com/file/d/1ocHFdcRheMkTlRsOdNqLahxfhSesVnjT/view?usp=sharing -->

## 느낀점

재귀함수 문제. 지문을 그대로 코드로 변경하면 풀 수 있는 문제였음. 재귀함수에서 break를 제대로 안해서 시간이 지체됨.


## 내가 작성한 답변

```javascript
function solution(s) {
  return filterText(s)
}

function filterText(s) {
  if(s==="") return "";
  let stats = {"(":0, ")":0},
      result = "";
  for(let i=0;i<s.length;i++){
    if(s[i] === "(") stats["("]++;
    else stats[")"]++;

    if(stats["("] === stats[")"]) {
      let u = s.substring(0,i+1),
          v = s.substring(i+1,s.length) || "";
      if(isRight(u)) result += u + filterText(v)
      else {
        if(v !== "") result += "(" +  filterText(v) + ")";
        result += filterWrongString(u);
      }
      break;
    }
  }
  return result
}
  
function isRight(u) {
  if(u[0] == ")") return false;
  let stats = {"(":0, ")":0};
  for(let i=0;i<u.length;i++){
    if(u[i] === "(") stats["("]++;
    else stats[")"]++;
  }
  if(stats["("] < stats[")"]) return false;
  return true;
}

function filterWrongString(u) {
  let result = ""
  if(u.length !== 2) {
    for(let i=0;i<(u.length-2)/2;i++) {
      result = "(".repeat((u.length-2)/2) + ")".repeat((u.length-2)/2)
    }
  } else result = "()"
  return result;
}

console.log('solution("") -> result : ', solution(""), " Must be ''. It is ", solution("") == "" ? "Right" : "Wrong")
console.log("------------------")
console.log('solution("(()())()") -> result : ', solution("(()())()"), " Must be (()())(). It is ", solution("(()())()") == "(()())()" ? "Right" : "Wrong")
console.log("------------------")
console.log('solution(")(") -> result : ', solution(")("), " Must be (). It is ", solution(")(") == "()" ? "Right" : "Wrong")
console.log("------------------")
console.log('solution("()))((()") -> result : ', solution("()))((()"), " Must be ()(())(). It is ", solution("()))((()") == "()(())()" ? "Right" : "Wrong")

```