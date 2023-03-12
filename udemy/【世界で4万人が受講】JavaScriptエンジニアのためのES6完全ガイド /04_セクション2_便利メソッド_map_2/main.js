'use strict'

const cars = [
  { type: '軽自動車', price: '安い' },
  { type: '高級車', price: '高い' }
]

const prices = cars.map(function(car) {
  // console.log(car.type);
  // console.log(car.price);
  return car.price;
})

// 渡ってくるオブジェクトの必要なものだけを抽出したい場合などに使える
console.log(prices)
