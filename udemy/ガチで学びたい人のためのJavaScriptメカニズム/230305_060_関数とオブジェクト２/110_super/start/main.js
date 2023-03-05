class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person { // superはクラスを継承したクラスまたはコンストラクター内で使用される
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();

// オブジェクト内でsuperキーワードを使用する
const american = { // オブジェクトリテラル内でのsuper使用
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    hello() {
        super.hello();
    }
}

Object.setPrototypeOf(bob, american);
bob.hello();

// ################################
// superとは
// 関数コンテキスト内で使用できる特別なキーワード
// 継承元の関数を呼び出すキーワード。