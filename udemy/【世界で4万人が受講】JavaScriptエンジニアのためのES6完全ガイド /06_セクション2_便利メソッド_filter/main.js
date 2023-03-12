'use strict'

const products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
  { name: 'セロリ', type: '野菜' },
  { name: 'オレンジ', type: 'フルーツ' }
];

// ミューテート回避のため新しい配列を用意。
let filterProducts = [];

/*

// forループで実現
for (let i = 0; i < products.length; i++) {
  // if (products[i].type === 'フルーツ') {
  //   console.log(products[i].name);
  // }

  if (products[i].type === 'フルーツ') {
    // console.log(products[i].name);
    filterProducts.push(products[i]);
  }
}
console.log(filterProducts);

*/

// ###########################
/*
# filterメソッド
* 配列の中の一つ一つがコールバック関数に呼ばれる → 戻り値 → true/falseを判定 → 結果の新しい配列に格納する
*/

filterProducts = products.filter(function (product) {
  return product.type === 'フルーツ';
})
console.log(filterProducts);
