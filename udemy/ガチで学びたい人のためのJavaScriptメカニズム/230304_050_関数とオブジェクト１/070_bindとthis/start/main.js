window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// 関数として実行される場合のthisはグローバルオブジェクトを参照する
function fn(ref) {
    ref();  // refの実引数であるメソッドを実行したときに'Tom'（呼び出し元オブジェクト）を参照したい時
}
fn(person.hello);
console.log('↑コールバック関数の引数として実行される場合のthisの参照は「呼び出し元」オブジェクトである');

/* ################################################## */

// bindとthis
// （呼び出し元オブジェクト）を参照したい時、bindメソッドを使用する
const helloTom = person.hello.bind(person);
function fn2(ref2) {
    ref2();
}
fn2(helloTom);
console.log('↑コールバック関数の引数として実行される場合のthisにbindメソッドを適用');

/* ######### */
function a(name) {
    console.log('hello' + ' ' +name); // グローバルオブジェクトを参照する
}
// 関数aを変数bに格納する
// 関数aを渡す時、nameプロパティを持たせる
// bindの第1引数としてKenを渡す
const b = a.bind(null, 'ken'); // bindで引数を固定
b(); // hello Ken
console.log('「bindメソッドによるthis/引数の束縛」');