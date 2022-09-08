import React, { Component } from 'react'
import "./style.css"
import Img1 from "../../Assets/Images/about1.jpg"
import Img2 from "../../Assets/Images/about2.jpg"
import Img3 from "../../Assets/Images/about3.jpg"
import AOS from 'aos';
AOS.init();
export default class Card extends Component {
render() {
    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0 d-flex justify-content-center py-3 px-3">
                        <div className="card  "data-aos="fade-right" >
                            <img src={Img1} className="card-img-top" alt="..."/>
                            <div className="card-body  bg-dark ">
                                <p className='text-center text-white home_p1'>Free Consultation</p>
                                <p className='text-center text-white home_p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0 d-flex justify-content-center py-3 px-3">
                        <div className="card " data-aos="fade-bottom">
                            <img src={Img2} className="card-img-top" alt="..."/>
                            <div className="card-body bg-danger ">
                                <p className='text-center text-white home_p1'>Best Training</p>
                                <p className='text-center text-white p-0 m-0 home_p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0 d-flex justify-content-center py-3 px-3">
                        <div className="card " data-aos="fade-left">
                            <img src={Img3} className="card-img-top" alt="..."/>
                            <div className="card-body bg-dark">
                                <p className='text-center text-white home_p1'>Build Perfect Body</p>
                                <p className='text-center text-white p-0 m-0 home_p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}
