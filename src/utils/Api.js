import { API_KEY } from '@env'

const FetchData = endpoint => {
	return fetch(endpoint, {
		method: 'GET',
	})
		.then(response => response.json())
		.catch(err => alert(err))
}

export const GetMusics = (query, maxResults = 25) => {
	return FetchData(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&videoCategoryId=10&key=${API_KEY}`
	)
}

export const GetMusicNextPage = (NextPageToken, maxResults = 25) => {
	return FetchData(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&pageToken=${NextPageToken}&type=video&videoCategoryId=10&key=${API_KEY}`
	)
}

export default FetchData
