'use strict'

window.onload = init;
function init() {
  let years = document.querySelectorAll("span.year");
  // console.log(years)

  for (let i = 0; i < years.length; i++) {
    let y = years[i];
    // console.log(y);

    y.answer = y.textContent;
    // console.log(y.textContent);
    y.textContent = "______";
    // console.log(y.textContent);
    y.onclick = function (e) {
      // console.log(e.target.textContent);
      e.target.textContent = e.target.answer;
    }
  }
}
