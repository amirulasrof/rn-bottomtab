import React, { Component } from "react";
import { 
    Platform, 
    StyleSheet, 
    Text,
    View, 
		Button } from "react-native";
import { ButtonGroup, Card } from 'react-native-elements';
//react-navigation 3x
var stat = false;
var data;

function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
			stat = true;
			data = JSON.stringify(responseJson);
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

				{stat === true
					&& <Text> {data} </Text>
				}

				{selectedIndex === 0
          && 
          <Text style={styles.tabContent}> Tab one </Text>
        }
        {selectedIndex === 1
          && 
          <Text style={styles.tabContent}> Tab two</Text>
        }
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

//or using this

// import React, { Component } from "react";
// import { 
//     Platform, 
//     StyleSheet, 
//     Text,
//     View, 
// 		Button } from "react-native";
// import SegmentedView from './SegmentedView';
// //import Drawer from './Drawer';

// class Cards extends React.Component{

// 	static navigationOptions = {
// 		title: "Cards",
// 		headerStyle: {
// 			backgroundColor: '#EE3439',
// 		},
// 		headerTintColor: '#fff',
// 		headerTitleStyle: {
// 			fontWeight: 'bold',
// 		},
// 	};

// 	render(){
// 		return (
// 			<SegmentedView />
// 		)
// 	}

// }

// export default Cards;
