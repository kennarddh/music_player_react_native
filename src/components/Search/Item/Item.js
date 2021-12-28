import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

// components

const Item = ({ item }) => {
	return (
		<>
			<View key={item.id.videoId} style={Styles.container}>
				<View style={Styles.left}>
					<Image
						style={Styles.thumbnail}
						source={{
							uri: item.snippet.thumbnails.default.url,
						}}
					/>
					<Text style={Styles.title}>{item.snippet.title}</Text>
				</View>
				<View>
					<Icon
						name='play-circle'
						size={30}
						color='#000000'
						onPress={() => {}}
					/>
				</View>
			</View>
		</>
	)
}

const Styles = StyleSheet.create({
	container: {
		backgroundColor: '#C4C4C4',
		paddingVertical: 10,
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 20,
	},
	left: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	title: {
		width: '50%',
	},
	thumbnail: {
		marginRight: 10,
		width: 120,
		height: 90,
	},
})

export default Item
