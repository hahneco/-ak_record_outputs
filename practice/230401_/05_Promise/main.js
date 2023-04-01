'use strict';

// 一秒後に処理を予約する
const sleep = (wait = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait); // 「wait」秒後にresolveを呼び出す。
  });
};

// async/awaitで書く
async function main() {
  // ①主人公の行動
  console.log("主人公の行動");
  await sleep(3000); // 3秒待つ

  // ②ドラゴンの行動
  console.log("ドラゴンの行動");
  await sleep(2000); // 2秒待つ

  // ③さらに３秒待ってから主人公の行動
  console.log("主人公の2回目の行動");
  console.log("同期的に実行された!!");
}

main();


/*

// 実行
// ①主人公の行動
console.log("主人公の行動");
sleep()
  // ②１秒待ってからドラゴンの行動
  .then(() => {
    console.log("ドラゴンの行動");
  })
  // ③1秒待ってから主人公の行動？？ → うまくいかない(②だけが①の3秒後に実行される、、、）
  .then(() => {
    sleep().then(() => console.log("主人公の2回目の行動"));
  });

*/

/*

// ①主人公の行動
console.log("主人公の行動");
// ②１秒待ってからドラゴンの行動
sleep().then(() => console.log("ドラゴンの行動"));
// ③1秒待ってから主人公の行動？？ → うまくいかない(②だけが①の3秒後に実行される、、、）
sleep().then(() => console.log("主人公の2回目の行動"));

*/
