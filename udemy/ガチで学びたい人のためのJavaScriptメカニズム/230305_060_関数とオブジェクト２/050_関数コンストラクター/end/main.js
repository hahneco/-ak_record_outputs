let d = 0;
function fn() {
	let d = 1;
	const fn1 = new Function('a', 'b', 'return a * b * d');
	return fn1;
}

const f = fn();
const result = f(1,2);

console.log(result);

function fn2(a, b) {
	return a + b;
}

console.log(fn2 instanceof Function)

const obj = new function() {
	this.a = 0;
}
const fn3 = new Function('this.a = 0;');
const obj3 = new fn3()
console.log(obj, obj3)