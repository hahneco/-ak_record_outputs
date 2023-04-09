// import logo from './logo.svg';
import './App.css';
import Rect from './Rect';
import { Component } from 'react';

class App extends Component {
  input = ''

  constructor(props) {
    super(props)
    this.state = {
      title: 'input form',
      message: 'type your name.'
    }
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      title: 'send form',
      message: 'hello, ' + this.input + '!'
    })
    event.preventDefault()
  }

  render() {
    return <div>
      <h1 className='bg-blue text-white display-4'>React</h1>
      <div className='container'>
        <h4>{this.state.title}</h4>
        <p className='card h5 p-3'>{this.state.message}</p>
        <div className='alert alert-primary mt-3'>
          <form onSubmit={this.doSubmit}>
            <div className='form-group'>
              <label>Message:</label>
              <input type="text" className='form-control' onChange={this.doChange} required pattern='[A-Za-z _,.]+' />
            </div>
            <input type="submit" className='btn btn-primary' value="Click" />
          </form>
        </div>
      </div>
    </div>
  }
}

class Message extends Component {
  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#A5DEE4"
  }

  render() {
    let content = this.props.children
    let arr = content.split('。')
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() != '') {
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value, key) => (
      <li className='list-group-item' style={this.li} key={key}>{key + 1}. {value} .</li>
    ))
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol className='list-group'>{list}</ol>
      </div>
    )
  }
}

export default App;
