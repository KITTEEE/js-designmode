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

