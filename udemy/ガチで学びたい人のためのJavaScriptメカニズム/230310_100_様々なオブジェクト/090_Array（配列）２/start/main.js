const arry = [1, 2, 5 ,10, 4, 5];

arry.forEach(function (v, i, arry) {
  console.log(v)
})

const newarry = arry.map(function (v, i, arry) {
  console.log(v);
  // return v * 2;
  return i * 2;
})
// console.log(arry, newarry);

const filterArry = arry.filter(function (v,i,arry) {
  // return arry;
  return i  > 1;
})
console.log(filterArry)
