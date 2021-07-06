import React from 'react';

import Header from '../../components/Header/Header';
import Showcase from '../../components/Showcase/Showcase';
import Spotlight from '../../components/Spotlight/Spotlight';

import '../home/Home.scss';

export default function Movies(props) {
	return (
		<>
			<main className="pageWrapper mainHome">
				<Header />
				<Spotlight id="615658" type="movie" />
				<Showcase type="movie" title="Popular Movies" list="popular" />
				<Showcase
					type="movie"
					title="Top Rated Movies"
					list="top_rated"
				/>
			</main>
			{props.children}
		</>
	);
}
