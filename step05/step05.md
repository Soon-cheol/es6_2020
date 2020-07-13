# 5주차

## 1장 준비

---

### 1-1 플러그인

- vetur : .vue 파일에서 문법 강조, 코드 자동완성, 디버깅, 린팅(Linting) 기능들을 제공합니다.
- Vue 2 Snippets : vetur 에서 지원하지 않는 Vue.js 2.0 문법 강조 및 자동 완성을 제공합니다.
- Vue-beautify: Vue.js 코드에 대한 정리 배치 기능을 제공합니다.
- Vue VSCode Snippets
- ES Lint

### 1-2 Vue CLI

Vue-CLI는 에반 유가 공식적으로 관리하는 커맨드라인 인터페이스 기반의 스캐폴딩 도구이다. 

Vue.js앱을 개발할 때 프로젝트의 폴더 구조를 어떻게 잡을 것인지 테스트, 필드, 의존성 부분에대한 셋팅을 제공해준다.


>스캐폴딩(Scaffolding)은 교수자가 학생에 대하여 적절한 교수학습적 도움을 제공함으로써 유의미한 학습을 수행할 수 있도록 하는 것으로 특히 학습자들로 하여금 자신의 현재 기능수준을 넘어서 다음 단계의 수준까지 이르도록 돕기 위해 제공되는 지원을 말한다.

```
npm install -g yarn @vue/cli (Windows)
sudo npm install -g yarn @vue/cli (Mac)
```

---

## 2장 Vue.js 기초

```html
<html>

<head>
    <meta charset="utf-8">
    <title>hello vue.js</title>
    <script src="http://unpkg.com/vue@2.5.16/dist/vue.js"></script>
</head>

<body>
    <div id="simple">
        <h2>{{message}}</h2>
    </div>
    <script tpye="text/javascript">
        var model = { // model 객체 생성
            message: 'Hello Vue.js World!'
        };

        var simple = new Vue({ // Vue 인스턴스 생성 -> Vue 객체, Vue Model 객체
            el: '#simple', // html element 바인딩
            data: model // model 객체 참조
            // data: {
            //     message: "Hello Vue.js!"
            // }
        })
    </script>
</body>

</html>
```

데이터(모델)가 변경 -> 뷰 모델 객체 -> HTML(View) 순으로 화면에 변경사항이 반영됩니다.

```js
{{ }} // 템플릿 표현식 = 보간법 = 콧수염 표현식
```
---

### 2-1 MVVM 패턴

>MVVM pattern은 Model-View-ViewModel의 약자로 소프트웨어 아키텍쳐 패턴이다.
>초기 UI 개발자들은 모든 코드 로직(이벤트 핸들링, 초기화, 데이터 모델)을 뷰에 작성했다. 
>모든 코드들을 뷰에 작성하다보니 뷰의 크기가 커지고, UI와 데이터 바인딩간의 의존성 문제가 일어나다보니
>개발자들의 협업 개발에서 많은 이슈가 일어나고 유지보수, 확장이 어려워졌다. 이를 해결하기 위해 사용자 인터페이스에
>해당하는 뷰(View)와 뷰에 표시되는 데이터(Model) 그리고 뷰(View)와 모델(Model) 사이에서 여러 비즈니스 로직을
>처리하는 뷰-모델(View-Model)로 분리하여, 유지보수를 쉽게하고 뷰(View) 처리에 다양한 기능을 사용할 수 있게 되었다.

1. Model (비즈니스 규칙, 데이터 접근, 모델 클래스)

2. View (사용자 인터페이스)

3. ViewModel (모델과 뷰 사이의 인터페이스)

예를 들어 사용자가 뷰에 있는 계산기 프로그램을 사용하여 결과값을 요청하는 버튼을 클릭했을 때, 

뷰모델이 요청받은 동작을 수행한다. 뷰모델의 연산 기능을 담당하는 명령어(메서드)는 연산 후 모델의 데이터 값을 변경시킨다.

만약 뷰모델의 속성값이 변경되면(모델의 데이터 값이 변경되면) 새로운 속성 값들은 데이터 바인딩(data binding)과

알림(notification)을 통해 자동적으로 뷰에 적용된다.

---

### 2-2 디렉티브

```js
v-bind // 단방향 디렉티브
v-model // 양방향 디렉티브
```

양방향 디렉티브는 뷰와 모델 객체의 값이 동기화가 되는 것을 의미합니다.

step02_1.html, step02_2.html

```js
v-show // display: none
v-if // undefinded
v-else 
v-else-if 
```
step02_3.html

```js
v-for 
```
step02_4.html, step02_5.html

---

### 2-3 계산형 속성

```js
computed
```
---

## 3장 Vue 인스턴스

Vue 인스턴스를 생성할 때 전달하는 속성들을 담은 객체를 옵션 객체라고 부릅니다.

```
el: '#simple',
data: model,
computed: {
    sum: function () {
        console.log('계산형 속성')
        var n = Number(this.num); // 숫자로 형 변환
        if (Number.isNaN(n) || n < 1) return 0; // NaN 값이거나 0이하의 값이면 0으로 리턴
        return ((1 + n) * n) / 2; // 공식
    }
}
```

data 옵션은 Vue 인스턴스가 관찰하는 데이터 객체를 의미하므로 변경 사항은 즉시 감지됩니다.

---

### 3-1 메서드

```js
methods: {
    sum: function () {
        ...
    }
}
```

step03_1.html

---

### 3-2 관찰 속성

```js
watch: {
    sum: function () {
        ...
    }
}
```

step03_2.html

---

### 3-3 Vue 인스턴스 라이프 사이클

  | 라이프 사이클 훅 | 설명 | 
  |---------|:---|
  | `beforeCreate` | vue 인스턴스가 생성되고 데이터에 대한 관찰 기능 및 이벤트 감시자 설정 전에 호출됩니다. |
  | `created` |  vue 인스턴스가 생성된 후에 데이터에 대한 관찰기능<br>계산적속성, 메서드,감시자 설정이 완료된 후 호출됩니다. |
  | `beforeMount` | 마운트가 시작되기 전에 호출됩니다. |
  | `mounted` | el에 vue 인스턴스에 데이터가 마운트된 후 호출됩니다. |
  | `beforeUpdate` | 가상 DOM이 렌더링,패치되기 전에 데이터가 변경될 때 호출<br>이 훅에서 추가적인 상태 변경을 수행할 수 있음, 하지만 추가적으로 다시 렌더링 되지 않음 |
  | `updated` | 데이터의 변경으로 가상 DOM이 다시 렌더링되고 패치된 후에 호출<br>이 훅이 호출되었을때는 이미 컴포넌트의 DOM이 업데이트된 상태<br>DOM에 종속성이 있는 연산을 이단계에서 수행할 수 있음. |
  | `beforeDestory` | Vue 인스턴스가 제거되기 전에 호출됩니다. |
  | `destory` | Vue 인스턴스가 제거되기 전에 호출됩니다. 이 훅 호출될 때는 Vue 인스턴스의 모든 디렉티브의 바인딩이 해체되고 이벤트 연결도 모두 제거 |
    
  - **인스턴스 라이프 사이클이란 뷰의 인스턴스가 생성되어 소멸되기까지 거치는 과정을 의미**합니다. <br>
    인스턴스가 생성되고 나면 라이브러리 내부적으로 다음과 같은 과정이 진행됩니다.
    - data 속성의 초기화 및 관찰 (Reactivity 주입)
    - 뷰 템플릿 코드 컴파일 (Virtual DOM -> DOM 변환)
    - 인스턴스를 DOM에 부착

    <img src="./lifecycle.png" max-width="1000px;">

---

## 4장 컴포넌트

---