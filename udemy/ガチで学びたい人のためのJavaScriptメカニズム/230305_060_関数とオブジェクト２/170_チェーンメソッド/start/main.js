class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
		return this; // Personのインスタンスを返す
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
		return this; // Personのインスタンスを返す
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
		return this; // Personのインスタンスを返す
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
		return this; // Personのインスタンスを返す
	}
}

const bob = new Person('Bob', 23); // インスタンス作成
const tim = new Person('Tim', 33); // インスタンス作成

bob.hello(tim) // bobの戻り値はPerson
	.introduce()
	.shakeHands(tim)
	.bye(tim)

// 一つのインスタンスに対して複数の処理をする場合にチェーンメソッドで簡略化して呼び出すことができる
