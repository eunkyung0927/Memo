# 영화 리뷰 앱

영화 리뷰를 기록하는 web app

## 실행방법

`npm run start` : [http://localhost:3000](http://localhost:3000)로 확인

## 구현 기능
- 초기 리뷰 데이터 정렬 및 화면 렌더링
- 리뷰 데이터들 브라우저 탭이나 창 종료시에도 유지되도록 localStorage에 저장
- 리뷰 내역 정렬 방식 : 별점이 높은 순에서 낮은순, 별점이 같은 경우 제목 기준 A-Z,a-z,가-힣 순
- 리뷰의 별점만큼 별 갯수 노출
- 리뷰 제목 기반 검색기능 : 검색어 없는 경우 전체 데이터 렌더링
- 제목이나 한줄평 입력하지 않은 경우 예외처리

## 사용 기술
React.js, typescript

## 실행 화면

![Honeycam 2022-08-29 20-07-20](https://user-images.githubusercontent.com/28224655/187187945-7df9f933-d29b-4999-82e4-77b0e4df0472.gif)
