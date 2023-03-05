/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
    console.log(this)
    console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
setTimeout(bob.hello.bind(bob), 1000); // bindでbobインスタンスに束縛する
setTimeout(function() {
  bob.hello();
} , 1000); // bindでbobインスタンスに束縛する