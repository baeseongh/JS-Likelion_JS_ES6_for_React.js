# React with Django - 리액트를 위한 ES6 JS 문법 정리 (멋쟁이 사자처럼 7기)

## 1. Jsx, Javascript(Arrow Function)

### React for JSX

- 리액트는 Jsx문법을 통해 작성 됩니다. jsx는  자바스크립트의 확장 문법이지만 ES6 공식 자바스크립트 문법은 아닙니다.
- Jsx는 바벨을 통해 Js로 변환 됩니다.
- Jsx는 다음과 같은 특징을 가집니다.
  - 보기 쉽고 익숙하다 - html코드 작성과 비슷한 구조
  - 오류검사 - 바벨이 코드를 변환 하는 과정에서 오류를 검색함
  - 높은 활용도 - html의 태그를 사용할 수 있다.
  - 자바스크립트 표현 - 자바스크립트 표현식을 사용할 수 있다.

### Arrow Function

- 화살표 함수 표현(**arrow function expression**)은 [function 표현](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)에 비해 구문이 짧다.
- 자신의 [this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/super) 또는 [new.target](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new.target)을 바인딩 하지 않습니다.
- 화살표 함수는 항상 [익명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/name)입니다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적합합니다. 그래서 생성자로서 사용할 수 없습니다.

1. 다양한 형태의 함수 Arrow Function

```js
function plusTwo(s) {
	return s+2
}
console.log(plusTwo(10))

// 12
```

```js
plusTwo = (s) => {
	return s+2
}
console.log(plusTwo(10))

// 12
```

```js
plusTwo = (s) => s+2
console.log(plusTwo(10))

// 12
```

```js
plusTwo = s => s+2
console.log(plusTwo(10))

// 12
```

2. 다양한 형태의 함수 Arrow Function for Map

```js
arr = [1,2,3,4,5,6,7,8,9,10]

arr_map = arr.map( function(v) {return v*2})
console.log(arr_map)

// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

```js
arr = [1,2,3,4,5,6,7,8,9,10]

arr_map = arr.map(v => v*2)
console.log(arr_map)

// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

3. 다양한 형태의 함수 Arrow Fucntion for Filter

```js
arr = [1,2,3,4,5,6,7,8,9,10]

arr_filter = arr.filter(v => v>5)
console.log(arr_filter)

// [ 6, 7, 8, 9, 10 ]
```

## 2. Javascript(Class & Super)

- Class

```js
class Lion {
	// constructor 메서드를 지닌 객체 생성자
	constructor(name) {
		this.name = name
	}
	getName() {
		console.log("내 이름은 "+this.name)
	}
}

myLion = new Lion("배성현")
myLion.getName()

// 내 이름은 배성현
```

- Super
  - super는 **부모의 input** 이다.

```js
class Animal {
	constructor(leg) {
		this.leg = leg
	}	

	AnimalLeg() {
		console.log(this.name+"은 "+String(this.leg)+"개의 다리를 가진다.")
	}
 
}

// Lion -> Animal에서 유용한 기능을 가져다 쓰기
class Lion extends Animal {
	// constructor 메서드를 지닌 객체 생성자
	constructor(name, leg) {
		super(leg) // 부모의 Input (constructor의 인풋)
		this.name = name
	}
	getName() {
		console.log("내 이름은 "+this.name)
	}
}

myLion = new Lion("배성현", 2)
myLion.getName()
myLion.AnimalLeg()


// 내 이름은 배성현
// 배성현은 2개의 다리를 가진다.
```

## 3. Javascript(Asnyc, Callback)

1. 비동기성
   - 실행순서를 다채롭게
2. 동기성

- 웹

  1. 인터넷 속도 의존

  2. 유저 인터랙션의 중요성

     => 속도가 느려도 인터랙션이 되어야 함



- Callback
  - 다 되면 알려줘 

```js
setTimeout(()=>{console.log("안녕히 가세요")}, 2000)
console.log("안녕하세요")

//안녕하세요
//<2초후>
//안녕히 가세요
```

```js
function sayHello(sayGoodbye) {
	setTimeout(()=>{
		console.log("안녕하세요")
		sayGoodbye()
	}, 2000);
}

sayHello(()=>console.log("안녕히 가세요"))
// sayGoodbye를 입력 받았을 때 sayHello를 실행
```

```js
function sayHello(name, sayGoodbye) {
	setTimeout(()=>{
		console.log(name+"님 안녕하세요")
		sayGoodbye()
	}, 2000);
}

sayHello("seonghyeon", function(){
	console.log("안녕히 가세요")
})

// seonghyeon님 안녕하세요
// 안녕히 가세요
```

Function 이후 또다른 function을 실행시키는 코드를 작성할때 코드가 상당히 지저분해 질 수 있다.

=> Promise & Asnyc Func을 통해 해결할 수 있다.


## 4. Javascript(Promise, Async - Await)

- Promise(약속)

```
new Promise((reslove, reject)) => {}
// Resolove -> 해결, 성공 -> thne
// Reject -> 거절, 실패 -> cat
```

- Promise Then

```js
function sayHello(name, byeCallback) {
	setTimeout(()=>{
		console.log(name+"님 안녕하세요")
		byeCallback()
	}, 2000);
}

sayHello("mike", function(){
	console.log("안녕히 가세요")
})

function sayHello2(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(name+"님 안녕하세요")
			resolve("몸 조심히")
		}, 3000);
	})
}

sayHello2("배성현")
	.then((data) => console.log(data+" 안녕히 가세요"))
	// resolve 일때 then 실행, resolve에서 인풋을 받을 수 있음
```

- Async Function Then

```
async func_name(p) {
	const result = await get_result()
}
// then 을 대체, 오래걸리는 함수 앞에 await(기다려서) result를 받거나 안 받을 수 있음
```

- await

```js
async function sayHelloBye(name) {
	// await 약속을 기다리는 약속 
	location = await sayHello2(name)
	console.log(location + "로 안녕히 가세요")
}

sayHelloBye("성현")
```

- 비동기의 문제를 해결하기 위한 callback
  - 작업이 완료되면 알려주는 callback은 가독성이 좋지 않다.
- 그래서 나온것이 완료를 약소갛는 promise
  - then과 catch로 편리한 사용이 가능하다.
- 더 편리하게 만든것이 async/await 이다.




