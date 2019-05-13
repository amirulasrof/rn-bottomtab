import React, { Component } from "react";
import { 
    Platform, 
    StyleSheet, 
    Text,
    View, 
		Button } from "react-native";
		
import { ButtonGroup, Card } from 'react-native-elements';
//react-navigation 3x

class Cards extends React.Component {

	static navigationOptions = {
		title: "Cards",
		headerStyle: {
			backgroundColor: '#EE3439',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};

	constructor(){
		super()
		this.state = {
			selectedIndex : 0
		}
		this.updateIndex = this.updateIndex.bind(this);
	}

	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}

	render() {

		const list = ['Hello', 'World', 'Buttons']
		const { selectedIndex } = this.state
	
		return (
			<View style={styles.container}>
				<View style={styles.buttonG}>
					<ButtonGroup
						underlayColor="red"
						onPress={this.updateIndex}
						selectedIndex={selectedIndex}
						buttons={list}
						containerStyle={{height: 40}}
					/>
				</View>

			<Card containerStyle={{padding: 40}} >
			
			</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	buttonG:{
		marginTop: 15,
	}
	
});

export default Cards;