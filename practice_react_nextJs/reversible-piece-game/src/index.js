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
// import GamePage from './game/GamePage' // ゲーム全体を１つにまとめるコンポーネント

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


reportWebVitals(); // パフォーマンス分析する関数(画面表示には関係ない)
