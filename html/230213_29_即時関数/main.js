// 関数宣言
function a() {
  console.log('called');
}
a();

// 即時関数
(function() {
  console.log('called');
})()

// 即時関数（戻り値あり）
let c = (function() {
  console.log('called');
  return 0;
})()
console.log(c);
