import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import TrackPlayer, { Capability } from 'react-native-track-player'

// components

const Player = () => {
	useEffect(() => {
		const SetupTrackPlayer = async () => {
			await TrackPlayer.setupPlayer().then(async () => {
				await TrackPlayer.updateOptions({
					// Media controls capabilities
					capabilities: [
						Capability.Play,
						Capability.Pause,
						Capability.SkipToNext,
						Capability.SkipToPrevious,
						Capability.Stop,
					],

					// Capabilities that will show up when the notification is in the compact form on Android
					compactCapabilities: [
						Capability.Play,
						Capability.Pause,
						Capability.Stop,
					],
				})

				console.log('setup complete')
			})

			await TrackPlayer.add({
				id: 1,
				url: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/964/biology-1624035636-7bAv4E2brA.mp3',
				title: 'Biology',
				artist: 'ncs',
				artwork:
					'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/964/850x850/biology-1624035630-RGVPK9iy6a.jpg',
			})

			await TrackPlayer.play()
		}

		SetupTrackPlayer()
	}, [])

	return (
		<>
			<View style={Styles.container}>
				<Text>Player</Text>
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

export default Player
