---
layout: posts
title:  "[GoogleAnalytics] 자기 자신의 활동기록 제외 (prevent recording myself)"
categories: [GoogleAnalytics]
tags: [GoogleAnalytics]
comments: true
---

## 참고
- [5 ways to exclude your own visits from Google Analytics](http://www.daniloaz.com/en/5-ways-to-exclude-your-own-visits-from-google-analytics/)
- [How to exclude your own [dynamic] ip from Google Analytics](http://www.daniloaz.com/en/how-to-exclude-your-own-dynamic-ip-from-google-analytics/)

## 괜찮은 방법들
1. 서버사이드나 백엔드 매서드
   - 설명 : Dynamic DNS를 사용하여 IP를 제외. 과정이 복잡함. 회사에서 쓰기 적합.
   - 장점 : 시스템으로 돌아감. 
   - 단점
     - 복잡하다.
     - 캐시를 사용설정 해놓으면 무의미. DDNS 설정을 한 이후에도 설정전에 사이트에 접속한적이 있다면 혹시라도 남아있을 캐시는 제거하는 것이 필요.
1. Google Analytics 필터로 Public IP 제외
   - 과정 : GA(Google Analytics) 대쉬보드 -> 관리 클릭 -> 보기의 필터 클릭 -> 필터 추가
   - 장점 : 고정 IP만 쓰는 장치 제외에 적합. 
   - 단점 : 유동 IP이면 무의미. (핸드폰, 노트북 등 네트워크 전용선을 쓰지 않고 옮겨다니며 와이파이를 쓰는 경우)
1. 브라우저 확장프로그램
   - 설명 : 확장프로그램을 작동시켜 IP를 제외시킴.
   - 장점 : 가장 간단.
   - 단점 : 모바일, 테블릿에서 쓰지 못할수 있음.
   - 추천 프로그램
     - [Google 웹로그 분석 차단 추가 기능(Google 제공)](https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh/related?hl=ko)
     - [Block Yourself from Analytics](https://chrome.google.com/webstore/detail/block-yourself-from-analy/fadgflmigmogfionelcpalhohefbnehm?hl=ko)
