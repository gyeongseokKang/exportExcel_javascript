# exportExcel_javascript
<p align='center'>
    <img src="https://img.shields.io/badge/Javscript-ES6-yellow?logo=javascript"/>
    <img src="https://img.shields.io/badge/Plotly.js-v1.58.4-blue?logo=plotly">
    <img src="https://img.shields.io/badge/excel.js-v4.2.0-green?logo=excel.js">
    <img src="https://img.shields.io/badge/html2canvas.js-v1.0.0-green?logo=html2canvas">
</p>

* 기능 목표 : 대시보드에 있는 차트와 테이블을 Excel 파일로 떨궈주세요.
* 세부 목표 : 차트와 테이블은 이미지로 넣되, 테이블의 경우 전체 데이터를 보여주세요
* 구현 : 목표를 달성하기 위한 기본 테스트 레포.
* 설명글 : https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-image-data%EB%A5%BC-Excel%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-featexceljs



## 전체 로직

1. querySelectorAll로 차트가 그려진 div 찾기
2. html2canvas 라이브러리를 이용하여 이미지로 뽑아오기
3. 테이블에 입력할 데이터 넣기
4. buffer로 보내 Blob 파일 형식으로 만들어서 다운로드하기


## 사용 라이브러리

* exceljs - 자바스크립트에서 excel export가 가능하도록 해주는 라이브러리, export 뿐만 아니라 다른 기능들도 많음.
* html2canvas - html의 특정 영역을 canvas로 그려주는 라이브러리, excel에는 일반 img 태그가 달린 파일을 넣을 수 없어서 변환이 필요.
* plotlyjs - 데이터 시각화를 위한 라이브러리, 사용할수록 매력적인 시각화 라이브러리로, 다양한 차트, 다양한 언어, 다양한 프레임워크를 지원.

## 사용방법

1. git clone 후 open live server로 확인(VSC 추천)  
2. Download xlsx 버튼 클릭
3. excel 파일 확인

## 결과

### live server  
![image](https://user-images.githubusercontent.com/61446585/110482468-0c4f4d80-812c-11eb-8c70-895f769c3162.png)  

### export excel file  
![image](https://user-images.githubusercontent.com/61446585/110480657-140df280-812a-11eb-92b0-a1d9b971e30a.png)
![image](https://user-images.githubusercontent.com/61446585/110480713-2556ff00-812a-11eb-94cf-1a8d4bd66d86.png)
