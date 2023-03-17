'use strict'

function update() {
  console.log("update")
}

function random() {
    let r = Math.floor(Math.random() * 6); // Math.floor(n)でいっていの整数にマッピング（randoめメソッドで生成される数字が0〜1までの少数のため併せて使用する）
    document.getElementById("value").textContent = r;
  }
