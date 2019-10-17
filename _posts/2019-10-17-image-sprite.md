---
layout: posts
title:  "[Web Skill] 이미지 스프라이트(Image Sprite)"
categories: [Web Skill]
tags: [Image Sprite]
comments: true

gallery_Image-sprite-before:
  - url: /assets/images/Image-sprite-before.png
    image_path: /assets/images/Image-sprite-before.png
gallery_Image-sprite-after:
  - url: /assets/images/Image-sprite-after.png
    image_path: /assets/images/Image-sprite-after.png
---

## 정의

필요한 이미지를 여러번 호출하는 것이 아니라 하나의 이미지 파일을 받아 Background로 Position을 잡아주어 여러개의 이미지를 가져올 수 있게 하는 방법. 

- 장점 : 
  - HTTP 요청횟수를 줄여 웹페이지의 로딩 시간을 절약함.
  - 하나의 이미지 파일만 관리하면 됨.

- 단점 : 이미지를 불러오기 위해선 해당이미지의 Position을 알아야함. CSS로 관리할 경우 클래스로 분리하여 관리하고 background-image 속성으로 가져오면 편하지만 SVG이미지로 관리를 위해서는 js코드를 모듈화해야함.

- 관련링크 : [Image Sprite Online Generator](https://spritegen.website-performance.org/) Sprite 이미지, CSS 클래스도 만들어줌.

## 적용해보기

적용대상 : 나의 Data Lab 프로젝트 중 [18/19 UEFA 챔피언스리그 결과](https://seunghyum.github.io/data-visualization/UEFAtournament)

변경 전 : 구단의 이미지 파일들을 각각 저장하여서 불러옴

{% include gallery id="gallery_Image-sprite-before" layout='half'%}

### 기존 코드

```javascript

downSeedNameBox.append('image')
                  .attr('x', 10)
                  .attr('y', SeedNameBox.margin/2)
                  .attr('width', SeedNameBox.height - SeedNameBox.margin)
                  .attr('height', SeedNameBox.height - SeedNameBox.margin)
                  .attr('xlink:href', (d) => require(`@/assets/images/UEFA/Clubs/${d.participant[1].name}.png`))
```

문제점
: 토너먼트 내에서 여러번 이미지를 불러올 경우 이미지 역시 여러번 호출하고 있음.

<br><br>

### 개선 이후

- 전체 구단의 이미지들을 하나로 담은 파일을 만들고

{% include gallery id="gallery_Image-sprite-after" layout='half'%}

- 해당 구단이미지의 position을 저장하여서 
뿌려주는 방식으로 변경함

```javascript
images: {
  Ajax: {
    position: '5 5 70 70'
    // ...
  },
  //...
}

downSeedNameBox.append('svg')
              .attr('x', 10)
              .attr('y', SeedNameBox.margin/2)
              .attr('width', SeedNameBox.height - SeedNameBox.margin)
              .attr('height', SeedNameBox.height - SeedNameBox.margin)
              .attr('viewBox', (d) => this.images[d.participant[1].name].position) // this.images['Ajax'].position
            .append('image')
              .attr('xlink:href', ClubsImage)
```