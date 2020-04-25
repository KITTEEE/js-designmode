// Decorator 装饰器模式
class Circle {
    draw() {
        console.log('画了一个圆');
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }
    draw() {
        this.circle.draw();
        this.setRedBorder();
    }
    setRedBorder() {
        console.log('添加红色边框');
    }
}





let dec = new Decorator(new Circle(););
dec.draw();
