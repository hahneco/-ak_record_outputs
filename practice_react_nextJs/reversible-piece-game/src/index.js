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
let myTurn = false; // 自分ば番かどうか


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
    // console.log(this.state.history[0].squares);
    console.log(i);

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    const line = i.slice(0, 1);
    const column = i.slice(1, 2);

    // console.log(line)
    // console.log(column)
    console.log(squares)

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
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
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

    let blackFlip = canFlip(BLACK); // 黒反転できるか否か
    let whiteFlip = canFlip(WHITE); // 白反転できるか否か

    // canFlip関数:盤面に引数の色の石を置けるかをブーリアンで返す。
    canFlip(i) { // 挟める石があるか？
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          // 座標(x,y)に石を置いた時に反転する数を求める
          let flipped = getFlipCells(x, y, i);
          // console.log(x)
          // console.log(y)
          if (flipped.length > 0) {
            return true;
          }
        }
      }
      return false;
    }

    getFlipCells()


    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>メッセージ:&nbsp;{status}</div>
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
