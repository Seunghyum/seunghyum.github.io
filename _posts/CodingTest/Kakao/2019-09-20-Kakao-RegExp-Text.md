---
layout: posts
title:  "[CodingTest] 2020 카카오 신입 공채 1차 - 4번 정규표현식 문제 with Javascript"
categories: [CodingTest]
tags: [Javascript]
comments: true
---

<!-- https://drive.google.com/file/d/1ocHFdcRheMkTlRsOdNqLahxfhSesVnjT/view?usp=sharing -->


## 내가 작성한 답변

```javascript
function solution(words, queries) {
  let result = [];
  for(let i=0;i<queries.length;i++) {
    let reg,
        q = queries[i],
        s = q.replace(/\?/g,"");

    result[i] = 0;

    reg = new RegExp(`${s}`, "g");
    
    for(let j=0;j<words.length;j++) {
      let w = words[j];

      if(w.length !== q.length) continue;
      if(w.match(reg)) {
        result[i]+=1;
      }
    }
  }
  return result
}

let w = ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    q = ["fro??", "????o", "fr???", "fro???", "pro?", "?????"];
    
console.log(`
w = ["frodo", "front", "frost", "frozen", "frame", "kakao"], \n
q = ["fro??", "????o", "fr???", "fro???", "pro?", "?????"] \n
solution(w, q) -> result : ${solution(w, q)} \n
Must be [ 3, 4, 4, 1, 0, 5 ]. \n
My answer is ${String(solution(w, q)) == String([ 3, 4, 4, 1, 0, 5 ]) ? "Right" : "Wrong"}
`)
```