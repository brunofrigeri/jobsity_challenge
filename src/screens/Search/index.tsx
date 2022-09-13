import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Input from '../../components/Input';
import useDebounce from '../../hooks/useDebounce';
import {colors, margins} from '../../styles';
import ListItem from './components/ListItem';
import {useSearch} from './services/useSearch';
import {RootStackParamList, SCREENS} from '../../navigation';
import {useNavigation} from '@react-navigation/native';

export interface SearchProps {}

type SearchNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.SEARCH
>;

const Search: React.FC<SearchProps> = ({}) => {
  const navigation = useNavigation<SearchNavigationProp>();
  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce(search, 500);

  const {data} = useSearch(debouncedValue);

  const onShowPress = useCallback(
    (id: number) => {
      navigation.navigate(SCREENS.SHOW, {id});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Search for some series"
          placeholderTextColor="gray"
          value={search}
          onChangeText={text => setSearch(text)}
        />
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        renderItem={({item}) => (
          <ListItem show={item.show} onShowPress={onShowPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: margins.xs,
    paddingTop: margins.lg,
  },
  inputContainer: {
    paddingVertical: margins.xs,
  },
  listContainer: {
    paddingVertical: margins.xs,
  },
});

export default Search;
