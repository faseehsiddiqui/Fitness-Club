import React, { Component } from "react";
import "./style.css";
import Img6 from "../../Assets/Images/gallery4.jpg";
export default class Training extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid  bg-dark  border border-dark">
          <div className="container ">
            <div className="row ">
              <div
                className="col-lg-6 py-4  d-flex justify-content-center  flex-column"
                data-aos="fade-right"
              >
                <h2 className="text-white ">Start Your Training Today</h2>
                <p className="text-white home_p2 py-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <button className="bg-danger text-white w-25 py-2 btn3">
                  Start Now
                </button>
              </div>
              <div className="col-lg-6  p-0 m-0" data-aos="fade-left">
                <img src={Img6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
