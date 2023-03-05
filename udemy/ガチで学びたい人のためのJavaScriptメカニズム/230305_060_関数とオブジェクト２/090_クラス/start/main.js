class Person { // classはコンストラクター関数のシンタックスシュガー
  constructor(name, age) { // constructorがコンストラクター関数と同じ役割を果たす
    this.name = name;
    this.age = age;
  }

  hello() {  // コンストラクターと同じ並びに追加するとプロトタイプの宣言となる
    console.log('hello ' + this.name);
  }
}

// インスタンス化して呼び出し
const bob = new Person('Bob', 33);
console.log(bob); // オブジェクトが生成される
bob.hello(); // メソッド（オブジェクト）の実行

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// プロトタイプに格納しているメソッド
// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }


// クラス
// コンストラクター関数をクラス表記で書けるようにしたもの
// * 「シンタックスシュガー」