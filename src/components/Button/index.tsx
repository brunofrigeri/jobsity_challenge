import React, {PropsWithChildren} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {ColorKeyType} from '../../styles';
import Text from '../Text';

export interface ButtonProps extends PropsWithChildren, TouchableOpacityProps {
  bgColor?: ColorKeyType;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text size="lg">{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Button;
