import { Component } from "../core/root";
import messageStore from "../store/message";

export default class TextFiled extends Component {
  render() {
    this.el.classList.add("TextField");
    this.el.innerHTML = /*html*/ `
    <input value="${messageStore.state.message}"/>
    `;
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      messageStore.state.message = inputEl.value;
    });
  }
}
