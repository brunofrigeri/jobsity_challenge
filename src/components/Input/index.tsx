import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors, margins, text} from '../../styles';

export interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({...props}) => {
  return <TextInput style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'FiraSans-Regular',
    color: colors.white,
    fontSize: text.xl,
    padding: margins.xss,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});

export default Input;
