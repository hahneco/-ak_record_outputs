import React, { useState, Component } from 'react';
import { PIECE, gameSystem } from "./constants.js";
import Util from "./Util.js";
import Com from "./Com.js"
import Board from '../index.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array.from(new Array(8), () => new Array(8).fill(0).map(() => { return null })) // 8*8個の配列
      }],
      stepNumber: 0,
      situation: "対戦中",
    };
    this.state.history[0].squares[3][3] = PIECE.black;
    this.state.history[0].squares[4][4] = PIECE.black;
    this.state.history[0].squares[3][4] = PIECE.white;
    this.state.history[0].squares[4][3] = PIECE.white;

    this.handleClick = this.handleClick.bind(this);
    // this.think = this.think.bind(this);

    this.update();
  }

  async update() { // 白/黒の数を数えて表示する
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let numWhite = 0; // あとでBoardに持たせる
    let numBlack = 0; // あとでBoardに持たせる

    console.log("this.state.stepNumber" + this.state.stepNumber)
    console.log("this.state.history[0].squares" + this.state.history[0].squares)
    console.log(current.squares)

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (squares[x][y] === PIECE.white) {
          numWhite++;
        }
        if (squares[x][y] === PIECE.black) {
          numBlack++;
        }
      }
    }
    console.log("numWhiteは、" + numWhite + "枚")
    console.log("numBlackは、" + numBlack + "枚")

    let blackFlip = this.canFlip(PIECE.black); // 黒反転できるか否か // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
    let whiteFlip = this.canFlip(PIECE.white); // 白反転できるか否か // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
    const sumWhiteandBlack = numBlack + numWhite;

    console.log("blackFlip: " + blackFlip)
    console.log("whiteFlip: " + whiteFlip)
    console.log("sumWhiteandBlack: " + sumWhiteandBlack)

    if (sumWhiteandBlack === 64 || (!blackFlip && !whiteFlip)) { // 64手すべて打ち終わったときに
      console.log("finish")
      if (numWhite > numBlack) {
        this.setState({
          situation: "白の勝ち"
        })
      } else if (numWhite < numBlack) {
        this.setState({
          situation: "黒の勝ち"
        })
      } else {
        this.setState({
          situation: "引き分け"
        })
      }
      return
    }

    console.log("gameSystem.isMyTurnは、" + gameSystem.isMyTurn)

    // 石を置く順番を判定する処理
    if (!blackFlip) {
      this.showMessage("黒スキップ");
      gameSystem.isMyTurn = false;
      // this.setState({ // 変更したstateをセットする
      //   gameSystem.isMyTurn: false,
      // });

    } else if (!whiteFlip) {
      this.showMessage("白スキップ");
      gameSystem.isMyTurn = true;
      // this.setState({ // 変更したstateをセットする
      //   gameSystem.isMyTurn: true,
      // });

    } else {
      // 順番交代。this.state.gameSystem.isMyTurnが true → false → true → false になる。
      gameSystem.isMyTurn = !gameSystem.isMyTurn;
      // this.setState({ // 変更したstateをセットする
      //   gameSystem.isMyTurn: !this.state.gameSystem.isMyTurn,
      // });
    }
    // console.log("gameSystem.isMyTurnは、" + this.state.gameSystem.isMyTurn)

    // 自分のターンでなければPC関数処理
    if (!gameSystem.isMyTurn) {
      await Util.sleep(2000);
      Com.think()

      await Util.sleep();
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const line = i.slice(0, 1);
    const column = i.slice(1, 2);

    console.log("clickした!! squareID: " + i + ", valueは" + squares[line][column])
    console.log("gameSystem.isMyTurn: " + gameSystem.isMyTurn)

    if (!gameSystem.isMyTurn) {
      return;
    }
    let flipped = this.getFlipCells(line, column, PIECE.black); // 黒に反転する配列
    console.log("handleClickのflipped: " + flipped);
    console.log("flipped.length" + flipped.length)

    if (flipped.length > 0) {
      for (let k = 0; k < flipped.length; k++) {
        this.put(flipped[k][0], flipped[k][1], PIECE.black); // 反転する石が0より多ければ黒に変換する
        console.log("flipped[k][0], flipped[k][1]" + flipped[k][0] + flipped[k][1])
      }

      this.put(line, column, PIECE.black); // clickしたマスに黒を置く
      this.update();
    }

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      // gameSystem.isMyTurn: !this.state.gameSystem.isMyTurn,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      // gameSystem.isMyTurn: (step % 2) === 0,
    });
    if (!gameSystem.isMyTurn === step % 2) {
      gameSystem.isMyTurn = true;
    }
    // this.update();
  }

  // showMessage関数
  showMessage(str) { // メッセージを2秒間表示
    // document.getElementById("message").textContent = str;
    setTimeout(function () {
      // document.getElementById("message").textContent = "";
    }, 2000); // メッセージ(str)を２秒間表示する
  }

  // put関数(i,j)にcolor色の石を置く
  put(i, j, color) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    Util.audio();
    squares[i][j] = color;
  }

  // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
  canFlip(color) { // 挟める石があるか？
    // console.log("colorは"+color);
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        // 座標(x,y)に石を置いた時に反転する数を求める
        let flipped = this.getFlipCells(x, y, color);
        if (flipped.length > 0) {
          console.log("flipped.length: " + flipped.length)
          return true;
        }
        console.log("flipped.length: " + flipped.length)
      }
    }
    return false;
  }


  // getFlipCell関数: (i,j)座標にcolorの石を置いた時に反転する石の配列を返す。
  // 各方向を配列dirsに格納。for文で方向ごとに石を挟めるか判定する。
  getFlipCells(i, j, color) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (squares[i][j] === PIECE.black || squares[i][j] === PIECE.white) { // すでに石がある場合(配列の数字が1または2の時)関数から抜ける
      return [];
    }

    // 相手を挟めるか調査
    let dirs = [ // clickした座標を拠点に8方位を調査する
      [-1, -1], // 左上
      [0, -1], // 真上
      [1, -1], // 右上
      [-1, 0], // 左
      [1, 0], // 右
      [-1, 1], // 左下
      [0, 1], // 真下
      [1, 1], // 右下
    ];
    let result = [];

    for (let p = 0; p < dirs.length; p++) {
      let flipped = this.getFlipCellsOneDir(i, j, dirs[p][0], dirs[p][1], color);
      result = result.concat(flipped); // 別の配列と結合する処理
    }
    return result;
  }

  // (i,j)を起点として、(dx,dy)方向に、color色の石で挟めるかを返す。
  getFlipCellsOneDir(i, j, dx, dy, color) { // (i,j)に石を置いた時に、(dx,dy)方向で石を挟めるか？
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let x = Number(i) + Number(dx); // dx方向に順番に見ていくときの座標
    let y = Number(j) + Number(dy); // dy方向に順番に見ていくときの座標
    let flipped = []; // 挟まれた石の配列

    if (
      x < 0 || // 盤の外(その行の左にマス目がない)
      y < 0 || // 盤の外(その行の上にマス目がない)
      x > 7 || // 盤の外(その行の右にマス目がない)
      y > 7 || // 盤の外(その行の下にマス目がない)
      squares[x][y] === color || // 同じ色
      squares[x][y] === null // 石がない
      ) {
      return []; // 盤外、同色、空ならfalse(挟めない)ので関数を抜ける
    }
    flipped.push([x, y]);

    while (true) {
      x += dx;
      y += dy;
      if (x < 0 || y < 0 || x > 7 || y > 7 || squares[x][y] === null) {
        return []; // 盤外、空ならfalse(挟めない)
      }
      if (squares[x][y] === color) {
        return flipped;
      } else {
        flipped.push([x, y]);
      }
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    status = this.state.situation;

    let numBlack = 0;
    let numWhite = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (current.squares[x][y] === PIECE.white) {
          numWhite++;
        }
        if (current.squares[x][y] === PIECE.black) {
          numBlack++;
        }
      }
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div id={"message"}>メッセージ</div>
          <div className="your-info">黒（あなた）:&nbsp;{numBlack}枚</div>
          <div className="pc-info">白（PC）:&nbsp;{numWhite}枚</div>
          <div>戦況:&nbsp;{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
