/*
# JSON
→オブジェクトではなく、あくまで「文字列」

* JSON.parse というオブジェクトのメソッドを実行すると、
JSONからObjectを生成する

  * JSON.stringify というオブジェクトのメソッドを実行すると、
ObjectをJSONに変換する
*/

const obj = { a: 0, b: 1, c: 2 };

function replaycer(prop, value) {
  if (value < 1) {
    return;
  }
  return value;
}

// const json = JSON.stringify(obj);
// const json = JSON.stringify(obj, replaycer);
const json = JSON.stringify(obj, ["a", "b"]);
console.log(typeof json);
console.log(json);

const obj2 = JSON.parse(json);
console.log(obj2);
