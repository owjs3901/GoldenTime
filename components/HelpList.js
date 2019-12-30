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
		flexDirection: 'row'
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
		fontSize: 70,
		width: 88,
		height: 88,
		color: '#FF7373',
	},
	sub_inner: {
		fontSize: 10,
	},
});

export default class Main extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
				<View style={styles.header}>
					<TouchableOpacity style={{flex:1}} onPress={()=>this.props.navigation.pop()}>
						<Text style={{color: '#FF7373', fontSize: 20}}> &lt; </Text>
					</TouchableOpacity>
					<View style={{flex:2,alignItems:'center'}}>
						<Text style={{color: 'black', fontSize: 20}}>응급처치 메뉴얼</Text>
					</View>
					<View style={{flex:1}}>
					</View>
				</View>
				<View style={{flex: 1, marginBottom: 100}}>
					<View style={styles.inner}>
						<TouchableOpacity style={styles.con}>
							<Image style={styles.main_inner} source={require('./cpr.png')}/>
							<Text style={styles.sub_inner}>
								심폐소생술 (CPR)
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.inner}>
						<TouchableOpacity style={styles.con}>
							<Image style={styles.main_inner} source={require('./aed.png')}/>
							<Text style={styles.sub_inner}>
								자동제세동기
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
