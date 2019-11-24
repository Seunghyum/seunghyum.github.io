---
layout: posts
title:  "[Git] Git Command 정리"
categories: [Git]
tags: [Git Command]
comments: true

gallery_git_merge_vs_rebase:
  - url: /assets/images/posts/git_merge_vs_rebase.png
    image_path: /assets/images/posts/git_merge_vs_rebase.png
gallery_git_three_tree:
  - url: /assets/images/posts/git_three_tree.png
    image_path: /assets/images/posts/git_three_tree.png
---

## Git 시스템 이해하기

> 모든 깃 히스토리는 ```$ git init```을 한 로컬에서 .git 폴더에서 관리됨. <br>
> Git의 주목적은 프로젝트의 스냅샷을 지속적으로 저장하는 것이다. 트리 세 개를 사용해 더 나은 상태로 관리한다.

펌 : [7.7 Git 도구 - Reset 명확히 알고 가기](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Reset-%EB%AA%85%ED%99%95%ED%9E%88-%EC%95%8C%EA%B3%A0-%EA%B0%80%EA%B8%B0#_git_reset)

|     트리    |                역할               |
|------------|----------------------------------|
|     HEAD   | 마지막 커밋 스냅샷, 다음 커밋의 부모 커밋 |
|    Index   |         다음에 커밋할 스냅샷          |
| Working Directory |     샌드박스. 지금 작업하고 있는 위치    |


{% include gallery id="gallery_git_three_tree"%}

### 세 개의 트리

Git을 서로 다른 세 트리를 관리하는 컨텐츠 관리자로 생각하면 reset 과 checkout 을 좀 더 쉽게 이해할 수 있다. 여기서 “트리” 란 실제로는 “파일의 묶음” 이다. 자료구조의 트리가 아니다 (세 트리 중 Index는 트리도 아니지만, 이해를 쉽게 하려고 일단 트리라고 한다).

Git은 일반적으로 세 가지 트리를 관리하는 시스템이다.

### HEAD

HEAD는 현재 브랜치를 가리키는 포인터이며, 브랜치는 브랜치에 담긴 커밋 중 가장 마지막 커밋을 가리킨다. 지금의 HEAD가 가리키는 커밋은 바로 다음 커밋의 부모가 된다. 단순하게 생각하면 HEAD는 *현재 브랜치 마지막 커밋의 스냅샷*이다.

### Index

Index는 바로 다음에 커밋할 것들이다. 이미 앞에서 우리는 이런 개념을 “Staging Area” 라고 배운 바 있다. “Staging Area” 는 사용자가 git commit 명령을 실행했을 때 Git이 처리할 것들이 있는 곳이다.

먼저 Index는 Working Directory에서 마지막으로 Checkout 한 브랜치의 파일 목록과 파일 내용으로 채워진다. 이후 파일 변경작업을 하고 변경한 내용으로 Index를 업데이트 할 수 있다. 이렇게 업데이트 하고 git commit 명령을 실행하면 Index는 새 커밋으로 변환된다.

Index는 엄밀히 말해 트리구조는 아니다. 사실 Index는 평평한 구조로 구현되어 있다. 여기에서는 쉽게 이해할 수 있도록 그냥 트리라고 설명한다.

### Working Directory

마지막으로 Working Directory를 살펴보자. 위의 두 트리는 파일과 그 내용을 효율적인 형태로 .git 디렉토리에 저장한다. 하지만, 사람이 알아보기 어렵다. Working Directory는 실제 파일로 존재한다. 바로 눈에 보이기 때문에 사용자가 편집하기 수월하다. Working Directory는 샌드박스로 생각하자. 커밋하기 전에는 Index(Staging Area)에 올려놓고 얼마든지 변경할 수 있다.

---

### Revert vs Reset

- git revert : cherry-pick의 반대. 해당 커밋을 되돌리는 커밋을 새로 생성한다. - [예제](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%EA%B3%A0%EA%B8%89-Merge#_reverse_commit)
- git reset --hard ```<이전 커밋>```
  - HEAD의 브랜치를 지정한 위치로 옮긴다.
  - index를 HEAD의 내용으로 바꾼다.
  - working directory를 index의 내용으로 완전히 바꾼다.
: 이전 커밋으로 내용을 완전히 바꿀때는 reset을 쓴다. 하지만 해당 커밋이 다른 사람들과 공유하고 있는 히스토리이라면 안쓰는게 좋다. [rebase의 위험성](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0#_rebase_peril) 참고.
  
---

## Rebase의 활용

- 커밋 메시지만 수정하기
- 커밋 메시지들 병합하기
- 병합하기 (아래의 병합 전략 - **Merge vs Rebase 참고**)

### 커밋 메시지만 수정하기

[참고](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%EB%8B%A8%EC%9E%A5%ED%95%98%EA%B8%B0#_changing_multiple)

```
$ git rebase -i HEAD~3
```
```
pick f7f3f6d changed my name a bit
pick 310154e updated README formatting and added blame
pick a5f4a0d added cat-file

# Rebase 710f0f8..a5f4a0d onto 710f0f8
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

1. 수정할 커밋들만 pick -> edit으로 수정.
2. ```commit --amend``` 으로 커밋 내용을 수정
3. ```rebase --continue```으로 다음 edit설정한 커밋으로 넘어감.

### 커밋 메시지들 병합하기

위의 예제에서 수정할 커밋들만 ```pick``` -> ```squash``` or ```fixup```으로 수정.

## 병합 전략 - Merge vs Rebase

{% include gallery id="gallery_git_merge_vs_rebase"%}

### Merge

> Merge 브랜치에서 사용하는 전략은 각 브랜치의 마지막 커밋 두 개와 공통 조상의 총 3개의 커밋을 이용하는 3-way merge를 수행하여 새로운 커밋을 만들어내는 것입니다. - [Git Rebase 활용하기](https://velog.io/@godori/Git-Rebase)

### Rebase

> 연속해서 ```git cherry-pick``` 하는 효과. base를 병합하고자하는 브랜치의 커밋들로 채우고, 그 이후 나의 커밋들을 그 위에 올려놓는 형태. 

---

## Rebase vs Stash

Rebase : 커밋한 것들을 기준으로 작업함.
Stash : add 하기 전의 변경사항들을 대상으로 함.

---

## 커맨드 정리

- git shortlog : 한줄짜리 로그
- git blame : 파일의 각 코드 줄마다 누가 언제 커밋을 했는지 히스토리 추적
- git show ```<commit-id>``` :  commit-id에 해당하는 커밋 정보를 확인함. 생략시 HEAD의 가장 최신 커밋을 확인함
- git cherry-pick : 원하는 커밋만 가져오기 - [참고](https://git-scm.com/book/ko/v2/Appendix-C%3A-Git-%EB%AA%85%EB%A0%B9%EC%96%B4-Patch-%ED%95%98%EA%B8%B0)
- git format-patch ```<commit-id>``` : 여러 커밋을 patch파일로 만들기(주로 오픈소스 관리자(Committer)에게 이메일로 주고 패치해달라고 할 때 사용한다고 함.)
- git am : patch 파일을 적용할때 사용함.
- git fetch : 원격 저장소의 데이터를 로컬에 가져오기만 하기.
- git pull : ```git fetch``` + ```git merge```
- git stash : tracking(이미 커밋한 파일들)중인 파일들의 변경사항들을 임시 저장할 수 있음. 
