import React from 'react';
import { View, Text } from 'react-native';
import Welcome from "./src/screens/welcome";
import Login from "./src/screens/login";
import Register from "./src/screens/signup";
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Router, Scene } from 'react-native-router-flux'


// const Stack = createStackNavigator();
// type RootStackParamList = {   to check type used in typescript or pass data from one screen to another 
//   Home: undefined;
//   Profile: { userId: string };
//    Checklist:{data}
// };
const Stack=createNativeStackNavigator()

const App = () => {
  return (
   
<NavigationContainer>
  <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen
    name='Welcome'
    component={Welcome}
   options={{
    headerShown:false
   }}
    />

    <Stack.Screen
    name='Login'
    component={Login}
   options={{
    headerShown:false
   }}
    />
<Stack.Screen
    name='Signup'
    component={Register}
   options={{
    headerShown:false
   }}
    />
  </Stack.Navigator>
</NavigationContainer>
    
  );
};


export default App;
