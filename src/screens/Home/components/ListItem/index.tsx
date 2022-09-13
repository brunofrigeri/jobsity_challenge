import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ImageFallback from '../../../../components/ImageFallback';
import {Show} from '../../../../services/types';
import FastImage from 'react-native-fast-image';

export interface ListItemProps extends Show {
  onItemPress: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = memo(({id, image, onItemPress}) => {
  const onPress = useCallback(() => {
    onItemPress(id);
  }, [onItemPress, id]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image?.medium ? (
        <FastImage
          resizeMode="contain"
          style={styles.imageContainer}
          source={{uri: image.medium}}
        />
      ) : (
        <ImageFallback style={styles.imageContainer} />
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  imageContainer: {
    width: 150,
    height: 200,
  },
});

export default ListItem;
