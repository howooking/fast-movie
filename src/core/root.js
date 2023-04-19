export class Component {
  constructor(payLoad = {}) {
    const { tagName = "div", state = {}, props = {} } = payLoad;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {}
}

//  Router
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?");
  // #/about?a=123&b=456&c=789

  const queryStringArr = queryString.split("&");
  // ['a=123', 'b=456', 'c=789']
  const query = queryStringArr.reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, "");

  // const currentRoute = routes.find((route) => route.path === hash);
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);
  window.scrollTo(0, 0);
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes); //popstate는 최초로는 작동x
  };
}

// export default createRouter([
//   { path: "#/", component: Home },
//   { path: "#/about", component: About },
// ]);

// 상태 관리
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            // 호출할 콜백이 있는 경우!
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }
  subscribe(key, cb) {
    // { message: [ cb1, cb2, cb3, ... ] }
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
