import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RootStackParamList, SCREENS} from '../../navigation';
import {colors} from '../../styles';
import PageItem from './components/PageItem';
import {useShows} from './services/useShows';

export interface HomeProps {}

type HomeNavigationProp = StackNavigationProp<RootStackParamList, SCREENS.HOME>;

const Home: React.FC<HomeProps> = ({}) => {
  const {data, isFetchingNextPage, fetchNextPage} = useShows();
  const navigation = useNavigation<HomeNavigationProp>();

  const onItemPress = useCallback(
    (id: number) => {
      navigation.navigate(SCREENS.SHOW, {id});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data?.pages ?? []}
        renderItem={({item}) => {
          return (
            <PageItem
              shows={item}
              onItemPress={onItemPress}
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {},
});

export default Home;
