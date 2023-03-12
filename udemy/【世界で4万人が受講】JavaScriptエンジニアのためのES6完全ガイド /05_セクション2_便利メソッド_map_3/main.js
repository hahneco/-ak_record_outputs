'use strict'

/*
オブジェクトの配列から興味のある値だけを引き抜く
mapを使って配列内のオブジェクトの「height」だけを取得し、新しい配列を作成してください。その新しい配列は「heights」という変数に格納してください。「return」キーワードを忘れないように！
*/

const images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

const heights = images.map(function (image) {
  return image.height;
});

console.log(heights);

// ##########################
/*
mapで演算
mapを使って、距離と時間からそれぞれの旅行(trips)での速度を求めてください。計算式は「距離(distance) / 時間(time)」となります。結果の配列を「speeds」という変数に格納してください。
*/
const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

const speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});
console.log(speeds);

// ##########################
/*

応用問題 - pluckの実装

応用問題です！「pluck関数」を実装してみましょう。pluck関数とは「オブジェクトの配列」と「プロパティ名を表す文字列」を受付けて、渡したプロパティの値だけを含んだ配列を返します。

[{ color: '赤' }, { color: '青' }, { color: '黄色' }] というオブジェクトの配列があったとします。

この中からcolorプロパティの値だけを抜き取って、['赤', '青', '黄色']という、色の名前だけが含まれた配列がcolorNamesに入るようにpluck関数を実装してください！

*/
// function pluck(array, property) {
//     // pluck関数の中身を実装してください
//   let result = array.map(function (obj) {
//     // console.log(obj.color);
//     return obj.color
//   })
//   return result
// }


// function pluck(array, property) {
//     // pluck関数の中身を実装してください
//   return array.map(function (obj) {
//     return obj.color // colorと決め打ち
//   })
// }


function pluck(array, property) {
    // pluck関数の中身を実装してください
  return array.map(function (obj) {
    return obj[property];
  })
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');

console.log(colorNames);

// console.log(colorObjects)
// console.log(colorObjects.map(function(obj) { return obj.color }))
