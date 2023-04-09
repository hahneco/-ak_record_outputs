let dom = document.querySelector("#root");
let message = "React component page."

// 関数コンポーネント
function Welcome(props) {
  return <div className={ props.alert }>
    <p className={ props.fontSize }>Hello { props.name }</p>
  </div>
}

function Calc(props) {
  let total = 0;
  for (let i = 1; i < props.number; i++) {
    total += 1;
  }
  return <p className={props.classes}>
    1から{props.number}までの
    合計は、「{total}」です。
  </p>
}

// 表示するJSX
let el = (
  <div>
    <h5 className="mb-4">{message}</h5>
    {/* <Welcome name="Taro" fontSize="h2" alert="alert alert-primary" />
    <Welcome name="Hanako" fontSize="h5" alert="alert alert-dark" /> */}

    <Welcome number="10" classes="h3" />
    <Welcome number="100" classes="h5" />
    <Calc number="50" classes="h4" />
    <Calc number="500" classes="h6" />
  </div>
)

ReactDOM.render(el, dom)
