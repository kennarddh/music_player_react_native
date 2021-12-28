import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TextInput,
	Button,
} from 'react-native'

import { GetMusics } from '../../utils/Api'

// components
import Item from '../../components/Search/Item/Item'

const Search = () => {
	const [Musics, SetMusics] = useState({})
	const [SearchText, SetSearchText] = useState('')

	const AsyncGetMusics = async name => {
		const musics = await GetMusics(name)

		SetMusics(musics)
	}

	const Search = () => {
		AsyncGetMusics(SearchText)

		SetSearchText('')
	}

	return (
		<>
			<View style={Styles.container}>
				<View style={Styles.search}>
					<TextInput
						style={Styles.search_input}
						onChangeText={SetSearchText}
						value={SearchText}
						placeholder='Search'
					/>
					<View style={Styles.search_button}>
						<Button onPress={Search} title='Search' />
					</View>
				</View>
				{Musics ? (
					<>
						<FlatList
							data={Musics.items}
							renderItem={Item}
							initialNumToRender={5}
							removeClippedSubviews
							keyExtractor={item => item.id.videoId}
						/>
					</>
				) : (
					<>
						<Text>Fetching data from youtube data api v3</Text>
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
	search: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		height: 75,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	search_input: {
		width: '50%',
		height: '80%',
		borderRadius: 25,
	},
	search_button: {
		width: '40%',
		height: '80%',
		borderRadius: 25,
	},
})

export default Search
