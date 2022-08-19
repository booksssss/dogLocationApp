import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import firebase from 'firebase'
import {firebaseConfig} from './config'

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({

  LoginScreen:Login,
  Dashboard:Dashboard

})
const AppNavigator = createAppContainer(AppSwitchNavigator)
export default function App() {
  return (
   <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
