import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDrawerStatus } from '@react-navigation/drawer'

const Header = ({ navigation, title }) => {
	return (
		<>
			<View style={Styles.container}>
				{navigation.canGoBack() && (
					<Icon
						name='arrow-left'
						size={30}
						color='#000000'
						style={Styles.back_icon}
						onPress={() => navigation.goBack()}
					/>
				)}
				<Text>{title}</Text>
				{useDrawerStatus() === 'open' ? (
					<Icon
						name='times'
						size={30}
						color='#000000'
						style={Styles.bars_icon}
						onPress={() => navigation.closeDrawer()}
					/>
				) : (
					<Icon
						name='bars'
						size={30}
						color='#000000'
						style={Styles.bars_icon}
						onPress={() => navigation.openDrawer()}
					/>
				)}
			</View>
		</>
	)
}

const Styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		position: 'relative',
	},
	back_icon: {
		position: 'absolute',
		left: 10,
		top: 10,
	},
	bars_icon: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
})

export default Header
