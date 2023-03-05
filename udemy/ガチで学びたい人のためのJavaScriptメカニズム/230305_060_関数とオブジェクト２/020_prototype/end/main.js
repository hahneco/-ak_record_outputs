function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello ' + this.name);
    // }
}

Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
tom.hello();