import React, { Component } from "react";
import "./index.scss";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {}

export default class Footer extends Component<Props, State> {
  state = {};

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="logo"></div>
          <div className="contact">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">The Group</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Term & Condition</a>
              </li>
              <li>
                <a href="#">Payment methods</a>
              </li>
              <li>
                <a href="#">Bonus Terms</a>
              </li>
              <li>
                <a href="#">Responsible Gaming</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
