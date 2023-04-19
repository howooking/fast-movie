import { Component } from "../core/root";

export default class Headline extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /*html */ `
    <h1>
      <span>OBDb API</span><br />
      THE OPEN<br />
      MOVIE DATABASE
    </h1>
    <p>
      The OMDb API is a RESTful web service to obtain movie information,
      all content and images on the site are contributed and maintained by our users.<br />
      If you find this service useful, please consider making a one-time donation or become a patron.</p>
    <!-- <a href="#/">Main</a>
    <a href="#/about">About</a> -->
    `;
  }
}
