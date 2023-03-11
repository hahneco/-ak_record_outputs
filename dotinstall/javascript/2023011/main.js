'use strict';

{
  /*

  function update() {
    // document.querySelector('h1').textContent = 'Changed!'
    // document.querySelector('#target').textContent = 'Changed!'

    // querySelectorはdocumentの中から見つけた最初のものだけ
    // document.querySelector('p').textContent = 'Changed!'

    // documentの全ての要素を取得
    // document.querySelectorAll('p')[2].textContent = 'Changed2!'

    // for文
    // document.querySelectorAll('p').forEach((p, index) => {
    //   p.textContent = `${index}番目のPです`;
    // })
  }

  */

  // addEventListener：第一引数にイベントの種類。第二引数に実行したい処理を関数で渡す。
  document.querySelector('button').addEventListener('click', () => {
    console.log('aaaaaaaaa');
    document.getElementById('target').textContent = 'Changed!';
  });
  // setTimeout(update, 2000);
}
