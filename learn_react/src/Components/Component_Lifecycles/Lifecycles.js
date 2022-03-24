import React, { Component } from "react";
import "./Lifecycles.css";
class Lifecycles extends Component {
  constructor(props) {
    console.log("Counter constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    console.log("Couter render");
    return (
      <div className="Lifecycles">
        <button className="decrease" onClick={() => this.decrease()}>
          {" "}
          Decrease{" "}
        </button>
        <span className="count">{this.state.count}</span>
        <button className="increase" onClick={() => this.increase()}>
          {" "}
          Increase{" "}
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("Did mount");
  }
  componentDidUpdate() {
    console.log("Did update");
  }
  componentWillUnmountMount() {
    console.log("Will unmount");
  }
}
export default Lifecycles;
