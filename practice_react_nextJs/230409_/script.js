let dom = document.querySelector("#root");

let title = "React page."
let message = "メッセージを表示します"
let counter = 0
let doAction = (event) => {
  counter++
  let el = (
    <div>
      <h4>{title}</h4>
      <h4>{message}</h4>
      <h5 className="alert alert-primary cursor-pointer" onClick={doAction}>
        count: {counter}.
      </h5>
    </div>
  )
  ReactDOM.render(el, dom);
}

doAction();

// setInterval(() => {
//   counter++
//   let el = (
//     <div>
//       <h4>{title}</h4>
//       <h4>{message}</h4>
//       <h5 className="alert alert-primary">
//         count: {counter};
//       </h5>
//     </div>
//   )
//   ReactDOM.render(el, dom);
// }, 1000);
