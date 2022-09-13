import React, {PropsWithChildren} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {colors, margins, text} from '../../styles';
import Text from '../Text';
import RenderHtml from 'react-native-render-html';
import ImageFallback from '../ImageFallback';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('screen');

export interface ShowEventProps extends PropsWithChildren {
  showName?: string;
  imageUri?: string;
  premiered?: string;
  copyHelper?: string;
  genres?: string[];
  schedule?: {
    days: string[];
    time: string;
  };
  summary?: string;
}

const ShowEvent: React.FC<ShowEventProps> = ({
  imageUri,
  showName,
  premiered,
  copyHelper,
  genres = [],
  schedule,
  summary,
  children,
}) => {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <FastImage
          resizeMode="stretch"
          style={[{width}, styles.imageBackgroundContainer]}
          source={{uri: imageUri}}
        />
      ) : (
        <ImageFallback style={[{width}, styles.imageBackgroundContainer]} />
      )}
      <View style={styles.contentContainer}>
        <Text size="3xl" color="white">
          {showName}
        </Text>
        <View style={styles.contentDescriptionContainer}>
          <View style={styles.description}>
            <Text size="lg" color="white">
              {premiered?.split('-')[0]}
              {' - '}
            </Text>
            <Text size="lg" color="white">
              {copyHelper}
            </Text>
          </View>
          {genres.length > 0 && (
            <View>
              <Text size="base" fontVariant="Medium" color="white">
                Genres
              </Text>
              {genres.map(genre => (
                <Text key={genre} size="sm" color="white">
                  {genre}
                </Text>
              ))}
            </View>
          )}
        </View>
        {schedule && (
          <View>
            <View style={styles.scheduleTime}>
              <Text size="lg" color="white">
                On{' '}
              </Text>
              <Text size="lg" color="white">
                {schedule.time}
              </Text>
            </View>
            {schedule?.days.map(day => (
              <Text key={day} size="lg" color="white">
                {day}
              </Text>
            ))}
          </View>
        )}
        <RenderHtml
          baseStyle={styles.htmlContent}
          contentWidth={width}
          source={{html: summary ?? ''}}
        />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: '#191919',
  },
  imageBackgroundContainer: {
    height: height / 2,
  },
  contentContainer: {
    flex: 1,
    paddingTop: margins.xs,
    paddingHorizontal: margins.xs,
    backgroundColor: '#191919',
  },
  htmlContent: {
    fontFamily: 'FiraSans-Regular',
    fontSize: text.lg,
    color: colors.white,
  },
  description: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dropdownContainer: {
    paddingVertical: margins.xss,
    alignItems: 'flex-start',
  },
  contentDescriptionContainer: {
    paddingVertical: margins.xss,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleTime: {
    flexDirection: 'row',
  },
});

export default ShowEvent;
