import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TextInput,
	Button,
	Keyboard,
} from 'react-native'

import {
	GetMusics,
	SearchMusics,
	MusicsNextPage,
	SearchMusicsNextPage,
} from '../../utils/Api'

// components
import Item from '../../components/Search/Item/Item'

const Search = () => {
	const [Musics, SetMusics] = useState([])
	const [SearchText, SetSearchText] = useState('')
	const [SearchLoadMoreText, SetSearchLoadMoreText] = useState('')
	const [IsSearch, SetIsSearch] = useState(false)

	const ListFooter = () => {
		const LoadMore = () => {
			if (IsSearch) {
				SetMusics(
					SearchMusicsNextPage(SearchLoadMoreText, Musics.length)
				)
			} else {
				SetMusics(MusicsNextPage(Musics.length))
			}
		}

		return <Button title='Load More' onPress={LoadMore} />
	}

	useEffect(() => {
		const firstMusics = GetMusics()

		SetMusics(firstMusics)
	}, [])

	const Search = () => {
		Keyboard.dismiss()

		if (SearchText === '') {
			SetMusics(GetMusics())
			SetIsSearch(false)
		} else {
			const musics = SearchMusics(SearchText)

			SetMusics(musics)

			SetSearchLoadMoreText(SearchText)
			SetSearchText('')

			SetIsSearch(true)
		}
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
						onSubmitEditing={Search}
					/>
					<View style={Styles.search_button}>
						<Button onPress={Search} title='Search' />
					</View>
				</View>
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
	list: {
		height: '80%',
	},
})

export default Search
