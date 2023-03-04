/**
 * 問題１：
 * obj.prop1の値をminus関数を用いて-1したい
 * と思いました。
 * しかしminus関数実行後のobj.prop1の値は変
 * わっていませんでした。
 * 以下のminus関数をどのように修正すればobj.prop1
 * の値を変更することができるでしょうか？
 * 
 */
let obj = {
    prop1: 10
}

function minus(obj, val) {
    obj.prop1 = obj.prop1 - val;
}

minus(obj, 1);
console.log(obj.prop1);
/**
 * 問題２：
 * double関数を使ってobj.prop1の値を２倍にしたい
 * と思っていました。しかし、コンソールに表示された
 * のは元の値である'9'でした。
 * どうすれば、'18'が表示されるようになるでしょうか？
 * 
 * '18'が表示されるように、double関数内を修正してください。
 */


function double(obj) {
    obj.prop1 = obj.prop1 * 2;
}

double(obj);
console.log(obj.prop1);


/**
 * 問題３：
 * 以下のコードでfn関数を実行した後にprop3の
 * 値を出力した場合に1、2、3のどれが出力
 * されるか、そして*なぜそのようになるのか*を
 * 考えてみてください。
 */
obj.prop2 = {
    prop3: 1
}

function fn({ prop2 }) {
    let prop = prop2;
    prop.prop3 = 2;
    prop = { prop3: 3 };
    return { prop2: prop };
}
obj = fn(obj);
console.log(obj.prop2.prop3);

/**
 * 問題４：
 * through関数を経由して格納されるobj2は
 * objと等価でしょうか？
 */
function through (obj) {
    return obj;
}

const obj2 = through(obj);
console.log(obj === obj2);
