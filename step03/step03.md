# 3주차

## 8장 배열과 배열 처리

---

### 8-1 배열의 특징

- 배열 리터럴은 쉼표로 구분한 값을 대괄호([])로 묶어서 표현합니다.

```js
var evens = [2, 4, 6, 8];
```

- 배열의 인덱스

```js
evens[0] = 2;
evens[1] = 4;
evens[2] = 6;
evens[3] = 8;
```

- 비균질적

한 배열의 요소가 모두 같은 타입일 필요가 없습니다.

```js
let arr = [1, "2", {}, [4, 5]];
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
arr = ["b", "c", "d"];
arr.push("e");
arr.pop();
arr.unshift("a");
arr.shift();
```

---

### 8-3-2 배열의 끝에 여러 요소 추가하기

- concat (사본 반환)

```js
let arr2 = arr.concat("e", "f", "g");
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
arr.fill("b", 1);
arr.fill("c", 2, 4);
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
arr = ["c", "b", "a"];
arr.sort();

const months = ["March", "Jan", "Feb", "Dec"];
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
  { id: 5, name: "Judith" },
  { id: 6, name: "Fracis" },
];
arr.findIndex((o) => o.id === 5);
arr.findIndex((o) => o.name === "Fracis");
arr.findIndex((o) => o.id === 3);
```

find : 조건에 맞는 요소의 인덱스가 아니라 요소 자체를 찾을 때는 find 를 사용합니다.

```js
arr.find((o) => o.id === 5);
```

---

### 8-5 map과 filter

- map (사본 반환) : 배열의 요소를 변형합니다.

```js
arr = [
  { id: 5, name: "Judith" },
  { id: 6, name: "Fracis" },
];
let name = arr.map((x) => x.name);
let id = arr.map((x) => x.id);
```

```js
let items = ["book1", "book2", "book3"];
let prices = [1000, 2000, 3000];
let cart = items.map((x, i) => ({ name: x, price: prices[i] }));
```

- filter (사본 반환) : 조건에 해당되는 요소들만 반환합니다.

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((w) => w.length > 6);

console.log(result);
```

---

### 8-6 reduce

```js
const oneTwoThree = [1, 2, 3];
// 누적값, 현잿값, 인덱스
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
result;
```

<a href="https://medium.com/@hongkevin/js-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%A9%94%EC%84%9C%EB%93%9C-reduce-100-%ED%99%9C%EC%9A%A9%EB%B2%95-feat-egghead-io-97c679857ece">reduce의 활용</a>

---

### 8-7 join

- join (사본 반환):
  - 매개변수로 문자열 요소들을 합칠 때 사용합니다.
  - 매개변수가 생략되었을 경우 쉼표가 기본값 입니다.
  - 문자열 요소를 합칠 때 정의되지 않은 요소, 삭제된 요소, null, undefined 는 모두 빈 문자열로 취급합니다.

```js
arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join();
arr.join("");
arr.join("--");
```

---

## 9장 객체와 객체지향 프로그래밍

객체와 배열의 차이는 순서(인덱스)의 유무입니다.

---

### 9-1 for...in

객체의 프로퍼티를 나열할 때 사용

```js
let obj = { a: 1, b: 2, c: 3 };
for (var p in obj) {
  console.log("p = " + p);
}
```

---

### 9-2 Object.keys

객체를 배열로 반환

```js
obj = { a: 1, b: 2, c: 3 };

let objArr = Object.keys(obj);
objArr = Object.values(obj);
objArr = Object.entries(obj);
```

---

### 9-3 객체지향 프로그래밍 (OOP)

객체지향 프로그래밍은 실세계에 존재하고 인지하고 있는 객체(Object)를 소프트웨어의 세계에서 표현하기 위해

객체의 핵심적인 개념 또는 기능만을 추출하는 추상화(abstraction)를 통해 모델링하려는 프로그래밍 패러다임을 말한다.

다시 말해, 우리가 주변의 실세계에서 사물을 인지하는 방식을 프로그래밍에 접목하려는 사상을 의미한다.

객체지향 프로그래밍은 함수들의 집합 혹은 단순한 컴퓨터의 명령어들의 목록이라는 전통적인 절차지향 프로그래밍과는

다른, 관계성있는 객체들의 집합이라는 관점으로 접근하는 소프트웨어 디자인으로 볼 수 있다.

각 객체는 메시지를 받을 수도 있고, 데이터를 처리할 수도 있으며, 또다른 객체에게 메시지를 전달할 수도 있다.

각 객체는 별도의 역할이나 책임을 갖는 작은 독립적인 기계 또는 부품으로 볼 수 있다.

객체지향 프로그래밍은 보다 유연하고 유지보수하기 쉬우며 확장성 측면에서서도 유리한 프로그래밍을 하도록 의도되었고,

대규모 소프트웨어 개발에 널리 사용되고 있다.

---

ES6 이전 자바스크립트에서 클래스를 함수를 이용해서 만들었습니다.

```js
function Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ["P", "N", "R", "D"];
  this._userGear = this.userGears[0];

  // 메소드
  this.go = function () {
    console.log("gogo");
  };
}
```

하지만, ES6 부터는 클래스를 만드는 문법이 생겼습니다.

```js
class Car {
  constructor() {}
}
```

- 인스턴스

```js
const car1 = new Car();
//  인스턴스   클래스
```

- instanceof 연산자

```js
car1 instanceof Car;
car1 instanceof Array;
```

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ["P", "N", "R", "D"];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    // 메서드
    console.log(this.userGears.indexOf(gear));
    if (this.userGears.indexOf(gear) < 0) {
      // index를 이용해 0보다 작은경우 즉 값이 없을 경우 에러
      throw new Error(`Invalid gear: ${gear}`);
    }
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift("D");
car2.shift("R");
```

ES6 에 추가된 class 문법은 새롭게 생긴 타입이 아니라 사용하기 쉽게 만들어진 함수의 단축 문법입니다.

```js
class Es6Car {}
function Es5Car() {}

typeof Es6Car;
typeof Es5Car;
```

---

### 9-4 프로토타입

Car `인스턴스에서 사용할 수 있는 shift 메서드는 프로토타입 메서드` 입니다.

프로토타입 메서드는 `Car.prototype.shift` 처럼 표기할 때가 많으며 Array의 for 메서드들도

프로토 타입 메서드입니다. (ex: Array.prototype.forEach)

<br />

모든 함수에는 prototype이라는 특별한 프로퍼티가 있습니다.

일반적인 함수에서는 프로토 타입을 사용할 일이 없지만, 객체 생성자로 동작하는 함수에서는

프로토타입이 상당히 중요합니다.

<br />

함수의 prototype 프로퍼티가 중요해지는 시점은 new 키워드로 새 인스턴스를 만들었을 때 입니다.

new 키워드로 만든 새 객체는 생성자의 prototype 프로퍼티에 접근할 수 있게 됩니다.

객체 인스턴스는 생성자의 prototype 프로퍼티를 `__proto__` 프로퍼티에 저장합니다.

```
__proto__ 와 같이 언더바 두개로 이루어진 프로퍼티는 자바스크립트의 내부 동작 방식에 영향을 주는

프로퍼티들이므로 자바스크립트를 충분히 이해하기 전에는 수정하지 않는 것을 권합니다.
```

```js
Car {make: "Tesla", model: "Model S", userGears: Array(4), userGear: "P"}
make: "Tesla"
model: "Model S"
userGear: "P"
userGears: (4) ["P", "N", "R", "D"]
__proto__:
constructor: class Car
shift: ƒ shift(gear)
__proto__: Object
```

<br />

프로토타입에서 중요한 것은 `동적 디스패치라는 메커니즘`입니다.

여기서 디스패치는 메서드 호출과 같은 의미입니다.

객체의 프로퍼티나 메서드에 접근하려 할 때 그런 프로퍼티나 메서드가 존재하지 않으면 자바스크립트는

객체의 프로토타입에서 해당 프로퍼티나 메서드를 찾습니다.

클래스의 인스턴스는 모두 같은 프로토타입을 공유하므로 프로토타입에 프로퍼티나 메서드가 있다면

해당 클래스의 인스턴스는 모두 그 프로퍼티나 매서드에 접근이 가능합니다.

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ["P", "N", "R", "D"];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    // 메서드
    console.log(this.userGears.indexOf(gear));
    if (this.userGears.indexOf(gear) < 0) {
      // index를 이용해 0보다 작은경우 즉 값이 없을 경우 에러
      throw new Error(`Invalid gear: ${gear}`);
    }
    this.userGear = gear;
  }
}

const car1 = new Car();
const car2 = new Car();

car1.shift === Car.prototype.shift;
```

인스턴스에서 메서드나 프로퍼티를 정의하면 프로토타입에 있는 것을 가리는 효과가 있습니다.

위에서 이야기한대로 자바스크립트는 메서드를 호출 시 먼저 인스턴스를 체크하고 없을 경우

프로토타입을 체크하기 때문입니다. `( 프로토타입 체인 )`

```js
car1.shift = function (gear) {
  this.userGear = gear.toupperCase();
};
car1.shift === Car.prototype.shift;
```

---

### 9-5 정적 메서드

정적 메소드 및 속성은 클래스 / 생성자 자체 에 정의되며 인스턴스 객체에는 정의되지 않습니다.

이것들은 `static 키워드`를 사용하여 클래스 정의에 지정됩니다.

```js
class MyClass {
  static myStaticMethod() {
    return "Hello";
  }

  static get myStaticProperty() {
    return "Goodbye";
  }
}

console.log(MyClass.myStaticMethod()); // logs: "Hello"
console.log(MyClass.myStaticProperty); // logs: "Goodbye"
```

```js
const myClassInstance = new MyClass();

console.log(myClassInstance.myStaticProperty); // logs: undefined
```

---

### 9-6 상속

`extends` 키워드를 사용해서 만든 클래스는 `서브 클래스` 입니다.

```js
class MySubClass extends MyClass {}

console.log(MySubClass.myStaticMethod()); // logs: "Hello"
console.log(MySubClass.myStaticProperty); // logs: "Goodbye"
```

객체 지향과 절차 지향의 차이 : https://brownbears.tistory.com/407 / https://m.blog.naver.com/PostView.nhn?blogId=atalanta16&logNo=220249264429&proxyReferer=https:%2F%2Fwww.google.com%2F

super 키워드: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super

자바스크립트 객체지향 프로그래밍 : https://poiemaweb.com/js-object-oriented-programming
