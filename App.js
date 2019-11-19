import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';


const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        Details: DetailsScreen,
    },
);

export default createAppContainer(AppNavigator);
