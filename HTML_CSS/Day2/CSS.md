# HTML/CSS
## 1. CSS 란?
Cascading Style Sheet로 HTML 요소의 모양과 배치를 정하는 언이며, HTML 없이 단독으로는 사용 할 수 없음.
- 글자 색, 크기, 폰트
- 여백, 정렬, 위치
- 레이아웃 (화면에 요소를 어떻게 배치할지)
- 반응형 디지인 (화면 크기에 따라 레이아웃이 자동으로 바뀌는 디자인)

<br><br>

## 2. 속성 작성 방식
### 우선순위 : Inline > Internal > External

### Inline CSS
HTML 태그 내부의 style 속성을 사용하여 직접 CSS 코드를 작성하는 방식으로 우선순위가 import 다음으로 높음 <br>
<태그 style="속성1: 값1; 속성2: 값2;">내용</태그>

### Internal CSS
HTML 문서 내부의 \<head> 태그 안에 \<style> 태그를 작성하여 스타일을 적용하는 방식 <br>
\<head><br>
  \<style> <br>
    h1 <br>
    { <br>
    color=~~ <br>
    } <br>
  \</style><br>
\</head><br>

### External CSS 
HTML 문서 외부에 별도의 .css 확장자 파일을 HTML 문서에서 불러와 적용하는 방식 <br>
- 외부에서 링크 복붙하는 경우
- 폴더 내 파일 업로드 하는 경우 <br>
\<link rel="stylesheet" href="링크 복붙 or 파일경로(./)">

<br><br><br>

## 3. CSS Selector(선택자)
Selectors는 어떤 HTML 요소에 스타일을 적용할 지 지정하는 규칙임

### 기본 셀렉터
- 전체 셀렉터: *
- 태그 셀렉터: div
- id 셀렉터: #아이디명 
- class 셀렉터: .클래스명

### 결합자(관계) 셀렉터
- 자손 선택자: div p <br>
div 안에 있는 모든 p (깊이 상관 없음)

- 자식 선택자: div > p<br>
div의 바로 아래 자식 p만

- 인접 형제: div + p<br>
div 바로 다음에 오는 p 하나

- 일반 형제: div ~ p<br>
div 뒤에 오는 모든 형제

### 속성 셀렉터
- a[href]: href속성을 가진 a태그 선택
- input[type="text"]: type 속성이 "text"인 input 태그 선택

### 가상 클래스 셀렉터
요소의 상태를 기준으로 선택함
- :hover (마우스를 요소 위에 올렸을 때)
- :focus (요소가 포커스를 가졌을 때)
- :active (요소를 클릭하고 있는 순간)
- :nth-child() (부모 기준으로 n번째 자식 요소 선택)

<br><br><br>

## 4. style 속성
### text 관련
- font-size: 폰트 크기 설정
- font-weight: 폰트 강조, 볼드체
- text-align: 텍스트 위치 



### box model
- margin: 테두리 바깥쪽의 외부 여백으로, 주변의 다른 HTML 요소와 떨어진 간격을 조절할 때 사용 (투명하며 배경색이 적용되지 않음)

- border: 콘텐츠와 패딩을 감싸는 테두리 선

- padding: 콘텐츠와 테두리 사이의 내부 여백으로, 콘텐츠가 테두리에 너무 붙지 않도록 간격을 줄 때 사용 (배경색이나 배경 이미지가 패딩 영역까지 적용됨)

- content: 텍스트, 이미지, 영상 등 실제 내용이 들어가는 가장 핵심적인 영역

< box-sizing>
- width: Content 영역의 가로 크기를 지정. 지정하지 않을 경우, 화면크기를 조정할 때 컨텐츠의 크기가 계속 바뀜

- height: Content 영역의 세로 크기를 지정. 지정하지 않을 시 폰트 크기에 따라 적용됨

- border-box: 지정한 width와 height 안에 Content, Padding, Border가 모두 포함됨. 패딩이나 보더를 늘려도 전체 박스 크기가 고정됨





