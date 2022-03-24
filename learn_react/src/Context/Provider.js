import React, { Component } from "react";
import NumberContext from "./Consumer";
export default class Provier extends Component {
  constructor() {
    super();
    this.state = { number: 5 };
    this.updateNumber = this.updateNumber.bind(this);
  }
  updateNumber() {
    this.setState({ number: Math.random() });
  }
  render() {
    return (
      <NumberContext.Provider
        value={{ number: this.state.number, updateNumber: this.updateNumber }}
      >
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}
