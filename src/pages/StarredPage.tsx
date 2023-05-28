import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import { Movie } from '../components';

// Redux
import { starredSlice } from '../lib/redux/slices';
import { getStarredMovies } from '../lib/redux/selectors';

// Models
import { IMovieItemModel } from '../types';

export const StarredPage = () => {
	const starred = useSelector(getStarredMovies);
	const { clearAllStarred } = starredSlice.actions;
	const dispatch = useDispatch();

	return (
		<div className="starred" data-testid="starred">
			{starred.starredMovies.length > 0 && (
				<div data-testid="starred-movies" className="starred-movies">
					<h6 className="header">Starred movies</h6>
					<div className="movies-list row">
						{starred.starredMovies.map((movie: IMovieItemModel) => (
							<Movie movie={movie} key={movie.id} />
						))}
					</div>

					<footer className="text-center">
						<button
							className="btn btn-primary"
							onClick={() => dispatch(clearAllStarred())}
						>
							Remove all starred
						</button>
					</footer>
				</div>
			)}

			{starred.starredMovies.length === 0 && (
				<div className="text-center empty-cart">
					<i className="bi bi-star" />
					<p>There are no starred movies.</p>
					<p>
						Go to <Link to="/">Home</Link>
					</p>
				</div>
			)}
		</div>
	);
};