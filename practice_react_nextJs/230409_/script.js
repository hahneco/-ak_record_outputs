let dom = document.querySelector("#root");
let message = "React component page."

// 関数コンポーネント
function Welcome(props) {
  return <div className={ props.alert }>
    <p className={ props.fontSize }>Hello { props.name }</p>
  </div>
}

// 表示するJSX
let el = (
  <div>
    <h5 className="mb-4">{message}</h5>
    <Welcome name="Taro" fontSize="h2" alert="alert alert-primary" />
    <Welcome name="Hanako" fontSize="h5" alert="alert alert-dark" />
  </div>
)

ReactDOM.render(el, dom)
