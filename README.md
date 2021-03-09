# exportExcel_javascript

* 기능 목표 : 대시보드에 있는 차트와 테이블을 Excel 파일로 떨궈주세요.
* 세부 목표 : 차트와 테이블은 이미지로 넣되, 테이블의 경우 전체 데이터를 보여주세요
* 구현 : 목표를 달성하기 위한 기본 테스트 레포.

## 전체 로직

1. querySelectorAll로 차트가 그려진 div 찾기
2. html2canvas 라이브러리를 이용하여 이미지로 뽑아오기
3. buffer로 보내 Blob 파일 형식으로 만들어서 다운로드하기


## 사용 라이브러리

1. exceljs - 자바스크립트에서 excel export가 가능하도록 해주는 라이브러리, export 뿐만 아니라 다른 기능들도 많음.
2. html2canvas - html의 특정 영역을 canvas로 그려주는 라이브러리, excel에는 일반 img 태그가 달린 파일을 넣을 수 없어서 변환이 필요.
3. plotlyjs - 데이터 시각화를 위한 라이브러리, 사용할수록 매력적인 시각화 라이브러리로, 다양한 차트, 다양한 언어, 다양한 프레임워크를 지원.

## 사용방법

git clone 후 open live server로 확인(VSC 추천)

## 결과

![image](https://user-images.githubusercontent.com/61446585/110480657-140df280-812a-11eb-92b0-a1d9b971e30a.png)
![image](https://user-images.githubusercontent.com/61446585/110480713-2556ff00-812a-11eb-94cf-1a8d4bd66d86.png)
