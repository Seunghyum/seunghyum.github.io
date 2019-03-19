# Jekyll 블로그
- 사용한 템플릿 : https://github.com/mmistakes/minimal-mistakes
- 가이드 : https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/#installing-the-theme

## 명령어
- 로컬 서버 띄우기
  - jekyll serve --draft # 초안을 같이 표시한다.
  - jekyll serve --livereload # 수정마다 새로고침된다.
  - JEKYLL_ENV=production jekyll serve
- 빌드
  - JEKYLL_ENV=production jekyll build

# => 현재 폴더의 컨텐츠를 가지고 ./_site 에 사이트를 생성합니다.
#    변경사항이 감지되면, 자동으로 다시 생성합니다.