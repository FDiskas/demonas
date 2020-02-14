import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type ViewNBProps = {
  style?: StyleProp<ViewStyle>;
};

class ViewNB extends Component<ViewNBProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledViewNB = connectStyle(
  'NativeBase.ViewNB',
  {},
  mapPropsToStyleNames
)(ViewNB);

export { StyledViewNB as ViewNB };
