class Car {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}

class kc extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 1;
    }
}

class zc extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 2;
    }
}

class Trip {
    constructor(car) {
        this.car = car;
    }
    start() {
        console.log(`行程开始，车辆名称为： ${this.car.name},车牌号为：${this.car.number}`);
    }
    end() {
        console.log(`行程结束，金额：${this.car.price * 5}`);
    }
}
let c = new zc(123456, '桑塔纳');
let t = new Trip(c);
t.start();
t.end();
