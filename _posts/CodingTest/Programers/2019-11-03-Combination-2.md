---
layout: posts
title:  "[CodingTest] Combination(조합) 문제풀이 2"
categories: [CodingTest]
tags: [Javascript, Combination]
comments: true
---

## 문제 

: 옷 조합구하기

- 주어지는 clothes 배열을 조합하여 입을 수 있는 옷 조합 개수를 구하기
- 제한조건
  - 최소 1개는 입어야함.
  - 같은 카테고리의 옷은 못입음
- 입력설명

    ```
    [ [ <옷>, <옷 카테고리> ] ... ]
    ```

|     clothes    |  Result |
|-------------|---------|
| \[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]   |    5    |
| \[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]] |    3    |

## 작성한 답

```javascript
function solution(clothes) {
    let stats={}
    clothes.forEach(e => {
        if(!stats[e[1]]) stats[e[1]] = 1
        else stats[e[1]]++;
    })
    const keys = Object.keys(stats)
    const numOfkeys = keys.length
    
    let combinationOfClothes=[]
    function getCombination(array, size, start, initialStuff)  {    
        if(initialStuff.length >= size) {
            combinationOfClothes.push(initialStuff);
        } else {
            let i;
            for(i=start;i<array.length;++i) {
                getCombination(array, size, i+1,initialStuff.concat(array[i]))
            }
        }
    }
    let answer=0
    keys.forEach((k)=>{
        answer += stats[k]
    })
    
    if(numOfkeys==1) return answer

    for(let i=2;i<=numOfkeys;i++) {
        getCombination(keys,i,0,[])
    }

    combinationOfClothes.forEach(e => {
        e.forEach(k => {
            answer += stats[k]
        })
    })
    return answer
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"],["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]) // 24
```