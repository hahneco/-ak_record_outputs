'use strict'

// 連番出力
// 1 ~ 5の数値をfor文を使用して出力してください。
let num = 5

for (let i = 0; i < num; i++) {
  // console.log(i+1);
};

// ######################3
// 合計
// 1 ~ 10の合計値を、for文を利用して計算し、出力してください。
let numbers = [];
let sum = 0;
const answer = [1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10];
console.log('[1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10] =' + answer)

for (let i = 0; i < 10; i++) {
  numbers.push(i + 1)
}
// console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  sum = numbers[i] + sum; // numbers配列の[i]番目す数字 + sum(初期値は0)
}
console.log(`[${numbers}]の合計は${sum}です。`)

// #########################
/*
問3 FizzBuzz
1 ~ 100までの数値で、

3の倍数かつ5の倍数ならFizzBuzz
それ以外で3の倍数ならFizz
それ以外で5の倍数ならBuzz
それ以外はその数値
*/
/*
for (let i = 0; i < 100; i++) {
  // console.log(i + 1)

  if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
    console.log('FizzBuzz');
  } else if ((i + 1) % 3 === 0) {
    console.log('Fizz');
  } else if ((i + 1) % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i + 1);
  }
}
*/
// #########################
/*
問4 for文を重ねる
#####
#####
#####
を、2重のfor文を使用して表示してください。ここで、console.logは必ず改行されてしまうので、"#" + "#"のようなことをして1行を作っていきましょう。

最後に改行を加えても良いです。
*/
// let answer1 = ''

// for (let y = 0; y < 3; y++) {
//   let obj = '';

//   for (let x = 0; x < 5; x++) {
//     obj += "#"
//   }
//   obj += '\n'
//   answer1 += obj;
// }
// console.log(answer1)

// ##############################
// https://tech-camp.in/note/technology/4310/

/*
Q. for文を用いて1から10までの数を足し合わせて、コンソールに出力しなさい。
*/

// {
//   let sum2 = 0;
//   for (let i = 0; i < 10; i++) {
//     sum2 += (i+1)
//   }
//   console.log(sum2)
// }

// 文字列をの文字一つ一つを出力する
/*
Q. for of文を用いて文字列”Happy”の文字を一つ一つコンソールに表示させなさい。
*/
// const text = 'Happy'
// for (let t of text) { //for ( 変数 of 配列 ) {処理}
//   console.log(t)
// }

/*
Q. for文の中にfor文を記述することで、九九の1の段から3の段までを出力しなさい。
*/
for (let index1 = 1; index1 <= 3; index1++) {

  // if(index1 === 1) {
  //   for (let index2 = 1; index2 <= 9; index2++) {
  //     console.log(index1 * index2)
  //   }
  // } else if(index1 === 2) {
  //   for (let index3 = 1; index3 <= 9; index3++) {
  //     console.log(index1 * index3)
  //   }
  // } else if (index1 === 3) {
  //   for (let index4 = 1; index4 <= 9; index4++) {
  //     console.log(index1 * index4)
  //   }
  // }

  // ↑簡略化
  for (let index2 = 1; index2 <= 9; index2++) {
    // console.log(index1 * index2)
    console.log(`${index1}x${index2}=${index1 * index2}`)
  }
}
