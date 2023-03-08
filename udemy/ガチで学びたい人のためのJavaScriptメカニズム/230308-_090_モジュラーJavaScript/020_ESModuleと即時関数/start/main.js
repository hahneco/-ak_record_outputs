const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + publicVal);
  }

  function privateFn() {

  }

  return {
    publicFn, // 即時関数moduleAが実行された時の戻り値
    publicVal // 即時関数moduleAが実行された時の戻り値 ※オブジェクトの部がmoduleAに格納される ※オブジェクトの部がmoduleAに格納される
  }
})();

// ES Moduleの動きは即時関数の動きに似ている
// ↓即時関数でやってみる
const moduleB = (function({ publicFn:fn, publicVal:val }) {
  publicFn()
  publicFn()
  publicFn()
  console.log(publicVal++)
  console.log(publicVal++)
  publicFn()
})();
