import StateMachine from 'javascript-state-machine';

const fsm = new StateMachine({
    init: 'pending',
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled',
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected',
        },
    ],
    methods: {
        // 监听 resolve
        onResolve: function (state, data) {
            // state - 当前的状态机实例   data - fsm.resolve(xxx) 传递的参数
            data.successList.forEach((fn) => fn());
        },
        onReject: function (state, data) {
            // state - 当前的状态机实例   data - fsm.reject(xxx) 传递的参数
            data.failList.forEach((fn) => fn());
        },
    },
});

// 定义一个 promise
class MyPromise {
    constructor(fn) {
        this.successList = [];
        this.failList = [];
        fn(
            function () {
                // resolve函数
                fsm.resolve(this);
            },
            function () {
                // reject 函数
                fsm.reject(this);
            }
        );
    }
    then(successFn, failFn) {
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}

function loadImg(src) {
    const promise = new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.onload = function () {
            resolve(img);
        };
        img.onerror = function () {
            reject();
        };
        img.src = src;
    });
    return promise;
}
let src = '';
let result = loadImg(src);
result.then(
    () => {
        console.log('ok1');
    },
    () => {
        console.log('fail1');
    }
);
result.then(
    () => {
        console.log('ok2');
    },
    () => {
        console.log('fail2');
    }
);
