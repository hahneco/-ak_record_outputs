# DOM とは

- Document Object Model

- ブラウザで html を読み込むと、DOM というデータ構造が作成 → 描さされる

* DOM のデータ構造を Node ツリーという。
  [^1]: document からツリー状にぶら下がっている。
  [^1]: Node ツリーにぶら下がっている一つずつの要素を Node という。
  [^1]: html 内の改行や字下げも一つの Node（html 内の先頭と末尾を除く）。
  [^1]: Node には種類がある。

- javascript で DOM を操作することで、様々な機能が作れる
  [^1]: javascript が操作しているのは DOM であり、html が書き換えられるわけではない。

## Node とは

Node には種類がある。

- document

* doctype
* html 要素（document、doctype 以外：「Element」Node
* text や改行：「Text」Node

その他、親子関係も表せる（「Parent Node」、「Child Node」など）
兄弟関係は「Sibling Node」。
