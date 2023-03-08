/**
 * 問題：
 * 以下の即時関数をモジュール化してください。
 * ※calcオブジェクトはmain.js内で行い、実行してください。
 */
const calc = (function() {

    let val = 0;

    return {
        plus: function(target) {
            const newVal = val + target;
            console.log(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            console.log(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            console.log(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            console.log(`${val} / ${target} = ${newVal}`);
            val = newVal;
        },
    }
})();

