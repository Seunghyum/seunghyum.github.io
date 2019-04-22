# Jekyll 블로그
- 사용한 템플릿 : https://github.com/mmistakes/minimal-mistakes
- 가이드 : https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/#installing-the-theme

## 명령어
- 로컬 서버 띄우기
  - bundle exec jekyll serve --draft # 초안을 같이 표시한다.
  - bundle exec jekyll serve --livereload # 수정마다 새로고침된다.
  - JEKYLL_ENV=production bundle exec jekyll serve  --livereload --draft
- 빌드
  - JEKYLL_ENV=production bundle exec jekyll build