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