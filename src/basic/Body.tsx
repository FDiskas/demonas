import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type BodyProps = {
  style?: StyleProp<ViewStyle>;
};

class Body extends Component<BodyProps, {}> {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}
const StyledBody = connectStyle(
  'NativeBase.Body',
  {},
  mapPropsToStyleNames
)(Body);

export { StyledBody as Body };
