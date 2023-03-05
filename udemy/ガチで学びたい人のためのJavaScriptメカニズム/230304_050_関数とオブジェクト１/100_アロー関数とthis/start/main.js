window.name = 'John';

const a = () => console.log('bye ' + this.name);

const person = {
    name: 'Tom',
    // hello: function() {
    //     console.log('Hello ' + this.name);
    // }

    /*
    // アロー関数に書き換え
    hello: () => {
        // アロー関数やargumentはthisをとらない
        // ↑グローバルオブジェクトを参照する
        return console.log('Hello ' + this.name);
    }
    */

    hello() { // 無名関数をプロパティとして格納する場合、functionを省略できる
        const a2 = () => console.log('bye ' + this.name);
        console.log('Hello ' + this.name);
        a();
        a2();
    }

}
// person.hello();

function b() { // 関数の中でアロー関数として実行しているので、thisはグローバルオブジェクトを参照する
    const a3 = () => console.log('bye ' + this.name);
    a3();
}
b();
