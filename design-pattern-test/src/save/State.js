// 状态
class State {
    constructor(color) {
        this.color = color;
    }
    handle(context) {
        console.log(`the light turn to the ${this.color} color`);
        context.setState(this);
    }
}

// 主体
class Context {
    constructor() {
        this.state = null;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
}

let ctx = new Context();
let green = new State('green');
let red = new State('red');
let yellow = new State('yellow');

green.handle(ctx);
console.log(ctx.getState());

red.handle(ctx);
console.log(ctx.getState());

yellow.handle(ctx);
console.log(ctx.getState());
