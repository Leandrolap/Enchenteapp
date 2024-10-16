import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View,} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Mapa from './src/Page/Mapa'

const Drawer = createDrawerNavigator();

function App(){
  return (
       <Drawer.Navigator>
        <Drawer.Screen name='Inicio' component={Mapa}/>
       </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
