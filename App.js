import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Section from './components/Section';

const { width, height } = Dimensions.get('window');

const items = require('./temp.json');
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      correctAns: 0,
    };
  }

  updateTotal = () => {
    this.setState({
      correctAns: this.state.correctAns + 1,
    });
  };

  render() {
    console.log(this.state.correctAns);
    return (
      <View style={{ flex: 1 }}>
        {items.map((item, index) => {
          return <Section index={index} item={item} setTotal = {this.updateTotal} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answers: {
    margin: 20,
    height: 40,
    width: width / 5,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
