import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Loading from '../../components/Loading';
import ShowEvent from '../../components/ShowEvent';
import {RootStackParamList, SCREENS} from '../../navigation';
import {colors} from '../../styles';
import {useEpisode} from './services/useEpisode';

export interface EpisodeProps {}

type EpisodeRouteProp = RouteProp<RootStackParamList, SCREENS.EPISODE>;

const Episode: React.FC<EpisodeProps> = ({}) => {
  const {params} = useRoute<EpisodeRouteProp>();
  const {data: episode, isFetching} = useEpisode(params.id);

  const copyHelper = useMemo(() => {
    let copy = `Season ${episode?.season} | Episode ${episode?.number}`;

    return copy;
  }, [episode]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ShowEvent
        showName={episode?.name}
        imageUri={episode?.image?.original ?? episode?.image?.medium}
        premiered={episode?.airdate}
        copyHelper={copyHelper}
        summary={episode?.summary}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
});

export default Episode;
