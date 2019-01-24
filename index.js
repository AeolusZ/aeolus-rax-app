import {createElement, render} from 'rax';
import UniversalRouter from 'universal-router';
import {isWeex, isWeb, isReactNative, isNode} from 'universal-env';

import Home from './src';
import App from './src/App';

const routes = [{
  path: '/',
  action: () => <Home />,
}, {
  path: '/app',
  action: () => <App />,
}];
const router = new UniversalRouter(routes);

function routerRender(pathname) {
  console.log(pathname);
  router.resolve({ pathname: pathname }).then(Component => {
    console.log('这是' + Component);
    render(Component, document.getElementById('app'));
  });
}
routerRender('/');
export default routerRender;


