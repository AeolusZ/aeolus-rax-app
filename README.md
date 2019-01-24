# rax-starter-kit

## Getting Started

### `npm run start`

Runs the app in development mode.

Open [http://localhost:9999](http://localhost:9999) to view it in the browser.

The page will reload if you make edits.

### `npm run lint`

You will see the lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

## Universal "Gotchas"

- DOM & DOM like **`window`** & **`document`** do not exist on the server - so using them, or any library that uses them (jQuery for example) will not work.
- If you need to use them, consider limiting them to wrapping them situationally with the imported *isWeb / isNode / isWeex* features from Universal. `import {isWeb, isWeex, isNode} from 'universal-env'`;

## 11.23

新建rax框架，并添加了webpack.config.rewire.js文件用来测试

## 11.24

rax-script有默认的webapck打包设置，可以在根目录下添加webpack.config.rewire.js文件自定义webpack配置！（注：v1.0.0-beta.2有！用脚手架搭建rax框架时默认下的是v0.6.5版本！所以要想更改的话要更换rax-script版本！）

路由使用universal-router配置，能实现路由的跳转，但地址栏地址不能变化（之后会研究原因）


