// コンストラクター関数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);
console.log(bob);
console.log(tom);
console.log(sun);

// コンストラクター関数とは
// テンプレート化されたオブジェクトの生成に使用する

// コンストラクター関数が雛形になる
// ↑雛形の関数が持つプロパティを
// ↑new演算子によって大量に生成できる