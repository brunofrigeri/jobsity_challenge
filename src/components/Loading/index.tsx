import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
});

export default Loading;
