// ## イテレーター
// genIterator()で返却されている部分をイテレーターと呼ぶ
// イテレーターにはnextメソッドを必ず保持する
// nextメソッドには必ずオブジェクトの返却が必要
// オブジェクトはdone,value
// * done：
//   ループの継続
// * value：
//    ループ時に渡ってくる値

// ##############################3
function genIterator(max = 20) { // maxはループの上限値
  let i = 0; // ループを保持するiを変数として初期化する

  return { // イテレーターを返す
    next: function() { // nextメソッドセット
      // return {
      //   done: false,
      //   value: i++
      // }
      if(i >= max) { // iが上限値に達したときに
        return {
          done: true // ループをやめる
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

const it = genIterator(20);

let a = it.next();
while(!a.done) {
  // console.log(a.value);
  a = it.next();
}

const obj = {
  [Symbol.iterator]: genIterator.bind(null, 100)
}
for(const i of obj) {
  console.log(i);
}

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// ================================================
// https://gist.github.com/kenmori/3383a9d0553e0fd3db2406fe21cfe550
// 問67
// 文字列fooをイテレーターを使い['f','o','o']となるようにしてください。
// let iterator = {}; // イテレータ
// iterator.next = function() {
//   let iteratorresult = {
//     value: 42,
//     done: false
//   };
//   console.log(iteratorresult);
//   return iteratorresult;
// }

// let obj2 = {}; // イテラブル (Iterable) なオブジェクト
// obj2[Symbol.iterator] = function() {
//   console.log(iterator);
//   return iterator;
// }

var obj2 = {}; // イテラブルなオブジェクト
obj2[Symbol.iterator] = function(){
    var iterator = {}; // イテレータ
    var count = 1;
    iterator.next = function(){
        var iteratorResult = (count <= 10)
            ? { value: count++,   done: false }
            : { value: undefined, done: true };
        return iteratorResult; // イテレータリザルト
    };
    return iterator;
};
var iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する
var iteratorResult;
while(true){
    iteratorResult = iterator.next(); // 順番に値を取りだす
    if(iteratorResult.done) break; // 取り出し終えたなら、break
    console.log(iteratorResult.value); // 値をコンソールに出力
    console.log('aaaaaa'); // 値をコンソールに出力
}