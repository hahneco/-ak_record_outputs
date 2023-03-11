const obj = { a: 0 };
const json = JSON.stringify(obj);
localStorage.setItem('key', json);
const result = localStorage.getItem('key');
const obj2 = JSON.parse(result);
console.log(obj2);
console.log('end');