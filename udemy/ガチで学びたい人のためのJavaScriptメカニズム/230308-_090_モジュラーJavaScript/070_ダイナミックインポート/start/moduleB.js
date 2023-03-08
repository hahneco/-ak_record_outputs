// 非同期的に行われる
// import { publicVal, publicFn } from "./moduleA.js";

import { publicVal, publicFn } from "./moduleA.js";

// publicFn();

async function fn() {
  await modules = await import('./moduleA.js');
  modules.publicFn();
}

// 初期表示時に必要のない情報は、必要なタイミングにダイナミックインポートで読み込ませる（非同期で読み込む）
/*
// ↓Promiseで帰ってくる
import('./moduleA.js').then(function (modules) {
  console.log(modules);
  modules.publicFn();
})
*/
