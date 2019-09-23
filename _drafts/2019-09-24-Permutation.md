---
layout: posts
title:  "[Algorithm] 순열(Permutation) & 조합(Combination) 공부"
categories: [Algorithm]
tags: [Permutation]
comments: true
---

> 서로 다른 n개의 원소에서 r개를 ***중복없이*** 골라 ***순서에 상관있게*** 나열하는 것을 n개에서 r개를 택하는 순열이라고 한다

참고 : [조합과 순열 알고리즘, 파이썬으로 구현하기](https://shoark7.github.io/programming/algorithm/Permutations-and-Combinations)

<center>
<br>
<img src="/assets/images/posts/algorithm/Permutation.png" style="max-width: 350px;" />
</center>

<hr>
<br>
<br>
<center>
<h2>Python</h2>
</center>
<br>

파이썬의 경우 라이브러리가 있어서 바로 가져다 쓸 수 있다. 하지만 직접 구현한 코드를 볼 필요가 있다. 
중간에 로직을 추가하여 결과값을 다 돌지 않고도 Loop를 도는 중간에 답을 찾을 수 있기 때문이다. 
[2020 라인 SW개발 DEVEL-UP 인턴십](https://seunghyum.github.io/codingtest/2019-09-22-Line-recruit) 2번 문제에서 경험함.

<br>
<center>
<h3>직접 구현한 Python 코드</h3>
</center>
<br>

아래 코드는 ([조합과 순열 알고리즘, 파이썬으로 구현하기](https://shoark7.github.io/programming/algorithm/Permutations-and-Combinations)에서 퍼옴)

```python
def permutation(arr, r):
    arr = sorted(arr) # 순서대로 출력하기 위해 데이터 정렬
    used = [0 for _ in range(len(arr))] # 각 자리수에 대한 사용여부 통계
    # : [0 for _ in range(len("abcd"))] => [0,0,0,0].

    def generate(chosen, used):
        if len(chosen) == r:
            print(chosen)
            return

        for i in range(len(arr)): 
            if not used[i]:
                chosen.append(arr[i])
                used[i] = 1
                generate(chosen, used)
                used[i] = 0
                chosen.pop()
    generate([], used)


>>> permutation('ABCD', 2)
# =>  ['A', 'B']
#     ['A', 'C']
#     ['A', 'D']
#     ['B', 'A']
#     ['B', 'C']
#     ['B', 'D']
#     ['C', 'A']
#     ['C', 'B']
#     ['C', 'D']
#     ['D', 'A']
#     ['D', 'B']
#     ['D', 'C']
>>> permutation([1, 2, 3, 4, 5], 3)
# [1, 2, 3]
# [1, 2, 4]
# [1, 2, 5]
# [1, 3, 2]
# [1, 3, 4]
# ... 중략
```

<hr>
<br>
<center>
<h3>라이브러리를 사용한 Python 코드 </h3>
</center>
<br>

참고 : [순열과 조합 라이브러리를 사용해보자 [Python]
](https://ghwlchlaks.github.io/permutation-combination-python)

```python
from itertools import permutations # 순열
from itertools import combinations # 조합
from itertools import product # 중복허용 순열
```


### 순열 : 중복 허용 X.

```python
from itertools import permutations
per = permutations(["빨","주","노","초"],2)
print(list(per))
#=> [('빨', '주'), ('빨', '노'), ('빨', '초'), ('주', '빨'), ('주', '노'), ('주', '초'), ('노', '빨'), ('노', '주'), ('노', '초'), ('초', '빨'), ('초', '주'), ('초', '노')]
#순열 : 중복 허용o
```

product는 중복을 허용한 방법입니다. 이때 repeat으로 인자를 설정해야합니다!

```python
from itertools import product
per1 = product((["빨","주","노","초"]), repeat=2)
print(list(per1))
#=> [('빨', '빨'), ('빨', '주'), ('빨', '노'), ('빨', '초'), ('주', '빨'), ('주', '주'), ('주', '노'), ('주', '초'), ('노', '빨'), ('노', '주'), ('노', '노'), ('노', '초'), ('초', '빨'), ('초', '주'), ('초', '노'), ('초', '초')]
```

조합은 nCr로 표현하는데요~ n개중에 r개를 뽑는 수 입니다.
나열하는 경우가 없는 것에서 순열과 차이가 있죠?

## 조합 : 중복 허용x combinations는 중복을 허용하지 않습니다.

```python

```python
from itertools import combinations
print(list(combinations('빨주노초',2)))
#=> [('빨', '주'), ('빨', '노'), ('빨', '초'), ('주', '노'), ('주', '초'), ('노', '초')]
```


## 조합 : 중복 허용o combinations_with_replacement는 중복을 허용한 방법입니다.

```python
from itertools import combinations_with_replacement
print(list(combinations_with_replacement("빨주노초",2)))
#=> [('빨', '빨'), ('빨', '주'), ('빨', '노'), ('빨', '초'), ('주', '주'), ('주', '노'), ('주', '초'), ('노', '노'), ('노', '초'), ('초', '초')]
```


<hr>
<center>
<h2>Javascript</h2>
</center>
<br>

```javascript

```