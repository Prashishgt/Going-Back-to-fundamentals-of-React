// const headingElement = React.createElement(
//   "h1",
//   {},
//   "Hello world from react cdn"
// );

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);
