/*
# Storage
Storageからインスタンス化されたlocalStorageほ保村される
ブラウザの保存領域にデーをを格納すたためのオブジェクト
*/

// ブラウザの保存領域に値をセット
// localStorage.setItem('key', 'value');
const obj = { a: 0 };
const json = JSON.stringify(obj);

localStorage.setItem('key', json);

// localStorage.setItem('key', '1');
// localStorage.setItem('key2', '2');

// 使用可能なメソッド
// consoleで_proto_を開くと確認できる
const result = localStorage.getItem('key');
const obj2 = JSON.parse(result);

console.log(result);
console.log(obj2);
console.log('end');
