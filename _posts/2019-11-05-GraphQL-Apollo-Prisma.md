---
layout: posts
title:  "GraphQL, Prisma, Apollo 공부"
categories: [GraphQL, Prisma, Apollo]
tags: [GraphQL, Prisma, Apollo]
comments: true
---

## GraphQL? RESTful?

: GrpahQL과 RESTful은 각각의 장단점이 있음.

### GraphQL

- 한번에 여러 요청들에 응답해야할때.
- 대부분의 요청이 CRUD일때

### RESTful

- PDF, Excel File 전송같은 단순 Text로 처리되지 않는 요청이 있을때
- 요청의 구조가 다양하지 않고 정해져 있는경우.

API서버 구축시 두 방법을 섞어쓰는 것은 품질을 떨어뜨릴 수 있음. 각각의 장점을 살릴수 있는 설계가 필요.

<br>

## 개념

*SQL(Structed Query Language)*은 **데이터베이스 시스템**에 저장된 데이터를 효율적으로 가져오는 것<br>
*GQL(Graph Query Language)*은 **웹 클라이언트**가 데이터를 서버로 부터 효율적으로 가져오는 것


## 특징

- 하나의 Endpoint를 사용
  - HTTP요청 횟수 감소 : RESTful은 원하는 리소스를 종류별로 다른 Endpoint에서 호출해야할 경우가 많음. 반면 **GraphQL은 하나의 Endpoint**에서 원하는 리소스를 모두 담아 요청하는 것이 가능.
  - HTTP응답의 size 감소 : 필요한 부분만 요청할수 있음. Under-Fetching, Over-Fetching 해결
- 인트로스펙션(introspection) 비용감소
  - : 쿼리용 IDE를 만등어줘서 API 명세서를 따로 안만들어도 됨. 기존에는 API 명세서를 만들어 프론트엔드 개발자와 백엔드 개발자가 소통해야 했음.
- 요청할때 사용한 Query문에 따라 응답의 구조가 달라짐.
- 어떠한 프로토콜(TCP/UDP, Websocket) 에서도 사용가능. *프로그래밍 언어일 뿐이니까!*
- NoSQL DB나 RDB 상관 없이 사용가능. *프로그래밍 언어일 뿐이니까!*
- 사용가능한 아키텍처 - [자세한 설명](https://www.tutorialspoint.com/graphql/graphql_architecture.htm)
  - GraphQL server with connected database
  - GraphQL server that integrates existing systems -> 
  - Hybrid approach

## 문법

- 작업 유형
  - Query: 데이터를 받아옴(GET)
    - 여러 query 요청은 내부에서 병렬로 수행됨
  - Mutation: 데이터를 생성(Post), 수정(PUT, PATCH), 삭제(DELETE) 
    - 여러 mutation 요청은 내부에서 직렬(차례대)로 수행됨. 따라서 2개의 mutation 요청을 보냈을때 2번째 요청이 수행되지 않았다면 첫번째 요청은 수행됐다는 것. ... [Multiple Fields In Mutations](https://graphql.org/learn/queries/#multiple-fields-in-mutations)
  - Subscription: 웹소켓을 사용해 실시간 양방향 통신 구현

## 구조

- Query : 어떤 Request를 받을 건지
- Resolver : GQL은 언어일 뿐. 해당 리퀘스트를 어떻게 처리할 것인지를 자유롭게 설정. 텍스트 파일에서 읽어올 수도 있음.

## 실제 사용

: Graphql은 단지 언어 일뿐. 클라이언트와 서버 사이드에서 사용하려면 보조해주는 라이브러리가 필요.


### 클라이언트쪽에서 사용하려면

- [릴레이(Relay)](https://relay.dev/)
- [아폴로(Apollo GraphQL)](https://www.apollographql.com/)

둘 중 하나 선택. Apollo가 현재상황에선 더 쓰기 편함.
<br><br>
<small>내부적으로 DFS(Deep First Search)로 로직이 수행되어서 Graph QL이 된것 같다고함.. [Kakao Tech](https://tech.kakao.com/2019/08/01/graphql-basic/)</small>

### 서버쪽에서 사용하려면

3가지 방법이 있다.

1. 리졸버에서 SQL을 직접 다루는것
2. ORM으로 다루는 것
3. [Prisma](https://www.prisma.io/with-graphql/) 사용. (동작방식은 ORM과 비슷) 

**1번**의 단점은 쿼리가 보통 단순 스트링으로 전달되기 때문에 개발환경 차원에서 쿼리를 검사하기 까다로움.<br>
**2번**은 단점이 있다기 보다는 **3번** 선택지가 더 좋은 방법인 듯 함.

> Prisma는 쿼리 리졸빙을 처리해주는 편리한 데이터 접근 계층을 제공하여 상기한 문제를 해결해줍니다. <br>
> Prisma를 사용하면, 서버로 들어온 쿼리를 Prisma에 전달하고, Prisma는 이를 받아 실제 데이터베이스에 맞추어 쿼리를 리졸브하는 식으로 리졸버를 구현하게 됩니다. <br>
> Prisma Client 덕분에, 리졸버 구현은 대부분의 경우 한두 줄로 구현이 가능할 정도로 간단명료한 과정입니다.<br>
> <small>velog 님 블로그 - [GraphQL - Node Tutorial - 05. Adding a Database](https://velog.io/@cadenzah/graphql-node-05-database)</small><br>

<center>api 서버에 Prisma Client가 있고 따로 Prisma Server가 데이터베이스 앞단에서 데이터베이스를 관리함. </center><br>

Prisma 장점 정리 - [퍼옴](https://medium.com/labelstore/prisma%EB%A1%9C-graphql%EC%9D%84-%EC%89%BD%EA%B2%8C-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0-fa64dcf63382)
- GraphQL 형식의 데이터모델만 작성하면 사용하는 언어와 DBMS에 구애받지 않고, ORM 클라이언트와 모델, 그리고 Data Schema 가 자동으로 생성된다.
- GraphQL 형식의 DataModel을 정의하면 Prisma가 알아서 사용하고있는 DBMS와 언어의 종류에 맞게 실제 DB 배포부터, 클라이언트와 모델 그리고 타입정의까지 자동으로 만들어 제공해 줍니다. 
- 자체 어드민 페이지를 제공하여 쉬운 데이터 운용이 가능하다. (비개발자도 손쉽게 쓸 수 있을 정도.)

## 참고 자료

- [TutorialsPoint](https://www.tutorialspoint.com/graphql)
- [GraphQL과 RESTful API](https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/)
- [Kakao Tech](https://tech.kakao.com/2019/08/01/graphql-basic/)
- [Prisma로 GraphQL을 쉽게 도입하기](https://medium.com/labelstore/prisma%EB%A1%9C-graphql%EC%9D%84-%EC%89%BD%EA%B2%8C-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0-fa64dcf63382)
- [REST와 이별할 때 생각해야 하는 것들](https://www.slideshare.net/Kivol/graphql-in-action-rest)

## 더 읽고 정리()

- [Our learnings from adopting GraphQL](https://medium.com/netflix-techblog/our-learnings-from-adopting-graphql-f099de39ae5f)
- [GraphQL Search Indexing](https://medium.com/netflix-techblog/graphql-search-indexing-334c92e0d8d5)