import React, { createContext, useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

export const PlaylistContext = createContext([])

const PlaylistContextProvider = ({ children }) => {
	const [Playlist, SetPlaylist] = useState([])

	const AddVideo = videoId => {
		if (Playlist.includes(videoId)) return
		SetPlaylist(old => [...old, videoId])
	}

	const RemoveVideo = videoId => {
		if (!Playlist.includes(videoId)) return
		SetPlaylist(old => old.filter(item => item !== videoId))
	}
	
	useEffect(() => {
		const SetAsyncStorage = async () => {
			await AsyncStorage.getItem('music_player::playlist').then(value => {
				if (value) {
					SetPlaylist(JSON.parse(value))
				}
			})
		}

		SetAsyncStorage()
	}, [])

	useEffect(() => {
		AsyncStorage.setItem('music_player::playlist', JSON.stringify(Playlist))
	}, [Playlist])


	return (
		<PlaylistContext.Provider value={{ Playlist, AddVideo, RemoveVideo }}>
			{children}
		</PlaylistContext.Provider>
	)
}

export default PlaylistContextProvider
