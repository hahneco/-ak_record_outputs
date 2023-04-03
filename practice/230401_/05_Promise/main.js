'use strict';

// 一秒後に処理を予約する
import { Util } from "./util.js";

// async/awaitで書く
async function main() {
  // ①主人公の行動
  console.log("主人公の行動");
  await Util.sleep(3000); // 3秒待つ

  // ②ドラゴンの行動
  console.log("ドラゴンの行動");
  await Util.sleep(2000); // 2秒待つ

  // ③さらに３秒待ってから主人公の行動
  console.log("主人公の2回目の行動");
  console.log("同期的に実行された!!");
}

main();
