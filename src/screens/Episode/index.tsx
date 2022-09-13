import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useMemo} from 'react';
import Loading from '../../components/Loading';
import ShowEvent from '../../components/ShowEvent';
import {RootStackParamList, SCREENS} from '../../navigation';
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
    <ShowEvent
      showName={episode?.name}
      imageUri={episode?.image?.original ?? episode?.image?.medium}
      premiered={episode?.airdate}
      copyHelper={copyHelper}
      summary={episode?.summary}
    />
  );
};

export default Episode;
