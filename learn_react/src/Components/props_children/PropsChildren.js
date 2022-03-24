import React, { Component } from "react";
class PropsChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
    this.onClicked = this.onClicked.bind(this);
    // /React.createRef():
    //vd: khi reload lại trang con trỏ luôn chỉ vào thanh tìm kiếm
    this.inputElement = React.createRef();
  }
  componentDidMount() {
    this.inputElement.current.focus();
  }
  onClicked() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }
  render() {
    const { heading, children } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className="PropsChildren">
        <div className="Heading" onClick={this.onClicked}>
          <h2>{heading}</h2>
        </div>
        {isCollapsed && <div>Nothing</div>}
        {!isCollapsed && <div className="Content">{children}</div>}
        <input type="text" ref={this.inputElement}></input>
      </div>
    );
  }
}
export default PropsChildren;
