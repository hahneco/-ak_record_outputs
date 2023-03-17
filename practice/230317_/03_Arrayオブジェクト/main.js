'use strict'

function update() {
  console.log("update")
}

function random() {
  let r = Math.floor(Math.random() * 6); // Math.floor(n)でいっていの整数にマッピング（randoめメソッドで生成される数字が0〜1までの少数のため併せて使用する）
  if (r >= 2 && r <=5) {
      console.log("以上")
      document.getElementById("value").textContent = r;
  } else {
    console.log("条件外")
    }
  }
