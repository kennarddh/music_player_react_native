/**
 * @format
 */

import 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'

import TrackPlayerService from './TrackPlayerService'

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

TrackPlayer.registerPlaybackService(() => {
	console.log('service start')
	return TrackPlayerService
})
