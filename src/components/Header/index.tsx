import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackHeaderProps} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {colors, margins} from '../../styles';
import {SCREENS} from '../../navigation';
import FastImage from 'react-native-fast-image';

export interface HeaderProps extends StackHeaderProps {}

const Header: React.FC<HeaderProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets?.top}]}>
      <FastImage
        style={styles.jobsityImage}
        source={require('../../../assets/images/jobsity.png')}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        hitSlop={styles.hitSlop}
        onPress={() => navigation.navigate(SCREENS.SEARCH)}>
        <FontAwesomeIcon size={24} icon={faSearch} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: margins.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  jobsityImage: {
    width: 40,
    height: 40,
  },
});

export default Header;
