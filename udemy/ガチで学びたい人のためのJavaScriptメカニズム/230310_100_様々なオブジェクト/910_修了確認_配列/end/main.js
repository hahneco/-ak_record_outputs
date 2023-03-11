/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 * 
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 * 
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
	constructor(...args) {
		super(...args)
	}

	print(label = '') {
		console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
		return this;
	}

	push(val) {
		super.push(val);
		return this;
	}
	
	forEach(callback) {
		for(let i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		} 
	}

	map(callback) {
		const newInstance = new MyArray();
		for(let i = 0; i < this.length; i++) {
			const result = callback(this[i], i, this);
			newInstance.push(result);
		}
		return newInstance;
	}
}

function double(v, i, obj) {
	return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
	.map(double)
	.push(5)
	// .filter(function (v, i) {
	// 	return v > 2;
	// })
	// .reduce(function(accu, curr) {
	// 	console.log(accu, curr)
	// 	return accu + curr;
	// })

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);

