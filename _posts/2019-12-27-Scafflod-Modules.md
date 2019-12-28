---
layout: posts
title:  "[Scaffold] Scaffold Module 개발"
categories: [Scaffold]
tags: [Scaffold]
comments: true
---

## 도입 이유

- SI 작업은 울며 겨자먹기식이나 회사 전체 프로젝트가 SI 작업 때문에 진도가 잘 안나감.

## Scaffolding Module 설명

- Scaffolding 용어
  - 네이버 어학사전 - (공사장에서 안전을 위해 외부로 설치하는) 뼈대
  - Stackoverflow - Scaffolding generally refers to a **quickly set up skeleton for an app**.
  - 다음 검색 - 컴퓨터 용어에서 스캐폴딩은 데이터베이스의 각 테이블에 대한 웹 페이지를 자동으로 생성하는 Dynamic Data 요소를 말합니다. 자동 생성된 웹 페이지를 통해 각 테이블에 대해 만들기, 읽기, 업데이트 및 삭제(CRUD) 작업을 수행할 수 있습니다. 스캐폴딩은 페이지 템플릿, 엔터티 페이지 템플릿, 필드 페이지 템플릿 및 필터 템플릿으로 구성됩니다.
- Rails의 Scaffolding은 간단한 명령어로 Model, View, Controller등 모든 구성요소(파일구조, 코드)를 알아서 만들어 줌.
<figure>
<a href="/assets/images/posts/workflow/1_1_xbp-fx7Dz7B90Ijlsw6Q.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/1_1_xbp-fx7Dz7B90Ijlsw6Q.png" style="border:none;">
</a>
</figure>
- 이처럼 SI 프로젝트에서 공유될만한 것들을 scaffolding Module로 빼서 개발하는 것이 목표.

## 기능모듈 & UI 컴포넌트 모듈과의 차이점

- 프로젝트마다 기능모듈과 UI 컴포넌트 모듈을 **포함할수도, 포함하지 않을 수도 있음.**
- Scaffold의 목적은 "SI 작업 비용을 최소화하는 코드 템플릿"

<figure>
<a href="/assets/images/posts/workflow/scaffold_modules.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/scaffold_modules.png" style="max-width: 500px; border:none;">
</a>
</figure>

<figure>
<a href="/assets/images/posts/workflow/scaffold_modules_all.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/scaffold_modules_all.png" style="border:none;">
</a>
</figure>

## 도입 이후 장점

SI 작업에 드는 비용 감소. 작업시간 단축.

<figure>
<a href="/assets/images/posts/workflow/scaffold_modules_eff.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/scaffold_modules_eff.png" style="max-width: 300px;border:none;">
</a>
</figure>

## 도입 이후 위험성

- 모듈화 작업에 들어가는 폼이 많을 수 있음. → 모듈화 이슈는 서브 챕터에서 공유
- 모듈에 맞춰서 고객의 요청을 미리 제한할 수 있어야함. ex - 기획, 디자인시 모듈에 맞게끔 유도해야할 수 있음