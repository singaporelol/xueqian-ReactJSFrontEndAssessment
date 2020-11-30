import React, { Component } from "react";
import "./index.scss";
interface IProps {
  className: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

export default class Card extends Component<IProps, IState> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(props) {
    super(props);
    this.state = {};
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { style, className } = this.props;

    return (
      <div className={`card ${className}`} style={{ ...style }}>
        {this.props.children}
      </div>
    );
  }
}
