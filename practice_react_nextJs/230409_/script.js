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

let el = (
  <div>
    <h5 className="mb-4">{message}</h5>
    <Hello />
  </div>
)

ReactDOM.render(el, dom)
