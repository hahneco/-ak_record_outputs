import React from "react";

// 定数

export const DATA = {
  weightData: [ // 盤面ごとの優先度
    [30, -12, 0, -1, -1, 0, -12, 30],
    [-12, -15, -3, -3, -3, -3, -15, -12],
    [0, -3, 0, -1, -1, 0, -3, 0],
    [-1, -3, -1, -1, -1, -1, -3, -1],
    [-1, -3, -1, -1, -1, -1, -3, -1],
    [0, -3, 0, -1, -1, 0, -3, 0],
    [-12, -15, -3, -3, -3, -3, -15, -12],
    [30, -12, 0, -1, -1, 0, -12, 30],
  ], // 重みづけデータ
}

export const PIECE = {
  BLACK: 1, // 自分
  WHITE: 2, // PC
}

export const turn = {
  isMyTurn: false, // 自分の番かどうか
}

// const BLACK = 1; // 自分
// const WHITE = 2; // PC
// let isMyTurn = false; // 自分の番かどうか

// export const DataContext = React.createContext(data);
