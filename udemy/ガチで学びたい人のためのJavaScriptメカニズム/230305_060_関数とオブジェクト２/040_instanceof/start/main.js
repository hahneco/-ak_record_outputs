function F(a, b) { // 関数Fがコンストラクター関数として定義してある
    this.a = a;
    this.b = b;
    return {a: 1};
}

F.prototype.c = function() {}

// インスタンス作成
const instance = new F(1,2);
console.log(instance instanceof F);
console.log(instance instanceof Object);

// コンストラクターによって持っているメソッドが異なるため
// 処理を分ける必要が出てくる
// ↑このような場合にinstanceOfを使用するとよい
function fn(arg) {
    if(arg instanceof Array) { // arrayがコンストラクターの場合
        arg.push('value');
    } else {
        arg['key'] = 'value'; // コンストラクターがオブジェクトの場合
    }
}
fn([])