'use strict';

// 一秒後に処理を予約する
export const Util = {
  sleep: (wait = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, wait); // 「wait」秒後にresolveを呼び出す。
    });
  }
};
