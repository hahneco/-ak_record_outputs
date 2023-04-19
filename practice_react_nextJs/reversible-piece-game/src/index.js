// Reactオブジェクト
import React from 'react';
// ReactDOMオブジェクト
import ReactDOM from 'react-dom/client';
// index.cssによるstyleクラス
import './index.css';
// App.jsによるAppコンポーネント
// import App from './App';
// reportWebVitals'の機能
import reportWebVitals from './reportWebVitals';
import './App.css'


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
// let data = []; // 盤データ(0:なし、1:黒、2:白) // squaresで代用
let xIsNext = false; // 自分ば番かどうか


function Square(props) { // 自分のstateを持っていないので関数コンポーネントで定義
  // console.log(props)
  return (
    <button
      className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  renderSquare(i, j) {
    const idNum = String(i) + String(j);

    return (
      <Square
        value={this.props.squares[i][j]}
        squareId={idNum}
        onClick={() => this.props.onClick(idNum)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
          {this.renderSquare(0, 3)}
          {this.renderSquare(0, 4)}
          {this.renderSquare(0, 5)}
          {this.renderSquare(0, 6)}
          {this.renderSquare(0, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
          {this.renderSquare(1, 3)}
          {this.renderSquare(1, 4)}
          {this.renderSquare(1, 5)}
          {this.renderSquare(1, 6)}
          {this.renderSquare(1, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
          {this.renderSquare(2, 3)}
          {this.renderSquare(2, 4)}
          {this.renderSquare(2, 5)}
          {this.renderSquare(2, 6)}
          {this.renderSquare(2, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 0)}
          {this.renderSquare(3, 1)}
          {this.renderSquare(3, 2)}
          {this.renderSquare(3, 3)}
          {this.renderSquare(3, 4)}
          {this.renderSquare(3, 5)}
          {this.renderSquare(3, 6)}
          {this.renderSquare(3, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(4, 0)}
          {this.renderSquare(4, 1)}
          {this.renderSquare(4, 2)}
          {this.renderSquare(4, 3)}
          {this.renderSquare(4, 4)}
          {this.renderSquare(4, 5)}
          {this.renderSquare(4, 6)}
          {this.renderSquare(4, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(5, 0)}
          {this.renderSquare(5, 1)}
          {this.renderSquare(5, 2)}
          {this.renderSquare(5, 3)}
          {this.renderSquare(5, 4)}
          {this.renderSquare(5, 5)}
          {this.renderSquare(5, 6)}
          {this.renderSquare(5, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 0)}
          {this.renderSquare(6, 1)}
          {this.renderSquare(6, 2)}
          {this.renderSquare(6, 3)}
          {this.renderSquare(6, 4)}
          {this.renderSquare(6, 5)}
          {this.renderSquare(6, 6)}
          {this.renderSquare(6, 7)}
        </div>
        <div className="board-row">
          {this.renderSquare(7, 0)}
          {this.renderSquare(7, 1)}
          {this.renderSquare(7, 2)}
          {this.renderSquare(7, 3)}
          {this.renderSquare(7, 4)}
          {this.renderSquare(7, 5)}
          {this.renderSquare(7, 6)}
          {this.renderSquare(7, 7)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        // squares: Array(64).fill("null"), // 64個の数字が入った1つの配列ver
        squares: Array.from(new Array(8), () => new Array(8).fill(0).map(() => {return null})) // 8*8個の配列
      }],
      stepNumber: 0,
      xIsNext: true,
    }
    this.state.history[0].squares[3][3] = BLACK;
    this.state.history[0].squares[4][4] = BLACK;
    this.state.history[0].squares[3][4] = WHITE;
    this.state.history[0].squares[4][3] = WHITE;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    const line = i.slice(0, 1);
    const column = i.slice(1, 2);
    // console.log(this.state.history[0].squares);
    // console.log(i);


    // console.log(line)
    // console.log(column)
    // console.log(squares)

    if (calculateWinner(squares) || squares[line][column]) {
      return;
    }
    squares[line][column] = this.state.xIsNext ? BLACK : WHITE;
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });

    let blackFlip = this.canFlip(BLACK); // 黒反転できるか否か
    let whiteFlip = this.canFlip(WHITE); // 白反転できるか否か

    this.update();
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  update() { // 白/黒の数を数えて表示する
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let numWhite = 0;
    let numBlack = 0;
    console.log(current.squares)
    // console.log("current.squares[3][3]は、" + current.squares[3][3])
    // console.log("current.squares[3][4]は、" + current.squares[3][4])
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (current.squares[x][y] == WHITE) {
          numWhite++;
          // console.log("numWhiteは、" + numWhite)
        }
        if (current.squares[x][y] == BLACK) {
          numBlack++;
          // console.log("numBlackは、" + numBlack)
        }
      }
    }
    // document.getElementById("numBlack").textContent = numBlack;
    // document.getElementById("numWhite").textContent = numWhite;

    let blackFlip = this.canFlip(BLACK); // 黒反転できるか否か
    let whiteFlip = this.canFlip(WHITE); // 白反転できるか否か
    const finish = numBlack + numWhite;

    console.log(finish)
    if (finish === 64 || (!blackFlip && !whiteFlip)) { // 64手すべて打ち終わったときに
      console.log(blackFlip)
      console.log(whiteFlip)
      console.log("finish")
      if (numWhite > numBlack) {
        document.getElementById("message").textContent = "白の勝ち";
      } else if (numWhite < numBlack) {
        document.getElementById("message").textContent = "黒の勝ち";
      } else {
        document.getElementById("message").textContent = "引き分け";
      }
      return
    }

    //　石を置く順番を判定する処理
    if (!blackFlip) {
      this.showMessage("黒スキップ");
      xIsNext = false;
    } else if (!whiteFlip) {
      this.showMessage("白スキップ");
      xIsNext = true;
    } else {
      // 順番交代。xIsNextが true → false → true → false になる。
      xIsNext = !xIsNext;
    }
    if (!xIsNext) {
      // setTimeout(this.think, 1000); // 1秒間考える時間
      this.think()
      // this.hello("よっ!!")
      // setTimeout(this.hello("やあ"), 2000); // 1秒間考える時間
    }
  }

  hello(greeting) {
    console.log(greeting);
  }

  // showMessage関数
  showMessage(str) { // メッセージを2秒間表示
    document.getElementById("message").textContent = str;
    setTimeout(function () {
      document.getElementById("message").textContent = "";
    }, 2000); // メッセージ(str)を２秒間表示する
  }

  clicked(e) { // 盤上のセルclick時のコールバック関数
    if (!xIsNext) {
      return;
    }
    let id = e.target.id;
    let i = parseInt(id.charAt(4)); // 文字列を整数に変換 縦の座標(i列)取得
    let j = parseInt(id.charAt(5)); // 文字列を整数に変換 横の座標(j列)取得

    let flipped = this.getFlipCells(i, j, BLACK); // 黒に反転する配列
    if (flipped.length > 0) {
      // console.log(flipped);
      for (let k = 0; k < flipped.length; k++) {
        this.put(flipped[k][0], flipped[k][1], BLACK); // 反転する石が0より多ければ黒に変換する
      }
      this.put(i, j, BLACK); // clickしたマスに黒を置く
      this.update();
    }
  }

  // put関数(i,j)にcolor色の石を置く
  put(i, j, color) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // let c = document.getElementById("cell" + i + j);
    let c = squares[i][j];
    console.log(c)
    c.value = BLACK;
    c.className = "cell " + (color === BLACK ? "black" : "white");
    squares[i][j] = color;
  }

  // think関数(コンピューター思考関数)
  think() {
    let highScore = -1000;
    let px = -1;
    let py = -1;
    let tmpData = this.copyData();
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        let flipped = this.getFlipCells(x, y, WHITE);
        if (flipped.length > 0) {
          for (let i = 0; i < flipped.length; i++) {
            let p = flipped[i][0];
            let q = flipped[i][1];
            tmpData[p][q] = WHITE;
            tmpData[x][y] = WHITE;
          }
          let score = this.calcWeightData(tmpData);
          if (score > highScore) {
            highScore = score;
            // (px = x), (py = y);
            (px = x);
            (py = y);
          }
        }
      }
    }
    if (px >= 0 && py >= 0) {
      let flipped = this.getFlipCells(px, py, WHITE);
      if (flipped.length > 0) {
        for (let k = 0; k < flipped.length; k++) {
          this.put(flipped[k][0], flipped[k][1], WHITE);
        }
      }
      this.put(px, py, WHITE);
    }

    // this.update();
  }

  calcWeightData(tmpData) {
    let score = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (tmpData[x][y] == WHITE) {
          score += WeightData[x][y];
        }
      }
    }
    return score;
  }

  copyData() {
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

  // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
  canFlip(color) { // 挟める石があるか？
    console.log("colorは"+color);
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        // 座標(x,y)に石を置いた時に反転する数を求める
        let flipped = this.getFlipCells(x, y, color);
        // console.log(x)
        // console.log(y)
        console.log(flipped)
        console.log(flipped.length)
        if (flipped.length > 0) {
          return true;
        }
      }
    }
    return false;
  }


  // getFlipCellか関数:(i,j)座標にcolorの石を置いた時に反転する石の配列を返す。
  // 各方向を配列dirsに格納。for文で方向ごとに石を挟めるか判定する。
  getFlipCells(i, j, color) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // const line = i.slice(0, 1);
    // const column = i.slice(1, 2);

    // console.log(data) // 盤データ(0:なし、1:黒、2:白)
    console.log("getFlipCellsの「i」は、" + i)
    console.log("getFlipCellsの「j」は、" + j)
    console.log("getFlipCellsの「color」は、" + color)
    if (current.squares[i][j] == BLACK || current.squares[i][j] == WHITE) { // すでに石がある場合(配列す数字が1または2の時)関数から抜ける
      // console.log(data)
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
    console.log("resultは、" + result)
    for (let p = 0; p < dirs.length; p++) {
      let flipped = this.getFlipCellsOneDir(i, j, dirs[p][0], dirs[p][1], color);
      console.log("flippedは"+ flipped)
      result = result.concat(flipped); // 別の配列と結合する処理
    }
    return result;
  }

  // (i,j)を起点として、(dx,dy)方向に、color色の石で挟めるかを返す。
  getFlipCellsOneDir(i, j, dx, dy, color) { // (i,j)に石を置いた時に、(dx,dy)方向で石を挟めるか？
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let x = i + dx; // dx方向に順番に見ていくときの座標
    let y = j + dy; // dy方向に順番に見ていくときの座標
    let flipped = []; // 挟まれた石の配列
    // console.log(i + "," + j)

    console.log(i)
    console.log(j)
    console.log(dx)
    console.log(dy)

    if (
      x < 0 || // 盤の外(その行の左にマス目がない)
      y < 0 || // 盤の外(その行の上にマス目がない)
      x > 7 || // 盤の外(その行の右にマス目がない)
      y > 7 || // 盤の外(その行の下にマス目がない)
      current.squares[i][j] == color || // 同じ色
      current.squares[i][j] == 0 // 石がない
    ) {
      return []; // 盤外、同色、空ならfalse(挟めない)ので関数を抜ける
    }
    flipped.push([x, y]);
    while (true) {
      x += dx;
      y += dy;
      if (x < 0 || y < 0 || x > 7 || y > 7 || current.squares[i][j] == 0) {
        return []; // 盤外、空ならfalse(挟めない)
      }
      if (current.squares[i][j] == color) {
        return flipped;
      } else {
        flipped.push([x, y]);
      }
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

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
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? BLACK : WHITE);
    }

    let numBlack = 0;
    let numWhite = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (current.squares[x][y] == WHITE) {
          numWhite++;
        }
        if (current.squares[x][y] == BLACK) {
          numBlack++;
        }
      }
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div id={"message"}>メッセージ:&nbsp;{status}</div>
          <div>黒（あなた）:&nbsp;{numBlack}枚</div>
          <div>白（PC）:&nbsp;{numWhite}枚</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [ // 縦・横・斜め
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


reportWebVitals(); // パフォーマンス分析する関数(画面表示には関係ない)
