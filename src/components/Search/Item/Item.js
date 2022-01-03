import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

// context
import { PlaylistContext } from '../../../context/PlaylistContext'

// components

const Item = ({ item }) => {
	const { Playlist, AddVideo, RemoveVideo } = useContext(PlaylistContext)

	const AddToPlaylist = videoId => {
		AddVideo(videoId)
	}

	const RemoveFromPlaylist = videoId => {
		RemoveVideo(videoId)
	}

	return (
		<>
			<View style={Styles.container}>
				<View style={Styles.left}>
					<Image
						style={Styles.thumbnail}
						source={{
							uri: item.artwork,
						}}
					/>
					<Text style={Styles.title}>{item.title}</Text>
				</View>
				<View>
					{Playlist.includes(item.id) ? (
						<>
							<Icon
								name='minus'
								size={30}
								color='#000000'
								onPress={() => RemoveFromPlaylist(item.id)}
							/>
						</>
					) : (
						<>
							<Icon
								name='plus'
								size={30}
								color='#000000'
								onPress={() => AddToPlaylist(item.id)}
							/>
						</>
					)}
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
		width: 100,
		height: 100,
	},
})

export default Item
