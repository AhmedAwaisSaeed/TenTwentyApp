/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import FONTS from './src/shared/constants/fonts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.testFont}>This is Poppins-Bold font!</Text>
      <NewAppScreen templateFileName="App.tsx" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  testFont: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 20,
    margin: 100,
  },
});

export default App;
