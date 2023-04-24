import sound from './piece.mp3'

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

  static audio() {
    const audio = new Audio(sound);
    audio.volume = 0.2;
    audio.currentTime = 0; //連続クリックに対応
    audio.play(); //クリックしたら音を再生
    console.log("audio")
  }
}
