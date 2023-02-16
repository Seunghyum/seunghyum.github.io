---
layout: posts
title:  "Flutter 맛보기 1"
categories: [LogManage]
tags: [Log Manage]
comments: true
toc: true


rendering:
  - url: /assets/images/posts/2023-01-03-Flutter-begin-1/rendering.png
    image_path: /assets/images/posts/2023-01-03-Flutter-begin-1/rendering.png
code:
  - url: /assets/images/posts/2023-01-03-Flutter-begin-1/code.png
    image_path: /assets/images/posts/2023-01-03-Flutter-begin-1/code.png
forward:
  - url: /assets/images/posts/2023-01-03-Flutter-begin-1/forward.png
    image_path: /assets/images/posts/2023-01-03-Flutter-begin-1/forward.png
js_vs_flutter:
  - url: /assets/images/posts/2023-01-03-Flutter-begin-1/js-vs-flutter.png
    image_path: /assets/images/posts/2023-01-03-Flutter-begin-1/js-vs-flutter.png
naver_jisikin:
  - url: /assets/images/posts/2023-01-03-Flutter-begin-1/naver-jisikin.png
    image_path: /assets/images/posts/2023-01-03-Flutter-begin-1/naver-jisikin.png
widget_tree:
  - url: /assets/images/posts/2023-01-03-Flutter-begin-1/widget-tree.png
    image_path: /assets/images/posts/2023-01-03-Flutter-begin-1/widget-tree.png
---

직방 기술지원팀 기술공유 세미나 중 플러터를 소개한 내용입니다

## Flutter

- Dart 기반. typescript와 문법적으로 유사.
- [크로스 플랫폼 프레임워크 (데스크탑 앱, 웹, 모바일 앱)](https://docs.flutter.dev/development/tools/sdk/release-notes/supported-platforms#supported-platforms)

## 다른 크로스 플랫폼과 뭐가 다른가?

### 렌더링 방식이 가벼움

웹뷰, RN 같은 자바스크립트 기반 크로스 플랫폼들은 **자바스크립트 브릿지**를 사용.

{% include gallery id="rendering"%}

---

플러터는 **자체 렌더링 엔진 [Skia](https://landroid.tistory.com/14)(C, C++)**를 통해 중간과정 없이 캔버스를 렌더링. 자바스크립트 브릿지 필요 없다

실제 웹의 경우 개발자 도구로 보면 canvas 태그 하나 있다고 함.

{% include gallery id="js_vs_flutter"%}

### 컴파일 방식 : JIT 와 AOT 모두 지원

환경에 따라 유연하게 컴파일 가능.

JIT(just-in-time) 컴파일과 AOT(ahead-of-time)컴파일을 모두 지원

- **개발모드는 JIT 컴파일**
  - **핫 리로드(hot reload)**를 지원
- **프로덕션 모드는 AOT 컴파일**
  - 다트 코드를 그에 맞는 네이티브 코드로 바꿔줘서 플러터가 모두에게 빠르게 동작하며 플러터 전체 프레임워크의 대부분을 다트로 구현 가능. 자바스크립트 브릿지를 피할 수 있게 함.
- 그 밖에도 다트는 js로 컴파일되어 브라우저에서도 실행 가능하다고 함.

### 언어 개발팀과 프레임워크 개발팀이 협업

다 구글 꺼.

Dart(Language) 개발팀과 Flutter(framework) 개발팀이 긴밀히 협업

RN - ts 아무 협업이 없음 😭

Flutter에서 언어적으로 필요한 것이 있을 때 Dart가 도와줄 수 있음. 반대도 성립한다고 함.

→ 그만큼 언어, 플랫폼의 지원이 빠를 수 있다고 함.

### 자체 그래픽엔진

Skia 라는 그래픽 엔진으로 렌더링

- OS 고유의 UI를 사용할 수 없다.

그래픽 엔진위에서 돌아가기 때문에 모든 픽셀을 수정할 수 있다고 함.

애니메이션, 커스텀 UI를 이용하여 브랜드만의 UI를 만들 수 있다고 함. - TikTalk

OS 고유의 스타일을 카피한 라이브러리가 있긴 함.(cupertino - ios style widget)

기본 설정은 materialize UI. 커스터마이징에 시간이 좀 든다고 함.

## Flutter의 핵심 Widget

Icon, UI 컴포넌트, 이미지 등 모든 것이 위젯으로 제공됨.

위젯을 조합하여 화면을 만듦.

680개 이상의 위젯들이 있음.

UI 배치(레이아웃), 애니메이션, 스타일 또한 위젯으로 개발. 이미 만들어진 위젯들을 잘 찾아 쓰는것이 중요.

[디자인 관련 라이브러리들](https://fluttergems.dev/widget-library-ui-framework/)(Material design, cupertino design(iOS))도 많음.

```jsx
class AddCartButton extends StatelessWidget{
 //...클래스 멤버
 // Button을 다른 위젯으로 감싸서, 즉 위젯을 조합해 커스텀 위젯을 만든다.
 @override
 build() {
  return Center( // AddToCartButton을 중앙으로 정렬하는 위젯
   child: Button( // 텍스트를 전달하는 새 커스텀 컴포넌트를 만든다.
    child: Text('Add to Cart'),
   )
  );
 }
}
```

build() 매서드처럼 라이프 사이클 매서드들이 존재.

Stateful 위젯과 Stateless 위젯을 조합하여 화면을 제작.

- 위젯 트리

{% include gallery id="widget_tree"%}

부모 위젯의 상태가 바뀌면 그 위젯과 하위 위젯들 모두 다시 그리는 방식. 복잡한 위젯은 상태 변화에 따라 퍼포먼스 이슈가 있을수도…?

## 그 밖의 장점에 대한 경험자의 글

2021.11에 작성한 **[지식iN 앱을 Flutter로 개발하는 이유](https://d2.naver.com/helloworld/3384599) 중에서….**

{% include gallery id="naver_jisikin"%}

- 빌드 : 빠르다.
- 렌더링 : 속도 괜찮고, 부드럽게 잘 실행된다
- 개발툴 : 디버깅, 리팩터링, 가독성 향상 등의 유용한 기능이 기본으로 탑재되어 있어서 편리하게 작업할 수 있었다.
- 테스트 : 유닛 테스트, 위젯 테스트, 융합 테스트(intergation test) 3단계로 나눠서 테스트할 수 있게 되어 있어서 괜찮았다.

자세한 내용은 위 링크에서…

## 체감

- 좋은 개발경험 : vscode extiontion이 잘되어 있음. vscode에 디버깅 패널, 프로파일 패널등을 제공. 앱도 vscode GUI로 실행 가능. 자동완성 기능 역시 좋음.
- dart가 typescript와 유사하여 실제로 금방 익힐 수 있음. 오랜만에 함수형 프로그래밍(React hooks)만 하다가 클래스형 프로그래밍 하니까 뭔가 새로움.
- 다트, 플러터 모두 공식문서들이 너무 잘 되어 있음. 특히 다트는 구몬 푸는 수준으로 잘 되어 있음.
- lint 규칙 설정이 너무 간단. esconfig, prettier 등의 작업들로 빡치는 일이 없음. 프로젝트 세팅이 간편.
- xcode GUI로 개발하면 볼 수 있는 형태의 코드들이 많았다. 앱 개발자들은 쉽게 할듯…?
- 위젯안에 엄청나게 많은 속성, 매서드들이 있어서 익숙해지려면 많이 써봐야할 것 같음. onTap등의 인터렉션에 대한 속성들도 이미 다 제공함.

    {% include gallery id="code"%}

- 플러터 역시 lock 파일로 라이브러리 패키지들을 관리. 라이브러리의 호환되는 버전의 range를 설정할 수 있다는 것이 있지만 나머지는 npm의 호환 문제와 비슷해 보임. 잘 모름

## 앞으로

전역 상태 관리, 위젯간의 상태 공유 등은 모름. → 플러터 아키텍처 공부하면 알 수 있을 것 같음.

{% include gallery id="forward"%}

앱의 MVVM 구조를 제대로 맛볼 수 있지 않을까…

## 관련링크

- 공식문서
  - [futter 공식문서 공부 영상 유튜브 재생목록](https://www.youtube.com/flutterdev)
  - [React Native 개발자를 위한 Flutter](https://flutter-ko.dev/docs/get-started/flutter-for/react-native-devs)
  - [Flutter for web developers](https://flutter-ko.dev/docs/get-started/flutter-for/web-devs)
  - [위젯 목록](https://flutter-ko.dev/docs/reference/widgets)
  - [다트, 플러터 라이브러리 검색](https://pub.dev/)
- [플러터 렌더링 원리에 대한 좋은 글](https://brunch.co.kr/@myner/5)
- [지식iN 앱을 Flutter로 개발하는 이유](https://d2.naver.com/helloworld/3384599)
- [Flutter를 위한 BLoC 아키텍쳐](https://tv.naver.com/v/29721159)
- **BLOC 패턴을 사용한 Flutter 프로젝트 아키텍쳐 설계 -** 영화 리스트 앱 만들기
  - [https://booiljung.github.io/technical_articles/flutter/state_management/architecture_your_flutter_project_using_bloc_pattern.html](https://booiljung.github.io/technical_articles/flutter/state_management/architecture_your_flutter_project_using_bloc_pattern.html)
  - <https://github.com/SAGARSURI/MyMovies>
- **[[Flutter] Skia가 뭐지?](https://landroid.tistory.com/14)**
