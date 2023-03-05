const person = {
    name: 'Tom',
    // bye: () => { // アロー関数はthisを取れない
    //     console.log('Bye ' + this.name);
    // },

    // 無名関数で記述する
    bye: function(greeting2) { 
        console.log(greeting2 + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * `person.hello1s()` 
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
    
    hello1s() {
        // １．bind
        // setTimeout(this.hello.bind(this, 'hello'), 1000)

        // ２．アロー関数
        // setTimeout(() => {
        //     this.hello('hello'); // thisはレキシカルスコープを参照する
        // }, 1000);

        // ３．thisを一旦変数に代入
        const _this = this;
        setTimeout(() => {
            _this.hello('hello');
        }, 1000);
    }
    // hello1s: setTimeout(() => console.log( 'hello' + this.name), 1000)
    
}
person.hello1s();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
setTimeout(person.hello.bind(person, "hello"), 1000);
// setTimeoutは第一引数に関数を取る

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// alert(person.hello("hello"));
// alertは引数に文字列をとる
// 関数を実行してやる必要がある

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// setTimeout(person.bye.bind(person), 1000);
// ↑アロー関数はthisを取らないのでbindで束縛できない
setTimeout(person.bye.bind(person, "Bye "), 1000);