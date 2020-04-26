class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notifyAllObersevers();
    }
    notifyAllObersevers() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
    attach(observer) {
        this.observers.push(observer);
    }
}

class Observers {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update() {
        console.log(`${this.name} is update to ${this.subject.state}`);
    }
}

let s = new Subject();

let o1 = new Observers('o1', s);
let o2 = new Observers('o2', s);
s.setState(2);
s.setState(3);
