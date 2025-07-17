import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../shared/theme/colors';

const Stack = createStackNavigator();

// Placeholder Media Library Screen
const MediaLibraryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Media Library Screen</Text>
  </View>
);

const MediaLibraryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MediaLibraryMain" 
        component={MediaLibraryScreen}
        options={{
          title: 'Media Library',
          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
          headerTintColor: COLORS.TEXT_PRIMARY,
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
  },
  text: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default MediaLibraryStack; 