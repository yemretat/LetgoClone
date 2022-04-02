import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox} from 'react-native';
import HomeScreen from "../LetgoClone/src/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import Amplify,{Auth} from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {withAuthenticator} from "aws-amplify-react-native"

Amplify.configure(awsconfig)
LogBox.ignoreAllLogs(true);

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default withAuthenticator(App)



