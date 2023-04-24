import React, { useState, Component } from 'react';
import { DATA, PIECE } from "./constants.js";
// import Game from "./Game.js";
import {update} from './Update.js';

// Com(相手) クラス

export async function useThink(props) {
  const [history, setHistory] = useState(this.state.history.slice(0, this.state.stepNumber + 1))
  const [current] = useState(history[history.length - 1])
  const [squares, setSquare] = useState(current.squares.slice())

  let highScore = -1000;
  let px = -1;
  let py = -1;
  let tmpData = this.copyData();
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let flipped = this.getFlipCells(x, y, PIECE.white);
      if (flipped.length > 0) {
        for (let i = 0; i < flipped.length; i++) {
          let p = flipped[i][0];
          let q = flipped[i][1];
          tmpData[p][q] = PIECE.white;
          tmpData[x][y] = PIECE.white;
        }
        let score = this.calcWeightData(tmpData);
        if (score > highScore) {
          highScore = score;
          (px = x);
          (py = y);
        }
      }
    }
  }
  if (px >= 0 && py >= 0) {
    let flipped = this.getFlipCells(px, py, PIECE.white);
    if (flipped.length > 0) {
      for (let k = 0; k < flipped.length; k++) {
        this.put(flipped[k][0], flipped[k][1], PIECE.white);
      }
    }
    this.put(px, py, PIECE.white);
  }

  this.setState({
    history: history.concat([{
      squares: squares,
    }]),
    stepNumber: history.length,
    // gameSystem.isMyTurn: !this.state.gameSystem.isMyTurn,
  });

  update();
}

export async function calcWeightData(tmpData) {
  let score = 0;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (tmpData[x][y] === PIECE.white) {
        score += DATA.weightData[x][y];
      }
    }
  }
  return score;
}

export async function copyData() {
  const history = this.state.history.slice(0, this.state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();

  let tmpData = [];
  for (let x = 0; x < 8; x++) {
    tmpData[x] = [];
    for (let y = 0; y < 8; y++) {
      tmpData[x][y] = squares[x][y];
    }
  }
  return tmpData;
}

// think関数(コンピューター思考関数)
