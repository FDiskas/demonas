import { connectStyle } from 'native-base-shoutem-theme';
import React, { Component } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import variable from '../theme/variables/platform';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';
type ContentProps = {
  disableKBDismissScroll?: boolean;
  keyboardShouldPersistTaps?: string;
  padder?: boolean;
  style?: StyleProp<ViewStyle>;
};

class Content extends Component<ContentProps, {}> {
  render() {
    const {
      children,
      contentContainerStyle,
      disableKBDismissScroll,
      keyboardShouldPersistTaps,
      padder,
      style
    } = this.props;
    const containerStyle = {
      flex: 1,
      backgroundColor: getStyle(style).backgroundColor
    };
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    return (
      <SafeAreaView style={containerStyle}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          ref={c => {
            this._scrollview = c;
            this._root = c;
          }}
          {...this.props}
          contentContainerStyle={[
            { padding: padder ? variables.contentPadding : undefined },
            contentContainerStyle
          ]}
        >
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
const StyledContent = connectStyle(
  'NativeBase.Content',
  {},
  mapPropsToStyleNames
)(Content);

export { StyledContent as Content };
