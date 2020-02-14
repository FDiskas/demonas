import React from 'react';
import ReactNative from 'react-native';

const { TouchableOpacity, View } = ReactNative;
const Button = props => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

module.exports = Button;
