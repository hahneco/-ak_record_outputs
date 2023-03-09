const wm = new WeakMap();

export class Person {
    constructor(name) {
        // this._name = name;
        wm.set(this, { // Weakmapに値を格納
            name
        });
    }

    hello() {
        console.log(`hello ${wm.get(this).name}`);
    }
}
