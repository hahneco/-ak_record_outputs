/*
# プロキシー Proxyとは
プロパティそ操作に独自の処理を追加するためのオブジェクト
*/

const targetObj = { a: 0 };
const handler = {
  // トラップという。proxyに格納したオブジェクト

  // オブジェクトの値に何らかの変更が加えられた時に検知
  set: function (target , prop, value, receiver) {
    console.log(`[set]:  ${prop}`);
    // target[prop] = value;
    throw new Error('cannot add  prop!')
  },
  //getトラップ 値を取得した場合に検すする
  get: function (target, prop, value, receiver) {
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return '-1';
    }
    // console.log(`[get]: ${prop}`);
    console.log(`[delete]: ${prop}`);
    // return target[prop];
    delete target[prop];
  }
}

  // 第一引数：格納するオブジェクト、第二引数にオブジェクトを操作するhandlerメソッドせセット。
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
console.log(pxy.b)
pxy.b;
delete pxy.a;
