import React from 'react';
import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
  StyleSheet,
} from 'react-native';

interface TextProps extends DefaultTextProps {
  type: TextTypes;
}
export interface TextStyles {
  fontSize: FONTSIZES;
}

export enum TextTypes {
  DEFAULT = 'default',
  TITLE = 'title',
  SUBTITLE = 'subtitle',
}

export enum FONTSIZES {
  DEFAULT = 20,
  TITLE = 36,
  SUBTITLE = 16,
}

export const textStyles: {[key in TextTypes]: TextStyles} = {
  [TextTypes.DEFAULT]: {
    fontSize: FONTSIZES.DEFAULT,
  },
  [TextTypes.TITLE]: {
    fontSize: FONTSIZES.TITLE,
  },
  [TextTypes.SUBTITLE]: {
    fontSize: FONTSIZES.SUBTITLE,
  },
};

const Text: React.FC<TextProps> = ({children, type, style}) => {
  return (
    <DefaultText style={[styles.text, textStyles[type], style]}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    fontFamily: 'SigmarOne-Regular',
  },
});

export default Text;
