# 4주차

## 11장 예외와 에러 처리

---

### 11-1 try…catch

- 'try…catch' 문법은 'try’와 'catch’라는 두 개의 주요 블록으로 구성됩니다.

```js
try {
  // 코드...
} catch (err) {
  // 에러 핸들링
}
```

<img src="./try.JPG">

- 에러가 없는 예시: (1)과 (2)를 alert 창에 보여줌

```js
try {
  alert("try 블록 시작"); // (1) <--

  // ...에러가 없습니다.

  alert("try 블록 끝"); // (2) <--
} catch (err) {
  alert("에러가 없으므로, catch는 무시됩니다."); // (3)
}
```

<img src="./try_ok.JPG">

- 에러가 있는 예시: (1)과 (3)을 보여줍니다.

```js
try {
  alert("try 블록 시작"); // (1) <--

  lalala; // 에러, 변수가 정의되지 않음!

  alert("try 블록 끝(절대 도달하지 않음)"); // (2)
} catch (err) {
  alert(`에러가 발생했습니다!`); // (3) <--
}
```

<img src="./try_error.JPG">

try..catch는 유효한 코드에서 발생하는 에러만 처리할 수 있습니다.

이런 에러를 '런타임 에러(runtime error)' 혹은 '예외(exception)'라고 부릅니다.
