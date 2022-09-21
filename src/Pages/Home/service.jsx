import React, { Component } from "react";
import "./style.css";
import { BiDownArrowAlt } from "react-icons/bi";
export default class Service extends Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-danger py-5" id="services">
          <div className="container  py-5 ">
            <div className="row ">
              <div className="col-lg-6 py-4" data-aos="fade-right">
                <h2 className="text-white ">Services</h2>
                <p className="p-0 m-0 text-white py-4 home_p2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. <br />{" "}
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
                <button className="bg-dark px-2 text-white px-3 py-2 btn1">
                  Start Now
                </button>
              </div>
              <div className="col-lg-6 py-4  " data-aos="fade-left">
                <div id="accordion">
                  <div className="card card1  home_card1">
                    <div
                      className="card-header  d-flex justify-content-between align-items-center"
                      id="headingOne"
                    >
                      <h4 className=" home_p3 ">Cardiovascular Equipment</h4>
                      <button
                        className="btn btn-link btn2"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={this.handleclick}
                      >
                        <BiDownArrowAlt />
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body text-white home_p2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </div>
                    </div>
                  </div>
                  <div className="card card1  home_card1">
                    <div
                      className="card-header  d-flex justify-content-between align-items-center"
                      id="headingTwo"
                    >
                      <h4 className=" home_p3 ">Strength Training Equipment</h4>
                      <button
                        className="btn btn-link btn2"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={this.handleclick}
                      >
                        <BiDownArrowAlt />
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </div>
                    </div>
                  </div>
                  <div className="card card1  home_card1">
                    <div
                      className="card-header  d-flex justify-content-between align-items-center"
                      id="headingThree"
                    >
                      <h4 className=" home_p3 ">Group Fitness Class</h4>
                      <button
                        className="btn btn-link btn2"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={this.handleclick}
                      >
                        <BiDownArrowAlt />
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </div>
                    </div>
                  </div>
                  <div className="card card1  home_card1">
                    <div
                      className="card-header  d-flex justify-content-between align-items-center"
                      id="headingFour"
                    >
                      <h4 className=" home_p3 ">Other Services</h4>
                      <button
                        className="btn btn-link btn2"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={this.handleclick}
                      >
                        <BiDownArrowAlt />
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
