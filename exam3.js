
function sayHello(name, sayGoodbye) {
	setTimeout(()=>{
		console.log(name+"님 안녕하세요")
		sayGoodbye()
	}, 2000);
}

sayHello("seonghyeon", function(){
	console.log("안녕히 가세요")
})


// setTimeout(()=>{console.log("안녕히 가세요")}, 2000)

// console.log("안녕하세요")