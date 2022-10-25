import React from "react";
import GrandChild from "./Grandchild";

class Child extends React.Component {
  render() {
    return (
      <>
        <h3>Child Component</h3>
        <GrandChild />
      </>
    );
  }
}

export default Child;
