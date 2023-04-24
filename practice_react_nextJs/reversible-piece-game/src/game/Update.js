import React, { useState, Component } from 'react';
import { PIECE, gameSystem } from "./constants.js";
import Util from "./Util.js";
import {useThink} from "./Com.js"


 export async function update() { // 白/黒の数を数えて表示する
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
    // think()
    useThink();

    await Util.sleep();
  }
}
