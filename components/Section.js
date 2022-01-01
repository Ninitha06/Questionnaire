import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const buttonColor = ['#4c669f', '#3b5998', '#192f6a'];
const pressedColor = ['#EA5A6f', '#DE791E', '#FCCf3a'];

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1Pressed: false,
      answer2Pressed: false,
      answer3Pressed: false,
    };
  }

  render() {
    const item = this.props.item;
    console.log( !(
                this.state.answer1Pressed ||
                this.state.answer2Pressed ||
                this.state.answer3Pressed
              ))
    return (
      <View key={this.props.index}>
        <Text>{item.question}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={
              (
                this.state.answer1Pressed ||
                this.state.answer2Pressed ||
                this.state.answer3Pressed
              )
            }
            style={styles.answers}
            onPress={() => {
              if (item.answer1.correct === true) {
                this.props.setTotal();
              }
              this.setState({
                answer1Pressed: true,
              });
            }}>
            <LinearGradient
              colors={this.state.answer1Pressed ? pressedColor : buttonColor}
              style={styles.linearGradient}>
              <Text>{item.answer1.value}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={
              (
                this.state.answer1Pressed ||
                this.state.answer2Pressed ||
                this.state.answer3Pressed
              )
            }
            style={styles.answers}
            onPress={() => {
              if (item.answer2.correct === true) {
                this.props.setTotal();
              }
              this.setState({
                answer2Pressed: true,
              });
            }}>
            {' '}
            <LinearGradient
              colors={this.state.answer2Pressed ? pressedColor : buttonColor}
              style={styles.linearGradient}>
              <Text>{item.answer2.value}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={
              (
                this.state.answer1Pressed ||
                this.state.answer2Pressed ||
                this.state.answer3Pressed
              )
            }
            style={styles.answers}
            onPress={() => {
              if (item.answer3.correct === true) {
                this.props.setTotal();
              }
              this.setState({
                answer3Pressed: true,
              });
            }}>
            {' '}
            <LinearGradient
              colors={this.state.answer3Pressed ? pressedColor : buttonColor}
              style={styles.linearGradient}>
              <Text>{item.answer3.value}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
