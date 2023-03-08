// fetchでデータ取得、加工
// fetch windowで準備されている関数
/*
fetch('users.json').then(function (response) { // fetchはpromiseオブジェクトを返す。promiseの場合はthenで繋げる
  console.log(response);
  console.log(response.json()); // ジェイソンメソッドを使用してjsonデータを取得する（戻り値:promise）
  return response.json();
}).then(function (json) {
  console.log(json);

  for (const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old.`)
  }
})
*/

// asyncで書き換え
async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();

  for (const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old.`)
  }
}

fetchUsers();
