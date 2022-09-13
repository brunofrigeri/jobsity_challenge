import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Search, Show, Episode} from '../screens';
import NavigationHeader from '../components/NavigationHeader';
import Header from '../components/Header';

export enum SCREENS {
  HOME = 'Home',
  SEARCH = 'Search',
  SHOW = 'Show',
  EPISODE = 'Episode',
}

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.SHOW]: {
    id: number;
  };
  [SCREENS.EPISODE]: {
    id: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{header: props => <Header {...props} />}}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          header: props => <NavigationHeader {...props} />,
        }}>
        <Stack.Screen name={SCREENS.SEARCH} component={Search} />
        <Stack.Screen name={SCREENS.SHOW} component={Show} />
        <Stack.Screen name={SCREENS.EPISODE} component={Episode} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
