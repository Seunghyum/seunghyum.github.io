---
layout: posts
title:  "SGIS-shpToGeojson"
categories: [데이터 가공]
tags: [ShapeFile, GeoJson, TopoJson]
toc: true
---


## SGIS에서 받은 지도데이터(.shp)를 geojson으로 변경하는 작업 내용

2018년에 쓴 글을 재업로드하였습니다.

### 지도데이터 가공 과정
- shapefile을 simplify를 진행. 
  - 우선 mapshaper라는 shp파일 에디팅 툴로 편집. [GUI온라인툴](http://mapshaper.org/)도 있음. 본인은 node CUI로 진행. 

    ```
    $ mapshaper -i 전환할 파일 \
                encoding=euc-kr  \
                -simplify weighted 0.5% \ // 0.5%로 단순화
                -o format=shapefile \
                바뀐 파일명.shp
    ```

- shapefile(R) -> geojson 전환
  - [ogr2ogr npm 라이브러리](https://www.npmjs.com/package/ogr2ogr)를 사용 
    - 커맨드 : 
    ```
    $ ogr2ogr -f GeoJSON -t_srs crs:84 [geo json파일명] [shp파일명] 
    ```
    - 중요설명 : -t_srs crs:84 로 해줘야 제대로 projection이 됨(지도 투영법).
    - -> 0.5%로 했더니 3~4MB인데 렌더링 시 느리다면 더 작게하는 것을 추천
    - -> mapshaper로도 geojson을 만들 수 있지만 투영법 옵션이(-proj) 잘 안먹혀서 ogr2ogr, geo2topo를 적용함.



**만일 geojson에서 한글이 깨져서 나오는 경우**
- 한글인코딩 문제
  - shpfile의 인코딩 에러. QGIS를 설치(로컬에서 shpfile을 수정할 수 있음)
  - QGIS 상단네비게이션 바의 "속성 테이블" 열기를 클릭해보면 한글 깨지는 것을 확인가능.
  - 링크 로 들어가서 지시대로 하면 shpfile 인코딩에러 수정.... 아... 내 삽질.... 
  - shpfile로 다운로드는 해당 레이어를 우클릭  후 다른이름으로 저장하기 누르면 됨. 이후 다시 mapshaper, ogr2ogr 하면 됨.
- projection(좌표계) 문제
  - 막상 위의 한글문제를 해결해도 geojson파일을 열어보면 좌표계가 127.023168001711184, 37.578041688607954 의 형태가 아님. 
  - 이 문제는 한글 인코등 해결처럼 속성에서 좌표계를 스크롤 맨 밑의 사용자 정의 좌표계를 
    
    ``` 
    +proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs 
    ```

    로 정의 해야함. 정의한 다음 다시 다른 이름을 다운로드 진행.

**geojson -> topojson으로 전환**
- npm topojson-client 설치
- 커맨드 : geo2topo [geo-json파일] > [topo-json파일]
- topojson 라이브러리는 현재 커맨드라인 툴이 사용불가. 반드시 topojson-client 설치 후 geo2topo로 할것. -Note also that topojson/topojson is no longer the command-line tools for manipulating TopoJSON — that’s all been put in the topojson/topojson-client repository.(출처)

-> 0.5%로 했더니 3~4MB인데 렌더링 시 느리다면 더 작게하는 것을 추천

-> mapshaper로도 topojson, geojson을 만들 수 있지만 투영법 옵션이(-proj) 잘 안먹혀서 ogr2ogr, geo2topo를 적용함.

- **느낀점 및 팁**
  - gis데이터 가공은 projection(투영법) 설정이 중요.


- **활용가능한 결과물**
  - 통계청 파일 및 GeoJson 가공 데이터 파일
  - 이름_simple.shp : 0.5%로 simplify한 shapefile
  - 이름_geo.json : 가공한 GeoJson 파일
  - index.html : 예제 코드 [browser-sync](https://browsersync.io/) 같은 툴로 Application 형태로 띄워야 에러가 안남. 이유는 모르겠지만 포트로 안 띄우면 에러.
  
- **주의사항**
  - geojson까지만 변경함. topojson까지는 변경하지 않음.