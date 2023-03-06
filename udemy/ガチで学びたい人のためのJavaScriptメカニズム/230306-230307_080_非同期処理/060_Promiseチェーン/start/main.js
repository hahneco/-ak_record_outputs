function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

console.log('同期1');

// ES6の非同し処理にはPromiseチェーン推奨。
// callbackは階層が深くなり可読性が低くなる
sleep(0).then(function (val) { // 無名関数でもアロー関数でもOK
  return sleep(val); // Promiseインスタンスをセット
}).then(function (val) {
  return sleep(val); // Promiseインスタンスをセット
}).then(function (val) {
  return sleep(val); // Promiseインスタンスをセット
}).then(function (val) {
  return sleep(val); // Promiseインスタンスをセット
}).finally(function () {
  console.log('終了');
})

console.log('同期2');

// sleep(function (val) {
//   sleep(function (val) {
//     sleep(function (val) {
//       sleep(function (val) {

//       }, val);
//     }, val);
//   }, val);
// }, 0);
