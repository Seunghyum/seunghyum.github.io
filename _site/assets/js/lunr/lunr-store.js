var store = [{
        "title": "SGIS-shpToGeojson",
        "excerpt":"SGIS에서 받은 지도데이터(.shp)를 geojson으로 변경하는 작업 내용 2018년에 쓴 글을 재업로드하였습니다. 지도데이터 가공 과정 shapefile을 simplify를 진행. 우선 mapshaper라는 shp파일 에디팅 툴로 편집. GUI온라인툴도 있음. 본인은 node CUI로 진행. $ mapshaper -i 전환할 파일 \\ encoding=euc-kr \\ -simplify weighted 0.5% \\ // 0.5%로 단순화 -o format=shapefile \\ 바뀐 파일명.shp shapefile(R)...","categories": ["데이터 가공"],
        "tags": ["ShapeFile","GeoJson","TopoJson"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EA%B0%80%EA%B3%B5/SGIS-shpToGeojson/",
        "teaser":null},{
        "title": "[코딩 테스트] 2019 카카오 신입 공채 1차 코딩 테스트 문제 with Javascript",
        "excerpt":"오픈채팅방 문제 바로가기 링크 카카오의 설명 블로그 나의 답안 function solution(record) { let accounts = [], events = [], answer = []; function setEnterProcess(message, userId, nickName) { const findAccountByUserId = accounts.find(a =&gt; a.userId == userId) if(findAccountByUserId &amp;&amp; findAccountByUserId.nickName !== nickName) findAccountByUserId.nickName = nickName; else accounts.push({userId, nickName}); events.push({message, userId}); } function...","categories": ["코딩 테스트"],
        "tags": ["Javascript"],
        "url": "/%EC%BD%94%EB%94%A9%20%ED%85%8C%EC%8A%A4%ED%8A%B8/Kakao-open-chatting-room/",
        "teaser":null},{
        "title": "[코딩 테스트] Anagram 문제 - javascript",
        "excerpt":"설명 각 문자열의 알파벳을 재배열하였을때 같은 단어가 되는 단어들. 예시 tab - bat github - hbuitg 풀어본 문제 Algospot 문제 Baekjoon 문제 Algospot 문제 바로가기 링크 예제 입력 3 weird wired apple angle apple elppa 예제 출력 Yes No. Yes 내가 작성한 답안 function solution(v) { const inputs = v.split(\"\\n\"),...","categories": ["코딩 테스트"],
        "tags": ["Javascript"],
        "url": "/%EC%BD%94%EB%94%A9%20%ED%85%8C%EC%8A%A4%ED%8A%B8/Algospot-anagram/",
        "teaser":null}]
