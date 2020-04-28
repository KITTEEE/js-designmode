// 使用者容器
class Container {
    constructor(list) {
        this.list = list;
    }
    getIterator() {
        return new Iterator(this);
    }
}

// 迭代器
class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }
    next() {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
        return null;
    }
    hasNext() {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}

// 测试代码
let arr = [1, 2, 3, 4, 5, 6, 7];
let container = new Container(arr);
let it = new Iterator(container);
while (it.hasNext()) {
    console.log(it.next());
}
