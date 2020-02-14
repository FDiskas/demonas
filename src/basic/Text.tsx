import React, { Component } from 'react';
import { Text as RNText, StyleProp, ViewStyle } from 'react-native';
import _ from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type TextProps = {
  uppercase?: boolean;
  style?: StyleProp<ViewStyle>;
};

class Text extends Component<TextProps, {}> {
  static defaultProps = {
    uppercase: false
  };
  render() {
    const { uppercase, children } = this.props;
    let text;

    if (uppercase) {
      text = React.Children.map(children, child => {
        if (_.isString(child)) {
          return _.toUpper(child);
        }

        return child;
      });
    } else {
      text = children;
    }

    return (
      <RNText ref={c => (this._root = c)} {...this.props}>
        {text}
      </RNText>
    );
  }
}

const StyledText = connectStyle(
  'NativeBase.Text',
  {},
  mapPropsToStyleNames
)(Text);

export { StyledText as Text };
