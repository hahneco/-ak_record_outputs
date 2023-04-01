'use strict';

// クラスの定義の仕方

// 猫クラス
class Cat {
  // プロパティ
  #name;
  #gender;
  #age;

  // コンストラクタ
  constructor(name = "名無し", gender = "不明", age = 0) { // 仮引数にデフォルト値を設定しておくと、関数呼び出し時に引数を省略できる!
    this.#name = name; // デフォルトは名無し
    this.#gender = gender; // デフォルトは不明
    this.#age = age; // デフォルトは0
  }

  // 年齢を取得するアクセサ(getter)
  get age() {
    return this.#age; // プロパティの値を返す
  }
  // 年齢を設定するアクセサ(setter)
  // データ型や妥当性をチェックして、プロパティに有効な値がセットされるように配すする。
  set age(age) {
    // this.#age = age; // 渡された値をプロパティにセットする

    // 0以上の整数のみ許容する。
    if (Number.isInteger(age) && 0 <= age) {
      this.#age = age;
    }
  }
  // 性別のgetter
  get gender() {
    // プロパティの値に応じて加工へ編集する例
    if (this.#gender === "female") {
      return "女の子";
    } else {
      return "男の子";
    }
  }

  // 自己紹介メソッド
  selfIntroduce() {
    console.log("わたしは" + this.#name + "です");
    console.log("わたしは" + this.gender + "です"); // アクセサ使用
    console.log("わたしは" + this.#gender + "です"); // アクセサ不使用
  }
}

// インスタンス化
const normalCat = new Cat(); // 初期設定猫
const cat = new Cat("ティナ", "female", 3);
console.log(cat);
cat.selfIntroduce();
