import React from 'react';
import "../style/styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-white border border-2 border-green rounded-2 fixed-top"
      >
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <a
                href="/"
                style={{ color: "black", fontSize: "large", fontWeight: 400 }}
              >
                <i
                  className="fa fa-home"
                  style={{ fontSize: 38, color: "rgb(36, 214, 45)" }}
                />{" "}
                HOME
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="/"
                style={{ color: "black", fontSize: "large", fontWeight: 400 }}
              >
                <i
                  className="fa fa-film"
                  style={{ fontSize: 38, color: "rgb(36, 214, 45)" }}
                />{" "}
                MOVIES
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
