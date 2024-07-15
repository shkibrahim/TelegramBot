import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import InputScreen from './screens/InputScreen';
import MessagesScreen from './screens/MessagesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Input" component={InputScreen} options={{ 
           headerStyle: { backgroundColor: 'blue' },
           headerTintColor: '#fff',title: 'Enter Channel Name' }} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{
           headerStyle: { backgroundColor: 'blue' },
           headerTintColor: '#fff',  title: 'Messages' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
