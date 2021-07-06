import { React, useState, useEffect } from 'react';

import './Spotlight.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function Spotlight(props) {
	const [error, setError] = useState(null);
	const [spotlight, setSpotlight] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/' +
				props.type +
				'/' +
				props.id +
				'?api_key=35eff9c9586b439e996570f60ed676a9&language=en-US'
		)
			.then((res) => res.json())
			.then(
				(result) => {
					setSpotlight(result);
				},
				(error) => {
					setError(error);
				}
			);
	}, [props.id, props.type]);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else {
		return (
			<div className="spotlight" id={props.id}>
				<div className="spotLightImage">
					<img
						src={
							'https://image.tmdb.org/t/p/w1280/' +
							spotlight.backdrop_path
						}
						alt={spotlight.name}
					/>
				</div>

				<div className="spotLightCopy">
					{props.type === 'tv' && (
						<>
							<h1>{spotlight.name}</h1>
							<h2>{spotlight.tagline}</h2>
							<p>
								SEASONS: {spotlight.number_of_seasons} |
								EPISODES: {spotlight.number_of_episodes}
							</p>
						</>
					)}
					{props.type === 'movie' && (
						<>
							<h1>{spotlight.title}</h1>
							<h2>{spotlight.tagline}</h2>
							<p>{spotlight.runtime} min</p>
						</>
					)}
					<p>{spotlight.overview}</p>
					<Button link={spotlight.homepage}>
						<FontAwesomeIcon icon={faPlayCircle} />
						watch now
					</Button>
				</div>
			</div>
		);
	}
}
