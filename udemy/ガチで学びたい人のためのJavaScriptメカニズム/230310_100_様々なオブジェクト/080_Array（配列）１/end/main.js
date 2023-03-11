const arry = [1,2,3,4,5];
const arry2 = [0, ...arry, 6,7,8];
arry.push(6)
const result = arry.splice(0, 3, 1, 2)
console.log(arry2, result);
