import React, { Component } from 'react';
import { TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type CardItemProps = {
  style?: StyleProp<ViewStyle>;
  header?: boolean;
  cardBody?: boolean;
  footer?: boolean;
  button?: boolean;
};

class CardItem extends Component<CardItemProps, {}> {
  render() {
    if (this.props.button) {
      return (
        <TouchableOpacity
          ref={c => (this._root = c)}
          activeOpacity={0.2}
          {...this.props}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }

    return (
      <View ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}
const StyledCardItem = connectStyle(
  'NativeBase.CardItem',
  {},
  mapPropsToStyleNames
)(CardItem);

export { StyledCardItem as CardItem };
