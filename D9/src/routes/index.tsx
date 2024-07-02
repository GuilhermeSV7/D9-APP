import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index';
import RecScreen from '../screens/recomend/index';
import AguaScreen from '../screens/agua';
import GymScreen from '../screens/gym';
import AlertScreen from '../screens/alert';
import ListScreen from '../screens/list';

// Importe as outras telas conforme necessário

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rec" component={RecScreen} />
        <Stack.Screen name="Agua" component={AguaScreen} />
        <Stack.Screen name="Gym" component={GymScreen} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        {/* Adicione as outras telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
