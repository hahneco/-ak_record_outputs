'use strict'

console.log('演習「値の条件付き絞り込み」');
/*
値の条件付き絞り込み
数字の配列があるので、50より大きい数字だけに絞り込んで新しい配列に格納してください。新しい配列の変数名は「filteredNumbers」としてください。あのメソッドを使うときにreturnを忘れずに！
*/
const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = [];

filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});

// console.log(filteredNumbers);

// ################################
console.log('演習「filterで権限の管理」');
/*
filterで権限の管理
ユーザーオブジェクトの配列から、管理者権限（admin）をもっているユーザーだけに絞り込んでください。結果の配列は「filteredUsers」という変数に格納してください。あのメソッドを使うときに「return」をお忘れなく！
*/
const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

let filteredUsers = [];

filteredUsers = users.filter(function (user) {
  return user.admin
})

// console.log(filteredUsers);

// ################################
console.log('演習「応用問題：「reject」を実装してみよう」');
/*
応用問題：「reject」を実装してみよう
応用問題です！「reject」という関数を作ってください。「reject」は「filter」とは逆の動作をします。関数が「true」を返した場合は、結果の配列に含まないようにしてください。

ヒント：filterを使ってもOKです

使用例：

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
 return number > 15;
});
lessThanFifteen // [ 10 ];
*/
const numbers2 = [10, 10, 11, 20, 30];
let lessThanFifteen = reject(numbers2, function(number){
  return number > 15;
});
console.log(lessThanFifteen) // [ 10 ];

function reject(array, iteratorFunction) {
  // return array.filter(function(element) {
  //   return !iteratorFunction(element)
  // })
  // console.log(iteratorFunction(obj));
  // let result = iteratorFunction(obj);
  // console.log(result)
  // return iteratorFunction(obj)

  return array.filter(function(obj) {
    return !iteratorFunction(obj);
  })
}
