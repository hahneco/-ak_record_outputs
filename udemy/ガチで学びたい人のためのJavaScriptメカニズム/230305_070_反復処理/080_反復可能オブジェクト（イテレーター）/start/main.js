const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

const items = Object.entries(obj);
for (let item of items) {
	console.log(item);
}