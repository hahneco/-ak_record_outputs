const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello' + this.name);
    }
}

person.hello();

// this
// メソッドの中でそのオブジェクトを取得したい場合に使用する

// 関数とメソッドは機能的に同じ
// 区別するために、オブジェクトがプロパティとして持っている関数を特別にメソッドと呼ぶ