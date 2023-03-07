/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 *
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 *
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 *
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 *
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 *
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 *
 * ※await/asyncで記述してみてください。
 */

// # データの取得
// ↑fetch関数で実現できる

// # jsonデータについて
// javascriptのオブジェクト
// * 「'」は使用できない。必ず「"」でオブジェクトを囲む
// * 格納される要素の最後に「,」は不可
/*
// console.log(fetch('users.json')) // Promise
window.fetch('../json/user1.json').then(function (response) { // responseにサーバから帰ってきたjsonデータを格納
	console.log(response) // 「status: 200」通信が問題なく完了している。「ok: true」データ取得成功。
	return response.json(); // jsonメソッドでjson取得。戻り値Promise
}).then(function (json) {
	console.log(json);
	for (const user of json) { // 変数へ配列を格納
		console.log(user.name);
	}
})
*/
// # Promise
// 非同期処をより効率的に記述できる
// #########################

async function myFetch(fileName) {
	const response = await fetch(`../json/${fileName}`);
	const json = await response.json();
	return json;
}
// #########################
/*
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
*/
(async function () { // 即時関数として関数呼び出し時にすぐ実行
	const me = await myFetch('user1.json');
	console.log(`--${me.name}'s timeline--`);

	const friendList = await myFetch(`friendsOf${me.id}.json`);
	// console.log(friendList);

	const friendIds = new Set();// セットクラス インスタンス化
	for (const id of friendList.friendIds) {
		friendIds.add(myFetch(`user${id}.json`));
	}
	const friends = await Promise.all(friendIds);
	// console.log(friends);

	const msgIds = new Set();
	// msgIds = new Set(); // キーワードなしで変数をセットすると、グローバルオブジェクトに格納されてしまうので注意（{}が無効になる）
	for (const friend of friends) {
		msgIds.add(myFetch(`message${friend.latestMsgId}.json`));
	}
	const msgs = await Promise.all(msgIds);
	console.log(msgs, friends);

	for (const friend of friends) {
		for (const msg of msgs) {
			if (friend.id === msg.userId) {
				console.log(`${friend.name} says: ${msg.message}`);
			}
		}
	}
})();
