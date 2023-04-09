let dom = document.querySelector("#root");

let title = "React page."
let message = "メッセージを表示します"
let content = '※これが、trueの時に表示されるメッセージ!..表示できてる?;'
let content_true = '※これが、trueの時に表示されるメッセージ!..表示できてる?;'
let content_false = '※これが、falseの時に表示されるメッセージ!..表示できてる?;'

let flg = false; // ☆

let data = [
  <li className="list-group-item">One</li>,
  <li className="list-group-item">Two</li>,
  <li className="list-group-item">Three</li>
]

let data2 = [
  {name: 'Taro', mail:'@taro@google.com', age: 45},
  {name: 'Rika', mail:'@rika@google.com', age: 37},
  {name: 'Hanako', mail:'@hanako@google.com', age: 49},
  {name: 'Takeshi', mail:'@takashi@google.com', age: 40},
  {name: 'Jiro', mail:'@jiro@google.com', age: 25},
  {name: 'Keiko', mail:'@keiko@google.com', age: 15}
]

let el = (
  <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    {
      flg &&
      <div className="alert alert-primary mt-3">
          <p>{content}</p>
      </div>
    }
    {
      flg ?
      <div className="alert alert-primary mt-3">
          <p>3項演算子ver: true</p>
          <p>{content_true}</p>
      </div>
      :
      <div className="alert alert-primary mt-3">
        <p>3項演算子ver: false</p>
        <p>{content_false}</p>
      </div>
    }
    <ul className="list-group mt-4">
      {data}
    </ul>
    <table className="container table table-striped mt-4">
      <thead className="thead-dark">
        <tr>
          <th>name</th>
          <th>mail</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {
          data2.map((value) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.name}</td>
              <td>{value.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

ReactDOM.render(el, dom);
