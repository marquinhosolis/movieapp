import React, { useState, useEffect } from 'react';

import './Showcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function ShowcaseDetails(props) {
	const [data, setData] = useState([]);
	const [genres, setGenres] = useState([]);
	const [releaseDate, setReleaseDate] = useState([]);
	const [episodeRunTime, setEpisodeRunTime] = useState('');

	useEffect(() => {
		if (props.type === 'movie') {
			fetch(
				'https://api.themoviedb.org/3/movie/' +
					props.id +
					'?api_key=35eff9c9586b439e996570f60ed676a9'
			)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					setGenres(data.genres);
					setReleaseDate(data.release_date.substring(0, 4));
				});
		}
		if (props.type === 'tv') {
			fetch(
				'https://api.themoviedb.org/3/tv/' +
					props.id +
					'?api_key=35eff9c9586b439e996570f60ed676a9'
			)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					setGenres(data.genres);
					setEpisodeRunTime(data.episode_run_time);
				});
		}
	}, [props.id, props.type]);

	return (
		<>
			{props.type === 'movie' && (
				<>
					<h3>{data.title}</h3>
					<div className="genres">
						{genres.map((genre) => (
							<span key={genre.id}>{genre.name}</span>
						))}
					</div>
					<div className="seasonsTime">
						<span>{releaseDate}</span>
						<span>
							<FontAwesomeIcon icon={faClock} />
							{data.runtime} min
						</span>
					</div>
				</>
			)}
			{props.type === 'tv' && (
				<>
					<h3>{data.name}</h3>
					<div className="genres">
						{genres.map((genre) => (
							<span key={genre.id}>{genre.name}</span>
						))}
					</div>

					<div className="seasonsTime">
						<span>Seasons: {data.number_of_seasons}</span>
						<span>
							<FontAwesomeIcon icon={faClock} />
							{episodeRunTime[0]} min
						</span>
					</div>
				</>
			)}
		</>
	);
}
