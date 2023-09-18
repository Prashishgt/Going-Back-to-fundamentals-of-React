import React from "react";
import ReactDOM from "react-dom/client";

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

// *Feature of JSX
// ?now introducing jsx which abstracts all the above contents
// ?one thing that needs to be clarified is that jsx element is not html element,
// ?rather it is an object
// ?Webpack such as parcel converts JSX into valid JS code before it reaches the browser
// ?it is not parcel exactly per say but many packages (babel) that are included within it,
// ?so parcel manages them and provides developers a level of abstraction

const heading = <h1 className="main">I am using Jsx</h1>;

console.log("Using Jsx", heading);
console.log("Using create element", nestedElements);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(nestedElements);

// root.render(heading);

// *React Components
// ?Class Based Components - Old way
// ?Functional Components - New

// *Functional Components
// ?It is basically a function which returns JSX.

const name = "Prashish G.T.";

const Title = () => {
  return <h1>Hello! My name is {name}. I am learning core react js.</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>Hello this is functional Component</h2>
    </div>
  );
};

root.render(<HeadingComponent />);
