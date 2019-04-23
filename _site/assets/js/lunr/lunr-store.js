var store = [{
        "title": "SGIS-shpToGeojson",
        "excerpt":"SGIS에서 받은 지도데이터(.shp)를 geojson으로 변경하는 작업 내용 2018년에 쓴 글을 재업로드하였습니다. 지도데이터 가공 과정 shapefile을 simplify를 진행. 우선 mapshaper라는 shp파일 에디팅 툴로 편집. GUI온라인툴도 있음. 본인은 node CUI로 진행. $ mapshaper -i 전환할 파일 \\ encoding=euc-kr \\ -simplify weighted 0.5% \\ // 0.5%로 단순화 -o format=shapefile \\ 바뀐 파일명.shp shapefile(R)...","categories": ["DataProcessing"],
        "tags": ["ShapeFile","GeoJson","TopoJson","데이터 가공"],
        "url": "https://seunghyum.github.io/dataprocessing/SGIS-shpToGeojson/",
        "teaser":null},{
        "title": "[CodingTest] 별(*) 박스 만들기",
        "excerpt":"문제 설명     별(*) 박스 만들기   입력값 a(rows)와 b(cols)에 해당하는 별박스 만들기   예시 - 1  입력  4 2  출력  **** ****   예시 - 2  입력  3 5  출력  *** *** *** *** ***   내가 작성한 정답  solution(a,b) {   return (\"*\".repeat(a) + \"\\n\").repeat(b); }  ","categories": ["CodingTest"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/star-box/",
        "teaser":null},{
        "title": "[CodingTest] 2019 라인 테스트 데모 문제풀이 - 2",
        "excerpt":"문제 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들...","categories": ["CodingTest"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/Line-Test-Demo-1/",
        "teaser":null},{
        "title": "[CodingTest] 2019 카카오 신입 공채 1차 - 1번 오픈채팅방 문제 with Javascript",
        "excerpt":"오픈채팅방 문제 바로가기 링크 카카오의 설명 블로그 나의 답안 function solution(record) { let accounts = [], events = [], answer = []; function setEnterProcess(message, userId, nickName) { const findAccountByUserId = accounts.find(a =&gt; a.userId == userId) if(findAccountByUserId &amp;&amp; findAccountByUserId.nickName !== nickName) findAccountByUserId.nickName = nickName; else accounts.push({userId, nickName}); events.push({message, userId}); } function...","categories": ["CodingTest","Kakao"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/kakao/Kakao-open-chatting-room/",
        "teaser":null},{
        "title": "[CodingTest] Algospot - Anagram 문제",
        "excerpt":"내가 작성한 답안 function solution(v) { const inputs = v.split(\"\\n\"), inputsLength = inputs.length; let answer = \"\"; for(let i=1;i&lt;inputsLength;i++) { let elements = inputs[i].split(\" \"); if(elements[0] == elements[1]) answer += \"No.\\n\"; else { answer += elements[0].split(\"\").sort().reduce(reducer) == elements[1].split(\"\").sort().reduce((accumulator, currentValue) =&gt; accumulator + currentValue) ? \"YES\\n\" : \"No.\\n\"; } } return...","categories": ["CodingTest","Algospot"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/algospot/Algospot-anagram/",
        "teaser":null},{
        "title": "[CodingTest] 매일 프로그래밍 - 피보나치 배열 2019-03-25",
        "excerpt":"// 처음 답 function solution(n) { if(n &lt; 2) return 0 let initN = [1,1], output = 0, result = 0; while(n &gt; initN[0] + initN[1]) { output = initN[0] + initN[1] initN = [initN[1], output] if(output%2 == 0) result += output } return result } // 수정 후 function...","categories": ["CodingTest","EverydayProgramming"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/everydayprogramming/Every-Day-Programming-1/",
        "teaser":null},{
        "title": "[CodingTest] 매일 프로그래밍 - 2019-03-26",
        "excerpt":"문제 정수 배열(int array)가 주어지면 가장 큰 이어지는 원소들의 합을 구하시오. 단, 시간복잡도는 O(n). Given an integer array, find the largest consecutive sum of elements. 예제 Input: [-1, 3, -1, 5] Output: 7 // 3 + (-1) + 5 Input: [-5, -3, -1] Output: -1 // -1 Input: [2, 4,...","categories": ["CodingTest","EverydayProgramming"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/everydayprogramming/Every-Day-Programming-2/",
        "teaser":null},{
        "title": "Sorting Algorithms",
        "excerpt":"읽고 정리해야하는 기사     링크  ","categories": ["Sorting Algorithms"],
        "tags": ["Sorting Algorithms"],
        "url": "https://seunghyum.github.io/sorting%20algorithms/Sorting-Algorithms/",
        "teaser":null},{
        "title": "[CodingTest] 배열의 두 값을 합하여 k값 만들기",
        "excerpt":"문제 list라는 행렬과 k라는 자연수가 주어짐. list의 두 값을 합하여 k값을 만들 수 있으면 true, 없으면 false를 리턴해라. 보너스 : 한줄 표기 입력 let list = [3, 9, 10, 14], k = 12 solution(list, k) // =&gt; true 내가 풀어본 풀이 방법1 - 처음 풀어본 답안 function solution(list, k) {...","categories": ["CodingTest","DailyProgramming"],
        "tags": ["Javascript","BinarySearch","Set"],
        "url": "https://seunghyum.github.io/codingtest/dailyprogramming/Daily-Programming-1/",
        "teaser":null},{
        "title": "Data Type",
        "excerpt":"Set vs Array - 관련기사 Set 유일값들의 배열이 필요할때(distinct) 집합의 개념이 필요할때(차집합, 교집합 등등 자체 메서드들이 많음.) index가 필요 없을때 Array에서 중복값을 없앨때 =&gt; new Set([1,1,2,3]) // 1,2,3 set의 add()는 O(n)의 시간복잡도가 소요되지만, Array의 push는 N(1)의 시간복잡도. Array 요소들의 순서(order)가 필요할때 index가 필요할때 -&gt; Binaory Search Map vs Object 관련기사...","categories": ["Data Type"],
        "tags": ["Data Type"],
        "url": "https://seunghyum.github.io/data%20type/Data-Type/",
        "teaser":null},{
        "title": "Big O",
        "excerpt":"Big O     CheetSheet   CheetSheet  ","categories": ["Big O"],
        "tags": ["Big O"],
        "url": "https://seunghyum.github.io/big%20o/Big-O/",
        "teaser":null},{
        "title": "[CodingTest] i를 제외한 배열 요소들의 곱",
        "excerpt":"문제 정수 배열이 주어지면 인덱스 i에 해당하는 값 이외의 모든 값들의 곱인 배열을 구하여라. 보너스 : 나눗셈을 안쓰고 풀기 예시 [1,2,3] =&gt; [6,3,2] [1,2,3,4,5 ] =&gt; [120, 60, 40, 30, 24] 나눗셈이 있는 풀이법 // 2n =&gt; O(n) function solution(arr) { const max = arr.reduce((a,b)=&gt;a*b); // n let answer =...","categories": ["CodingTest","DailyProgramming"],
        "tags": ["Javascript","BinarySearch","Set"],
        "url": "https://seunghyum.github.io/codingtest/dailyprogramming/Daily-Programming-2/",
        "teaser":null},{
        "title": "[CodingTest] 일련의 숫자들 중 비어있는 값찾기",
        "excerpt":"문제 이 문제는 주어지는 정수 배열은 1이 공차인 일련의 숫자. 이어지는 값이 중 일련의 숫자값이 가장 길고 값이 비었거나 가장 작은 이어지는 값을 찾아라. 입력값 : integer array 주의사항 : 중복값, 음수도 포함될 수 있음. 예시 [3, 4, -1, 1] =&gt; 2 [1, 2, 0] =&gt; 3 내 풀이법 //...","categories": ["CodingTest","DailyProgramming"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/dailyprogramming/Daily-Programming-3/",
        "teaser":null},{
        "title": "[Syntax] 새로 알게된 파이썬 문법 정리",
        "excerpt":"chaning comparison 파이썬은 chaning comparison이라는 신기한 문법이 있다. 참고 if a &lt; b and b &lt; c : (...) 라는 구문이 if a &lt; b &lt; c : (...) 으로 연산된다. 직관적인 문법이 인상적. Comparison operator Chaining 이라고 불린다. Slice operater 문자열, tuples, dictionaries, lists 에 모두 적용가능. [start:end] [1:5]...","categories": ["Python","Syntax"],
        "tags": ["Python"],
        "url": "https://seunghyum.github.io/python/syntax/Python-Syntax/",
        "teaser":null},{
        "title": "Network - HTTP 정리",
        "excerpt":"참고 책 그림으로 배우는 http &amp; network http 완벽가이드 참고 사이트 그림으로 배우는 http &amp; network 정리글 http 완벽가이드 읽는법 zerocho 님 블로그 시리즈 wiki 백과(URI, URL, UDP) 글 작성 로그 및 수정 계획 2019.04.06 그림으로 배우는 http &amp; network 정리글 블로그를 읽고 정리한 글 실제 책(그림으로 배우는 http &amp;...","categories": ["Network"],
        "tags": ["Network","HTTP","TCP/IP"],
        "url": "https://seunghyum.github.io/network/Network/",
        "teaser":null},{
        "title": "[CodingTest] 숫자값 인코딩 조합구하기",
        "excerpt":"문제 알파벳의 인코딩 값을 a = 1 b = 2 c = 3 . . z = 26 으로 매핑. 숫자값 n이 주어지고 그 숫자에 대한 알파벳 디코딩 값 조합의 개수를 구하여라. 단, ‘0020’ 과 같이 앞에 ‘0’이 나오는 값은 주어지지 않음. This looks like a problem that is ripe...","categories": ["CodingTest","DailyProgramming"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/dailyprogramming/Daily-Programming-4/",
        "teaser":null},{
        "title": "[CodingTest] 2019 카카오 신입 공채 1차 - 2번 실패율 문제 with Javascript",
        "excerpt":"오픈채팅방 문제 바로가기 링크 카카오의 설명 블로그 나의 첫답안 function solution(N, stages) { let st = stages, stats = []; for(let i=1;i&lt;N+1;i++){ // n let selectedNumbers=0, obj = {}; st = st.filter((s)=&gt;{ // n * n if(s == i) selectedNumbers++; else return true; }); obj.name = i; obj.per = (st.length...","categories": ["CodingTest","Kakao"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/kakao/Kakao-failure-rate/",
        "teaser":null},{
        "title": "[CodingTest] 2019 카카오 신입 공채 1차 - 1번 오픈채팅방 문제 with Javascript",
        "excerpt":"후보키 문제 바로가기 링크 카카오의 설명 블로그 나의 답안 function solution(relation) { //1. for 문으로 object로 통계값 추출 + set으로 중복되는 값있는지 확인. 후보키 가능열을 열마다 체크 const numOfCols = relation[0].length, numOfRows = relation.length; let answer = 0, stats = [], candidateKeyCols = []; for (let i=0;i&lt;numOfCols;i++){ let rowsOfCol =...","categories": ["CodingTest","Kakao"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/kakao/Kakao-Candidate-Key/",
        "teaser":null},{
        "title": "[CodingTest] 2019 네이버 핵데이 코드테스트 문제3 with Javascript",
        "excerpt":"문제3 문제 받으면 작성할 예정. 내가 작성한 답변 - 아래로꺾인선만 구하기 function solution(N) { let maxUnderCurvedPoint = N[0]; for(let i=0;i&lt;=N.length;i++) { if(N[i]&gt;N[i+1] &amp;&amp; maxUnderCurvedPoint &gt; N[i]) maxUnderCurvedPoint = N[i]; } for(let i=N.length-1;i&gt;=0;i--) { if (maxUnderCurvedPoint &lt; N[i]) return i-1 } } 풀이해석 예시 생각했던 과정 부족했던 점 N = [0,4,-1,3,10]...","categories": ["CodingTest","Naver"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/naver/Naver-Hackday-Test-3/",
        "teaser":null},{
        "title": "[CodingTest] 2019 네이버 핵데이 코드테스트 문제2 with Javascript",
        "excerpt":"문제2 문제 받으면 작성할 예정. 내가 작성한 답변 let input = { x: 4 l: { x:5, l: { x: 4, l: { x: 5, l: null, r: null }, r: null }, r: null }, r: { x: 6, l: { x: 1, l: null, r: null, }, r:...","categories": ["CodingTest","Naver"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/naver/Naver-Hackday-Test-2/",
        "teaser":null},{
        "title": "[CodingTest] 2019 네이버 핵데이 코드테스트 문제1 with Javascript",
        "excerpt":"문제1 문제 받으면 작성할 예정. 내가 작성한 답변 function solution(A) { const oppositeGroupA = new Set([1,6]), oppositeGroupB = new Set([2,5]), oppositeGroupC = new Set([3,4]); let stats = {}, maxEl = A[0], maxCount = 1, answer = 0; // 가장 많이 중복되는 el을 기준. // return = 기준 숫자의 반대편 숫자의...","categories": ["CodingTest","Naver"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/naver/Naver-Hackday-Test-1/",
        "teaser":null},{
        "title": "[CodingTest] 숫자값 인코딩 조합구하기",
        "excerpt":"You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on. Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach...","categories": ["CodingTest","DailyProgramming"],
        "tags": ["Javascript"],
        "url": "https://seunghyum.github.io/codingtest/dailyprogramming/Daily-Programming-5/",
        "teaser":null},{
        "title": "Tree",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "https://seunghyum.github.io/Tree/",
        "teaser":null},{
        "title": "Data Type - 트리 구조",
        "excerpt":"그래프   트리     트리 구조란 그래프의 일종으로, 여러 노드가 한 노드를 가리킬 수 없는 구조이다. 간단하게는 회로가 없고, 서로 다른 두 노드를 잇는 길이 하나뿐인 그래프를 트리라고 부른다. – 위키백과       이진탐색트리   ","categories": ["Data Type"],
        "tags": ["Data Type"],
        "url": "https://seunghyum.github.io/data%20type/Tree/",
        "teaser":null}]
