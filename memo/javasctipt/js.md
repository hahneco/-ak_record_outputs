# JavaScript

## ECMAScript

- ECMAScript は標準規格

## JavaScript

- ECMAScript の実装 ver

[^ 1]ES6(ES2015)：次世代 JavaScript
ES6 は現状では未対応のブラウザが多い。
ES6 未対応ブラウザについては Babel で ES5 へ変換とトランスファイル）する。
※ES6 が全た対応されても ES7 のような次世代バージョンを Babel のようなものでトランスファイすする状況が続くのではと考えられる。

### ES6 の便利機能

- forEach
- map
- filter
- find
- every
- some
- reduce

ES5 の時点ではドラフト機能。
これら便利メソッドでデータのコレクションを簡略的にかける。

// ########################
JavaScript というプログラミング言語は文と式からできている。

- 文(statement)
- 式(Expression)

### 式とは

値を生成し、変数に代入できるもの。
式を評価すると結果の値を得ることができる。

### 文とは

処理する段階が１つのもの。
文の末尾には「;」を置くことで、文と文に区切りをつける。
文を上から処理することでプログラムが実行される。

※if 文や for 文は「文」なので「;」ま末尾に置かない。

文は式にはなれない。

文は変数への代入はできない。
（よって if 文や for 文も変数への代入はできない）

### 式文

式は文になれる。
（文になった式のことを式文という）
式文は文の一種である。よって末尾に「;」を置く。

### ブロック文

{}でかこまれた部分を「ブロック」という。
ブロック内には複数の「文」が書ける。

ブロックで終わる文には「;」は不要。

### 関数宣言（文）と関数式

- 関数宣言（文）

```
function learn() {
  処理
}
```

ブロック{}で終わる文の末尾には「;」は不要。

- 関数式（式）

```
const read = function() {
  処理
};
```

上記の匿名関数は下記のように置き換えても同じと言える。

```
function fn () {}
const read = fn
```

式なので変数に代入が可能。
この関数は式でありつつ「文の一部」であるため、末尾に「;」を置く。

// ############################

## const は定数ではない

const は「再代入できない変数」を定義する変数宣言である。
必ずしも定数を定義するわけではない。

const 宣言で定数に近い変数を定義する方法。

```
// TEN_NUMBERという変数は常に10という値を示す。
// 変更できないプリミティブな値で初期化されている。
// プリミティブな値：数値や文字列の「オブジェクトではない」データ
const TEN_NUMBER = 10;
```

変数のように定義できていない場合（プリミティブな値ではない場合）

```
// const で「オブジェクト」を定義している。
const object = {
  key: '値'
};

// オブジェクトそのものは変更可能。よって定数としては定義できていない。
object.key = '新しい値';
```
