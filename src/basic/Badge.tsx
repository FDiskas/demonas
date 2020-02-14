import React, { Component } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type BadgeProps = {
  style?: StyleProp<ViewStyle>;
};

class Badge extends Component<BadgeProps, {}> {
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}
const StyledBadge = connectStyle(
  'NativeBase.Badge',
  {},
  mapPropsToStyleNames
)(Badge);

export { StyledBadge as Badge };
