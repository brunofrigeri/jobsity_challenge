import React, {memo} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Text from '../../../../components/Text';
import {ShowCategory} from '../../../../services/types';
import {ArrayGroupBy} from '../../../../utils/arrayGroupBy';
import ListItem from '../ListItem';

export interface PageItemProps {
  shows: ArrayGroupBy<ShowCategory>;
  onItemPress: (id: number) => void;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

const PageItem: React.FC<PageItemProps> = memo(
  ({shows, onItemPress, isFetchingNextPage, fetchNextPage}) => {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text size="3xl" fontVariant="Medium" color="white">
            {shows.title}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={shows?.data ?? []}
          horizontal
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          maxToRenderPerBatch={8}
          updateCellsBatchingPeriod={50}
          onEndReached={!isFetchingNextPage ? fetchNextPage : undefined}
          renderItem={({item}) => {
            return <ListItem {...item.show} onItemPress={onItemPress} />;
          }}
          ListFooterComponent={
            isFetchingNextPage ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="black" />
              </View>
            ) : null
          }
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  title: {
    paddingHorizontal: 8,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
  },
});

export default PageItem;
