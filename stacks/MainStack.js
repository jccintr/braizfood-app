

import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from "../screens/Preload";
import MainTab from '../stacks/MainTab';
import Loja from "../screens/Loja";



const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Preload">
        <Stack.Screen  name="Preload" component={Preload}/>
        <Stack.Screen  name="Loja" component={Loja}/>
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  )
}

export default MainStack
