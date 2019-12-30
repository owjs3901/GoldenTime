/* eslint-disable prettier/prettier */
import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import login from './components/Login';
import register from './components/Register';
import setting from './components/Setting';
import main from './components/Main';

const App = createStackNavigator(
	{
		Home: {screen: login},
		Register: {screen: register},
		Setting: {screen: setting},
		Main: {screen: main},
	},
	{initialRouteName: 'Setting', headerMode: 'none'},
);


export default createAppContainer(App);
