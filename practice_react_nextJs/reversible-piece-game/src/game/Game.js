import React, { useState, useEffect, Component } from 'react'
import  usePersist  from '../Persist'

// import Item from './Item'

const WeightData = [ // 盤面ごとの優先度
  [30, -12, 0, -1, -1, 0, -12, 30],
  [-12, -15, -3, -3, -3, -3, -15, -12],
  [0, -3, 0, -1, -1, 0, -3, 0],
  [-1, -3, -1, -1, -1, -1, -3, -1],
  [-1, -3, -1, -1, -1, -1, -3, -1],
  [0, -3, 0, -1, -1, 0, -3, 0],
  [-12, -15, -3, -3, -3, -3, -15, -12],
  [30, -12, 0, -1, -1, 0, -12, 30],
]; // 重みづけデータ

const BLACK = 1; // 自分
const WHITE = 2; // PC

// const GAMEBOARD = new Game();

let data = []; // 盤データ(0:なし、1:黒、2:白)
let myTurn = false; // 自分ば番かどうか


class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Table title="ボードです"></Table>
      </div>
    )
  }
}

class Table extends Component {
  render() {
    // let content = this.props.children
    // let table = document.createElement('table');

    for (let i = 0; i < 8; i++) { // i行作成
      // let tr = document.createElement("tr"); // tr
      // <tr></tr>
      data[i] = [0, 0, 0, 0, 0, 0, 0, 0] // i行目のデータを作成

      for (let j = 0; j < 8; j++) {
        data[j] = [0, 0, 0, 0, 0, 0, 0, 0] // j行目のデータを作成
        // let td = document.createElement("td");
        // <td></td>
      }
    }

    return (
      <div>
        {this.props.title}
        {/* {content} */}
      </div>
    )
  }
}

export default Game
