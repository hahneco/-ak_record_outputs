
// function fn(a, b=1) {
//   console.log(arguments);
//   console.log(a, b);
// }

// /* 
// argumentsについて
// objectである
// 呼び出し時に渡された実引数が渡る
// */
// fn(1, undefined);

function hello(name) {
  console.log('hello', name);
}

function bye(name) {
  console.log('bye', name);
}

function fn(cb) { // hello関数をオブジェクトとして引数に設定
  cb('Tom'); // ()でhello関数を実行する
}

fn(hello); // 引数として渡された関数をコールバック関数と呼ぶ
fn(bye); // 引数として渡された関数をコールバック関数と呼ぶ
// コールバック関数は無名関数でも定義可能
fn(function(name) { // このnameは「仮引数」
  console.log('hello', 'Ken');
})

// 関数自体をオブジェクトとして実引数として渡す
// 渡した先の関数では()をつけることで関数が実行される
// 引数が入っていた場合は呼び出し元の実引数を渡して実行する