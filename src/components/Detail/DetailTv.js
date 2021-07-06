import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header/Header';
import Showcase from '../Showcase/Showcase';
import Spotlight from '../Spotlight/Spotlight';

import '../../pages/home/Home.scss';

export default function DetailTv() {
	let { id } = useParams();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
	return (
		<main className="pageWrapper mainHome">
			<Header />
			<Spotlight id={id} type="tv" />
			<Showcase
				type="tv"
				title="Related Tv Shows"
				list={`${id}/similar`}
			/>
		</main>
	);
}
