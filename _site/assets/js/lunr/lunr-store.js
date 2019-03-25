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
        "teaser":null},{
        "title": "[코딩 테스트] 매일프로그래밍 - 피보나치 배열 2019-03-25",
        "excerpt":"문제 피보나치 배열은 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 정수 N이 주어지면, N보다 작은 모든 짝수 피보나치 수의 합을 구하여라. Fibonacci sequence starts with 0 and 1 where each fibonacci number is a sum of two previous fibonacci numbers. Given an integer N,...","categories": ["코딩 테스트","매일프로그래밍"],
        "tags": ["Javascript"],
        "url": "/%EC%BD%94%EB%94%A9%20%ED%85%8C%EC%8A%A4%ED%8A%B8/%EB%A7%A4%EC%9D%BC%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/Every-Day-Programming/",
        "teaser":null},{
        "title": "[코딩 테스트] 매일프로그래밍 2019-03-26",
        "excerpt":"문제 정수 배열(int array)가 주어지면 가장 큰 이어지는 원소들의 합을 구하시오. 단, 시간복잡도는 O(n). Given an integer array, find the largest consecutive sum of elements. 예제 Input: [-1, 3, -1, 5] Output: 7 // 3 + (-1) + 5 Input: [-5, -3, -1] Output: -1 // -1 Input: [2, 4,...","categories": ["코딩 테스트"],
        "tags": ["Javascript"],
        "url": "/%EC%BD%94%EB%94%A9%20%ED%85%8C%EC%8A%A4%ED%8A%B8/Every-Day-Programming/",
        "teaser":null}]
