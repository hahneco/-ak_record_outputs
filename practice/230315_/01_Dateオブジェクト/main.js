'use strict'


function update() {
  let now = new Date();
  document.getElementById("year").textContent = now.getFullYear();
  document.getElementById("month").textContent = now.getMonth() + 1;
  document.getElementById("date").textContent = now.getDate();
  document.getElementById("hour").textContent = now.getHours();
  document.getElementById("min").textContent = now.getMinutes();
  document.getElementById("sec").textContent = now.getSeconds();
  document.getElementById("msec").textContent = now.getMilliseconds();
}


console.log("グローバルな文脈")
