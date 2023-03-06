// const btn = document.querySelector('button');
// btn.addEventListener('click', function task2() { // clickイベント
//     console.log('task2 done');
// });

// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done');
//     }, 4000);

//     const startTime = new Date();
//     while (new Date() - startTime < 2000);

//     console.log('fn a done');
// }

// a();

function sleep(callback, val) { // コールバック関数とは、「引数」にセットする別の関数のこと。
    setTimeout(function() {
        // console.log('hello');
        console.log(val++); // 特定の処理の後に
        callback(val); // コールバック関数をセットする
    }, 1000)
}

sleep(function(val) { // 「無名関数」一度しか使わない「その場限りの関数」
    // console.log('callback done');
    sleep(function(val) {
        sleep(function(val) {
            sleep(function(val) {
                sleep(function(val) {
                    sleep(function(val) {

                    }, val)
                }, val)
            }, val)
        }, val)
    }, val)
}, 0)


// ##########################3
// ## タスクキューとは：
// 実行待ちの非同期処理の行列。
// ↑非同期処理の実行順を管理する。

// キューの仕組みを「先入れ先出し（First In First Out）」という。


