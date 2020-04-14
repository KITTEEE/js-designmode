// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// let p = new Person('kite');
// // alert(p.getName());
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom.length || 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }
    addClass(selector) {
        // ...
    }
    html(data) {
        // ...
    }
}

window.$ = function (selector) {
    return new jQuery(selector);
};
// 测试代码
const p = $('p');
console.log(p);
console.log(p.addClass);
