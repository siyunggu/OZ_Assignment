# JS

## 1. DOM(Document Object Model) 이란?
HTML 문서를 JavaScript가 다룰 수 있게 만든 객체 구조로, JS는 DOM객체를 조작해서 화면을 변경함 (HTML을 직접 수정하는 것이 아님)

### Selector(선택자)로 DOM 요소 가져오기
- document.querySelector() <br>
DOM선택- 선택자가 여러개라면 첫번째 요소만 매칭됨

- document.querySelectorAll() <br>
DOM선택- 선택자 여러개 선택 가능

- document.getElementById()<br>
DOM선택- 특정 id 속성값을 가진 요소만 매칭됨

<br><br><br>

## 2. Event 란?
웹 페이지에서 발생하는 모든 동작이나 상태 변화로, 주로 사용자의 행동에 의해 발생하지만, 브라우저 자체 동작도 포함함
- 사용자 행동 <br>
click, input, keydown, keyup (키보드 입력), scroll

- 브라우저 동작 <br>
load(페이지 로드), DOM Content Loaded(DOM 로드 완료), resize(창 크기 변경)

<br><br><br>

## 3. EventListener(이벤트 리스너)
### EventListener란?
이벤트 리스너를 등록하여 이벤트를 처리하는것으로, 특정 요소에 특정 이벤트가 발생하면 지정한 함수가 실행됨

### EventListener를 사용하는 목적, 이유
- 사용자의 행동을 감지해서 상호작용을 구현
- 정적인 페이지를 동적인 웹 애플리케이션으로 변화
- 화면(UI)과 로직을 동적으로 제어

### EventListener 정의하기
- addEventListener(이벤트, 함수)

### EventListener 응용
- 선택자.addEventListener(<br>
    "이벤트", fn<br>
)<br>

- 선택자.addEventListener(<br>
    "이벤트", () => fn내용작성<br>
)<br>

- 선택자.addEventListener(<br>
    "이벤트",<br>
    () => {fn내용작성}<br>
)

- if를 추가할 수도 있음



## 4. 마우스 감지란?
마우슬 올리면 어떤 함수가 실행되게 함 <br>
ex) 마우스를 올리면 텍스트가 오렌지색, 내리면 검정색이 되도록 함

## 5. 화살표 함수란?
짧고 간결하게 함수를 정의하기 위한 문법으로 function 키워드 대신 => 를 사용함


