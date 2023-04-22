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
import sound from './piece.mp3'


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
let isMyTurn = false; // 自分の番かどうか


function Square(props) { // 自分のstateを持っていないので関数コンポーネントで定義
  return (
    <button
      className={`square ${props.className}`} onClick={props.onClick}>
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
        className={"cell" + this.props.squares[i][j]}
      />
    );
  }

  render() {
    return (
      <div className="squares">
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
        squares: Array.from(new Array(8), () => new Array(8).fill(0).map(() => { return null })) // 8*8個の配列
      }],
      stepNumber: 0,
      // isMyTurn: false,
    };
    this.state.history[0].squares[3][3] = BLACK;
    this.state.history[0].squares[4][4] = BLACK;
    this.state.history[0].squares[3][4] = WHITE;
    this.state.history[0].squares[4][3] = WHITE;

    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);

    this.update();
  }

  async update() { // 白/黒の数を数えて表示する
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let numWhite = 0; // あとでBoardに持たせる
    let numBlack = 0; // あとでBoardに持たせる

    console.log(current.squares)

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (current.squares[x][y] === WHITE) {
          numWhite++;
        }
        if (current.squares[x][y] === BLACK) {
          numBlack++;
        }
      }
    }
    console.log("numWhiteは、" + numWhite + "枚")
    console.log("numBlackは、" + numBlack + "枚")
    // document.getElementById("numBlack").textContent = numBlack;
    // document.getElementById("numWhite").textContent = numWhite;

    let blackFlip = this.canFlip(BLACK); // 黒反転できるか否か // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
    let whiteFlip = this.canFlip(WHITE); // 白反転できるか否か // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
    const sumWhiteandBlack = numBlack + numWhite;

    console.log("blackFlip: " + blackFlip)
    console.log("whiteFlip: " + whiteFlip)
    console.log("sumWhiteandBlack: " + sumWhiteandBlack)

    if (sumWhiteandBlack === 64 || (!blackFlip && !whiteFlip)) { // 64手すべて打ち終わったときに
      console.log("finish")
      if (numWhite > numBlack) {
        // document.getElementById("message").textContent = "白の勝ち";
      } else if (numWhite < numBlack) {
        // document.getElementById("message").textContent = "黒の勝ち";
      } else {
        // document.getElementById("message").textContent = "引き分け";
      }
      return
    }

    console.log("isMyTurnは、" + isMyTurn)

    // 石を置く順番を判定する処理
    if (!blackFlip) {
      this.showMessage("黒スキップ");
      console.log("黒スキップ")
      isMyTurn = false;
      // this.setState({ // 変更したstateをセットする
      //   isMyTurn: false,
      // });

    } else if (!whiteFlip) {
      this.showMessage("白スキップ");
      console.log("白スキップ")
      isMyTurn = true;
      this.setState({ // 変更したstateをセットする
        isMyTurn: true,
      });

    } else {
      // 順番交代。this.state.isMyTurnが true → false → true → false になる。
      isMyTurn = !isMyTurn;
      console.log("白スキップ黒スキップ以外")
      // this.setState({ // 変更したstateをセットする
      //   isMyTurn: !this.state.isMyTurn,
      // });
    }
    console.log("isMyTurnは、" + isMyTurn)

    // 自分のターンでなければPC関数処理
    if (!isMyTurn) {
      await this.sleep(2000);
      this.think()

      await this.sleep();
    }

    // this.setState({
    //   history: history.concat([{
    //     squares: squares,
    //   }]),
    //   // stepNumber: history.length,
    //   // isMyTurn: !this.state.isMyTurn,
    // });
  }

  // 1000ms待つ処理
  sleep = (wait = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(); // waitミリ秒後にresolveを呼び起こす
      }, wait);
    });
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const line = i.slice(0, 1);
    const column = i.slice(1, 2);

    console.log("clickした!! squareID: " + i + ", valueは" + squares[line][column])
    console.log("isMyTurn: " + isMyTurn)

    if (!isMyTurn) {
      return;
    }
    let flipped = this.getFlipCells(line, column, BLACK); // 黒に反転する配列
    console.log("handleClickのflipped: " + flipped);
    console.log("flipped.length" + flipped.length)

    if (flipped.length > 0) {
      for (let k = 0; k < flipped.length; k++) {
        this.put(flipped[k][0], flipped[k][1], BLACK); // 反転する石が0より多ければ黒に変換する
        console.log("flipped[k][0], flipped[k][1]" + flipped[k][0] + flipped[k][1])
      }

      this.put(line, column, BLACK); // clickしたマスに黒を置く
      this.update();
    }

    // if (calculateWinner(squares) || squares[line][column]) {
    //   return;
    // }
    // squares[line][column] = this.state.isMyTurn ? BLACK : WHITE;

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      isMyTurn: !this.state.isMyTurn,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isMyTurn: (step % 2) === 0,
    });
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

    // let c = document.getElementById("cell" + i + j);
    // current.squares[i][j] = BLACK;
    // c.className = "cell " + (color === BLACK ? "black" : "white");
    console.log("i + j + color: "+ i + j + color)
    this.audio();
    current.squares[i][j] = color;
  }

  audio() {
    const audio = new Audio(sound);
    audio.volume = 0.2;
    audio.currentTime = 0; //連続クリックに対応
    audio.play(); //クリックしたら音を再生
    console.log("audio")
  }

  // think関数(コンピューター思考関数)
  think() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

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

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      // isMyTurn: !this.state.isMyTurn,
    });

    this.update();
  }

  calcWeightData(tmpData) {
    let score = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (tmpData[x][y] === WHITE) {
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
        tmpData[x][y] = current.squares[x][y];
      }
    }
    return tmpData;
  }

  // canFlip関数:盤面に引数の色の石を置けるかをbooleanで返す。
  canFlip(color) { // 挟める石があるか？
    // console.log("colorは"+color);
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        // 座標(x,y)に石を置いた時に反転する数を求める
        let flipped = this.getFlipCells(x, y, color);
        // console.log(x)
        // console.log(y)
        // console.log(flipped)
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

    // console.log(i + ":" + j + ":" + color)

    // const line = i.slice(0, 1);
    // const column = i.slice(1, 2);

    // console.log(data) // 盤データ(0:なし、1:黒、2:白)
    // console.log("getFlipCellsの「i」は、" + i)
    // console.log("getFlipCellsの「j」は、" + j)
    // console.log("getFlipCellsの「color」は、" + color)
    // console.log("current.squares[i][j]: " + current.squares[i][j]);

    if (current.squares[i][j] === BLACK || current.squares[i][j] === WHITE) { // すでに石がある場合(配列の数字が1または2の時)関数から抜ける
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
      // console.log("flippedは"+ flipped)
      result = result.concat(flipped); // 別の配列と結合する処理
    }
    // console.log("resultは、" + result)
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

    // console.log("getFlipCellsOneDir" + i + ", " + j + ", " + dx + ", " + dy + ", " + color);
    // console.log(x);
    // console.log(y);

    if (
      x < 0 || // 盤の外(その行の左にマス目がない)
      y < 0 || // 盤の外(その行の上にマス目がない)
      x > 7 || // 盤の外(その行の右にマス目がない)
      y > 7 || // 盤の外(その行の下にマス目がない)
      current.squares[x][y] === color || // 同じ色
      current.squares[x][y] === null // 石がない
      ) {
      // console.log("color同じ")
      return []; // 盤外、同色、空ならfalse(挟めない)ので関数を抜ける
    }
    flipped.push([x, y]);
    // console.log("flipped " + flipped)
    // console.log("flipped.length: " + flipped.length);

    while (true) {
      x += dx;
      y += dy;
      if (x < 0 || y < 0 || x > 7 || y > 7 || current.squares[x][y] === null) {
        return []; // 盤外、空ならfalse(挟めない)
      }
      if (current.squares[x][y] === color) {
        return flipped;
      } else {
        flipped.push([x, y]);
        // console.log("flipped " + flipped)
      }
      // console.log("flipped.length: " + flipped.length);
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

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
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.isMyTurn ? BLACK : WHITE);
    // }

    let numBlack = 0;
    let numWhite = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (current.squares[x][y] === WHITE) {
          numWhite++;
        }
        if (current.squares[x][y] === BLACK) {
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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


reportWebVitals(); // パフォーマンス分析する関数(画面表示には関係ない)
