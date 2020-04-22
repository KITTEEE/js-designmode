class RealImg {
    constructor(filename) {
        this.filename = filename;
        this.loadImg();
    }
    display() {
        console.log('display...' + this.filename);
    }
    loadImg() {
        console.log('loading...' + this.filename);
    }
}

class ProxyImg {
    constructor(filename) {
        this.realImg = new RealImg(filename);
    }
    display() {
        this.realImg.display();
    }
}

let proxy = new ProxyImg('1.png');
proxy.display();
