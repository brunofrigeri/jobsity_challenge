import React, {useMemo} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Episode} from '../../../../services/types';
import {colors, margins, text} from '../../../../styles';
import RenderHtml from 'react-native-render-html';
import Text from '../../../../components/Text';
import ImageFallback from '../../../../components/ImageFallback';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('screen');

export interface EpisodeItemProps {
  episode: Episode;
  onEpisodePress: (id: number) => void;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({episode, onEpisodePress}) => {
  const summary = useMemo(() => {
    if (episode?.summary) {
      return episode?.summary.length > 200
        ? `${episode.summary.substring(0, 200)} ...`
        : episode.summary;
    }
  }, [episode?.summary]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onEpisodePress(episode.id)}>
      <View style={styles.imageContainer}>
        {episode?.image?.original ? (
          <FastImage
            style={styles.image}
            source={{uri: episode?.image?.original ?? episode?.image?.medium}}
          />
        ) : (
          <ImageFallback style={styles.image} />
        )}
        <Text style={styles.title} numberOfLines={2} color="white" size="lg">
          {episode?.number ? `${episode.number}. ` : ''}
          {episode.name}
        </Text>
      </View>
      <RenderHtml
        baseStyle={styles.htmlContent}
        contentWidth={width}
        source={{html: summary ?? ''}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: margins.xs,
    paddingVertical: margins.xss,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 80,
    marginRight: margins.xs,
  },
  htmlContent: {
    fontFamily: 'FiraSans-Regular',
    fontSize: text.lg,
    color: colors.white,
  },
  title: {
    flex: 1,
  },
});

export default EpisodeItem;
