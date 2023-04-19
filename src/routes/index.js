import { createRouter } from "../core/root";
import About from "./About";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound },
]);
