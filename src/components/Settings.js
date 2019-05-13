import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

//react-navigation 3x

class Settings extends React.Component {

	static navigationOptions = {
		title: "Settings",
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
				<Text style={styles.headerText}>Settings</Text>
				{/*<Button
				    title="Go to Home Activity"
				    onPress={() => this.props.navigation.navigate("Home")}
				/>*/}             
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	headerText: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		fontWeight: "bold"
	}
});

export default Settings;