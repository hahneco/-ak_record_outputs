let dom = document.querySelector("#root");
let message = "React component page."

class Hello extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="alert alert-primary">
      <p className="h4">Hello〜!!!!</p>
    </div>
  }
}

class Rect extends React.Component {
  x = 0
  y = 0
  width = 0
  height = 0
  color = "white"
  style = {}

  constructor(props) {
    super(props)

    this.x = props.x
    this.y = props.y
    this.width = props.w
    this.height = props.h
    this.color = props.c
    this.style = {
      backgroundColor: this.color,
      position: "absolute",
      left: this.x + "px",
      top: this.y + "px",
      width: this.width + "px",
      height: this.height + "px"
    }
  }

  render() {
    return <div style={this.style}></div>
  }
}

let el = (
  <div>
    <h5 className="mb-4">{message}</h5>
    <Hello />
    <hr></hr>
    <Rect x="200" y="200" w="200" h="200" c="cyan" />
    <Rect x="300" y="300" w="300" h="300" c="magenta" />
  </div>
)

ReactDOM.render(el, dom)
