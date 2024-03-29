import React from "react";

class LifeCycles_2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentSecond: prevState.currentSecond - 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    const { currentSecond } = this.state;
    return <p>{currentSecond}</p>;
  }
}
export default LifeCycles_2;
