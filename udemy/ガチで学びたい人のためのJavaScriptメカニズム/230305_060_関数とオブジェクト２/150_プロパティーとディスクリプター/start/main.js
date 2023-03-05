// ## ディスクリプター
// プロパティの設定値（これによりプロパティの挙動を制御する）

// 下記4つの設定値のことをディスクリプターと呼ぶ
// * value：値
// * configurable：設定変更可能性
// * enumerable：列挙可能性
// * writable：値の変更可能性

'use strict';
// const obj = {prop: 0};
const obj = {};

Object.defineProperty(obj, 'prop', {
  configurable: true,
  value: 0,
  writable: true,
});
// Object.defineProperty(obj, 'prop', {
//   enumerable: true
// });

delete obj.prop;

// obj.prop = 1;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);
