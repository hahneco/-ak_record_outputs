'use strict';

class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj1, obj2);

console.log('c' in obj1);
console.log(Reflect.has(obj1, 'b'));

Object.defineProperty(obj1, 'c', {
  configurable: false
});

// Reflectではfalseが返る。
if (Reflect.defineProperty(obj1, 'c', {
  writable: true
})) {
  console.log('success');
} else {
  console.log('failed');
}

// try {
//   // Object.definePropertyではエラーがでる。
//   const result = Object.defineProperty(obj1, 'c', {
//     writable: true
//   });
//   console.log(result)
// } catch (e) {
//   console.error('Error: Object.defineProperty ' + e)
// }

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
    console.log(this)
    return this._hello();
  },
}
// tom.hello;
Reflect.get(tom, 'hello');