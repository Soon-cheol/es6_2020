# 3주차

## 8장 배열과 배열 처리

---

### 8-1 배열의 특징

- 배열 리터럴은 쉼표로 구분한 값을 대괄호([])로 묶어서 표현합니다.

```js
var evens = [2, 4, 6, 8];
```

- 배열의 인덱스 ( 객체와의 차이점 )

```js
evens[0] = 2;
evens[1] = 4;
evens[2] = 6;
evens[3] = 8;
```

- 비균질적

한 배열의 요소가 모두 같은 타입일 필요가 없습니다.

```js
let arr = [1, '2', {}, [4, 5]];
```

- 배열의 길이보다 큰 인덱스를 할당할 경우 자동으로 이전 인덱스들에는 undefined 가 채워집니다.

```js
arr[10] = 10;
```

---

### 8-2 length 프로퍼티

`배열의 길이`를 나타내는 속성이면서 인덱스와는 다르게 1부터 시작합니다.

```js
arr.length;
arr.length = 2;
```

---

### 8-3 배열 요소 조작

```js
console.log([]);
```

### 8-3-1 배열의 처음이나 끝에 요소 하나 추가거나 제거하기

- push(매개변수) : 배열 마지막 인덱스에 값 추가 (원본 수정)

- pop() : 배열 마지막 인덱스에 제거 (원본 수정)

- unshift(매개변수) : 배열 맨 앞에 값 추가 (원본 수정)

- shift() : 배열 맨 앞 제거 (원본 수정)

```js
arr = ['b', 'c', 'd'];
arr.push('e');
arr.pop();
arr.unshift('a');
arr.shift();
```

---

### 8-3-2 배열의 끝에 여러 요소 추가하기

- concat (사본 반환)

```js
let arr2 = arr.concat('e', 'f', 'g');
arr;
```

---

### 8-3-3 배열 일부 가져오기

- slice( '시작인덱스' , '가져올 인덱스 - 1' [생략 가능] ) (사본 반환)

  - 두 번째 매개변수를 생략할 경우 마지막 인덱스까지 반환합니다.

  - 음수 인덱스를 사용할 경우 배열의 마지막에서 -1 부터 시작합니다.

```js
arr = [1, 2, 3, 4, 5];
arr2 = arr.slice(3);
arr2 = arr.slice(2, 4);
arr2 = arr.slice(-2);
arr2 = arr.slice(1, -2);
arr2 = arr.slice(-2, -1);
```

---

### 8-3-4 임의의 위치에 요소 추가하거나 제거하기

- splic( '시작인덱스' , '제거할 숫자' [생략 가능] ) (원본 수정)

  - 2번째 매개변수를 생략할 경우 모두 삭제

```js
arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);
arr.splice(5, 0, 6);
arr.splice(1, 2);
arr.splice(2, 1, 'a'. 'b');
```

---

### 8-3-5 배열 안에서 요소 교체하기 `( +ES6 )`

- copyWithin( '복사한 요소를 붙일 위치' , '복사를 시작할 위치', '복사를 끝낼 위치 - 1 [생략 가능] ) (원본 수정)

  - 음수 인덱스를 사용할 경우 배열의 마지막에서 -1 부터 시작합니다.

```js
arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // arr의 2부터 시작해서 복사한 3,4 를 붙임
arr.copyWithin(2, 0, 2);
arr.copyWithin(0, -3, -1);
```

---

### 8-3-6 특정 값으로 배열 채우기 `( +ES6 )`

- fill( '채울 값' , '시작 위치' , '끝나는 위치 -1' ) (원본 수정)

  - 정해진 값으로 배열을 채울 수 있으며, 배열의 크기를 지정하는 Array 생성자와 함께 사용합니다. ( 처음 변수 할당시 )

```js
arr = new Array(5).fill(1);
arr.fill(123);
arr.fill('b', 1);
arr.fill('c', 2, 4);
arr.fill(5.5, -4);
arr.fill(0, -3, -1);
```

---

### 8-3-7 배열 정렬과 역순 정렬

- reverse (원본 수정)

```js
arr = [1, 2, 3, 4, 5];
arr.reverse();
```

- sort (원본 수정)

```js
arr.sort();
arr = ['c', 'b', 'a'];
arr.sort();

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
```

---

### 8-4 배열 검색

indexOf : 배열 내에서 일치 연산자(===)가 true 인 첫 번째 요소의 인덱스를 반환합니다.

lastIndexOf : 배열의 끝에서 검색을 시작합니다.

```js
arr = [1, 2, 3, 4, 5, 1, 2];
arr.indexOf(1);
arr.lastIndexOf(1);

arr.indexOf(1, 4); // 두 번째 매개변수를 넣으면 검색 시작 인덱스

arr.indexOf(11); // indexOf와 lastIndexOf는 일치하는 값이 없는 경우 -1 반환
```

findIndex: indexOf와 lastIndexOf와 같지만 추가적으로 검색조건을 설정 가능합니다.

```js
arr = [
  { id: 5, name: 'Judith' },
  { id: 6, name: 'Fracis' },
];
arr.findIndex((o) => o.id === 5);
arr.findIndex((o) => o.name === 'Fracis');
arr.findIndex((o) => o.id === 3);
```

find : 조건에 맞는 요소의 인덱스가 아니라 요소 자체를 찾을 때는 find 를 사용합니다.

```js
arr.find((o) => o.id === 5);
```

---

### 8-5 map과 filter
