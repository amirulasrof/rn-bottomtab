import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	//ActivityIndicator
} from 'react-native';

//react-navigation 3x
//note: props = immutable, state = mutable

//props
class PropsTest extends Component {
	render(){
		return (
			<View style={{alignItems: 'center', top: 50}}>

				{/* this.props.anyname 
					this.props is the reserved words
					anyname can be simply set to any var
				*/}

				<Text> Hello {this.props.name} </Text> 
				
			</View>
		);
	}
}

//state
// class StateTest extends Component {

//  	//note: since props is used to display, 
//  	//state is used to change the data to display
//  	//note: if you type constructor in will auto complete like below :
//  	/* 
//  		constructor(props) {
// 		  super(props);
		
// 		  this.state = {};
// 		}
//  	*/

// 	constructor(props) {
// 	  super(props);
	
// 	  this.state = { 
// 	  	isShow: true
// 	  };

// 	  //toggle state very second
// 	  setInterval(() => (
//       this.setState(previousState => (
//         { isShow: !previousState.isShow }
//       ))
//     ), 1000);
// 	}

// 	render(){
// 		if(!this.state.isShow){
// 			return null
// 		}

// 		return(
// 			<Text> {this.props.textD} </Text>
// 		);
// 	}
// }

class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
		headerStyle: {
			backgroundColor: '#EE3439',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};

	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.headerText} >Home </Text>
				{/*<Button
					title="Go to Profile Activity"
					onPress={() => this.props.navigation.navigate('Profile')}
				/>*/}

				<PropsTest name="Amirul" />

				{/*<StateTest textD="Announcement"/>*/}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	headerText: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		fontWeight: 'bold'
	},
});

export default Home;