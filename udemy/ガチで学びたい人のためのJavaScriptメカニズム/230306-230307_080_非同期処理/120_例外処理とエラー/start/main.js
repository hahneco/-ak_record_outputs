

// async function fetchUsers() {
//   const response = await fetch('users.json');
//   const json = await response.json();
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// }

// fetchUsers();

// ## 例外処理
// エラーが発生した際に飛ぶ特別な処理。

console.log('例外処理とエラー');

try {
  console.log('start');
  throw new Error('error message　エラーです'); // Errorクラスのインスタンス（エラーオブジェクト）が投げられる（Errorクラスの引数はエラーメッセージ）
  console.log('end');
} catch (e) {
  console.error(e); // エラーの内容を出力する
} finally {
  console.log('bye');
}

async function fetchUsers() {
  const response = await fetch('users.json');
  // console.log(response)
  if (response.ok) {
    const json = await response.json();
    // console.log(json.length)
    if (!json.length) {
      throw new Error('no data found.') // throwで処理を切り離すことで、適宜実装可能。
    }
    return json;
  }
}

// カスタムエラー Errorを継承する
class NoDataError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NoDataError';
  }
}

async function init() {
  try { // ハンドリング // メインの処理
    const users = await fetchUsers();
     for (const user of users) {
    console.log(`I'm ${user.name}, ${user.age} years old`)
  }
  } catch (e) {
    // console.log(e);
    if (e instanceof NoDataError) { //NoDataErrorの場合の処理
      console.log('e');
    } else {
      console.log('Oops, something went wrong.');
    }
  } finally {
    console.log('bye');
  }
  console.log('end');
}
init();
