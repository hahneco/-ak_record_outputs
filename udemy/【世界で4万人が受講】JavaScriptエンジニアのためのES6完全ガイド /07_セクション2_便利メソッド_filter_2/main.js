'use strict'

const products = [
  { name: 'きゅうり', type: '野菜', quantity:'0', price: 1 },
  { name: 'バナナ', type: 'フルーツ', quantity:'10', price: 15 },
  { name: 'セロリ', type: '野菜', quantity:'30', price: 9 },
  { name: 'オレンジ', type: 'フルーツ', quantity:'3', price: 5 }
];

// ミューテート回避のため新しい配列を用意。
let filterProducts = [];

// 種類：野菜、量：0より大きい、値段：10より小さいものに絞り込む。
filterProducts = products.filter(function (product) {
  return product.type === '野菜'
    && product.quantity > 0
    && product.price < 10;
});
console.log(filterProducts);
