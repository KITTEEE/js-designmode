let star = {
    name: '张三',
    age: 15,
    phone: 123456789,
};
let agent = new Proxy(star, {
    get: function (target, key) {
        if (key == 'phone') {
            // 返回经纪人的手机号
            return '经纪人' + 987654321;
        }
        if (key == 'price') {
            // 明星不报价，经纪人报价
            return '经纪人报价' + 120000;
        }
        return target[key];
    },
    set: function (target, key, value) {
        if (key === 'customPrice') {
            if (value < 10000) {
                // 最低 10w
                throw new Error('价格太低');
            } else {
                target[key] = value;
                // return true
            }
        }
    },
});
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

// agent.customPrice = 9000; // => Error
agent.customPrice = 15000;
console.log(agent.customPrice);
