import TheFooter from "./components/TheFooter.js";
import TheHeader from "./components/TheHeader.js";
import { Component } from "./core/root.js";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view");
    this.el.classList.add("App");
    this.el.append(theHeader, routerView, theFooter);
  }
}
