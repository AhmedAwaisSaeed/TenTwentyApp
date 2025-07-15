import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieSearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Movie Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieSearchScreen;
