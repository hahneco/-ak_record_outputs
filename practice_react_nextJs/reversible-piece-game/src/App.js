import React from 'react';
import './App.css'
// import Game from './game/Game' // ゲーム全体を１つにまとめるコンポーネント

function App() {
  return (
    <div>
      <h1 className='bg-blue text-white display-4'>React</h1>
      <div className='container'>
        <h2 className='my-3'>Reversible Piece<span>!</span></h2>
        {/* <Game /> */}
      </div>
    </div>
  )
}

export default App
