import { Component } from "../core/root.js";

export default class PetItem extends Component {
  constructor(payload) {
    const { props } = payload;
    super({
      tagName: "li",
      props: props,
    });
  }
  render() {
    this.el.textContent = /*html */ `
    ${this.props.name} : ${this.props.age}살
    `;
  }
}
