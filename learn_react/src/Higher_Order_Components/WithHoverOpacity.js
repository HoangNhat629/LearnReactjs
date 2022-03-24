import React, { Component } from "react";
function WithHowerOpacity(WrapperedComponent, opacity) {
  return class extends Component {
    state = {
      isHover: false,
    };
    onMouseEnter() {
      this.setState({
        isHover: true,
      });
    }
    onMouseLeave() {
      this.setState({
        isHover: false,
      });
    }
    render() {
      return (
        <div
          style={{
            opacity: this.state.isHover ? opacity : 1,
          }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrapperedComponent {...this.props} />
        </div>
      );
    }
  };
}
export default WithHowerOpacity;
