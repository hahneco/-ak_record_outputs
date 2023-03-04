/*
// クロージャー（プライベート変数）

function incrementFactory() { // increment変数を作る

  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }
  return increment; // 関数自体をincrementFactoryに返す
}

const increment = incrementFactory();
increment(); // ()で関数を実行する
increment(); // ()で関数を実行する
increment(); // ()で関数を実行する
*/

// 動的な関数の生成

function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);