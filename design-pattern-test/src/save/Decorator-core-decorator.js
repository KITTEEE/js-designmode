import { readonly, deprecate } from 'core-decorators';
class Person {
    @readonly
    @deprecate('即将废弃', { url: 'www.baidu.com' })
    print() {
        return 'zhangsan';
    }
}

let p = new Person();
p.print();
p.print = function () {}; // => 报错
