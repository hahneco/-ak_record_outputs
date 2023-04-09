const msg_s = {
  fontSize: "20pt",
  fontWeight: "bold",
  color: "green",
  border: "1px dotted green"
}
const msg = {
  fontSize: "20pt",
  fontWeight: "bold",
  color: "green",
  border: "1px dotted green"
}

let dom = document.querySelector('#root');
let title = "React Page";
let message = "メッセージを表示します";
let link = "http://google.com";

let printMsg = function(msg, size, color) {
  const style = {
    fontSize: size + "pt",
    fontWeight: '700',
    color: color,
    border: "1px solid" + color
  }
  return <p style={style}>{msg}</p>
}

let el = (
  <div>
    <h2>{title}</h2>
    <p>renderできるのは１つのエレメントのみ。この場合はdivで括って生成するエレメントをまとめる</p>
    <hr></hr>
    <h3><a href={link}>属性をくくる「"」はいらない</a></h3>
    <p style={msg_s}>sampleでーす</p>
    <h3>{title}</h3>
    <h3>{message}</h3>
    <div className="alert alert-secondary mt-3">
      {printMsg('最初のメッセージ', 36, '#fff')}
      {printMsg('次のメッセージ', 36, '#aaa')}
      {printMsg('最後のメッセージ', 36, '#666')}
    </div>
  </div>
)

ReactDOM.render(el, dom);
