/*
# WeakMap
弱い参照でオブジェクトを保持するコレクション
  * キーは必ずオブジェクト
*/
const wm = new WeakMap();

// const o = {}; // オブジェクトの定義
let o = {}; // オブジェクトの定義
wm.set(o, 'value1'); // setメソッド。キーにオブジェクトをセット

// o = null;
// o = {};
// 二度と使用されることのない参照をJSエンジンが削除する
// ガベージコレクション

// for ofによる反復処理はできない（反復処理が必要な場合はmapを使用する）
console.log(wm.delete(o));
console.log(wm.get(o));
