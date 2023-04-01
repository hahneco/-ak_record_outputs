'use strict';


// ## 「静的なメソッド」
// 自身のプロパティを持たない、誰が使っても同じ性質のインスタンスが生成されるクラス。
// メソッドの定義に「static」を付けると、new演算子なしで使用できる。
// （例）
// const manager = new ListManager();
// manager.sort(並べ替えたい配列);

class ListManager {
  // インスタンス化せずに使えるメソッド
  static sort(array) {
    // ソートを行う
    array.sort((a, b) => a - b);
  }
}
const number = [6, 4, 5, 9, 8];
ListManager.sort(number); // numberのソートを実行
// console.log(number);

// ビルトインオブジェクトのMathのようには汎用性の高い操作をライブラリのようにまとめたい場合に役に立つ。

// #################################
// 継承
// superクラスのコンストラクタはsuper(引数)で呼び出す。

class Car {
  #speed; // スピード

  constructor(speed = 0) { // コンストラクタ(インスタンスせ生成するときの特別な関数)
    this.#speed = speed;
  }

  run(speed) {
    console.log("時速" + speed + "キロで走る");
  }
}

class AirCar extends Car {
  #altitude;

  constructor(speed = 0, altitude = 0) { // コンストラクタ(インスタンスせ生成するときの特別な関数)
    super(speed); // superクラス呼び出し
    this.#altitude = altitude; // ↑superクラス呼び出し後にサブクラス自身にアクセスすること!
  }

  fly() {
    console.log("飛ぶ!")
    this.#altitude += 5000;
    super.run(); // (空中を)走る
  }
  land() {
    this.#altitude = 0; // 高度を下げる
    super.stop(); // 陸上で停止する。
  }
}

const car = new AirCar();
car.run(30);
car.fly();
const normalCar = new Car();
normalCar.run(30);
console.log(normalCar.speed)
// normalCar.fly();
