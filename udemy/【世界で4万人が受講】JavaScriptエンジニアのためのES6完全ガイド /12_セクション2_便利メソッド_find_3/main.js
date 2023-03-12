'use strict'

console.log('管理者権限をもったユーザーを探そう');
/*
管理者権限をもったユーザーを探そう
ユーザーが入っている配列から管理者権限（admin）をもっているユーザーを探してください。そのユーザーを「admin」という変数に格納してください。
*/
const users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

let admin;

admin = users.find(function (user) {
  return user.admin
})

// console.log(admin)

// ##############################
console.log('残高から預金口座のアカウントを探そう');
/*
残高から預金口座のアカウントを探そう
預金残高（balance）が「12」のアカウントを探して「account」という変数に格納してください。
*/
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = [];

account = accounts.find(function (element) {
  // console.log(element.balance)
  return element.balance === 12;
})

// console.log(account);

// ##############################
console.log('応用問題：findWhere関数を作ってみよう');
/*
応用問題：findWhere関数を作ってみよう
この演習は難易度が高いです！ほとんどの場合findでは、あるオブジェクトのプロパティがある値をもっているかどうかを探します。この処理をするために毎回コールバック関数を書くのは少し手間がかかりますよね。例えば：
 findWhere(ladders, { height: '6m' });
上のように書けたらコールバック関数を書かずにすむので便利です。ここで { height: '6m' } は検索条件になります。はしごの高さが6mのものを探したいときに使います。

この演習では、上で使用した「findWhere」関数を実装してください。「findWhere」関数の戻り値は、検索条件に一致したオブジェクトになります。

よって、下記のようになります。

var ladders = [
 { id: 1, height: 20 },
 { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
ヒント：おそらく一番難しいのは検索条件のオブジェクトのキー名を取得するところです。これは Object.keys(criteria)[0]  を使うことで、オブジェクト内のキーを取得することができます。例えば Object.keys({ height: '6m' }) とした場合、 'height' が取得できます。キーがわかったところで、対象となるオブジェクトにそのキーと値があるかどうかを element[property] === criteria[property] で確認することができます。
*/

// ladders 連想配列の配列
const ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
  { id: 4, height: 30 },
  { id: 6, height: 18 }
];


function findWhere(array, criteria) {

  // { height: 25 }の要素のkeyを取得する。
  const targetKey = Object.keys(criteria)[0]

  // 対象のオブジェクトにkeyと値があるかどうかを検索する
  console.log('対象のkey:' + targetKey) // 対象のkey(height)
  console.log(criteria) // 対象の値(数値)

  let result = [];
  result = array.find(function (element) {
    // console.log(targetKey)
    // console.log(element[targetKey])
    // console.log(criteria[targetKey])
    return element[targetKey] === criteria[targetKey];
  })
  // console.log(result)
  return result
}

console.log(findWhere(ladders, { height: 25 })); // result: { id:3, height: 25 }
