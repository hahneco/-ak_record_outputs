// Promise構文
// new Promise でインスタンス化

// 処理の同期・非同期について
/*
// new Promise(
  同期処理
).then(
  非同期処理（resolveを待つ）
).catch(
  非同期処理（rejectを待つ）
).finally(
  非同期処理（then、またはcatchを待つ）
);
*/

/*
new Promise(function (resolve, reject) { // コールバック関をセット。
  // ↑コールバック関数はresolve, rejectを引数としと取る。
  resolve("hello"); // resolveが実行された場合thenメソッドが実さされる
  // reject("bye");
}).then(function (data) { // resolveで渡した実引が入る
  console.log(data) // -> "hello"
}).catch(function () { // resolveの場合はスキップ。rejectの場合実行される
  // console.log(data) // -> "bye"
}).finally(function () {
  console.log("終了処理");
});
*/

// console.log('Promise');

// 非同期のチェーン処ををする場合に効果的（可読性が高い記述が可能）
new Promise(function (resolve, reject) {
  console.log('promise');
  // resolve("hello");
  setTimeout(function () {
    resolve("hello");
  }, 1000)
}).then(function (data) {
  console.log('then:' + data);
  return data; // 次の処理に引数dataつ使いたい場合はreturnで渡す
}).then(function (data) {
  console.log('then:' + data);
  return data; // 次の処理に引数dataつ使いたい場合はreturnで渡す
  // throw new Error();
}).then(function (data) {
  console.log('then:' + data);
  return data; // 次の処理に引数dataつ使いたい場合はreturnで渡す
}).then(function (data) {
  console.log('then:' + data);
  return data; // 次の処理に引数dataつ使いたい場合はreturnで渡す
}).catch(function (data) {
  console.log('catch:' + data);
  return data; // 次の処理に引数dataつ使いたい場合はreturnで渡す
}).finally(function () { // 引数は取れない
  console.log('finally:' + data);
})

console.log('global end');
