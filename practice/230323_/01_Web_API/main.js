'use strict'

function init() {
  console.log("init!")
}

/*
Web API
下記をテストで使用する
const USERS_API = "https://jsonplaceholder.typicode.com/users";

Web APIとは？
実際に叩ける&練習できる=> https://jsonplaceholder.typicode.com/

↑こういうAPIつくるのはバックエンド
フロントエンドは主にバックエンドが作成したAPIを使ってUIを構築する。
APIをプログラム側(JavaScript)から叩いてデータのやりとりを行う。

[^1]:https://www.youtube.com/watch?v=QugDLcOo_EE&list=PLwM1-TnN_NN7-zdRV8YsGUB82VVhfYiWW&index=8
*/

async function callApi() { // 非同期にする
  // 実際にAPIを叩く
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users"); // fetchメソッドをつかうとなんかPromiseとかいうやつが返ってくる

  // Responseオブジェクトのままではデータが使えないので加工する
  const users = await res.json();

  console.log(res);
  console.log(users);
}

callApi();
