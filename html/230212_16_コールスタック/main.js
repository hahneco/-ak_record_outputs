// コールスタック
function a() {
  
}
function b() {
  a();
}
function c() {
  b();
}
c();