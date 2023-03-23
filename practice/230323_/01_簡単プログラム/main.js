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

// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数
async function getUsers() { // 非同期
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}
async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
}
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name + "," + user.address.city;
  lists.appendChild(list);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
