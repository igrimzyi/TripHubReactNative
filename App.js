//Dependecies
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local imports
import Home from './components/Home';
import Navigation from './components/Navigation';
import Selector from './components/Selector';
import Profile from './components/Profile';

import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Stack.Navigator style={styles.navigator}>

      <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false,
          }}
        />

      <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown:false,
          }}
        />


      </Stack.Navigator>
        
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:10,
    backgroundColor: '#fff'

  },
  navigator:{
    display:'none'
  }
});
