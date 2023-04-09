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
      msg: 'Count start〜!',
      counter: 0,
      flg: true
    }
    this.doAction = this.doAction.bind(this); // コンポーネントクラスのdoActionが束縛される
  }

  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: this.state.counter,
      flg: !this.state.flg
    })
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
          <p className='subtitle'>Count number!!</p>
          {this.state.flg ?
            <div className='alert primary text-right'>
              <p className='h5'>count: {this.state.msg}</p>
            </div>
          :
            <div className='alert primary text-left'>
              <p className='h5'>{this.state.msg}です。</p>
            </div>
          }
          <div className='text-center'>
            <button className='btn btn-primary' onClick={this.doAction}>Click!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
