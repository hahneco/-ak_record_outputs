export class Person {
    constructor(name, age) {
        this._name = name;
    }

    hello() {
        console.log(`hello ${this._name}`);
    }
}
