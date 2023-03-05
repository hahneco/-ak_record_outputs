const arry = ['a', 'b', 'c'];

arry[4] = 'e';

Object.prototype.method = function() {}

Object.defineProperty(arry, 0, {
	enumerable: false
})

const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);

for(let v of arry) {
	console.log(v)
}