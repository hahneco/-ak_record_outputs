// var j;
let j;

for(let i = 0; i < 5; i++) {
  // const j = i * 2;
  // var j = i * 2; // ブロックスコープが適用されない
  j = i * 2;

  setTimeout(function() {
    console.log(j);
  }, 1000);
}