import React from 'react';
import ReactNative from 'react-native';

const { TouchableNativeFeedback } = ReactNative;

const Button = props => {
  return (
    <TouchableNativeFeedback delayPressIn={0} {...props}>
      {props.children}
    </TouchableNativeFeedback>
  );
};

module.exports = Button;
