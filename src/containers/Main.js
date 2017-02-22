import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TabView from 'react-native-scrollable-tab-view';
import { CurrentWorkout } from '../ui';

export const Main = () => (
  <LinearGradient
    colors={[ '#53EDC7', '#5AC8FB']}
    style={{ flex: 1, backgroundColor: 'transparent' }}
  >
    <TabView
      tabBarTextStyle={{ fontSize: 30 }}
      tabBarPosition="overlayBottom"
    >
      <CurrentWorkout tabLabel="+" />
      <Text tabLabel="yo">yo</Text>
    </TabView>
  </LinearGradient>
);
