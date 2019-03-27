var store = [{
        "title": "SGIS-shpToGeojson",
        "excerpt":"SGIS에서 받은 지도데이터(.shp)를 geojson으로 변경하는 작업 내용 2018년에 쓴 글을 재업로드하였습니다. 지도데이터 가공 과정 shapefile을 simplify를 진행. 우선 mapshaper라는 shp파일 에디팅 툴로 편집. GUI온라인툴도 있음. 본인은 node CUI로 진행. $ mapshaper -i 전환할 파일 \\ encoding=euc-kr \\ -simplify weighted 0.5% \\ // 0.5%로 단순화 -o format=shapefile \\ 바뀐 파일명.shp shapefile(R)...","categories": ["DataProcessing"],
        "tags": ["ShapeFile","GeoJson","TopoJson","데이터 가공"],
        "url": "/dataprocessing/SGIS-shpToGeojson/",
        "teaser":null},{
        "title": "[코딩 테스트] 2019 카카오 신입 공채 1차 코딩 테스트 문제 with Javascript",
        "excerpt":"오픈채팅방 문제 바로가기 링크 카카오의 설명 블로그 나의 답안 function solution(record) { let accounts = [], events = [], answer = []; function setEnterProcess(message, userId, nickName) { const findAccountByUserId = accounts.find(a =&gt; a.userId == userId) if(findAccountByUserId &amp;&amp; findAccountByUserId.nickName !== nickName) findAccountByUserId.nickName = nickName; else accounts.push({userId, nickName}); events.push({message, userId}); } function...","categories": ["CodingTest","Kakao"],
        "tags": ["Javascript"],
        "url": "/codingtest/kakao/Kakao-open-chatting-room/",
        "teaser":null},{
        "title": "[코딩 테스트] Algospot - Anagram 문제",
        "excerpt":"내가 작성한 답안 function solution(v) { const inputs = v.split(\"\\n\"), inputsLength = inputs.length; let answer = \"\"; for(let i=1;i&lt;inputsLength;i++) { let elements = inputs[i].split(\" \"); if(elements[0] == elements[1]) answer += \"No.\\n\"; else { answer += elements[0].split(\"\").sort().reduce(reducer) == elements[1].split(\"\").sort().reduce((accumulator, currentValue) =&gt; accumulator + currentValue) ? \"YES\\n\" : \"No.\\n\"; } } return...","categories": ["CodingTest","Algospot"],
        "tags": ["Javascript"],
        "url": "/codingtest/algospot/Algospot-anagram/",
        "teaser":null},{
        "title": "[코딩 테스트] 매일 프로그래밍 - 피보나치 배열 2019-03-25",
        "excerpt":"// 처음 답 function solution(n) { if(n &lt; 2) return 0 let initN = [1,1], output = 0, result = 0; while(n &gt; initN[0] + initN[1]) { output = initN[0] + initN[1] initN = [initN[1], output] if(output%2 == 0) result += output } return result } // 수정 후 function...","categories": ["CodingTest","EverydayProgramming"],
        "tags": ["Javascript"],
        "url": "/codingtest/everydayprogramming/Every-Day-Programming-1/",
        "teaser":null},{
        "title": "[코딩 테스트] 매일 프로그래밍 - 2019-03-26",
        "excerpt":"문제 정수 배열(int array)가 주어지면 가장 큰 이어지는 원소들의 합을 구하시오. 단, 시간복잡도는 O(n). Given an integer array, find the largest consecutive sum of elements. 예제 Input: [-1, 3, -1, 5] Output: 7 // 3 + (-1) + 5 Input: [-5, -3, -1] Output: -1 // -1 Input: [2, 4,...","categories": ["CodingTest","EverydayProgramming"],
        "tags": ["Javascript"],
        "url": "/codingtest/everydayprogramming/Every-Day-Programming-2/",
        "teaser":null}]
