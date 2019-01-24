import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import styles from './App.css';
import routerRender from '../index';

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>第一个页面</Text>
        </View>
        <Text style={styles.appIntro}>
          <Button onPress={() => routerRender('/app')}>点我跳转</Button>
        </Text>
      </View>
    );
  }
}

export default App;