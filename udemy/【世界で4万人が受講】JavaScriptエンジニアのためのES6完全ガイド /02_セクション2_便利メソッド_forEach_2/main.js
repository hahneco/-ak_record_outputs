'use strict'
/*
forループからの脱却
下のコードは savePost という関数を3回呼び出しています。このコード自体は動くので機能としては問題はないのですが、forループよりもforEachメソッドを使ってコードを読みやすくしたいです。下のコードをforEachを使うようにリファクタしてください。

注意： savePostという関数は定義済みだと考えてください（新たに定義する必要はありません）
*/

function handlePosts() {
  var posts = [
    { id: 23, title: 'JSニュース' },
    { id: 52, title: 'リファクター・シティ' },
    { id: 105, title: 'Rubyの良いところ' }
  ];

  // for (var i = 0; i < posts.length; i++) { // postsの個数回
  //   savePost(posts[i]); // savePost関数が実行される
  // }

  posts.forEach(savePost);
}

// ########################3
/*
複数の値の処理
下の配列には画像の大きさを表すオブジェクトが複数格納してあります。forEachメソッドを使って画像の面積を求め、「areas」という新しい配列に格納してください。面積の計算方法は「image.height * image.width」となります。
*/
var images = [ // 配列
  { height: 10, width: 30 }, // 連想配列{}
  { height: 20, width: 90 }, // 連想配列{}
  { height: 54, width: 32 } // 連想配列{}
];

var areas = []; // 配列[]

// console.log(images[0].height * images[0].width)

// forループ文での表現
// for (var i = 0; i < images.length; i++) {
//   result1 = images[i].height * images[i].width
// }

// forEachで表現
images.forEach(function (value) {
  let arry = value.height * value.width
  areas.push(arry)
})
console.log(areas)
