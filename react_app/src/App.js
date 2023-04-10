import './App.css'
import MemoPage from './memo/MemoPage' // memぜ全体を１つにまとめるコンポーネント

function App() {
  return (
    <div>
      <h1 className='bg-blue text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Memo.</h4>
        <MemoPage />
      </div>
    </div>
  )
}

export default App
