/**
 * 問題：
 * オブジェクトの状態をlocalStorageに登録する処理を
 * 非同期としてください。
 * 
 * また、複数回同じプロパティーに対して更新が入った場合
 * にも、localStorageへの登録は１回のみとなるように変更してください。
 * 
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
