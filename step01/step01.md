# 1주차

## 1장 ECMAScript

### 1-1 ECMAScript 탄생

자바스크립트는 1990년대 Netscape 회사의 Brendan Eich 라는 사람에 의해 최초 개발되었다.<br />
자바스크립트가 잘 되자, MS에서 Jscript라는 언어를 개발해 IE에 탑재하였는데, 이 두 스크립트가 너무 제각각이라,<br />
표준이 필요하게 되었다.<br />
표준을 위해 자바스크립트를 ECMA( European Computer Manufacturers Association ) 라는 정보와 통신시스템의<br />
비영리 표준 기구에 제출하였고 표준에 대한 작업을 ECMA-262란 이름으로 1996년 11월에 시작해 1997년 6월에<br />
채택되었다.

```
Ecma 인터내셔널의 SCMA-262 기술 규격에 의해 정의된 그리고 표준화 된 스크립트 프로그래밍 언어
```

<a href="https://www.youtube.com/watch?v=wcsVjmHrUQg" target="_blank">관련영상</a><br />
<a href="https://kangax.github.io/compat-table/es6/" target="_blank">브라우저 지원 현황</a>

---

### 1-2 JavaScript 와 ECMA Script

둘 다 뒤에 Script라는 키워드가 붙지만, 자바스크립트는 언어이고, ECMA 스크립트는 규격, 표준이다.

---

### 1-3 ES 버전에 따른 특징

ES3 (1999)

1. 함수단위 스코프
2. 호이스팅
3. 클로저
4. 프로토타입

ES5 (2009)

1. 배열에 forEach, map, filter, reduce, some, every와 같은 순환 메소드 지원 ( map, forEach 차이 )
2. Object에 대한 getter / setter 지원, Object.keys() 메소드를 이용한 for in 메소드도 대체
3. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode" target="_blank">자바스크립트 strict 모드 지원</a>

```
엄격한 모드는 일부 이전에 허용되었던 실수를 오류로 바꿔 놓습니다. 자바 스크립트는 초보 개발자에게 쉬운 것이 되도록
설계되었으며, 때로는 오류를 일으킬만한  동작을 에러없이 시행합니다. 때때로 이것은 즉각적인 문제를 해결하지만, 때때로
이것은 더 심각한 문제를 만들어 냅니다. 엄격한 모드는 이러한 실수를 오류로 처리해서 그것을 발견하고 즉시 고칠 수 있도록
합니다.
```

5. JSON 지원 ( 과거에는 XML을 사용 )

ES6 (2015)

1. let, const 키워드 추가
2. arrow 문법 지원
3. iterator / generator 추가
4. module import / export 추가
5. Promise 도입

ES 8 (2017)

1. async — await

---

## 2장 자바스크립트 개발도구

1. <a href="https://nodejs.org/ko/" target="_blank">Node 설치</a>

- node.js는 JavaScript 기반으로 구성된 서버 사이드 서비스를 JavaScript로 구현할 수 있게 만든 런타임이고,<br />
  npm은 node.js 기반의 모듈을 모아둔 집합 저장소이다. npm은 Node Package Manager 또는 Node Package Modules라고도 한다.

2. ES Lint

```
npx eslint app.js
```

```
eslint --init
```

3. Prettier
