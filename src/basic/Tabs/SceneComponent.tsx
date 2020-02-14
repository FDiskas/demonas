import React from 'react';
import ReactNative from 'react-native';

import StaticContainer from './StaticContainer';

const { View } = ReactNative;

const SceneComponent = Props => {
  const { shouldUpdated, ...props } = Props;

  return (
    <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>
        {props.children}
      </StaticContainer>
    </View>
  );
};

module.exports = SceneComponent;
