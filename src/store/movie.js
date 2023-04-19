import { Store } from "../core/root";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
  pageMax: 1,
  loading: false,
  message: "Search Movie!",
  movie: {},
});

export default store;

export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        page,
        title: store.state.searchText,
      }),
    });
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    store.state.message = `${error}`;
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch("api/movie", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    });
    store.state.movie = await res.json();
  } catch (error) {
    console.log(error);
  }
};
