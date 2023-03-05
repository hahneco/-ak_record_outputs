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