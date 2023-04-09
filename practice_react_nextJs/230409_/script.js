'use strict';

let counter = 0;
let dom = document.querySelector('#root');
doCount();

function doCount() {
  counter++;
  let element = React.createElement(
    // 'p', "count", counter

    // 仮想DOMへのエレメント追加
    // React.createElement(タグ名, 属性)

     // 仮想DOMへのエレメント追加(入れ子)
    // React.createElement(タグ名, 属性, React.createElement(タグ名, 属性, React.createElement(タグ名, 属性,)))
    'div', {}, [
      React.createElement(
        'h2', {}, "Hello!"
      ),
      React.createElement(
        'h4', { className: 'alert alert-primary' },
        "React sample page!"
      ),
      React.createElement(
        'ul', {className: 'list-group'}, [
          React.createElement(
            'li', {className: 'list-group-item'}, "First item"
          ),
          React.createElement(
            'li', {className: 'list-group-item'}, "Second item"
          ),
          React.createElement(
            'li', {className: 'list-group-item'}, "Third item."
          )
        ]
      ),

      React.createElement(
        'div', { className: 'container mt-3' }, [
          React.createElement(
            'div', {className: 'bg-primary text-white p-2'}, "primary"
          ),
          React.createElement(
            'div', {className: 'bg-secondary text-white p-2'}, "secondary"
          ),
          React.createElement(
            'div', {className: 'bg-success text-white p-2'}, "success"
          ),
          React.createElement(
            'div', {className: 'bg-warning text-white p-2'}, "warning"
          ),
        ]
      )
    ]
  )
  // rendering: プログラムのオブジェクトを具体的に目に見える形に変換する作業
  // 表示を更新したければ、エレメントを作ってレンダリングし直す。
  ReactDOM.render(element, dom);
}
