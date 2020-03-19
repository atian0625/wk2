import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback } from 'react-native';

import Header from './src/components/Header.js';
import Album from './src/components/Album.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Album/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#000',
    
  },
  
 

});
export default App;