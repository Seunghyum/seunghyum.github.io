---
layout: posts
title:  "[CodingTest] 일련의 숫자들 중 비어있는 값찾기"
categories: [CodingTest, DailyProgramming]
tags: [Javascript]
comments: true
---

## 문제
이 문제는 

주어지는 정수 배열은 1이 공차인 일련의 숫자.  
이어지는 값이 중 일련의 숫자값이 가장 길고 
1. 값이 비었거나
2. 가장 작은 이어지는 값을 찾아라.


입력값 : integer array
주의사항 : 중복값, 음수도 포함될 수 있음.

## 예시
```
[3, 4, -1, 1] => 2

[1, 2, 0] => 3
```

## 내 풀이법
```javascript
// O(logN)
function solution(arr) {
  let sortedArr = arr.sort((a,b) => a - b),
      longestNumberIdx = 0,
      longestNumberLength = 0,
      lengthNumbering = 1; // logN

  for(let i=0;i<sortedArr.length;i++) { // n
    if(Math.abs(sortedArr[i+1] - sortedArr[i]) == 1) {
      lengthNumbering += 1;
      if(i == sortedArr.length-2) {
        longestNumberIdx = sortedArr.length-1;
        longestNumberLength = lengthNumbering;
      }
    } else if(Math.abs(sortedArr[i+1] - sortedArr[i]) == 0 || sortedArr[i+1] > 0) {
      lengthNumbering = 1;
      if(longestNumberLength < lengthNumbering) {

        longestNumberIdx = i;
        longestNumberLength = lengthNumbering;
      }
    } else {
      lengthNumbering = 1;
    }
  }
  let index = longestNumberIdx - longestNumberLength +1
  return sortedArr[index] > 0 ? index : sortedArr[longestNumberIdx] + 1
}

// 테스트용 데이터
solution([-1, 1, 3, 4])
solution([1, 2, 0])
solution([1, 2, 3, 4])
solution([1, 2, 3, -2,-3]) 
solution([-1,-2,-3,1,2]) 
solution([1,2,3,3,4]) 
solution([ 2, 3, 4, 5, 5, 6, 7 ])
```

1. 루프를 돌며 연속된 수가 가장 많은 배열의 마지막 엘리먼트의 인덱스(longestNumberIdx), 연속되는 길이(longestNumberLength)를 구하고
마지막에 해당 배열의 첫 엘리먼트 -1의 값이 양수면 반환,  
음수면 배열의 마지막 엘리먼트의 +1를 반환하는 형식  
으로 풀었다.  
  
이렇게 풀었을때 중복되는 값(duplicates)의 값을 걸러내지 못했다.  
계속 if문으로 예외처리를 해주며 풀어야할 것 같아 좋은 풀이법이 되지 못했다.

## 좋은 풀이법
문제의 복잡성을 위해 양수 이상일때의 숫자만 구하도록 하는 방법이 좋다.


```javascript
function solution(nums) {
  nums.forEach((num, i)=>{
    console.log("***num : ", num)
    console.log("***i : ", i)
    while (i + 1 != nums[i] && 0 < nums[i] && nums[i] <= nums.length) {
      let v = nums[i];
      console.log(`before nums[${i}] : ${nums[i]}, nums[${v - 1}] : ${nums[v - 1]}`)
      // nums[i] = nums[v - 1];
      // nums[v - 1] =  v;
      [nums[i], nums[v - 1]] = [nums[v - 1], nums[i]]
      console.log(`after nums[${i}] : ${nums[i]}, nums[${v - 1}] : ${nums[v - 1]}`)
      if(nums[i] == nums[v - 1]) break;
    }
  });
  console.log("nums : ", nums)
  for(let i=1;i<=nums.length; i++) {
    console.log(`${nums[i]} != ${i}`)
    if(nums[i] != i) return i;
  }
  return nums.length + 1;
}
```

