// Util クラス

export default class Utill {
  // 1000ms待つ処理
  static sleep = (wait = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(); // waitミリ秒後にresolveを呼び起こす
      }, wait);
    });
  };
}
