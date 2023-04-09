// Reactオブジェクト
import React from 'react';
// ReactDOMオブジェクト
import ReactDOM from 'react-dom/client';
// index.cssによるstyleクラス
import './index.css';
// App.jsによるAppコンポーネント
import App from './App';
// reportWebVitals'の機能
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App title="App" message="This is App Component!" /> */}
    <App />
  </React.StrictMode>
);

reportWebVitals(); // パフォーマンス分析する関数(画面表示には関係ない)
