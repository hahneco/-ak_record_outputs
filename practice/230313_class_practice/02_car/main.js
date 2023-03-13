'use strict'

/*
carオブジェクト
*/
let car = {
  color: "white",
  speed: 30, // 初期値スピード30km/h
  fuel: 100, // 燃料初期値100L

  // drive関数：driveで距離の値によって燃料(fuel)が減る
  drive: function (km) { // 運転(drive)距離を引数にする
    this.fuel -= km * 0.15; // fuel総量 - 消費fuel()
  },

  accelerate: function () {
    this.speed += 5; // 加速ボタンで5km/hずつ加速
  },

  decelerate: function () {
    this.speed -= 5; // 加速ボタンで5km/hずつ減速
  }
}

// 車チェック
function carCheck() {
  document.getElementById('speed').textContent = car.speed + 'km/h';
  document.getElementById('gas').textContent = car.fuel + 'l';
}

// 加速処理
function faster() {
  console.log('加速!');
  car.accelerate();
}

// 減速処理
function slower() {
  console.log('減速!');
  car.decelerate();
}

// drive関数
function drive() {
  // car.drive()
  let km = document.getElementById('distance').value;
  console.log(km);
  document.getElementById('distance-display').textContent = km + 'km'

  car.drive(km);
}
