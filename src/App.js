import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>第二个页面</Text>
        </View>
        <Text style={styles.appIntro}>
          我是第二个页面
        </Text>
      </View>
    );
  }
}

export default App;
