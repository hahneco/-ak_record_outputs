let dom = document.querySelector("#root");

let title = "React page."
let message = "お名前をどうぞ"
let in_val = '';

let doChange = (event) => {
  in_val = event.target.value
  message = `こんにちは!, ` + in_val + `さん!!`
}

let doAction = (event) => {
  let el = (
    <div>
      <h4>{title}</h4>
      <h6>{message}</h6>
      <div className="alert alert-primary">
        <div className="form-group">
          <label>Input:</label>
          <input type="text" className="form-control" id="input" onChange={doChange} />
        </div>
        <button onClick={doAction} className="btn btn-primary">Click</button>
      </div>
    </div>
  )
  ReactDOM.render(el, dom)
}

doAction();
