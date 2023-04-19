import { Component } from "../core/root";
import messageStore from "../store/movie";

export default class Title extends Component {
  constructor() {
    super({
      tagName: "h1",
    });
    messageStore.subscribe("message", (neWval) => {
      console.log(neWval);
      this.render();
    });
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
