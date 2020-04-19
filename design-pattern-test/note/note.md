## 环境搭建

初始化：

```
cnpm i webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

创建 webpack.dev.config.js 文件

```javascript
const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js',
    },
    plugins: [
        new htmlwebpackplugin({
            template: './index.html',// 指定 html 模板
        }),
    ],
    devServer: {
        contentBase: path.join('__dirname', './release'), // 指定服务的根目录
        open: true, // 自动打开浏览器
        port: 9000,
    },
};

```

package.json 修改启动命令

```javascript
"script": {
    "dev":"webpack-dev-server --config ./webpack.dev.config.js --mode development"
}
```



解析es6，安装 babel

```
cnpm i @babel/core @babel/preset-env @babel/preset-react babel-loader
```

根目录创建 .babelrc 文件

```json
{
    "presets":['@babel/react','@babel/env'],
    "plugins":[]
}
```



## 面向对象

面向对象三要素

* 继承

* 封装：public 完全开放、protected 对子类开放、private 对自己开放

  减少耦合

  利于数据、接口的权限管理

  ES6目前不支持，一般认为 _开头的属性是 private

* 多态：重载、重写

  保持子类的开放性和灵活性

  面向接口编程

面向对象 JS 应用举例

```javascript
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for(let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || '';
    }
    append(node) {
        // ..
    }
    addClass(name) {
        // ..
    }
    html(data) {
        // ...
    }
}
window.$ = function(selector) {
    return new jQuery(selector);
}
```



### UML 类图

泛化：类的继承

关联：类的组合、引用

+public/#protected/-private	



## 设计原则

《UNIX/LINUX 设计哲学》中的设计准则：

1. 小即是美
2. 让每个程序只做好一件事
3. 快速建立原型：根据反馈来完善而不是一开始就做一个完美的东西
4. 舍弃稿效率而取可移植性：效率和可移植性的取舍
5. 采用纯文本来存储数据：效率和可读性的取舍
6. 利用软件的杠杆效应（软件复用）
7. 使用 shell 脚本来提高杠杆效应和可移植性
8. 避免强制性的用户界面
9. 让每个程序都称为过滤器



### 五大设计原则

S-单一职责原则：一个程序只做好一件事，如果功能过于复杂就拆分开，每个部分保持独立。

O-开放封闭原则：扩展开放，修改封闭。增加需求时，扩展新代码，而非修改已有代码。

L-里氏置换：子类能覆盖父类，弗雷能出现的地方子类就能出现。JS中使用较少（弱类型&继承使用较少）

I-接口独立原则：保持接口单一独立，避免出现"胖接口"。JS中没有接口，使用较少。

D-依赖倒置：面向接口编程，依赖于抽象而不依赖于具体。只关注接口而不关注具体类的实现。JS中使用较少(没有接口&弱类型)



javascript 中 SO 体现较多，LID 体现较少，但要了解其用意。



## 工厂模式

### 介绍

* 将 new 操作单独封装
* 遇到 new 时，就要考虑是否应使用工厂模式



### 类图

![工厂模式](.\media\工厂模式.png)



### 代码实现

```javascript
class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
    	alert('init');
    }
    fun1() {
        alert('fun1');
    }
    fun2() {
        alert('fun2');
    }
}

class Creator {
    create(name) {
        return new Product(name); 
    }
}
```



### 使用场景

* jQuery - $('div')

  ```javascript
  // 这里的函数相当于工厂
  window.$ = function(selector) {
      return new jQuery(selector);
  }
  ```

* React.createElement 生成一个 vnode 实例

```javascript
class Vnode(tag,attrs,chilren) {
    //...
}
React.createElement = function (tag,attrs,children) {
    return new Vnode(tag,attrs,children);
}
```

* vue 异步组件

```javascript
Vue.component('async-example',(resolve,reject) => {
    setTimeout(() => {
        resolve({
            template:'<div>I am a async component</div>'
        })
    },1000)
})
```



### 设计原则验证

* 构造函数和创建者分离

* 符合开放封闭原则



## 单例模式

### 介绍

* 系统中被唯一使用

* 一个类只能初始化一个实例



### 类图





### 代码演示

用 java 实现的单例模式演示

```java
public class SingleObject {
    // 一个私有化的构造函数，因此只能在内部 new
    private SingleObject() {}
    private SingleObject instance = null;
    // 获取实例的唯一接口
    public SingleObject getInstance() {
        if(instance == null) {
            instance = new SingleObject(); // 只 new 一次
        }
        return instance;
    }
}
```

由于单例模式需要用到 private 这个特性，ES 中没有这个特性，不过可以使用 js 闭包的特性来实现

```javascript
class SingleObject {
    testmethod() {
        console.log('test');
    }
}
SingleObject.getInstance = (function () {
    let instance = null;
    return function() {
    	if(instance == null) {
            instance = new SingleObject();
        }   
        return instance
    }
})();
```

因为单例模式只有一个实例，所以只需要判断你所创建出来的实例是否完全相同即可，可以如下面代码一样测试：

```javascript
const s1 = SingleObject.getInstance();
s1.testMethod(); // => 'test'
const s2 = SingleObject.getInstance();
s2.testMethod(); // => 'test'
console.log(s1 === s2); // => true 输出为 true 说明是同一个实例
```

需要注意的是，由于没有 private 这个禁止了外部 new 的限制，因此这里直接`new SingleObject()`也是可以创建实例的，只不过这样创建实例和普通类创建实例没什么区别。



### 使用场景

* jQuery 中只有一个 $

```javascript
if(window.jQuery != null) {
    return window.jQuery
}else {
    // 初始化
}
```

* vuex 和 redux 中的 store( 或 store 里的 state )



### 设计原则验证

* 符合单一职责原则， 只能实例化唯一的对象。
* 虽然没法具体体现开放封闭原则，但也不违反开放封闭原则。