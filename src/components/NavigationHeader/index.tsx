import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {margins} from '../../styles';

export interface NavigationHeaderProps extends StackHeaderProps {}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        hitSlop={styles.hitSlop}
        onPress={() => navigation.pop()}>
        <FontAwesomeIcon size={32} icon={faClose} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    padding: margins.xs,
  },
  hitSlop: {
    top: margins.xss,
    left: margins.xss,
    bottom: margins.xss,
    right: margins.xss,
  },
});

export default NavigationHeader;
