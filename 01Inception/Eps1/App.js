// const headingElement = React.createElement(
//   "h1",
//   {},
//   "Hello world from react cdn"
// );

// traditional way to create elements in js using react

const nestedElements = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child-1" }, "Inside Child-1"),
    React.createElement("div", { id: "child-2" }, "Inside Child-2"),
  ]
);

// now introducing jsx which abstracts all the above contents
// one thing that needs to be clarified is that jsx element is not html element,
//  rather it is an object
const heading = <h1>I am using Jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedElements);
root.render(heading);
