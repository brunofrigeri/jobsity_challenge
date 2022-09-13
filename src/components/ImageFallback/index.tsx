import React from 'react';
import {Image, StyleSheet, View, ViewProps} from 'react-native';
import {colors} from '../../styles';

export interface ImageFallbackProps extends ViewProps {
  width?: number;
  height?: number;
}

const ImageFallback: React.FC<ImageFallbackProps> = ({
  width,
  height,
  ...props
}) => {
  return (
    <View {...props} style={[styles.container, {width, height}, props?.style]}>
      <Image
        style={styles.jobsityImage}
        source={require('../../../assets/images/jobsity.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobsityImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    opacity: 0.75,
  },
});

export default ImageFallback;
