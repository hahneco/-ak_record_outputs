'use strict';

// ポーカーのメインプログラム
you.selectedNodes().forEach(() => {
  // 山札の一番上から一枚取り出し、drawCardに渡す
  const newCard = cards.pop();
  const oldCard = you.drawCard(newCard);
  // drawCardから返されたカードを、山札の一番下に戻す
  cards.unshift(oldCard);
})
