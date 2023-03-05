function F(a, b) {
  this.a = a;
  this.b = b;
  return {a: 1}; // returnの値がオブジェクト
  // return 1; // returnの値がオブジェクト以外（プリミティブ型）
  // returnを持たない場合も実引数をthisを持つオブジェクトが生成される
}

// prototypeが設定されている場合
F.prototype.c = function() {}

function newOpe(C, ...args) { // 「...args」引数で渡ってきたものを配列に変換する
  const _this = Object.create(C.prototype);
  const result = C.apply(_this, args);
  // console.log(result, _this);
  if(typeof result === "object" && result !== null) {
    return result;
  }

  return _this;
}

// const instance = new F(1,2);
const instance = new newOpe(F, 1, 2);
// console.log(instance);