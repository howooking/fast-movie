import { Component } from "../core/root";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      const { page, pageMax } = movieStore.state;
      if (pageMax > page) {
        this.el.classList.remove("hide");
      } else {
        this.el.classList.add("hide");
      }
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide1");
    this.el.textContent = "View More";
    this.el.addEventListener("click", async () => {
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
