import React from 'react';

import './Home.scss';
import Header from '../../components/Header/Header';
import Spotlight from '../../components/Spotlight/Spotlight';
import Showcase from '../../components/Showcase/Showcase';

export default function Home() {
	return (
		<main className="pageWrapper mainHome">
			<Header />
			<Spotlight id="84958" type="tv" />
			<Showcase type="movie" title="Popular Movies" list="popular" />
			<Showcase type="tv" title="Popular Tv Shows" list="popular" />
			<Showcase type="movie" title="Top Rated Movies" list="top_rated" />
			<Showcase type="tv" title="Top Rated Tv Shows" list="top_rated" />
		</main>
	);
}
