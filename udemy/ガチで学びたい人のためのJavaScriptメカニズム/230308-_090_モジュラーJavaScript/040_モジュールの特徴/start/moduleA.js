import './moduleB.js' // 定義した時点で１度だけ実行される
import './moduleB.js'

console.log('module A');

const h1 = document.querySelector('h1');
const text = h1.textContent;
console.log(text);
