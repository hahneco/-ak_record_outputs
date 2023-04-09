// import logo from './logo.svg';
import './App.css';
import Rect from './Rect';
import { Component } from 'react';

class App extends Component {
  data = []
  area = {
    width: "500px",
    height: "500px",
    border: "1px solid #A5DEE4"
  }

  constructor(props) {
    super()

    this.state = {
      list: this.data
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    let x = e.pageX
    let y = e.pageY
    this.data.push({ x: x, y: y })
    this.setState({
      list: this.data
    })
  }

  draw(d) {
    let s = {
      position: "absolute",
      left: (d.x -25) + "px",
      top: (d.y - 25) + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#dc9fb4"
    }
    return <div style={s}></div>
  }

  render() {
    return (
      <div>
        <h1 className='bg-blue text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>draw rectangle.</p>
          <div style={this.area} onClick={this.doAction}>
            {this.data.map((value) => this.draw(value))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
