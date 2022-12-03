//Dependecies
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local imports
import Home from './components/home/Home';
import Navigation from './components/Navigation';
import Selector from './components/Selector';

import Profile from './assets/profile.svg';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      
    <View style={styles.container}>

        <Home/>
      
      {/* <StatusBar style="auto"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:10,
    backgroundColor: '#fff'

  },
});
