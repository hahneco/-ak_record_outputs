function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello ' + this.name);
    // }
}

Person.prototype.hello = function() {
    console.log('hello ' + this.name + '.' + this.age + 'years old.');
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();

// ## プロトタイプの定義
// * オブジェクトに存在する特別なプロパティ
// * コンストラクター関数と合わせて使用する

// # プロトタイププロパティにアクセスするには
// * コンストラクター関数に使用したいメソッドを追加する
function Food(foodname, color, taste) { // コンストラクター関数は一文字目を大文字で設定する
    this.foodname = foodname;
    this.color = color;
    this.taste = taste;
}

// 関数はオブジェクトの一種なので.記法でプロパティを指定する
Food.prototype.foods = function() { // 無名関数を指定する
    console.log('feature: ' + 'name:' + this.foodname + '. ' + 'color:' + this.color + '. ' + 'taste:' + this.taste);
}

const orange = new Food('orange', 'orange', 'sour')
const strawberry = new Food('strawberry', 'red', 'sweet')

orange.foods();
strawberry.foods();