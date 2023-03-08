// # モジュール(modules)とは
// ソースコードを機能ごとに分ししてメンテナンスしやすくする仕組み

// * ES Module
// ECMAScriptの仕様に基づいた管理システム
// ES6から導入された
// 読み込み/露出：import / export
// 使用される場：Browser

// * CMS
// Node.js
// ↑CMSが組み込まれている
// 読み込み/露出：require / exports
// 使用される場：Node.js

// #########################
export let publicVal = 0;

export function publicFn() {
  console.log('publicFn called: ')
}

export default 1;
