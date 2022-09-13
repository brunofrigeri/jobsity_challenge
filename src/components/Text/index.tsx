import React, {PropsWithChildren} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {
  ColorKeyType,
  colors,
  FontVariantKeyType,
  text,
  TextSizeKeyType,
} from '../../styles';

export interface TextProps extends PropsWithChildren, RNTextProps {
  size?: TextSizeKeyType;
  fontVariant?: FontVariantKeyType;
  color?: ColorKeyType;
}

const Text: React.FC<TextProps> = ({
  children,
  size,
  fontVariant,
  color,
  style,
}) => {
  return (
    <RNText
      style={[
        style,
        {
          fontSize: size ? text[size] : text.xs,
          fontFamily: `FiraSans-${fontVariant || 'Regular'}`,
          color: colors[color ?? 'black'],
        },
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
