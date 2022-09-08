import React, { Component } from 'react'
import "./style.css"
import Img4 from "../../Assets/Images/class2.png"
import Img5 from "../../Assets/Images/class1.jpg"
export default class Photo extends Component {
  render() {
    return (
      <div>
        <div className="container  py-5">
          <div className="row py-5">
            <div className="col-lg-6 d-flex justify-content-center align-items-center " data-aos="fade-right">
              <img src={Img4} alt="" height="100%" width="100%" className='home_pic4 img-fluid' />
            </div>
            <div className="col-lg-6 " data-aos="fade-left">
              <h2 className='py-1'>Our Classes</h2>
              <p className='home_p2 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
              <div className="card mb-3 py-3" style={{width:"auto",border:"none"}}>
                <div className="row g-0">
                  <div className="col-md-6 border home_pic2">
                    <img src={Img5} className="img-fluid home_pic3" alt="" />
                    <div className="box bg-danger">
                      <p className='text-white home_p5 d-flex justify-content-center align-items-center'>$99</p>
                    </div>
                  </div>
                  <div className="col-md-6 border border-danger bg-dark ">
                    <div className="card-body d-flex flex-column justify-content-center home_p6 ">
                      <h5 className="card-title text-white">Stretching Training</h5>
                      <p className="card-text home_p2 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <p className="card-text home_p4 text-white">Get Details</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 py-3" style={{width:"auto",border:"none"}}>
                <div className="row g-0">
                  <div className="col-md-6 border border-danger bg-danger ">
                    <div className="card-body d-flex flex-column justify-content-center home_p6 ">
                      <h5 className="card-title text-white">Stretching Training</h5>
                      <p className="card-text home_p2 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <p className="card-text home_p4 text-white">Get Details</p>
                    </div>
                  </div>
                  <div className="col-md-6 border home_pic2">
                    <img src={Img5} className="img-fluid home_pic3" alt="" />
                    <div className="box bg-dark extra">
                      <p className='text-white home_p5 d-flex justify-content-center align-items-center'>$99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}