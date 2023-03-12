'use strict'

const users = [
  { name: '太郎' },
  { name: '二郎' },
  { name: '三郎' }
]

let user;

// 特定の値で抽出する。

/*
// forループ文で実現
for (let i = 0; i < users.length; i++) {
  if (users[i].name === '二郎') {
    user = users[i];
    break;
  }
}
*/

// findメソッドで実現
user = users.find(function (user) {
  return user.name === '二郎'
});

console.log(user)

/*
# findメソッド

* 配列の要ひ一つ一つにコールバック関数　→ 戻り値でtrue/falseを返す　→　一番初めにヒットしたものを返す。（ヒットした後の処理は行われない）

*/
