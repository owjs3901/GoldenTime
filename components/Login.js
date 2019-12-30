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
import LinearGradient from 'react-native-linear-gradient';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
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
		const navigation = this.props;
		console.log("www"+JSON.stringify(navigation))
		return (
			<LinearGradient
				style={styles.container} colors={['#FF9F81','#FF7373']}>
				<TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Setting')}><Text>이메일로 로그인</Text></TouchableOpacity>
				<TouchableOpacity style={styles.button}><Text>페이스북 계정으로 로그인</Text></TouchableOpacity>
				<TouchableOpacity style={styles.button}><Text>구글 계정으로 로그인</Text></TouchableOpacity>
				<View style={styles.inner}>
					<View style={{flex: 1}}><Text style={{fontSize: 12, color: 'white'}}>회원가입</Text></View>
					<View style={{flex: 1}}><Text style={{fontSize: 12, alignSelf: 'flex-end', color: 'white'}}>아이디/비밀번호
						찾기</Text></View>
				</View>
			</LinearGradient>
		);
	}
}
