// import logo from './logo.svg';
import './App.css';
import Rect from './Rect';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super()

    this.title = props.title
    this.message = props.message
    this.state = {
      msg: 'Hello Component!!!!'
    }
  }

  render() {
    return (
      <div>
        <h1 className='bg-blue text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>{this.title}</p>
          <p>{this.message}</p>
          <p>簡単なmessageを表示します</p>
          <hr></hr>
          <p className='subtitle'>Show message.</p>
          <p className='alert alert-warning'>{this.state.msg}</p>
          <p className='alert alert-dark'>{this.props.msg}</p>
          <hr></hr>

          <div className='container'>
            <Rect x="200" y="200" w="200" h="200" c="#F3F9FF" r="25" />
            <Rect x="300" y="300" w="300" h="300" c="#DC9FB4" r="75" />
            <Rect x="400" y="400" w="400" h="400" c="#A5DEE4" r="200" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
