// 装饰器原理：
// @decorator
// class A {}

// 等同于：
// class A {}
// A = decorator(A) || A

// 装饰类
// @testDemo1
// class Demo1 {}
// function testClass(target) {
//     target.isDec = true;
// }
// alert(Demo1.isDec);

// 装饰类传参
// @testDecWithParam(true)
// class Demo2 {}

// function testDecWithParam(param) {
//     return function (target) {
//         target.isDec = param;
//     };
// }
// alert(Demo2.isDec);

// 装饰器 mixin 示例
// function mixins(param) {
//     return function (target) {
//         Object.assign(target.prototype, param);
//     };
// }
// const Foo = {
//     foo() {
//         alert('Foo');
//     },
// };
// @mixins(Foo)
// class MinxinClass {}

// let cls = new MinxinClass();
// cls.foo();
