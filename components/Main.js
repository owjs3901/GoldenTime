/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


var bpm=0

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	top:{
		height: 226,
		width:"100%",
		backgroundColor:'white',
		borderBottomRightRadius:200,
		borderBottomLeftRadius:200,
		alignItems:'center'
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
		width: 250,
		flexDirection: 'row',
	},
});

export default class Main extends Component {
	render() {
		return (
			<View>
				<Image source={require('./map.png')} style={{alignItems:'center',position:'absolute',left:0,top:0}}/>
				<LinearGradient
					style={styles.top} colors={['#FF9F81','#FF7373']}>
					<Text style={{color:'white',marginTop:20}}>
						발생시간
					</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={{color:'white',fontSize:80}}>
							{bpm}
						</Text>
						<View style={{justifyContent:'flex-end'}}>
							<Text style={{color:'white',fontSize:15,paddingBottom:20,marginLeft:10}}>
								BPM
							</Text>
						</View>
					</View>
					<Text style={{color:'white',fontSize:20}}>
						응급실 연락
					</Text>
				</LinearGradient>
				{/*style={styles.container} colors={['#FF9F81','#FF7373']}*/}
			</View>
		);
	}
}
