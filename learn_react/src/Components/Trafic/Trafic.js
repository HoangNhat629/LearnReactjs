import React, { Component } from "react";
import classNames from "classnames"; //npm install classname --save
import "./Trafic.css";
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class Trafic extends Component {
  constructor() {
    super();
    //curenColor là 1 biến thay đổi liên tục k cố định nên ta dụng sate
    this.state = {
      curenColor: RED,
    };
    setInterval(() => {
      this.setState({
        //Truyền vào objects, properties muốn thay đổi
        curenColor: this.getNextColor(this.state.curenColor),
      });
    }, 1000);
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }
  render() {
    const { curenColor } = this.state;
    //  c2  const { curenColor } = this.props;
    console.log("Rendering....", curenColor);
    return (
      <div className="Trafic">
        <div
          className={classNames("buld", "red", {
            active: curenColor === RED,
          })}
        ></div>
        <div
          className={classNames("buld", "orange", {
            active: curenColor === ORANGE,
          })}
        ></div>
        <div
          className={classNames("buld", "green", {
            active: curenColor === GREEN,
          })}
        ></div>
      </div>
    );
  }
}

export default Trafic;
