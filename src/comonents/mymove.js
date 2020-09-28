import React, { Component } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaBoxes, FaCalendarAlt } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { GrEdit } from "react-icons/gr";
import "../css/move.css";

export default class Mymove extends Component {
  constructor() {
    super();
    this.state = {
      isture: true,
      isture2: true,
    };
  }
  handleClickLiving = (value, id) => {
    if (value) {
      this.setState({ isture2: false });

      document.getElementById(`${id}`).style.display = "flex";
      // document.getElementById("wrapper").innerHTML = "Less movies";
    } else {
      this.setState({ isture2: true });
      document.getElementById(`${id}`).style.display = "none";
      // document.getElementById("wrapper").innerHTML = "More movies";
    }
  };
  handleClick = (value, id) => {
    if (value) {
      this.setState({ isture: false });

      document.getElementById(`${id}`).style.height = "auto";
      // document.getElementById("wrapper").innerHTML = "Less movies";
    } else {
      this.setState({ isture: true });
      document.getElementById(`${id}`).style.height = "160px";
      // document.getElementById("wrapper").innerHTML = "More movies";
    }
  };
  render() {
    return (
      <div className="movecontainer">
        <div
          style={{ height: "160px", overflow: "hidden", padding: "10px" }}
          id={`${this.props.id}`}
          className="bgwrapper"
        >
          <div className="smwrapper">
            <div className="top">
              <div className="label">
                <p>From</p>
                {this.props.from}
              </div>
              <div className="label">
                <div className="arrow">
                  <HiArrowNarrowRight />
                </div>
              </div>
              <div className="label">
                <p>To</p>
                {this.props.to}
              </div>
              <div className="label">
                <p>Request#</p>
                <strong style={{ color: "rgba(255, 68, 0, 0.726)" }}>
                  {" "}
                  {this.props.request}
                </strong>
              </div>
            </div>
            <div className="bottom">
              <div className="label1">
                <span>
                  <AiFillHome /> &nbsp;{this.props.house}
                </span>
              </div>
              <div className="label1">
                <span>
                  <FaBoxes /> &nbsp;{this.props.noofpackages}
                </span>
              </div>
              <div className="label1">
                <span>
                  <GiPathDistance /> &nbsp;{this.props.distance}
                </span>
              </div>
              <div className="label1">
                <span>
                  <FaCalendarAlt />
                  &nbsp;
                  {this.props.date}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <GrEdit />
                </span>
              </div>
              <div className="label1">
                <p>Flexible</p>
                <input
                  className="check"
                  type="checkbox"
                  checked={this.props.isflexible}
                />
                {this.props.isflexible}
              </div>
              <div className="label1">
                <button
                  className="button1"
                  onClick={() =>
                    this.handleClick(this.state.isture, this.props.id)
                  }
                >
                  view move details
                </button>
                <button>quotes awaiting</button>
              </div>
            </div>
            <p>
              <strong>Disclaimer:</strong>Please update your move date before
              two days of shifting
            </p>

            <div className="inventaryhead">
              <h3>Inventary Details</h3> &nbsp;&nbsp;&nbsp;
              <button>Edit Inventary</button>
            </div>
            <div className="inventarybody">
              <button
                onClick={() =>
                  this.handleClickLiving(this.state.isture2, this.props.id + 10)
                }
              >
                Living Room{" "}
                <span>
                  {Object.keys(this.props.inventory.livingroom.furnitures)
                    .length +
                    Object.keys(this.props.inventory.livingroom.electricals)
                      .length +
                    Object.keys(this.props.inventory.livingroom.Fragile).length}
                </span>
              </button>
              <div className="inventarycontent" id={this.props.id + 10}>
                <div className="furnitures">
                  <h4>Furnitures</h4>
                  <div className="content">
                    {Object.keys(
                      this.props.inventory.livingroom.furnitures
                    ).map((keyname) => (
                      <div key={keyname}>
                        <p className="key">{keyname}</p>
                        <p className="value">
                          {this.props.inventory.livingroom.furnitures[keyname]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="electricals">
                  <h4>Electricals</h4>
                  <div className="content">
                    {" "}
                    {Object.keys(
                      this.props.inventory.livingroom.electricals
                    ).map((keyname) => (
                      <div key={keyname}>
                        <p className="key">{keyname}</p>
                        <p className="value">
                          {this.props.inventory.livingroom.electricals[keyname]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fragile">
                  <h4>Fragile</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.livingroom.Fragile).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.livingroom.Fragile[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <br />
              <button
                onClick={() =>
                  this.handleClickLiving(this.state.isture2, this.props.id + 20)
                }
              >
                Bed Room{" "}
                <span>
                  {" "}
                  {Object.keys(this.props.inventory.Bedroom.furnitures).length +
                    Object.keys(this.props.inventory.Bedroom.electricals)
                      .length +
                    Object.keys(this.props.inventory.Bedroom.Fragile).length}
                </span>
              </button>
              <div className="inventarycontent" id={this.props.id + 20}>
                <div className="furnitures">
                  <h4>Furnitures</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.Bedroom.furnitures).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.Bedroom.furnitures[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="electricals">
                  <h4>Electricals</h4>
                  <div className="content">
                    {" "}
                    {Object.keys(this.props.inventory.Bedroom.electricals).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.Bedroom.electricals[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="fragile">
                  <h4>Fragile</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.Bedroom.Fragile).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.Bedroom.Fragile[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <br />
              <button
                onClick={() =>
                  this.handleClickLiving(this.state.isture2, this.props.id + 30)
                }
              >
                Kitchen{" "}
                <span>
                  {" "}
                  {Object.keys(this.props.inventory.kitchen.furnitures).length +
                    Object.keys(this.props.inventory.kitchen.electricals)
                      .length +
                    Object.keys(this.props.inventory.kitchen.Fragile).length}
                </span>
              </button>
              <div className="inventarycontent" id={this.props.id + 30}>
                <div className="furnitures">
                  <h4>Furnitures</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.kitchen.furnitures).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.kitchen.furnitures[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="electricals">
                  <h4>Electricals</h4>
                  <div className="content">
                    {" "}
                    {Object.keys(this.props.inventory.kitchen.electricals).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.kitchen.electricals[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="fragile">
                  <h4>Fragile</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.kitchen.Fragile).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.kitchen.Fragile[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <br />
              <button
                onClick={() =>
                  this.handleClickLiving(this.state.isture2, this.props.id + 40)
                }
              >
                BathRoom{" "}
                <span>
                  {" "}
                  {Object.keys(this.props.inventory.bathroom.furnitures)
                    .length +
                    Object.keys(this.props.inventory.bathroom.electricals)
                      .length +
                    Object.keys(this.props.inventory.bathroom.Fragile).length}
                </span>
              </button>
              <div className="inventarycontent" id={this.props.id + 40}>
                <div className="furnitures">
                  <h4>Furnitures</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.bathroom.furnitures).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.bathroom.furnitures[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="electricals">
                  <h4>Electricals</h4>
                  <div className="content">
                    {" "}
                    {Object.keys(this.props.inventory.bathroom.electricals).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.bathroom.electricals[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="fragile">
                  <h4>Fragile</h4>
                  <div className="content">
                    {Object.keys(this.props.inventory.bathroom.Fragile).map(
                      (keyname) => (
                        <div key={keyname}>
                          <p className="key">{keyname}</p>
                          <p className="value">
                            {this.props.inventory.bathroom.Fragile[keyname]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="househead">
              <h3>House Details</h3> &nbsp;&nbsp;&nbsp;
              <button>Edit Inventary</button>
            </div>
            <div className="oldhousehead">
              <h4>Existing House Details</h4>
            </div>
            <div className="top">
              <div className="label">
                <p>Floor No.</p>
                {this.props.housedetails.existinghouse.floorno}
              </div>
              <div className="label">
                <p>Elevator Available</p>
                {this.props.housedetails.existinghouse.elevator}
              </div>
              <div className="label">
                <p>Distance Frome Truck To Doore</p>
                {this.props.housedetails.existinghouse.distance}
              </div>
            </div>
            <div className="bottom">
              <div className="label1">
                <p>Additional Information</p>
                {this.props.housedetails.existinghouse.addinfo}
              </div>
            </div>
            <div className="oldhousehead">
              <h4>New House Details</h4>
            </div>
            <div className="top">
              <div className="label">
                <p>Floor No.</p>
                {this.props.housedetails.newhouse.floorno}
              </div>
              <div className="label">
                <p>Elevator Available</p>
                {this.props.housedetails.newhouse.elevator}
              </div>
              <div className="label">
                <p>Distance Frome Truck To Doore</p>
                {this.props.housedetails.existinghouse.distance}
              </div>
            </div>
            <div className="bottom">
              <div className="label1">
                <p>Additional Information</p>
                {this.props.housedetails.existinghouse.addinfo}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
