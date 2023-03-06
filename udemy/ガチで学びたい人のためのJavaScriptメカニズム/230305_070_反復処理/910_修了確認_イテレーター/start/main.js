/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 * 
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */

function genStep(min = 0, max = 20, step = 1) { // イテレーター生成する関数
  let i = min - step; // 値をセット
  return { // オブジェクトイテレーターを返す
    next() { // nextメソッド
      i = i + step; // nextメソッド実行のたびにiにstep値が追加される
      // i =+ step; // nextメソッド実行のたびにiにstep値が追加される
      if(i > max) {
        return {
          done: true, // ループ停止 true/継続false
        }
      } else {
        return {
          done: false, // ループ停止 true/継続false
          value: i // ループ時に渡る値
        }
      }
    }
  }
}
 
const it = genStep(4, 10, 2); // itにイテレーターを格納する
let a = it.next(); // nextメソッドの実行。変数aにセット

while(!a.done) {
  console.log(a.value);
  a = it.next();
}
