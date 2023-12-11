// App.js
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false
          }}
        >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

