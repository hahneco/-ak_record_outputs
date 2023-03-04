// スコープチェーン

let a = 3;
window.a = 4;

function fn1() {
  let a = 1;
  function fn2() {
    console.log(a);
    let a = 3;
  }
  fn2();
}
fn1();