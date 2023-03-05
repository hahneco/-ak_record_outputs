window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}


// オブジェクトのメソッドとして実行されるthis
// →呼び出し元オブジェクトを取る
person.hello();
console.log('↑オブジェクトのメソッドとして実行されるthis');

// 関数として実行される場合のthis
// →グローバルオブジェクトを取る
const ref1 = person.hello;
ref1();
console.log('↑関数として実行されるthis');

/* ####################################### */
// 「person.hello」メソッドをコールバック関数の引数として渡した場合のthis
function fn(ref) {
    ref();
}
fn(person.hello);
console.log('↑コールバック関数の引数として実行されるthis');
// 関数の参照がコピーされる→引数「ref」が参照コピーを呼ぶ