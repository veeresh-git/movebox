import React, { Component } from "react";
import "../css/navbar.css";
import { FaTruck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { RiFileListFill, RiLogoutCircleFill } from "react-icons/ri";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={{
                borderLeft: "4px solid rgba(255, 68, 0, 0.726)",
              }}
            >
              <span>
                {" "}
                &nbsp;
                <FaTruck />
                <strong> My moves</strong>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myprofile"
              exact
              activeStyle={{
                borderLeft: "4px solid rgba(255, 68, 0, 0.726)",
              }}
            >
              <span>
                &nbsp;
                <CgProfile />
                <strong> My profile</strong>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/getquotes"
              exact
              activeStyle={{
                borderLeft: "4px solid rgba(255, 68, 0, 0.726)",
              }}
            >
              <span>
                &nbsp;
                <RiFileListFill />
                <strong> My quotes</strong>
              </span>
            </NavLink>
          </li>
          <li>
            <Link
              to="#"
              exact
              activeStyle={{
                borderLeft: "4px solid rgba(255, 68, 0, 0.726)",
              }}
            >
              <span>
                &nbsp;
                <RiLogoutCircleFill />
                <strong> Logout</strong>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
