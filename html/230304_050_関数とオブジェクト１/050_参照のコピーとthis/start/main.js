window.name = 'John'

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}

// オブジェクトのメソッドとして実行される場合のthis
// →「呼び出し元オブジェクト」を参照する
person.hello(); // メソッド
// ↑メソッドを他の変数にコピーすると挙動が異なる

// 関数として実行される場合のthis
// グローバルオブジェクトを参照する
const ref = person.hello; // refという変数にperson.helloメソッドを代入する
ref(); // ()で実行する