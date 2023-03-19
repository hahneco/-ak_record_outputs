'use strict'

function Person(name, energy) {
    this.name = name;
    this.energy = energy;
    this.run = function () {
      this.energy -= 10;
    };
    this.sayHello = function () {
      console.log("Hi!, " + this.name);
      // alert("1111111111111111")
      document.getElementById("run").onclick = runhandler;
    }
  }

document.getElementById("person").onclick = myhandler;

let p = new Person("Tanaka", 100);

function myhandler(e) {
  // console.log("clicked!")

  p.sayHello();

  document.getElementById("text").textContent = `name:${p.name}`;
  document.getElementById("energy").textContent = `energy:${p.energy}`;
}

function runhandler(e) {
  console.log("run");

  p.run();
  // console.log(p.run);
  document.getElementById("energy").textContent = `energy:${p.energy}`;
}
