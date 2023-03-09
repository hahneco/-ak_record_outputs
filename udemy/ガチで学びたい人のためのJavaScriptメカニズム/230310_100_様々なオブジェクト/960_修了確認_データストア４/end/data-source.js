export class DataSource {
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