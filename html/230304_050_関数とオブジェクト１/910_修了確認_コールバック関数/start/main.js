console.log('コールバック関数演習');
/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function () {
        // console.log('Ken');
        return 'hello Tom';
    }
}

// setTimeout(function() {
//     const hello = person.hello();
//     console.log(hello);
// }, 1000);

/**
 * 問題２：
 * setTimeoutの実行から１秒後にブラウザの
 * ダイアログに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 * ※alertは第一引数に渡した文字列を画面のダイアログに表
 * 示する関数です。
 */
// setTimeout(function() {
//     const hello = person.hello();
//     alert(hello);
// }, 1000);


/**
 * 問題３：
 * objにgreetingというメソッドを実装しました。
 * これをsetTimeoutで１秒後に表示するようなafter1sの
 * 関数にコールバックとして渡しました。
 * その後objに格納したgreeting関数を別の関数で
 * 上書きしました。
 * この時、１秒後にコンソールに出力されるのは
 * 'hello'または'hey'のどちらでしょうか？
 */
const obj = {};
obj.greeting = function() {
    console.log('hello');
}
console.log(obj.greeting);

function after1s(callack) {
    setTimeout(callack, 1000);
}

// この時点で実行します。
after1s(obj.greeting);

// この後でgreetingを書き換えます。
obj.greeting = function() {
    console.log('hey');
}
after1s(obj.greeting);

/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 * 
 * ※コールバック関数を用いて実装してください。
 */
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            const newVal = val + target;
            callback(`${val} + ${target} = ${newVal}`);
            val = newVal;
            // return `${val} + ${target} = ${newVal}`;
        },
        minus: function(target) {
            const newVal = val - target;
            callback(`${val} - ${target} = ${newVal}`);
            val = newVal;
            // return `${val} - ${target} = ${newVal}`;
        },
        multiply: function(target) {
            const newVal = val * target;
            callback(`${val} x ${target} = ${newVal}`);
            val = newVal;
            // return `${val} x ${target} = ${newVal}`;
        },
        divide: function(target) {
            const newVal = val / target;
            callback(`${val} / ${target} = ${newVal}`);
            val = newVal;
            // return `${val} / ${target} = ${newVal}`;
        }
    };
}

// const calc = calcFactory(10, console.log);
const calc = calcFactory(10, alert);
// ↑if文などなしに処理を切り替えられる
calc.plus(5)
calc.minus(3)
calc.multiply(3)
calc.divide(2)


// setTimeout(function() {
//     console.log(calc.plus(5));
//     console.log(calc.minus(3));
//     console.log(calc.multiply(3));
//     console.log(calc.divide(2));
//     alert(calc.plus(5));
// }, 1000);

