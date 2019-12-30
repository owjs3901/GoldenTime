/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
		flex: 1,
		borderRadius: 6.5,
		borderTopColor:'#60A5E240',
		borderWidth: 1,
		borderColor: '#60A5E240',
		margin:15,
		padding:18,
		backgroundColor:'white',
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
		fontSize: 15,
		color: '#FF7373',
	},
	sub_inner: {
		marginTop:15,
		borderRadius: 4,
		padding:5,
		backgroundColor:'#F3F3F3',
		fontSize: 10,
		marginRight: 10
	}, sub_list: {
		marginBottom: 15,
		flexDirection: 'row'
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
					<View style={{flex:1,alignItems:'center'}}>
						<Text style={{color: 'black', fontSize: 20}}>건강상태</Text>
					</View>
					<View style={{flex:1}}>
					</View>
				</View>
				<View style={{flex: 1}}>
					<View style={styles.inner}>
						<Text style={{alignSelf:'flex-end',marginBottom: 22}}>최근 수정 일자 2020.01.05</Text>
						<Text style={styles.main_inner}>질병 +</Text>
						<View style={styles.sub_list}>
							<Text style={styles.sub_inner}>목감기 x</Text>
							<Text style={styles.sub_inner}>천식 x</Text>
							<Text style={styles.sub_inner}>당뇨 x</Text>
						</View>
						<Text style={styles.main_inner}>복용하는 약 +</Text>
						<View style={styles.sub_list}>
							<Text style={styles.sub_inner}>아스피린정 x</Text>
							<Text style={styles.sub_inner}>비타카오에프정 x</Text>
						</View>
						<Text style={styles.main_inner}>최근 특이사항</Text>
						<View style={styles.sub_list}>
							<Text style={styles.sub_inner}>잦은 기침 x</Text>
							<Text style={styles.sub_inner}>불면증 x</Text>
							<Text style={styles.sub_inner}>극심한 두통 x</Text>
							<Text style={styles.sub_inner}>소화불량 x</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
