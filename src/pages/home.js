import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieGridItem from '../components/movieGridItem/movieGridItem'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
	const [movies, setMovies] = useState([])
	const [inputTerm, setInputTerm] = useState("dragon")
	const [searchTerm, setSearchTerm] = useState("dragon")
	const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=5bbb8325`
	const history = useHistory();

	// version with fetch then

	// async function fetchOmdb() {
	// 	fetch(URL).then(response => {
	// 		return response.json().then(data => {
	// 			setMovies(data.Search)
	// 		})
	// 	}).catch(error => {
	// 		console.log(error)
	// 	})
	// }

	// useEffect(() => {
	// 	fetchOmdb()
	// }, [searchTerm])


	// Version with try and catch

	// async function fetchOmdb() {
	// 	try {
	// 		const response = await fetch(URL)
	// 		const data = await (response.json()) // this is also asynchronous? BUt the data is already here!
	// 		setMovies(data.Search)
	// 		return data
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// useEffect(() => {
	// 	fetchOmdb()
	// }, [])
	// console.log(movies)

	// Version with axios


	useEffect(() => {
		async function fetchOmdb() {
			const data = await axios.get(
				URL
			)
			setMovies(data.data.Search)
		}
		fetchOmdb()
	}, [searchTerm, URL])

	function updateSearch(event) {
		setInputTerm(event.target.value)
	}
	function performSearch(event) {
		history.push(`/discover/${inputTerm}`);
	}

	return (
		<div>
			<div className='search-bar'>
				<input onChange={updateSearch} placeholder={'dragon'} />
				<button onClick={performSearch}>Search</button>
			</div>
			<ul className='movie-grid'>
				{movies && movies.map((movie) =>
					<MovieGridItem key={movie.imdbID} movie={movie} />
				)}
			</ul>
		</div>
	)
}
