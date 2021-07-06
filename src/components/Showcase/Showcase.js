import { useEffect, useState } from 'react';
import { React } from 'react';
import { Link } from 'react-router-dom';

import './Showcase.scss';
import ShowcaseDetails from '../../components/Showcase/ShowcaseDetails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function Showcase(props) {
	const [items, setItems] = useState([]);

	function scrollRight(e) {
		const target = e.target;
		const row = target.closest('.itemsRow').querySelector('ul');
		const scrollLeft = row.scrollLeft;
		row.scrollLeft = scrollLeft + 120;
	}

	function scrollLeft(e) {
		const target = e.target;
		const row = target.closest('.itemsRow').querySelector('ul');
		const scrollLeft = row.scrollLeft;
		row.scrollLeft = scrollLeft - 120;
	}

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/' +
				props.type +
				'/' +
				props.list +
				'?api_key=35eff9c9586b439e996570f60ed676a9&language=en-US&page=1'
		)
			.then((response) => response.json())
			.then((data) => {
				setItems(data.results);
			});
	}, [props.list, props.type]);

	return (
		<div className="itemsRow">
			<div className="itemHeader">
				<h2>{props.title}</h2>
				<div className="rowNavigation">
					<div className="rowNavigationLeft" onClick={scrollLeft}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</div>
					<div className="rowNavigationRight" onClick={scrollRight}>
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</div>
			</div>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<>
							<Link to={`/${props.type}/${item.id}`}>
								<div className="showcaseImage">
									<img
										src={
											'https://image.tmdb.org/t/p/w300/' +
											item.poster_path
										}
										alt={item.title}
									/>
								</div>
								<div className="showcaseCopy">
									<ShowcaseDetails
										id={item.id}
										type={props.type}
									/>
								</div>
							</Link>
						</>
					</li>
				))}
			</ul>
		</div>
	);
}
