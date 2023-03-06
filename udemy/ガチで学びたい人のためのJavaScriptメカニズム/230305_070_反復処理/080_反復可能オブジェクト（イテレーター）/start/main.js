const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
// イテレーターを使ってオブジェクトを反復可能なオブジェクトに変更する
Object.prototype[Symbol.iterator] = function() {
	// console.log(this);
	const keys = Object.keys(this); // プロパティが配列になりkeysに格納される
	// console.log(this); // レキシカルスコープを参照
	let i = 0; // keysを一つずつ取り出す
	let _this = this;
	return {
		next() { // イテレーターにするためにnextメソッドをセット
			let key = keys[i];
			// console.log(_this);
			i++;
			return {
				value: [key, _this[key]], // キーと値を配列にして取得
				done: i > keys.length // iの値がkeyの要素数より大きくなったら停止
			}
		}
	}
}

// Array.prototype.entries()
// entries() メソッドは、配列内の各要素に対するキー/値のペアを含む新しい Array 反復子オブジェクトを返します。
// Objectのプロトタイプに対してイテレーターを追加する
// Object.entries()を必要とせずオブジェクトをそのままfor..ofの中で使用できるようにする
// const items = Object.entries(obj); // Array.prototype.entries()
for (let [k, v] of items) {
	// console.log(k, v);
	console.log(k);
	console.log(v);
}

// ############################
function* genIterator(max = 10) {
	let i = 0;

	while(i < max) { // iの値がmax未満のときにループを継続
		yield i++; // 返却する値
	}
	return;
}