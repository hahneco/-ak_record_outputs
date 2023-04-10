import  usePersist  from '../Persist'
import Game from './Game';
// import AddForm from './AddForm';
// import FindForm from './FindForm';
// import DelForm from './DelForm';

// Gameページの大枠

function GamePage() {
  // const [mode, setMode] = usePersist('mode', 'default')

  return (
    <section className="main-container">
      <h4 className="h4">
        黒(あなた):<span id="numBlack"></span>枚 白(PC):<span id="numWhite"></span>枚
      </h4>
      <h2>メッセージ：<span id="message">（勝敗 etc...）</span></h2>
      <Game />
    </section>
  )
}

export default GamePage
