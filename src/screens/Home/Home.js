import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// components

const Home = () => {
	return (
		<>
			<View style={Styles.container}>
				<Text>Home</Text>
			</View>
		</>
	)
}

const Styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
})

export default Home
