// 装饰方法 示例1
class Person {
    constructor() {
        this.firstName = 'A';
        this.lastName = 'B';
    }
    @readonly
    print() {
        return `${this.firstName} - ${this.lastName}`;
    }
}
function readonly(target, name, descriptor) {
    // target 为 class 目标
    // name 为属性名
    // descriptor 为属性描述对象 (Object.defineProperty 中会用到),原来的值如下：
    // {
    //     value:specifiedFunction,
    //     enumerable:false,
    //     configurable:true,
    //     writable:true
    // }
    descriptor.writable = false;
    return descriptor;
}
const p = new Person();
p.print = function () {
    alert(1);
};
console.log(p.print); // => 没报错，不过没有变化，说明 writable 为 false 了

// 装饰方法 示例 2
class Math {
    @log
    add(a, b) {
        return a + b;
    }
}
function log(target, name, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };
}
let m = new Math();
console.log(m.add(1, 2));
