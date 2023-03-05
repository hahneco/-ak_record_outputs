/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 * 
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */
// function addNumberFactory(num) {
//     function addNumber(value) {
//         return num + value;
//     }
//     return addNumber;
// }

// 関数式に変更→アロー関数に変更
const addNumberFactory = num => value => num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */
const incrementFactory = () => {
    
    let num = 0;

    // function a() {
    //     num = num + 1;
    //     console.log(num);
    // }

    return () => {
        // num = num + 1;
        console.log(++num);
    };
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();