# Jekyll 블로그
- 사용한 템플릿 : https://github.com/mmistakes/minimal-mistakes
- 가이드 : https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/#installing-the-theme

## 명령어
- 로컬 서버 띄우기
  - yarn dev (JEKYLL_ENV=production bundle exec jekyll serve  --livereload --draft)
  - bundle exec jekyll serve --draft # 초안을 같이 표시한다.
  - bundle exec jekyll serve --livereload # 수정마다 새로고침된다.
- 빌드
  - yarn build (JEKYLL_ENV=production bundle exec jekyll build)

## 배포 방식
- 빌드 후 git commit & push