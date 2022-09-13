import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {RootStackParamList, SCREENS} from '../../navigation';
import {useShow} from './services/useShow';
import {margins} from '../../styles';
import Dropdown, {Option} from '../../components/Dropdown';
import {useSeasons} from './services/useSeasons';
import {useEpisodesBySeason} from './services/useEpisodesBySeason';
import EpisodeItem from './components/EpisodeItem';
import ShowEvent from '../../components/ShowEvent';
import Loading from '../../components/Loading';

export interface ShowProps {}

type ShowRouteProp = RouteProp<RootStackParamList, SCREENS.SHOW>;
type ShowNavigationProp = StackNavigationProp<RootStackParamList, SCREENS.SHOW>;

const Show: React.FC<ShowProps> = ({}) => {
  const {params} = useRoute<ShowRouteProp>();
  const navigation = useNavigation<ShowNavigationProp>();

  const {data, isFetching} = useShow(params.id);
  const {data: seasons, isFetching: isFetchingSeasons} = useSeasons(params.id);

  const [selectedSeason, setSelectedSeason] = useState<Option>();

  useEffect(() => {
    setSelectedSeason({
      key: seasons?.[0].id,
      value: seasons?.[0].number,
    });
  }, [seasons]);

  const {data: episodes} = useEpisodesBySeason(params.id, selectedSeason?.key);

  const dropdownOptions = useMemo(() => {
    let options: Option[] =
      seasons?.map(season => ({
        key: season.id,
        value: season.number,
      })) ?? [];

    return options;
  }, [seasons]);

  const seasonsCopy = useMemo(() => {
    let seasonCopy =
      seasons?.length && seasons?.length > 1 ? 'seasons' : 'season';
    return `${seasons?.length ?? 0} ${seasonCopy}`;
  }, [seasons?.length]);

  const onEpisodePress = useCallback(
    (id: number) => {
      navigation.navigate(SCREENS.EPISODE, {
        id,
      });
    },
    [navigation],
  );

  const sections = ['show', 'episodes'];

  const renderSections = useCallback(
    (section: string) => {
      if (section === 'show') {
        return (
          <ShowEvent
            showName={data?.name}
            imageUri={data?.image?.original ?? data?.image?.medium}
            premiered={data?.premiered}
            copyHelper={seasonsCopy}
            genres={data?.genres}
            schedule={data?.schedule}
            summary={data?.summary}>
            <View style={styles.dropdownContainer}>
              <Dropdown
                selectedOption={selectedSeason}
                setOption={setSelectedSeason}
                options={dropdownOptions}
              />
            </View>
          </ShowEvent>
        );
      }

      if (section === 'episodes') {
        return (
          <FlatList
            data={episodes?._embedded?.episodes}
            renderItem={({item}) => (
              <EpisodeItem episode={item} onEpisodePress={onEpisodePress} />
            )}
          />
        );
      }

      return null;
    },
    [
      data?.genres,
      data?.image?.medium,
      data?.image?.original,
      data?.name,
      data?.premiered,
      data?.schedule,
      data?.summary,
      dropdownOptions,
      episodes?._embedded?.episodes,
      onEpisodePress,
      seasonsCopy,
      selectedSeason,
    ],
  );

  if (isFetching || isFetchingSeasons) {
    return <Loading />;
  }

  return (
    <FlatList
      style={styles.flatListContainer}
      data={sections}
      renderItem={({item}) => renderSections(item)}
    />
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
  dropdownContainer: {
    paddingVertical: margins.xss,
    alignItems: 'flex-start',
  },
});

export default Show;
