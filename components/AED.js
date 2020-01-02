/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
	header: {
		backgroundColor: 'white',
		padding: 14,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#60A5E240',
		borderBottomWidth: 1,
		flexDirection: 'row',
	},
	container: {
		backgroundColor: 'white',
		height: 250,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#60A5E240',
		borderBottomWidth: 3,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	button: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: 250,
		height: 42,
		marginBottom: 20,
		borderRadius: 15,
	},
	inner: {
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
	},
	con: {
		margin: 10,
		width: 150,
		height: 150,
		backgroundColor: 'white',
		borderRadius: 6.5,
		borderColor: '#60A5E240',
		borderBottomWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	main_inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'contain',
	},
	sub_inner: {
		fontSize: 10,
	},
	arrow: {
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class Main extends Component {
	constructor() {
		super();
		this.state = {count: 1};
	}

	render() {
		// const k=`./cpr/${String(this.state.count)}.png`
		let k = require(`./aed/1.png`);
		switch(this.state.count){
			case 1:
				k = require(`./aed/1.png`);
				break;
			case 2:
				k = require(`./aed/2.png`);
				break;
			case 3:
				k = require(`./aed/3.png`);
				break;
			case 4:
				k = require(`./aed/4.png`);
				break;
			case 5:
				k = require(`./aed/5.png`);
				break;
			case 6:
				k = require(`./aed/6.png`);
				break;
		}
		return (
			<View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
				<View style={styles.header}>
					<TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.pop()}>
						<Text style={{color: '#FF7373', fontSize: 20}}> &lt; </Text>
					</TouchableOpacity>
					<View style={{flex: 2, alignItems: 'center'}}>
						<Text style={{color: 'black', fontSize: 20}}>자동제세동기 (AED)</Text>
					</View>
					<View style={{flex: 1}}>
					</View>
				</View>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<TouchableOpacity style={styles.arrow} onPress={() => {
						if (this.state.count > 1) {
							this.setState({count: this.state.count - 1});
						}
					}}>
						<Text style={{fontSize: 20}}>&lt;</Text>
					</TouchableOpacity>
					<Image style={styles.main_inner} source={
						k
					}/>
					<TouchableOpacity style={styles.arrow} onPress={() => {
						if (this.state.count < 6) {
							this.setState({count: this.state.count + 1});
						}
					}}>
						<Text style={{fontSize: 20}}>&gt;</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
