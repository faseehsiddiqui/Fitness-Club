import React, { Component } from "react";
import "./style.css";
import Img12 from "../../Assets/Images/price1.jpg";
import Img13 from "../../Assets/Images/price2.jpg";
import Img14 from "../../Assets/Images/price3.jpg";
export default class Cards2 extends Component {
  render() {
    return (
      <div>
        <div className="container py-5" id="pakages">
          <div className="row ">
            <div className="col-lg-12">
              <h2 className="text-center py-2">Choose Your Package</h2>
              <p className="text-center home_p2 py-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br /> industry's standard
                dummy text ever since the 1500s,
              </p>
            </div>
            <div className="row  p-0 m-0">
              <div
                className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0 d-flex justify-content-center py-3 px-3"
                data-aos="fade-right"
              >
                <div className="card home_maincard">
                  <div className="price bg-danger d-flex justify-content-center align-items-center ">
                    <p className="text-white home_p7 mt-1">$59/Month</p>
                  </div>
                  <img src={Img12} className="img-fluid" alt="..." />
                  <div className="card-body home_card2 d-flex flex-column align-items-center">
                    <p className="text-center home_p1">
                      Body Building Training
                    </p>
                    <p className="text-center  home_p2">
                      Get Free WiFi <br />
                      Month to Month
                      <br />
                      No Time Restrictions
                      <br />
                      Gym and Cardio
                      <br />
                      Service Locker Rooms
                    </p>
                    <button className="bg-danger text-white btn4 py-1 px-3  ">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0 d-flex justify-content-center py-3 px-3"
                data-aos="fade-bottom"
              >
                <div class="card home_maincard">
                  <div className="price bg-danger d-flex justify-content-center align-items-center ">
                    <p className="text-white home_p7 mt-1">$69/Month</p>
                  </div>
                  <img src={Img13} className="img-fluid" alt="..." />
                  <div className="card-body home_card2 d-flex flex-column align-items-center">
                    <p className="text-center home_p1">
                      Body Building Training
                    </p>
                    <p className="text-center  home_p2">
                      Get Free WiFi <br />
                      Month to Month
                      <br />
                      No Time Restrictions
                      <br />
                      Gym and Cardio
                      <br />
                      Service Locker Rooms
                    </p>
                    <button className="bg-danger text-white btn4 py-1 px-3  ">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0 d-flex justify-content-center py-3 px-3"
                data-aos="fade-left"
              >
                <div className="card home_maincard ">
                  <div className="price bg-danger d-flex justify-content-center align-items-center ">
                    <p className="text-white home_p7 mt-1">$99/Month</p>
                  </div>
                  <img src={Img14} className="img-fluid" alt="..." />
                  <div className="card-body home_card2  d-flex flex-column align-items-center">
                    <p className="text-center home_p1">
                      Body Building Training
                    </p>
                    <p className="text-center  home_p2">
                      Get Free WiFi <br />
                      Month to Month
                      <br />
                      No Time Restrictions
                      <br />
                      Gym and Cardio
                      <br />
                      Service Locker Rooms
                    </p>
                    <button className="bg-danger text-white btn4 py-1 px-3  ">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
