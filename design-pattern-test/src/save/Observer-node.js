const EventEmitter = require('events').EventEmitter;
class Dog extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}
const simon = new Dog('simon');
simon.on('bark', (barkLike) => {
    console.log(simon.name, barkLike);
});
setInterval(() => {
    simon.emit('bark', 'woff woff woff');
}, 1000);
