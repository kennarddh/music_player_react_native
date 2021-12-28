import TrackPlayer from 'react-native-track-player'

export default async () => {
	TrackPlayer.addEventListener('remote-jump-forward', async event => {
		let position = await TrackPlayer.getPosition()
		let newPosition = position + event.interval
		await TrackPlayer.seekTo(newPosition)
	})

	TrackPlayer.addEventListener('remote-jump-backward', async event => {
		let position = await TrackPlayer.getPosition()
		let newPosition = position > 9 ? position - event.interval : 0

		await TrackPlayer.seekTo(newPosition)
	})

	TrackPlayer.addEventListener('remote-seek', async event => {
		await TrackPlayer.seekTo(event.position)
	})

	TrackPlayer.addEventListener('remote-play', async () => {
		await TrackPlayer.play()
	})

	TrackPlayer.addEventListener('remote-pause', async () => {
		await TrackPlayer.pause()
	})

	TrackPlayer.addEventListener('remote-stop', () => {
		TrackPlayer.destroy()
	})
}
