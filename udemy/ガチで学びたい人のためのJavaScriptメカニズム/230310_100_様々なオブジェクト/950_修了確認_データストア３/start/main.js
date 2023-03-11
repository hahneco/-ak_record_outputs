/**
 * 問題：
 * サーバー上に配置してあるJSONファイルを取得して、
 * オブジェクトにセットしましょう。
 * 
 * ただし、localStorageにすでにデータが保存されている場合
 * にはサーバーへのデータ取得は行わず、localStorageに
 * 登録されているJSONからオブジェクトを復元してください。
 */
const KEY = 'test-data';
const p = Promise.resolve();
let _dirty;

class DataSource {
	static getLocal(KEY) {
		console.log('get from local');
		const result = localStorage.getItem(KEY);
		return JSON.parse(result);
	}

	static setLocal(KEY, target) {
		console.log('set to local');
		const json = JSON.stringify(target);
		localStorage.setItem(KEY, json);
	}
}

const targetObj = DataSource.getLocal(KEY) || {};

const pxy = new Proxy(targetObj, {
	set(target, prop, value, receiver) {
		_dirty = true;

		const result = Reflect.set(target, prop, value, receiver);

		p.then(() => {
			if(_dirty) {
				console.log('** update data **');
				_dirty = false;
				DataSource.setLocal(KEY, target);
			}
		});
		
		
		return result;
	}
});

console.log('init', pxy);
pxy.name = 'Tom';
console.log('change', pxy);
pxy.name = 'Tim';
console.log('change2', pxy);
