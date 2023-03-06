// 反復可能オブジェクトをジェネレーターで実装する
const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

// function* 宣言 
// Generatorオブジェクトを返すジェネレーター関数を定義する
Object.prototype[Symbol.iterator] = function*() {
	for(let key in this) {
		yield [key, this[key]]; // イールドで呼び出し元に返却
	}
	return;
}

for(let [k,v] of items) {
	console.log(k, v);
}