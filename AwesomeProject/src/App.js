/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import NavigationBar from './components/common/NavigationBar/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  renderBotton(image) {
    return <TouchableOpacity>
    <Image style={{width:24,height:24,margin: 5}} source={image}></Image>
  </TouchableOpacity>
  }
  render() {
    return (
      <View>
        <NavigationBar 
          title={'Test'}
          leftButton={
              this.renderBotton(require('./images/ic_arrow_back_white_36pt.png'))
          }
          rightButton={
              this.renderBotton(require('./images/ic_star.png'))
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
