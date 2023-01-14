import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import Tabbar from './Router/Tab';
//import SafeAreaProvider from 'react-native-safe-area-context'

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <Text> Hello have nice day</Text> */}
      <StatusBar style="auto" />
     
      <Tabbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
