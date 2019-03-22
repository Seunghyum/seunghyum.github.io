---
layout: posts
title:  "[코딩 테스트] 2019 카카오 신입 공채 1차 코딩 테스트 문제 with Javascript"
categories: [코딩 테스트]
tags: [Javascript]
comments: true
---


# 오픈채팅방
- [문제 바로가기 링크](https://www.welcomekakao.com/learn/courses/30/lessons/42888)
- [카카오의 설명 블로그](http://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/)
<br>
## 나의 답안
```javascript
function solution(record) {
    let accounts = [], events = [], answer = [];
    
    function setEnterProcess(message, userId, nickName) {
        const findAccountByUserId = accounts.find(a => a.userId == userId)

        if(findAccountByUserId && findAccountByUserId.nickName !== nickName) findAccountByUserId.nickName = nickName;
        else accounts.push({userId, nickName});
        
        events.push({message, userId});
    }
    
    function setChangeProcess(userId, nickName) {
        const findAccountByUserId = accounts.find(a => a.userId == userId)
        findAccountByUserId.nickName = nickName
    }
    
    function setLeaveProcess(message, userId) { 
      events.push({message, userId}) 
    }

    record.map(r => {
        const msgArray = r.split(" "),
              message = msgArray[0],
              userId = msgArray[1],
              nickName = msgArray[2];
        if(message == "Enter") setEnterProcess(message, userId, nickName);
        else if(message == "Change") setChangeProcess(userId, nickName);
        else if(message == "Leave") setLeaveProcess(message, userId);
    })
    
    events.map(e => {
        const findAccountByUserId = accounts.find(a => a.userId == e.userId)
        if(e.message == "Enter") answer.push(`${findAccountByUserId.nickName}님이 들어왔습니다.`)
        else if(e.message == "Leave") answer.push(`${findAccountByUserId.nickName}님이 나갔습니다.`)
    })
    
    return answer;
}
```
<br>
## 테스트
- Mocha 라이브러리 사용.
### test.js
```javascript
const assert = require('assert');
describe('test1', () => {
  describe('#연결배열', () => {
    it('문제에서 제시한 테스트', () => {
      assert.equal(
        JSON.stringify(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])),
        JSON.stringify(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."])
      );
    });

    it('기존 테스트에 추가한 로직을 추가한 테스트', () => {
      assert.equal(
        JSON.stringify(solution(
          [
            "Enter uid1234 Muzi", 
            "Enter uid4567 Prodo",
            "Leave uid1234",
            "Enter uid1234 Prodo",
            "Change uid4567 Ryan",
            "Leave uid1234",
            "Enter uid9990 Dave",
            "Change uid9990 Kean",
            "Enter uid1234 Jane",
          ]
        )),
        JSON.stringify([
          "Jane님이 들어왔습니다.", 
          "Ryan님이 들어왔습니다.", 
          "Jane님이 나갔습니다.", 
          "Jane님이 들어왔습니다.",
          "Jane님이 나갔습니다.",  
          "Kean님이 들어왔습니다.", 
          "Jane님이 들어왔습니다."
        ])
      );
    });
  });
});
```
<br>

## 느낀점
처음엔 events와 accounts를 같은 곳에 담고 관리하려고 했다. 
```javascript
[
  {
    {message: "Enter", userId: "uid1234", nickName: "Muzi"},
    {message: "Enter", userId: "uid4567", nickName: "Prodo"},
    ....
  }
]
```
그러다보니 한 유저가 닉네임을 변경할때마다 모든 객체들을 탐색해야했다.  
문제를 풀고 [카카오의 해설](http://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/) 을 보니 ***"두 연결배열에 각각 accouts와 events에 담아 관리하면 쉽다"***는 해설을 보고 코드를 다시 짰다.   
해설을 보고나니 너무 간단해 허탈했다. 아직 갈길이 먼 것 같다.