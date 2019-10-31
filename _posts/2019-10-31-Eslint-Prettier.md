---
layout: posts
title:  "[ESlint & Prettier] 개발 관습 설정 in Visual Studio" 
categories: [Code Config]
tags: [ESlint, Prettier, Visual Studio]
comments: true
---

회사 프로젝트를 작업하기 전 프론트엔드 개발자들 간의 코드 규칙을 Eslint와 Prettier 설정을 맞춰 관리해가는 방향을 정했다.<br>
아직 협업을 할 경우는 없지만 미래에 인수인계 받거나 협업을 진행할 경우 코드관습이 달라 고생할 경우를 대비하기로 했다.<br><br>
설정은 작업을 진행하며 수정할 계획이다.

핵심은 저장할때마다 Eslint기준에 맞게 prettier 패키지가 코드를 수정하게 하는 것이다.

## ESlint 설정

ESlint 설정을 위한 패키지 다운로드

```bash
$ npm i eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue --save-dev
```

프로젝트 루트에 있는 .eslintrc.json 파일 설정

```javascript
module.exports = {
  // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
  root: true,
  // 추가적인 규칙들을 적용
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 코드 정리 플러그인 추가
  plugins: ['prettier'],
  // 사용자 편의 규칙 추가
  rules: {
    'prettier/prettier': [
      'error',
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html
      {
        singleQuote: true,
        semi: false,
        useTabs: true,
        tabWidth: 2,
        endOfLine: 'auto',
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
```

## Visual Studio 설정

Window : ctr + shift + p <br>
Mac : cmd + shift + p <br>
settings.json 파일 검색 후 설정

```json
{
  //  ....
  "editor.tabSize": 2,
  "eslint.autoFixOnSave": true, // 저장할때마다 js 코드 자동 수정
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  "tslint.autoFixOnSave": true, // 저장할때마다 typescript 코드 자동 수정
  "markdownlint.run": "onSave"
}
```

## 참고

- [VSCode 환경 설정 및 기초 사용법](https://gwonsungjun.github.io/articles/2018-06/vscodeSetting)
- [Vue.js 개발 생산성을 높여주는 도구 3가지](https://joshua1988.github.io/web-development/vuejs/boost-productivity/)