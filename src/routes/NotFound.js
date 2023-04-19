import { Component } from "../core/root";

export default class NotFound extends Component {
  render() {
    this.el.classList.add("container", "not-found");
    this.el.innerHTML = /* html */ `
      <h1>Not Found 404</h1>
    `;
  }
}
