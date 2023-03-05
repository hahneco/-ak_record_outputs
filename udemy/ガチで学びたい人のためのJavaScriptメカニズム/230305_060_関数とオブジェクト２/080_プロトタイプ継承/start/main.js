function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

// プロトタイプ継承
// 別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること
function Japaneses(name, age, gender) {
  Person.call(this, name, age)
  this.gender = gender;
}

Japaneses.prototype = Object.create(Person.prototype);

// 継承したメソッドの上書き
Japaneses.prototype.hello = function() {
  console.log('Konnichiwa ' + this.name + '. He is ' +this.gender + '.');
}

const taro = new Japaneses('taro', 23, 'Male');
console.log(taro);
taro.hello();