---
layout: posts
title:  "[Workflow] 프론트엔드 개발조직을 위한 워크플로 설계"
categories: [Workflow]
tags: [Workflow]
comments: true
toc: true
---

> ## 작성 배경
> 
> 회사의 작업구조를 **페이지 중심 개발**에서 **UI 컴포넌트 중심 개발**로 변경하면서 Workflow를 개선할만한 환경을 구성해야했다.<br>
> 폐쇄망 기반에서 개발자간 UI 명세서 역할을 할 수 있는 [Storybook](https://storybook.js.org/)과<br>
> 그것을 공유할 [Verdaccio](https://github.com/verdaccio/verdaccio)라는 구축형 NPM Private Registry를 도입하면 좋겠다는 생각에 아래의 내용을 팀에 제안했다.<br>
> 또한 기존의 프로젝트 중심에서 Task중심으로 업무프로세스를 변화하여 애자일에 적합하게 Workflow를 구성해보았다.

# UI 컴포넌트 모듈관리 : Storybook

<figure>
  <a href="/assets/images/posts/workflow/design-system-contents.jpg" style="margin:auto;">
    <img src="/assets/images/posts/workflow/design-system-contents.jpg" style="max-width: 400px;border:none;">
  </a>
</figure>

- 시연 : [스토리북 시연](https://seunghyum.github.io/VirnectStorybookTest/?path=/story/*)
- 설명
  - [Ant](https://ant.design/docs/react/introduce), [materialize](https://material.io/components/) 같은 사이트처럼 문서 기능(UI 컴포넌트 개발 명세서)
  - 회귀 테스트 가능(ex- 디바이스 크기별 체크가능 / 중국어, 영어등 외국어 일경우 UI 변화도 체크가능 등등)

---

## 목표

- Page기반 → UI 컴포넌트 기반으로 전환 과정에서 개발 & 디자인 Work flow 개선
  - **구조도**
  <figure>
    <a href="/assets/images/posts/workflow/Workflow__-_Storybook__Verdaccio.png" style="margin:auto;">
      <img src="/assets/images/posts/workflow/Workflow__-_Storybook__Verdaccio.png" style="border:none;">
    </a>
  </figure>

  - **구조도 상세 설명**
    - 프로젝트 중심 → Task 중심

    <div style="text-align:center;">
      <b>작업과정</b>
    </div>
    
    <figure>
      <a href="/assets/images/posts/workflow/work_process.png" style="margin:auto;">
      <img src="/assets/images/posts/workflow/work_process.png" style="max-width: 500px; border:none;">
      </a>
    </figure>
    ---
    <div style="text-align:center;">
      <b>공유 과정</b>
    </div>
    
    <figure>
      <a href="/assets/images/posts/workflow/work_process2.png" style="margin:auto;">
      <img src="/assets/images/posts/workflow/work_process2.png" style="max-width: 500px; border:none;">
      </a>
    </figure>
  - 쓰임세
    - 개발 : 공통 디자인 컴포넌트 관리, UI 컴포넌트 명세서
    - 디자인 : 실제 웹 상에서의 시각 테스트(Storybook)

  ## 장점

  단, 디자인 / 개발 파트의 효용성을 계속 생각하며 **고도화**해야 함.

  - 회귀 테스트(모바일, 태블릿, 데스크탑 화면 조정 가능)
    - 함께 쓰면 좋은 크롬 확장프로그램 : chrome toogle device topbar, stylebot, colorpick eyeDroper
  - 디자인적인 효용성
    - 실제 웹에선 어떻게 나오는지를 확인할 수 있음. → 하지만 실제 구현 페이지에서는 다르게 보일 수 있음. 결국은 실제 서비스 페이지에서 확인해야함.
    - 해당 UI를 마음대로 값을 조정하여 변수들을 체크해볼 수 있음.
    - 국제화 표준값을 변경해보며 UI 확인이 가능.
  - 개발적인 효용성
    - UI 코드 명세서(어떻게 생겼고 어떻게 사용해야하는지)
    - 단위 테스트에 적합(인터렉티브한 UI에 한해서만 해야함.)
    - 프로젝트 중심 → Task 중심으로 조금은 바꿀 수 있음. 스프린트도 가능.
    <figure>
      <a href="/assets/images/posts/workflow/Task_.png" style="margin:auto;">
      <img src="/assets/images/posts/workflow/Task_.png" style="max-width: 500px; border:none;">
      </a>
    </figure>

---

## 위험성

- ***디자인 파트***
  - 제플린같은 디자인 툴을 사용하는 편이 더 나을 때가 많음. 실제 웹에서 어떻게 구현되는가를 컴포넌트별로 체크할때만 효용성이 있음.
- ***개발 파트***
  - 오버 엔지니어링 : 단위테스트가 필요없을 정도로 마이너한 일들은 명세서의 역할만 할 정도로 개발. → **모듈화가 필요할때마다 개발 구성원 모두가 검토하는 프로세스가 필요함**
  - 개발기한 → 지금은 UI 컴포넌트 개발과 프론트앤드 기능개발을 병렬적으로 해야함.
  - 아래의 그림처럼 운영하는 웹 어플리케이션들에서 막상 공유되는것이 없거나 적을 경

<div style="width: 49%; display:inline-block; text-algin: center;">
  <figure>
  <a href="/assets/images/posts/workflow/danger_point.png" style="margin:auto;">
  <img src="/assets/images/posts/workflow/danger_point.png" style="height: 85%; border:none;">
  </a>
  </figure>
  <p>
    [모듈화 위험 있음]
  </p>
</div>

<div style="width: 49%; display:inline-block; text-algin: center;">
  <figure>
  <a href="/assets/images/posts/workflow/design-system-contents.jpg" style="margin:auto;">
  <img src="/assets/images/posts/workflow/design-system-contents.jpg" style="border:none;">
  </a>
  </figure>
  <p>
    [모듈화 적합]
  </p>
</div>

---

## 계획

- 개발 구성원들이 다 바빠서 실제 활용은 내년 예상.
- 일단 구조부터 만들기. - 승현
- xxxx[.github.io](http://virnect.github.io) 에 Storybook 배포
- 디자인에 맞춰서 도입이 필요 없을 경우엔 Skip.

# 기능 모듈 공유 : Verdaccio

- 기능 모듈 공유 : [Verdaccio](https://github.com/verdaccio/verdaccio) (구축형 NPM Private to 개발서버)
<figure>
<a href="/assets/images/posts/workflow/Workflow__-_Storybook__Verdaccio.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/Workflow__-_Storybook__Verdaccio.png" style="max-height: 300px; border:none;">
</a>
</figure>

## 설명

- npm install 시에 [https://registry.npmjs.org](https://registry.npmjs.org/) 에서 기본적으로 패키지를 가져옴.
- 이것을 개발 서버에 구축형(Verdaccio)으로 만든다.
- UI 컴포넌트, 기능 모듈을 각각 1개씩 레포를 만든다. 각 레포는 Mono 레포의 구조로 모듈들을 관리한다.

## 시연

### UI 컴포넌트 공유

<figure>
<a href="/assets/images/posts/workflow/Verdaccio_Storybook_Case_1.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/Verdaccio_Storybook_Case_1.png" style="border:none;">
</a>
</figure>

## 도입의 장점

- 작업 구조의 변화
  - **프로젝트 중심**으로 개발자 개인이 하나씩 맡아서 돌아가는 구조를 **Task 중심**으로 바꿀 수 있지 않을까. → 코드 퀄리티, 개인의 업무 과중 해소.
  - ex) A개발자는 프로젝트  a와 b 라는 인풋이 주어질 경우 c라는 결과물만 나오는 기능 작업

## 참고자료

- [NPM 명령어](https://www.zerocho.com/category/NodeJS/post/58285e4840a6d700184ebd87)

---

# Scaffolding module 개발

## 도입 이유

- SI 작업은 울며 겨자먹기식이나 회사 전체 프로젝트가 SI 작업 때문에 진도가 잘 안나감.

## 기능모듈 & UI 컴포넌트 모듈과의 차이점

- 기능모듈과 UI 컴포넌트 모듈을 **포함할수도, 포함하지 않을 수도 있음.**
- Scaffold의 목적은 "SI 작업 비용을 최소화하는 코드 템플릿"
<figure>
<a href="/assets/images/posts/workflow/scaffold_modules.png" style="margin:auto;">
<img src="/assets/images/posts/workflow/scaffold_modules.png" style="max-width: 500px; border:none;">
</a>
</figure>

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