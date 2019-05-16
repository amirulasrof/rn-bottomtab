import React, { Component } from "react";
import { 
    Platform, 
    StyleSheet, 
    Text,
    View, 
		Button } from "react-native";
import { ButtonGroup, Card } from 'react-native-elements';
//react-navigation 3x


function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

    	alert(JSON.stringify(responseJson));
      //return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

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
		this.setState({selectedIndex});
		//alert(selectedIndex);
	}

	render() {

		const list = ['Track', 'History'];
		const { selectedIndex } = this.state;
	
		return (
			<View style={styles.container}>

			<Button
			  onPress={ getMoviesFromApiAsync }
			  title="Learn More"
			  color="#841584"
			/>

				<View style={styles.buttonG}>
					<ButtonGroup
						underlayColor="red"
						onPress={this.updateIndex}
						selectedIndex={selectedIndex}
						buttons={list}
						containerStyle={{height: 40}}
					/>
				</View>

			<Card>
			
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
		marginTop: 6,
		borderRadius: 50,
	},
	
});

export default Cards;