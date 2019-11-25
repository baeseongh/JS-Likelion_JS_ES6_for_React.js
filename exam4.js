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
			resolve("서울 ")
		}, 3000);
	})
}

// sayHello2("배성현")
// .then((location)=> console.log(location+" 안녕히 가세요"))
	// resolve 일때 then 실행, resolve에서 인풋을 받을 수 있음
	

async function sayHelloBye(name) {
	// await 약속을 기다리는 약속 
	location = await sayHello2(name)
	console.log(location + "로 안녕히 가세요")
}

sayHelloBye("성현")