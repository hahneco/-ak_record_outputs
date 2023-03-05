// ラッパーオブジェクトとは
// プリミティブ型を内包するオブジェクト

// プリミティブ型で宣言された場合も暗黙的にラッパーオブジェクトでメソッドが呼び出されるので、new算子でインスタンスを作成する必要はない
const a = new String('hello');
console.log(a);
console.log(a.toLocaleUpperCase());

// consoleに表示される[[]]の値はjsエンジンが実行しているもの
