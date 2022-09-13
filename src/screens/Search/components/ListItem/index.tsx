import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ImageFallback from '../../../../components/ImageFallback';
import Text from '../../../../components/Text';
import {Show} from '../../../../services/types';
import {margins} from '../../../../styles';
import FastImage from 'react-native-fast-image';

export interface ListItemProps {
  show: Show;
  onShowPress: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = memo(({show, onShowPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onShowPress(show.id)}>
      {show?.image?.original ?? show?.image?.medium ? (
        <FastImage
          resizeMode="contain"
          style={styles.imageContainer}
          source={{uri: show?.image?.original ?? show?.image?.medium}}
        />
      ) : (
        <ImageFallback style={styles.imageContainer} />
      )}
      <Text size="2xl" fontVariant="Bold" color="white">
        {show.name}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: margins.xss,
  },
  imageContainer: {
    width: 80,
    height: 100,
    marginRight: margins.xs,
    borderRadius: 4,
  },
});

export default ListItem;
