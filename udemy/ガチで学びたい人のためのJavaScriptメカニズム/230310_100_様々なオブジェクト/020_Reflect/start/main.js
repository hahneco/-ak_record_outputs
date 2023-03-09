/*
# Reflect
JSエンジンの内部の汎用的な関数を呼び出すメソッドが格納されている。
*/


class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// new演算子を使用してインスタンス化するver
obj1 = new C(1, 2);
console.log(obj1);
// Reflectのconstructメソッドを使用しいインスタンス化するver
Reflect.construct(C, [1, 2]);
console.log(obj1);

console.log('c' in obj1);
console.log(Reflect.has(obj1, 'b'));

// if (Reflect.defineProperty) {

// } else {

// }
// Object.defineProperty

// ##################################

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    return this._hello(tom, 'hello', bob); // 第３引数はbindの役割
  },
}
