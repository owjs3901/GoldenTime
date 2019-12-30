/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text,Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
	header: {
		backgroundColor: 'white',
		padding: 14,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor:'#60A5E240',
		borderBottomWidth:1
	},
	container: {
		backgroundColor: 'white',
		height:250,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor:'#60A5E240',
		borderBottomWidth: 3,
		borderBottomLeftRadius:20,
		borderBottomRightRadius:20,
	},
	button: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: 250,
		height: 42,
		marginBottom: 20,
		borderRadius:15,
	},
	inner: {
		flexDirection:'row',
		justifyContent:'center'
	},
	con: {
		margin:10,
		width: 130,
		height:130,
		backgroundColor:'white',
		borderRadius: 6.5,
		borderColor:'#60A5E240',
		borderBottomWidth: 1,
		alignItems:'center',
		justifyContent:'center'
	},
	main_inner: {
		width:88,
		height:88,
	},main_text: {
		width:88,
		height:88,
		color:'#FF7373',
		fontSize:70,
	},
	sub_inner: {
		fontSize: 10
	},
});

export default class Main extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor: '#FBFBFB'}} >
				<View style={styles.header}><Text style={{color:'#FF7373',fontSize:20}}>앱 이름</Text></View>
				<View style={styles.container}>
					<View style={{height:130,width:130,borderRadius:130,backgroundColor:'#FF7373',marginBottom: 25}}/>
					<Text>
						홍길동
					</Text>
				</View>
				<View style={styles.inner}>
					<TouchableOpacity style={styles.con} onPress={()=>this.props.navigation.navigate('Main')}>
						<Text style={styles.main_text}>
							00
						</Text>
						<Text style={styles.sub_inner}>
							구조내역
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.con} onPress={()=>this.props.navigation.navigate('Health')}>
						<Image style={styles.main_inner} source={ require('./menu1.png') } />
						<Text style={styles.sub_inner}>
							건강상태
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.inner}>
					<TouchableOpacity style={styles.con} onPress={()=>this.props.navigation.navigate('Help')}>
						<Image style={styles.main_inner} source={ require('./menu2.png') } />
						<Text style={styles.sub_inner}>
							응급처치 메뉴얼
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.con}>
						<Image style={styles.main_inner} source={ require('./menu3.png') } />
						<Text style={styles.sub_inner}>
							설정
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
