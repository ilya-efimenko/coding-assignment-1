import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { watchLaterSlice } from '../lib/redux/slices';

// Components
import { Movie } from '../components';

// Models
import { IMovieItemModel } from '../types';

// Redux
import { getWatchLaterMovies } from '../lib/redux/selectors';

export const WatchLaterPage = () => {
	const watchLater = useSelector(getWatchLaterMovies);
	const { removeAllWatchLater } = watchLaterSlice.actions;
	const dispatch = useDispatch();

	return (
		<div className="starred" data-testid="watch-later-div">
			{watchLater.watchLaterMovies.length > 0 && (
				<div data-testid="watch-later-movies" className="starred-movies">
					<h6 className="header">Watch Later List</h6>
					<div className="movies-list row">
						{watchLater.watchLaterMovies.map((movie: IMovieItemModel) => (
							<Movie movie={movie} key={movie.id} />
						))}
					</div>

					<footer className="text-center">
						<button
							className="btn btn-primary"
							onClick={() => dispatch(removeAllWatchLater())}
						>
							Empty list
						</button>
					</footer>
				</div>
			)}

			{watchLater.watchLaterMovies.length === 0 && (
				<div className="text-center empty-cart">
					<i className="bi bi-heart" />
					<p>You have no movies saved to watch later.</p>
					<p>
						Go to <Link to="/">Home</Link>
					</p>
				</div>
			)}
		</div>
	);
};