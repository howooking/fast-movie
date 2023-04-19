import { Component } from "../core/root";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /*html*/ `
    <input placeholder='Search your movies' value=${movieStore.state.searchText}>
    <button class="btn btn-primary">Search</button>
    `;
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", (e) => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && movieStore.state.searchText.trim())
        searchMovies(1);
    });
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) searchMovies(1);
    });
  }
}
