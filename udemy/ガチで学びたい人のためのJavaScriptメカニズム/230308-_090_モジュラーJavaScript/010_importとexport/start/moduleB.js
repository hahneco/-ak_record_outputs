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
import defaultVal, { publicVal as val, publicFn as fn } from "./moduleA.js";
// import defaultVal, * as moduleA from "./moduleA.js";
console.log(val);
console.log(defaultVal);
// console.log(moduleA.default);
fn();
