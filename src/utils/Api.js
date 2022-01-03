import Musics from '../constants/Musics'

export const GetMusics = (maxResults = 20) => {
	return Musics.slice(0, maxResults)
}

export const SearchMusics = (query, maxResults = 20) => {
	return Musics.filter(item =>
		item.title.toLowerCase().includes(query.toLowerCase())
	).slice(0, maxResults)
}

export const MusicsNextPage = (lastResult, maxResults = 20) => {
	return Musics.slice(0, maxResults + lastResult)
}

export const SearchMusicsNextPage = (query, lastResult, maxResults = 20) => {
	return Musics.filter(item =>
		item.title.toLowerCase().includes(query.toLowerCase())
	).slice(0, maxResults + lastResult)
}

export const GetMusic = videoId => {
	return Musics.filter(item => item.id === videoId)
}
