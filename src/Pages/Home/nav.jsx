import React, { Component } from "react";
import "./style.css";
import { GoThreeBars } from "react-icons/go";
export default class Nav extends Component {
  render() {
    return (
      <>
        <div className="container-fluid  " style={{ backgroundColor: "black" }}>
          <nav className="navbar navbar-expand-lg ">
            <h3 className="text-white head2 ">
              Fitness <span className="head1"> Club</span>
            </h3>
            <button
              className="navbar-toggler text-white mb-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                {" "}
                <h1>
                  <GoThreeBars />
                </h1>
              </span>
            </button>
            <div className="collapse navbar-collapse   " id="navbarNav">
              <div className="col-lg-4 "></div>
              <div className="col-lg-4 "></div>
              <div className="col-lg-4 ">
                <ul className="navbar-nav  text-center">
                  <li className="nav-item active">
                    <a className="nav-link  text-white mx-2" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  text-white  mx-2" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  text-white  mx-2" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white  mx-2" href="#">
                      Training
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
