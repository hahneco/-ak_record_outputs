/**
 * 問題：
 * これまでの問題で作成した以下のコードをESモジュール
 * を使用して、自分なりに分割、整理（リファクタリング）
 * してみてください。
 * 
 * ※絶対的な答えはありません。
 * 今後、このコードをメンテナンスする上でどのようにすれ
 * ばメンテナンスがしやすくなりそうか考えながら整理して
 * みてください。
 * 
 */
const KEY = 'test-data';
const p = Promise.resolve();
let _dirty;

class DataSource {
	static async get(KEY) {
		return DataSource.getLocal(KEY)
			|| await DataSource.getRemote(KEY);
	}

	static async set(KEY, target) {
		return DataSource.setLocal(KEY, target)
			|| await DataSource.setRemote(KEY, target);
	}


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

	static async getRemote(KEY) {
		console.log('get from remote');
		const response = await fetch(`../json/${KEY}.json`);
		const json = await response.json();
		return json;
	}

	static async setRemote(KEY, target) {
		console.log('set to remote:' + KEY + ' ', target);
	}
}

(async () => {
	const targetObj = await DataSource.get(KEY);

	const pxy = new Proxy(targetObj, {
		set(target, prop, value, receiver) {
			_dirty = true;

			const result = Reflect.set(target, prop, value, receiver);

			p.then(() => {
				if (_dirty) {
					console.log('** update data **');
					_dirty = false;
					DataSource.set(KEY, target);
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
})();

