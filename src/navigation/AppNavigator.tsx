import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
  DashboardStack, 
  WatchStack, 
  MediaLibraryStack, 
  MoreStack 
} from './stacks';
import CustomTabBar from '../shared/components/CustomTabBar';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardStack}
          options={{
            tabBarLabel: 'Dashboard',
          }}
        />
        <Tab.Screen 
          name="Watch" 
          component={WatchStack}
          options={{
            tabBarLabel: 'Watch',
          }}
        />
        <Tab.Screen 
          name="MediaLibrary" 
          component={MediaLibraryStack}
          options={{
            tabBarLabel: 'Media Library',
          }}
        />
        <Tab.Screen 
          name="More" 
          component={MoreStack}
          options={{
            tabBarLabel: 'More',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 