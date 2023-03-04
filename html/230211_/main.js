let name = 'Tim';

function hello(name) {
  console.log('hello' + name);
}

// hello(name);

let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function() {
    console.log('value3');
  },
  prop4: function() {
    prop5: 'value5';
  }
}

console.log(obj.prop4);

obj.prop6 = 'value6';
console.log(obj['prop6']);

// ■オブジェクトとは
// 名前（プロパティ、またはキー）と
// 値を
// ペアで管理する入れ物

// ■オブジェクトの使い方
// ドット記法
// ブラケット記法

// ＊メソッド
// オブジェクトのプロパティに格納された（無名）関数