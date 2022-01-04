import React, { useState, useEffect, useContext } from 'react'
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	RefreshControl,
} from 'react-native'

// context
import { PlaylistContext } from '../../context/PlaylistContext'

// components
import Item from '../../components/Playlist/Item/Item'

// api
import { GetMusic } from '../../utils/Api'

const Playlist = () => {
	const { Playlist } = useContext(PlaylistContext)

	const [IsRefreshing, SetIsRefreshing] = useState(false)

	const [Musics, SetMusics] = useState([])

	const OnRefresh = () => {
		SetIsRefreshing(true)

		const MusicsId = Playlist.slice(0, 20)

		const Musics = MusicsId.map(id => GetMusic(id))

		SetMusics(Musics)

		SetIsRefreshing(false)
	}

	const ListFooter = () => {
		const LoadMore = () => {
			const musics = Musics.slice(0, Musics.length + 20)

			SetMusics(musics)
		}

		return <Button title='Load More' onPress={LoadMore} />
	}

	useEffect(() => {
		const firstMusicsId = Playlist.slice(0, 20)

		const firstMusics = firstMusicsId.map(id => GetMusic(id))

		SetMusics(firstMusics)
	}, [])

	return (
		<>
			<View style={Styles.container}>
				{Musics ? (
					<>
						<FlatList
							style={Styles.list}
							data={Musics}
							renderItem={({ item }) => <Item item={item} />}
							initialNumToRender={5}
							removeClippedSubviews
							keyExtractor={item => item.id}
							ListFooterComponent={ListFooter}
							refreshControl={
								<RefreshControl
									refreshing={IsRefreshing}
									onRefresh={OnRefresh}
								/>
							}
						/>
					</>
				) : (
					<>
						<Text>Loading</Text>
					</>
				)}
			</View>
		</>
	)
}

const Styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	list: {
		height: '100%',
	},
})

export default Playlist
