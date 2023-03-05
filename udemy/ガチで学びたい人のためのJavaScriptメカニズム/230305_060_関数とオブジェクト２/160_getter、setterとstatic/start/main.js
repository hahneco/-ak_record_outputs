/* 
function Person1(name, age) { // コンストラクター関数
	this._name = name;
	this._age = age;
}

// ディスクリプターを使用する
Object.defineProperty(Person1.prototype, 'name', {
	get: function() { // ゲッター
		// return this._name;
		return 'hello';
	},
	set: function() { // セッター
		this._name = val;
	}
});
*/

// ↑クラス化
class Person2 {
	constructor(name, age) { // コンストラクター関数
		this._name = name;
		this._age = age;
	}

	get name() { // ゲッター
		return this._name;
	}
	set name(val) { // セッター
		this._name = val;
	}

	// ## スタティック
	// * インスタンス化を行わず実行できるメソッド
	// * クラス内で使用する静的なメソッドを定義するもの
	// 静的メソッド、スタティックメソッド
	static hello() {
		console.log('hello');
	}
}

Person2.hello();


// インスタンス化
const p1 = new Person1('Bob', 23);
console.log(p1.name)