/* eslint-disable prettier/prettier */
import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import login from './components/Login';
import register from './components/Register';
import menu from './components/Menu';
import main from './components/Main';
import helplist from './components/HelpList';
import healthState from './components/HealthState';
import CPR from './components/CPR';
import AED from './components/AED';

const App = createStackNavigator(
	{
		Home: {screen: login},
		Register: {screen: register},
		Menu: {screen: menu},
		Main: {screen: main},
		Help: {screen: helplist},
		Health: {screen: healthState},
		CPR: {screen: CPR},
		AED: {screen: AED},
	},
	{initialRouteName: 'Home', headerMode: 'none'},
);


export default createAppContainer(App);
