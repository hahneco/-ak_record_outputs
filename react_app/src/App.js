import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='bg-blue text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>This is sample component.</p>
          <p>これはsampleのコンポーネントです</p>
          <p>簡単なmessageを表示します</p>
        </div>
      </div>
    )
  }
}

export default App;
