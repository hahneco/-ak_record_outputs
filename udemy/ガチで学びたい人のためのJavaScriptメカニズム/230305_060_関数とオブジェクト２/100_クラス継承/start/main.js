class Person { // Personクラス作成
  constructor(name, age) { // コンストラクター設定
    this.name = name;
    this.age = age;
  }
  // メソッド
  hello() {
    console.log('hello ' + this.name);
  }
}

class Japanese extends Person { // JapaneseクラスがPersonクラスを継承する
  constructor(name, age, gender) {
    super(name, age); // superの実行
    this.gender = gender; // superの下の行でJapaneseクラス特有の値を設定
  }
  // Japaneseクラス特有のメソッド
  hello() {
    console.log('Konnichiwa ' + this.name);
  }
  bye() {
    console.log('Sayonara ' + this.name);
  }
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }

// function Japanese(name, age, gender) {
//   Person.call(this, name, age);
//   this.gender = gender;
// }

// プロトタイプ継承のためのコード
// classのextendsで実現できる
// Japanese.prototype = Object.create(Person.prototype);

// Japanese特有のメソッドの定義
// Japanese.prototype.hello = function() {
//   console.log('Konnichiwa ' + this.name);
// }
// Japanese特有のメソッドの定義
// Japanese.prototype.bye = function() {
//   console.log('Sayonara ' + this.name);
// }

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();
taro.bye();

// クラス継承
// 他のクラスのプロパティーとメソッドを継承すること