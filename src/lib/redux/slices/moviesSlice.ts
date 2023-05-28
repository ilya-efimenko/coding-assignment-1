import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
	'fetch-movies',
	async (apiUrl: string) => {
		const response = await fetch(apiUrl);
		return response.json();
	},
);

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		movies: [],
		fetchStatus: '',
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.movies = action.payload;
				state.fetchStatus = 'success';
			})
			.addCase(fetchMovies.pending, (state) => {
				state.fetchStatus = 'loading';
			})
			.addCase(fetchMovies.rejected, (state) => {
				state.fetchStatus = 'error';
			});
	},
});