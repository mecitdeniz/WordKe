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
  color: string;
}

export enum TextTypes {
  DEFAULT = 'default',
  TITLE = 'title',
  SUBTITLE = 'subtitle',
}

export enum FONTSIZES {
  DEFAULT = 30,
  TITLE = 36,
  SUBTITLE = 15,
}

export const textStyles: {[key in TextTypes]: TextStyles} = {
  [TextTypes.DEFAULT]: {
    fontSize: FONTSIZES.DEFAULT,
    color: '#FFFF',
  },
  [TextTypes.TITLE]: {
    fontSize: FONTSIZES.TITLE,
    color: '#FFFF',
  },
  [TextTypes.SUBTITLE]: {
    fontSize: FONTSIZES.SUBTITLE,
    color: '#FFFF',
  },
};

const Text: React.FC<TextProps> = ({children, type}) => {
  return (
    <DefaultText style={[styles.text, textStyles[type]]}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontFamily: 'SigmarOne-Regular',
  },
});

export default Text;
