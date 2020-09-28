import React, { Component } from "react";
import "../css/mymoves.css";
import Mymove from "./mymove";

export default class Mymoves extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { values } = this.props;
    const value = values.map((item) => <Mymove key={item.id} {...item} />);
    return (
      <div className="mymoves">
        <h2>My Moves</h2>
        {value}
      </div>
    );
  }
}
