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
import BackgroundTimer from 'react-native-background-timer';
/*
req({
	uri: 'https://mbs-db.firebaseapp.com/test1',
	method: 'GET',
	headers: {
		'Accept-Charset': 'utf-8'
	}
}, function(err, res, body){
	console.log(body);
});*/

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
var intervalId=undefined
export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state={bpm:-1}
		if(intervalId)
			BackgroundTimer.clearInterval(intervalId)
		intervalId = BackgroundTimer.setInterval(() => {
			fetch('http://183.97.200.230:1001/test',{
				method:'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			}).then(res=>res.text()).then(r=>this.setState({bpm:r}))
		}, 2000);
	}

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
							{this.state.bpm}
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
