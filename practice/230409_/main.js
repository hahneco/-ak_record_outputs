class Drink {
  constructor(props) {
    this.name = props.name;
    this.capacity = props.capacity;
  }
  static create = (props) => new Drink(props);
}

// 350ml入りのお茶 作成
const tea = Drink.create({ name: "お茶", capacity: 350 });
// 200mlの牛乳 作成
const milk = Drink.create({ name: "牛乳", capacity: 200 });

console.log(tea);
console.log(milk);
